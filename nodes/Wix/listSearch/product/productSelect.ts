import type { INodeProperties } from 'n8n-workflow';

export const productSelect: INodeProperties = {
	displayName: 'Product',
	name: 'productId',
	type: 'resourceLocator',
	default: {
		mode: 'list',
		value: '',
	},
	required: true,
	modes: [
		{
			displayName: 'Product',
			name: 'list',
			type: 'list',
			placeholder: 'Select a Product...',
			typeOptions: {
				searchListMethod: 'getProducts',
				searchable: true,
			},
		},
		{
			displayName: 'By ID',
			name: 'id',
			type: 'string',
			placeholder: 'e.g. 789e6969-6eb4-4799-aacb-e207037564c4',
		},
	],
};

