import type { IExecuteSingleFunctions, IHttpRequestOptions } from 'n8n-workflow';

/**
 * PreSend function that adds the x-wix-bi-gateway header with the execution mode.
 * Use this in routing.send.preSend for all operations.
 */
export async function addTelemetryHeader(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const mode = this.getMode();
	const environment = mode === 'manual' ? 'test' : 'prod';

	requestOptions.headers = {
		...requestOptions.headers,
		'x-wix-bi-gateway': `environment=n8n-${environment}`,
	};

	return requestOptions;
}
