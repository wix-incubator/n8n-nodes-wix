import type { INodeProperties } from 'n8n-workflow';

const showOnlyForProducts = {
	resource: ['product'],
};

export const productDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForProducts,
		},
		options: [
			{
				name: 'Coming Soon',
				value: 'comingSoon',
				action: 'Coming soon',
				description: 'Product operations coming soon',
			},
		],
		default: 'comingSoon',
	},
];


