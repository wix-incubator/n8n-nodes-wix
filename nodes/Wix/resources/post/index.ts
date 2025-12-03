import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPosts = {
	resource: ['post'],
};

export const postDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPosts,
		},
		options: [
			{
				name: 'Coming Soon',
				value: 'comingSoon',
				action: 'Coming soon',
				description: 'Post operations coming soon',
			},
		],
		default: 'comingSoon',
	},
];


