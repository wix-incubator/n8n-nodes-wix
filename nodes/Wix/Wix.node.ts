import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { orderDescription } from './resources/order';
import { productDescription } from './resources/product';
import { getOrders } from './listSearch/order/getOrders';
import { getProducts } from './listSearch/product/getProducts';

export class Wix implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Wix',
		name: 'wix',
		icon: { light: 'file:../../icons/wix.svg', dark: 'file:../../icons/wix.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Wix API',
		defaults: {
			name: 'Wix',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'wixApi', required: true }],
		requestDefaults: {
			baseURL: 'https://www.wixapis.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Order',
						value: 'order',
					},
					{
						name: 'Product',
						value: 'product',
					},
				],
				default: 'order',
			},
			...orderDescription,
			...productDescription,
		],
	};

	methods = {
		listSearch: {
			getOrders,
			getProducts,
		},
	};
}
