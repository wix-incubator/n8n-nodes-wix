import type {
	IHookFunctions,
	IWebhookFunctions,
	IDataObject,
	IHttpRequestOptions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
} from 'n8n-workflow';

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

	const mode = this.getMode?.() ?? 'prod';
	const environment = mode === 'manual' ? 'test' : 'prod';
	
	const credentials = await this.getCredentials(credentialType);
	options.headers = {
		'wix-site-id': credentials.siteId as string,
		Authorization: credentials.apiKey as string,
		'x-wix-bi-gateway': `environment=n8n-${environment}`,
	};

	return this.helpers.httpRequestWithAuthentication.call(this, credentialType, options);
}

