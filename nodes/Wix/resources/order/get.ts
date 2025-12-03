import type { INodeProperties } from 'n8n-workflow';
import { orderSelect } from '../../listSearch/order/orderSelect';

const showOnlyForOrderGet = {
	operation: ['get'],
	resource: ['order'],
};

export const orderGetDescription: INodeProperties[] = [
	{
		...orderSelect,
		displayOptions: {
			show: showOnlyForOrderGet,
		},
		description: 'The ID of the order to retrieve',
	},
];


