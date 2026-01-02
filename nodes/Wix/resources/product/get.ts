import type { INodeProperties } from 'n8n-workflow';
import { productSelect } from '../../listSearch/product/productSelect';

const showOnlyForProductGet = {
	operation: ['get'],
	resource: ['product'],
};

export const productGetDescription: INodeProperties[] = [
	{
		...productSelect,
		displayOptions: {
			show: showOnlyForProductGet,
		},
		description: 'The ID of the product to retrieve',
	},
];

