import type {
	IHookFunctions,
	IWebhookFunctions,
	IDataObject,
	IHttpRequestOptions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
} from 'n8n-workflow';
import { getWixBiGatewayHeaderValue } from './addBiHeader';

const credentialType = 'wixApi';

export async function wixApiRequest(
	this: IHookFunctions | IWebhookFunctions | ILoadOptionsFunctions,
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
		'x-wix-bi-gateway': getWixBiGatewayHeaderValue(this),
	};

	return this.helpers.httpRequestWithAuthentication.call(this, credentialType, options);
}

