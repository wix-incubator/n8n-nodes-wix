import type { INodeProperties } from 'n8n-workflow';

export const orderSelect: INodeProperties = {
	displayName: 'Order',
	name: 'orderId',
	type: 'resourceLocator',
	default: {
		mode: 'list',
		value: '',
	},
	required: true,
	modes: [
		{
			displayName: 'Order',
			name: 'list',
			type: 'list',
			placeholder: 'Select an Order...',
			typeOptions: {
				searchListMethod: 'getOrders',
				searchable: true,
			},
		},
		{
			displayName: 'By ID',
			name: 'id',
			type: 'string',
			placeholder: 'e.g. 48886b60-09b9-4cce-ba11-ea68bf430b87',
		},
	],
};