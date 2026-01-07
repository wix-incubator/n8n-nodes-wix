import type { INodeProperties } from 'n8n-workflow';

/**
 * Common measurement unit options used in price per unit settings.
 */
export const measurementUnitOptions = [
	{ name: 'Centiliter (CL)', value: 'CL' },
	{ name: 'Centimeter (CM)', value: 'CM' },
	{ name: 'Cubic Meter (CBM)', value: 'CBM' },
	{ name: 'Fluid Ounce (FLOZ)', value: 'FLOZ' },
	{ name: 'Foot (FT)', value: 'FT' },
	{ name: 'Gallon (GAL)', value: 'GAL' },
	{ name: 'Gram (G)', value: 'G' },
	{ name: 'Inch (IN)', value: 'IN' },
	{ name: 'Kilogram (KG)', value: 'KG' },
	{ name: 'Liter (L)', value: 'L' },
	{ name: 'Meter (M)', value: 'M' },
	{ name: 'Milligram (MG)', value: 'MG' },
	{ name: 'Milliliter (ML)', value: 'ML' },
	{ name: 'Millimeter (MM)', value: 'MM' },
	{ name: 'Ounce (OZ)', value: 'OZ' },
	{ name: 'Pint (PT)', value: 'PT' },
	{ name: 'Pound (LB)', value: 'LB' },
	{ name: 'Quart (QT)', value: 'QT' },
	{ name: 'Square Foot (SQFT)', value: 'SQFT' },
	{ name: 'Square Meter (SQM)', value: 'SQM' },
	{ name: 'Yard (YD)', value: 'YD' },
];

/**
 * Price per unit field values (measurement unit and quantity).
 */
export const pricePerUnitFieldValues: INodeProperties[] = [
	{
		displayName: 'Measurement Unit',
		name: 'measurementUnit',
		type: 'options',
		options: measurementUnitOptions,
		default: 'KG',
		description: 'Measurement unit for price per unit',
	},
	{
		displayName: 'Quantity',
		name: 'quantity',
		type: 'number',
		default: 1,
		typeOptions: {
			minValue: 0.01,
			maxValue: 999999999.99,
		},
		description: 'Quantity for price per unit (e.g., 100 for "price per 100 grams")',
	},
];

/**
 * Creates a pricePerUnit field configuration.
 * @param description - Optional custom description
 */
export function createPricePerUnitField(description?: string): INodeProperties {
	return {
		displayName: 'Price Per Unit',
		name: 'pricePerUnit',
		type: 'fixedCollection',
		default: {},
		description: description || 'Price per unit settings (e.g., price per 100 grams)',
		options: [
			{
				displayName: 'Settings',
				name: 'settings',
				values: pricePerUnitFieldValues,
			},
		],
	};
}

