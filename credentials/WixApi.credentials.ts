import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class WixApi implements ICredentialType {
	name = 'wixApi';

	displayName = 'Wix API';

	icon: Icon = { light: 'file:../icons/wix.svg', dark: 'file:../icons/wix.dark.svg' };

	// Link to your community node's README
	documentationUrl =
		'https://dev.wix.com/docs/api-reference/articles/authentication/about-api-keys#about-api-keys';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
		{
			displayName: 'Site ID',
			name: 'siteId',
			type: 'string',
			typeOptions: {},
			required: true,
			description: 'The Wix Site to use for the API',
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'wix-site-id': '={{$credentials?.siteId}}',
				Authorization: '={{$credentials?.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			url: 'https://www.wixapis.com/site-properties/v4/properties?fields.paths=locale&fields.paths=businessName',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		},
	};
}
