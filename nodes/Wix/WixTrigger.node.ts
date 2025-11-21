import type {
	IHookFunctions,
	IWebhookFunctions,
	IDataObject,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
	IHttpRequestOptions,
	IHttpRequestMethods,
} from 'n8n-workflow';
import { NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';
import * as crypto from 'crypto';

const credentialType = 'wixApi';

async function wixApiRequest(
	this: IHookFunctions | IWebhookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject | undefined = undefined,
): Promise<IDataObject> {
	const options: IHttpRequestOptions = {
		method,
		url: `https://www.wixapis.com${endpoint}`,
		json: true,
	};

	if (body) {
		options.body = body;
	}

	const credentials = await this.getCredentials(credentialType);
	options.headers = {
		'wix-site-id': credentials.siteId as string,
		Authorization: credentials.apiKey as string,
	};

	return this.helpers.httpRequestWithAuthentication.call(this, credentialType, options);
}

export class WixTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Wix Trigger',
		name: 'wixTrigger',
		icon: { light: 'file:../../icons/wix.svg', dark: 'file:../../icons/wix.dark.svg' },
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["event"]}}',
		description: 'Handle Wix events via webhooks',
		defaults: {
			name: 'Wix Trigger',
		},
		inputs: [],
		usableAsTool: true,
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'wixApi',
				required: true,
				displayOptions: {
					show: {
						authentication: ['apiKey', 'siteId'],
					},
				},
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'API Key',
						value: 'apiKey',
					},
					{
						name: 'OAuth2',
						value: 'oAuth2',
					},
				],
				default: 'apiKey',
			},
			{
				displayName: 'Trigger On',
				name: 'event',
				type: 'options',
				default: 'order_placed',
				options: [
					{
						name: 'Order Placed',
						value: 'order_placed',
					},
					{
						name: 'Product Created',
						value: 'product_created',
					},
					{
						name: 'Order Placed Legacy',
						value: 'order_placed_legacy',
					},
				],
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				const webhookUrl = this.getNodeWebhookUrl('default');

				// First, check if we have a stored automationId
				if (webhookData.automationId !== undefined) {
					try {
						const endpoint = `/automations-service/v2/automations/${webhookData.automationId}`;
						const automation = (await wixApiRequest.call(this, 'GET', endpoint)) as IDataObject;

						// Verify the automation still has our webhook URL
						const actions = (automation.actions as IDataObject[]) || [];
						for (const action of actions) {
							const appDefinedInfo = (action as IDataObject).appDefinedInfo as IDataObject;
							const inputMapping = appDefinedInfo?.inputMapping as IDataObject;
							if (
								appDefinedInfo?.actionKey === 'webhooks-action' &&
								inputMapping?.url === webhookUrl
							) {
								return true;
							}
						}
					} catch {
						// Automation doesn't exist or is invalid, clear the stored ID
						delete webhookData.automationId;
					}
				}

				// If no stored ID or stored ID is invalid, try to query automations
				// Note: This assumes there's a query endpoint. If not available, this will fail gracefully.
				try {
					const endpoint = '/automations-service/v2/automations/query';
					const response = (await wixApiRequest.call(this, 'POST', endpoint)) as IDataObject;
					const automations =
						(response.automations as IDataObject[]) || (Array.isArray(response) ? response : []);

					// Handle both array and object with automations property
					const automationList = Array.isArray(automations) ? automations : [];

					for (const automation of automationList) {
						const actions = ((automation as IDataObject).actions as IDataObject[]) || [];
						for (const action of actions) {
							const appDefinedInfo = (action as IDataObject).appDefinedInfo as IDataObject;
							const inputMapping = appDefinedInfo?.inputMapping as IDataObject;
							if (
								appDefinedInfo?.actionKey === 'webhooks-action' &&
								inputMapping?.url === webhookUrl
							) {
								webhookData.automationId = automation.id;
								return true;
							}
						}
					}
				} catch {
					// Query endpoint might not exist or failed, return false
					return false;
				}

				return false;
			},
			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const event = this.getNodeParameter('event') as string;
				const webhookData = this.getWorkflowStaticData('node');

				// Map event to trigger configuration
				const triggerConfig: { [key: string]: { appId: string; triggerKey: string } } = {
					product_created: {
						appId: '215238eb-22a5-4c36-9e7b-e7c08025e04e',
						triggerKey: 'wixstores-catalog-product-created-product_created',
					},
					order_placed: {
						appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
						triggerKey: 'wix_e_commerce-order_placed',
					},
					order_placed_legacy: {
						appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
						triggerKey: 'wixstores-legacy_order_placed_v1',
					},
				};

				const trigger = triggerConfig[event];
				if (!trigger) {
					throw new NodeOperationError(this.getNode(), `Unknown event: ${event}`);
				}

				const actionId = crypto.randomUUID();

				const automationBody = {
					automation: {
						name: `n8n Webhook - ${event}`,
						origin: 'USER',
						settings: {
							hidden: false,
							readonly: false,
						},
						configuration: {
							status: 'ACTIVE',
							trigger: {
								appId: trigger.appId,
								triggerKey: trigger.triggerKey,
								filters: [],
							},
							rootActionIds: [actionId],
							actions: {
								[actionId]: {
									id: actionId,
									type: 'APP_DEFINED',
									namespace: 'webhooks-action-1',
									appDefinedInfo: {
										appId: '139ef4fa-c108-8f9a-c7be-d5f492a2c939',
										actionKey: 'webhooks-action',
										inputMapping: {
											url: webhookUrl,
											method: 'POST',
											hasCustomParams: false,
										},
									},
								},
							},
						},
					},
				};

				const endpoint = '/automations-service/v2/automations';
				const responseData = (await wixApiRequest.call(
					this,
					'POST',
					endpoint,
					automationBody,
				)) as IDataObject;

				// Handle both response.automation and direct response
				const automation = ((responseData.automation as IDataObject) ||
					responseData) as IDataObject;
				if (automation === undefined || automation.id === undefined) {
					return false;
				}

				webhookData.automationId = automation.id as string;
				return true;
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				if (webhookData.automationId !== undefined) {
					const endpoint = `/automations-service/v2/automations/${webhookData.automationId}`;
					try {
						await wixApiRequest.call(this, 'DELETE', endpoint);
					} catch {
						return false;
					}
					delete webhookData.automationId;
				}
				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();

		return {
			workflowData: [this.helpers.returnJsonArray(req.body as IDataObject)],
		};
	}
}
