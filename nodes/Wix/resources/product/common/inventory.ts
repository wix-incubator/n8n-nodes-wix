import type { INodeProperties } from 'n8n-workflow';

export const productTypeOptions = [
	{ name: 'Physical', value: 'PHYSICAL' },
	{ name: 'Digital', value: 'DIGITAL' },
];

export const inventoryTrackingOptions = [
	{ name: 'None', value: 'NONE', description: 'No inventory tracking' },
	{ name: 'Track by Availability', value: 'IN_STOCK', description: 'Simple in stock / out of stock' },
	{ name: 'Track by Quantity', value: 'QUANTITY', description: 'Track exact stock counts' },
];

export const inventoryTrackingOptionsWithNoChange = [
	{ name: 'No Change', value: 'NO_CHANGE', description: 'Keep current inventory settings' },
	{ name: 'Track by Availability', value: 'IN_STOCK', description: 'Simple in stock / out of stock' },
	{ name: 'Track by Quantity', value: 'QUANTITY', description: 'Track exact stock counts' },
];

export function createInventorySettingsValues(trackingFieldName: string = 'tracking'): INodeProperties[] {
	return [
		{
			displayName: 'In Stock',
			name: 'inStock',
			type: 'boolean',
			default: true,
			description: 'Whether this variant is in stock (only for Track by Availability)',
			displayOptions: {
				show: {
					[trackingFieldName]: ['IN_STOCK'],
				},
			},
		},
		{
			displayName: 'Quantity',
			name: 'quantity',
			type: 'number',
			default: 0,
			description: 'Stock quantity (only for Track by Quantity)',
			displayOptions: {
				show: {
					[trackingFieldName]: ['QUANTITY'],
				},
			},
		},
	];
}

