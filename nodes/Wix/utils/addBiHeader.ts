import type { IExecuteSingleFunctions, IHookFunctions, IHttpRequestOptions, ILoadOptionsFunctions, IWebhookFunctions } from 'n8n-workflow';

export function getWixBiValues(context: IExecuteSingleFunctions | IHookFunctions | IWebhookFunctions | ILoadOptionsFunctions) {
	const mode = context.getMode?.() ?? 'prod';
	const environment = mode === 'manual' ? 'test' : 'prod';
	const instanceId = context.getInstanceId();
	const workflowId = context.getWorkflow().id ?? '';

	return {
		environment,
		instanceId,
		workflowId,
	};
}

export function getWixBiGatewayHeaderValue(context: IExecuteSingleFunctions | IHookFunctions | IWebhookFunctions | ILoadOptionsFunctions): string {
	const { environment, instanceId, workflowId } = getWixBiValues(context);

	return `environment=n8n|${environment},package-name=${instanceId},package-version=${workflowId}`;
}

/**
 * PreSend function that adds the x-wix-bi-gateway header with the execution mode.
 * Use this in routing.send.preSend for all operations.
 */
export async function addTelemetryHeader(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	requestOptions.headers = {
		...requestOptions.headers,
		'x-wix-bi-gateway': getWixBiGatewayHeaderValue(this),
	};

	return requestOptions;
}
