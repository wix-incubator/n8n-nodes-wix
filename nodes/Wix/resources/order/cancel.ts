import type { INodeProperties } from 'n8n-workflow';
import { orderSelect } from '../../listSearch/order/orderSelect';

const showOnlyForOrderCancel = {
	operation: ['cancel'],
	resource: ['order'],
};

export const orderCancelDescription: INodeProperties[] = [
	{
		...orderSelect,
		displayOptions: {
			show: showOnlyForOrderCancel,
		},
		description: 'The ID of the order to cancel',
	},
	{
		displayName: 'Send Order Canceled Email',
		name: 'sendOrderCanceledEmail',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForOrderCancel,
		},
		default: false,
		description: 'Whether to send an email notification to the buyer',
		routing: {
			send: {
				type: 'body',
				property: 'sendOrderCanceledEmail',
			},
		},
	},
	{
		displayName: 'Custom Message',
		name: 'customMessage',
		type: 'string',
		displayOptions: {
			show: showOnlyForOrderCancel,
		},
		default: '',
		description: 'Custom message to include in the cancellation email',
		routing: {
			send: {
				type: 'body',
				property: 'customMessage',
			},
		},
	},
	{
		displayName: 'Restock All Items',
		name: 'restockAllItems',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForOrderCancel,
		},
		default: false,
		description: 'Whether to restock all items from the order',
		routing: {
			send: {
				type: 'body',
				property: 'restockAllItems',
			},
		},
	},
];


