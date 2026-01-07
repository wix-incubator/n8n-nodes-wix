import type { INodeProperties } from 'n8n-workflow';
import { productGetDescription, productGetBaseUrl } from './get';
import { productGetManyDescription } from './getMany';
import { productDeleteDescription } from './delete';
import { productCreateDescription } from './create';
import { productUpdateDescription } from './update';

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
			name: 'Create',
			value: 'create',
			action: 'Create a product',
			description: 'Create a new product with inventory',
			routing: {
				request: {
					method: 'POST',
					url: '/stores/v3/products-with-inventory',
				},
			},
		},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a product',
				description: 'Delete an existing product',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/stores/v3/products/{{$parameter.productId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a product',
				description: 'Get a single product by ID',
				routing: {
					request: {
						method: 'GET',
						url: `=${productGetBaseUrl}{{$parameter.productId}}`,
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getMany',
				action: 'Get many products',
				description: 'Query and list products',
				routing: {
					request: {
						method: 'POST',
						url: '/stores/v3/products/search',
					},
				},
			},
		{
			name: 'Update',
			value: 'update',
			action: 'Update a product',
			description: 'Update an existing product with inventory',
			routing: {
				request: {
					method: 'PATCH',
					url: '=/stores/v3/products-with-inventory/{{$parameter.productId}}',
				},
			},
		},
		],
		default: 'get',
	},
	...productGetDescription,
	...productGetManyDescription,
	...productDeleteDescription,
	...productCreateDescription,
	...productUpdateDescription,
];
