import type { INodeProperties } from 'n8n-workflow';
import { productSelect } from '../../listSearch/product/productSelect';
import { requestedFieldsOptions } from './common/requestedFields';

const showOnlyForProductGet = {
	operation: ['get'],
	resource: ['product'],
};

export const productGetBaseUrl = '/stores/v3/products/';

export const productGetDescription: INodeProperties[] = [
	{
		...productSelect,
		displayOptions: {
			show: showOnlyForProductGet,
		},
		description: 'The ID of the product to retrieve',
	},
	{
		displayName: 'Fields',
		name: 'requestedFields',
		type: 'multiOptions',
		displayOptions: {
			show: showOnlyForProductGet,
		},
		options: requestedFieldsOptions,
		default: [],
		description: 'Additional fields to include in the response',
		routing: {
			request: {
				// Note: This overrides the URL from the operation definition to append query params
				url: `={{ "${productGetBaseUrl}" + $parameter.productId + ($value.length ? "?" + $value.map(f => "fields=" + f).join("&") : "") }}`,
			},
		},
	},
];

