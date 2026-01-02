import type { INodeProperties } from 'n8n-workflow';
import { productSelect } from '../../listSearch/product/productSelect';

const showOnlyForProductDelete = {
	operation: ['delete'],
	resource: ['product'],
};

export const productDeleteDescription: INodeProperties[] = [
	{
		...productSelect,
		displayOptions: {
			show: showOnlyForProductDelete,
		},
		description: 'The ID of the product to delete',
	},
];

