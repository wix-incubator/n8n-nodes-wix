import type { INodeProperties } from 'n8n-workflow';
import { orderGetDescription } from './get';
import { orderCreateDescription } from './create';
import { orderUpdateDescription } from './update';
import { orderSearchDescription } from './search';
import { orderCancelDescription } from './cancel';

const showOnlyForOrders = {
	resource: ['order'],
};

export const orderDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForOrders,
		},
		options: [
			{
				name: 'Cancel',
				value: 'cancel',
				action: 'Cancel an order',
				description: 'Cancel an existing order',
				routing: {
					request: {
						method: 'POST',
						url: '=/ecom/v1/orders/{{$parameter.orderId}}/cancel',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create an order',
				description: 'Create a new order',
				routing: {
					request: {
						method: 'POST',
						url: '/ecom/v1/orders',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an order',
				description: 'Get a single order by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/ecom/v1/orders/{{$parameter.orderId}}',
					},
				},
			},
			{
				name: 'Search',
				value: 'search',
				action: 'Search orders',
				description: 'Search and list orders',
				routing: {
					request: {
						method: 'POST',
						url: '/ecom/v1/orders/search',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an order',
				description: 'Update an existing order',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/ecom/v1/orders/{{$parameter.orderId}}',
					},
				},
			},
		],
		default: 'get',
	},
	...orderGetDescription,
	...orderCreateDescription,
	...orderUpdateDescription,
	...orderSearchDescription,
	...orderCancelDescription,
];

