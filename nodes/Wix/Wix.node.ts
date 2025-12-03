import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { orderDescription } from './resources/order';
import { productDescription } from './resources/product';
import { postDescription } from './resources/post';
import { contactDescription } from './resources/contact';
import { communicationDescription } from './resources/communication';
import { getOrders } from './listSearch/order/getOrders';

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
						name: 'Communication',
						value: 'communication',
					},
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'Order',
						value: 'order',
					},
					{
						name: 'Post',
						value: 'post',
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
			...postDescription,
			...contactDescription,
			...communicationDescription,
		],
	};

	methods = {
		listSearch: {
			getOrders,
		},
	};
}
