import type {
	IHookFunctions,
	IWebhookFunctions,
	IDataObject,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
} from 'n8n-workflow';
import { NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';
import { wixAutomationsTriggers } from './config/wix-automations-triggers';
import { wixApiRequest } from './utils/wix-api-request';
import {
	hasWebhookWithUrl,
	createWixAutomationsRequest,
	findAutomationWithWebhookUrl,
} from './utils/wix-automations';

const AUTOMATIONS_BASE_PATH = '/automations-service/v2/automations';
const AUTOMATIONS_QUERY_ENDPOINT = `${AUTOMATIONS_BASE_PATH}/query`;
const getAutomationEndpoint = (id: string) => `${AUTOMATIONS_BASE_PATH}/${id}`;

async function findAutomationByWebhookUrl(
	hookContext: IHookFunctions,
	webhookUrl: string,
): Promise<IDataObject | null> {
	try {
		const response = (await wixApiRequest.call(
			hookContext,
			'POST',
			AUTOMATIONS_QUERY_ENDPOINT,
		)) as IDataObject;
		const automations =
			(response.automations as IDataObject[]) || (Array.isArray(response) ? response : []);

		const automationList = Array.isArray(automations) ? automations : [];

		return findAutomationWithWebhookUrl(automationList, webhookUrl);
	} catch {
		return null;
	}
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
				],
				default: 'apiKey',
			},
			{
				displayName: 'Trigger On',
				name: 'event',
				type: 'options',
				default: '',
				options: Object.keys(wixAutomationsTriggers).map((key) => ({
					name: wixAutomationsTriggers[key].displayName,
					value: key,
				})),
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				const webhookUrl = this.getNodeWebhookUrl('default') as string;

				// First, check if we have a stored automationId
				if (webhookData.automationId !== undefined) {
					try {
						const automation = (await wixApiRequest.call(
							this,
							'GET',
							getAutomationEndpoint(webhookData.automationId as string),
						)) as IDataObject;

						// Verify the automation still has our webhook URL
						if (hasWebhookWithUrl(automation, webhookUrl)) {
							return true;
						}
					} catch {
						// Automation doesn't exist or is invalid, clear the stored ID
						delete webhookData.automationId;
					}
				}

				// If no stored ID or stored ID is invalid, try to query automations
				const foundAutomation = await findAutomationByWebhookUrl(this, webhookUrl);
				if (foundAutomation && foundAutomation.id) {
					webhookData.automationId = foundAutomation.id as string;
					return true;
				}

				return false;
			},
			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default') as string;
				const event = this.getNodeParameter('event') as string;
				const webhookData = this.getWorkflowStaticData('node');

				// First, check if an automation with this webhook URL already exists
				const foundAutomation = await findAutomationByWebhookUrl(this, webhookUrl);				
				if (foundAutomation && foundAutomation.id) {
					webhookData.automationId = foundAutomation.id as string;
					return true;
				}

				const trigger = wixAutomationsTriggers[event];
				if (!trigger) {
					throw new NodeOperationError(this.getNode(), `Unknown event: ${event}`);
				}

				const automationBody = createWixAutomationsRequest(webhookUrl, event, trigger);

				const responseData = (await wixApiRequest.call(
					this,
					'POST',
					AUTOMATIONS_BASE_PATH,
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
					try {
						await wixApiRequest.call(
							this,
							'DELETE',
							getAutomationEndpoint(webhookData.automationId as string),
						);
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
