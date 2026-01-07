import type { INodeProperties } from 'n8n-workflow';

import { createPricePerUnitField } from './physicalProperties';

export const variantChoicesField: INodeProperties = {
	displayName: 'Choices',
	name: 'choices',
	type: 'fixedCollection',
	typeOptions: {
		multipleValues: true,
	},
	default: {},
	placeholder: 'Add Choice',
	description: 'Option choices for this variant (e.g., Size: S, Color: Red)',
	options: [
		{
			displayName: 'Choice',
			name: 'choice',
			values: [
				{
					displayName: 'Option Name',
					name: 'optionName',
					type: 'string',
					default: '',
					required: true,
					placeholder: 'e.g., Size',
					description: 'The name of the option (must match a defined option)',
				},
				{
					displayName: 'Choice Name',
					name: 'choiceName',
					type: 'string',
					default: '',
					required: true,
					placeholder: 'e.g., S',
					description: 'The choice value for this variant',
				},
				{
					displayName: 'Render Type',
					name: 'renderType',
					type: 'options',
					options: [
						{ name: 'Color Swatch', value: 'SWATCH_CHOICES' },
						{ name: 'Text', value: 'TEXT_CHOICES' },
					],
					default: 'TEXT_CHOICES',
					description: 'How this choice is displayed',
				},
			],
		},
	],
};

export const variantPhysicalPropertiesField: INodeProperties = {
	displayName: 'Physical Properties',
	name: 'physicalProperties',
	type: 'fixedCollection',
	default: {},
	description: 'Physical properties for this variant',
	options: [
		{
			displayName: 'Settings',
			name: 'settings',
			values: [
				createPricePerUnitField('Price per unit settings for this variant'),
				{
					displayName: 'Weight',
					name: 'weight',
					type: 'number',
					default: 0,
					typeOptions: {
						maxValue: 999999999.99,
					},
					description: 'Variant shipping weight',
				},
			],
		},
	],
};

export const variantAdditionalFields: INodeProperties[] = [
	{
		displayName: 'Barcode',
		name: 'barcode',
		type: 'string',
		default: '',
		description: 'Product barcode (UPC, EAN, etc.)',
	},
	variantChoicesField,
	{
		displayName: 'Compare At Price (Strikethrough Price)',
		name: 'compareAtPrice',
		type: 'string',
		default: '',
		placeholder: 'e.g., 15.00',
		description: 'Original price before discounts (shown with strikethrough)',
	},
	{
		displayName: 'Cost Of Goods',
		name: 'cost',
		type: 'string',
		default: '',
		placeholder: 'e.g., 5.00',
		description: 'Cost for profit margin calculations',
	},
	{
		displayName: 'Digital File ID',
		name: 'digitalFileId',
		type: 'string',
		default: '',
		description: 'ID of the digital file to be downloaded after purchase',
	},
	variantPhysicalPropertiesField,
	{
		displayName: 'SKU',
		name: 'sku',
		type: 'string',
		default: '',
		description: 'Stock Keeping Unit',
	},
];

export function createInventoryField(
	trackingOptions: Array<{ name: string; value: string; description?: string }>,
	defaultTracking: string = 'NONE',
): INodeProperties {
	return {
		displayName: 'Inventory',
		name: 'inventory',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Track Inventory',
		description: 'Inventory tracking settings for this variant',
		options: [
			{
				displayName: 'Inventory Settings',
				name: 'settings',
				values: [
					{
						displayName: 'Tracking',
						name: 'tracking',
						type: 'options',
						options: trackingOptions,
						default: defaultTracking,
						description: 'How to track inventory for this variant',
					},
					{
						displayName: 'In Stock',
						name: 'inStock',
						type: 'boolean',
						default: true,
						description: 'Whether this variant is in stock (only for Track by Availability)',
						displayOptions: {
							show: {
								tracking: ['IN_STOCK'],
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
								tracking: ['QUANTITY'],
							},
						},
					},
				],
			},
		],
	};
}

