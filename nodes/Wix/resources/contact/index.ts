import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContacts = {
	resource: ['contact'],
};

export const contactDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForContacts,
		},
		options: [
			{
				name: 'Coming Soon',
				value: 'comingSoon',
				action: 'Coming soon',
				description: 'Contact operations coming soon',
			},
		],
		default: 'comingSoon',
	},
];


