import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCommunications = {
	resource: ['communication'],
};

export const communicationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCommunications,
		},
		options: [
			{
				name: 'Coming Soon',
				value: 'comingSoon',
				action: 'Coming soon',
				description: 'Communication operations coming soon',
			},
		],
		default: 'comingSoon',
	},
];


