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
				const webhookUrl = this.getNodeWebhookUrl('default');

				// First, check if we have a stored automationId
				if (webhookData.automationId !== undefined) {
					try {
						const endpoint = `/automations-service/v2/automations/${webhookData.automationId}`;
						const automation = (await wixApiRequest.call(this, 'GET', endpoint)) as IDataObject;

						// Verify the automation still has our webhook URL
						if (hasWebhookWithUrl(automation, webhookUrl as string)) {
							return true;
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

					const foundAutomation = findAutomationWithWebhookUrl(
						automationList,
						webhookUrl as string,
					);
					if (foundAutomation) {
						webhookData.automationId = foundAutomation.id;
						return true;
					}
				} catch {
					// Query endpoint might not exist or failed, return false
					return false;
				}

				return false;
			},
			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default') as string;
				const event = this.getNodeParameter('event') as string;
				const webhookData = this.getWorkflowStaticData('node');

				const trigger = wixAutomationsTriggers[event];
				if (!trigger) {
					throw new NodeOperationError(this.getNode(), `Unknown event: ${event}`);
				}

				const automationBody = createWixAutomationsRequest(webhookUrl, event, trigger);

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
