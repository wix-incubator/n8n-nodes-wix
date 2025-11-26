import * as crypto from 'crypto';
import type { IDataObject } from 'n8n-workflow';

interface TriggerConfig {
	appId: string;
	triggerKey: string;
}

export function createWixAutomationsRequest(
	webhookUrl: string,
	event: string,
	trigger: TriggerConfig,
): IDataObject {
	const actionId = crypto.randomUUID();

	return {
		automation: {
			name: `n8n Webhook - ${event}`,
			origin: 'USER',
			settings: {
				hidden: true,
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
}

/**
 * Checks if an automation has a webhook action with the specified URL
 */
export function hasWebhookWithUrl(automation: IDataObject, webhookUrl: string): boolean {
	const actions = (automation.actions as IDataObject[]) || [];
	for (const action of actions) {
		const appDefinedInfo = (action as IDataObject).appDefinedInfo as IDataObject;
		const inputMapping = appDefinedInfo?.inputMapping as IDataObject;
		if (appDefinedInfo?.actionKey === 'webhooks-action' && inputMapping?.url === webhookUrl) {
			return true;
		}
	}
	return false;
}

/**
 * Finds an automation from a list that has a webhook action with the specified URL
 */
export function findAutomationWithWebhookUrl(
	automations: IDataObject[],
	webhookUrl: string,
): IDataObject | null {
	for (const automation of automations) {
		if (hasWebhookWithUrl(automation, webhookUrl)) {
			return automation;
		}
	}
	return null;
}
