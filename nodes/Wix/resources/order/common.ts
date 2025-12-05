import type { INodeProperties } from 'n8n-workflow';

/**
 * Common contact details values for use in fixedCollection options
 */
export const contactDetailsValues: INodeProperties[] = [
	{
		displayName: 'Company',
		name: 'company',
		type: 'string',
		default: '',
	},
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		description: 'Phone number',
	},
	{
		displayName: 'VAT ID',
		name: 'vatId',
		type: 'string',
		default: '',
	},
];

/**
 * Common address values for use in fixedCollection options
 */
export const addressValues: INodeProperties[] = [
	{
		displayName: 'Address Line 1',
		name: 'addressLine1',
		type: 'string',
		default: '',
		description: 'Street address',
	},
	{
		displayName: 'Address Line 2',
		name: 'addressLine2',
		type: 'string',
		default: '',
		description: 'Apartment, suite, etc',
	},
	{
		displayName: 'City',
		name: 'city',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Country',
		name: 'country',
		type: 'string',
		default: '',
		description: 'Country code (e.g., US)',
	},
	{
		displayName: 'Postal Code',
		name: 'postalCode',
		type: 'string',
		default: '',
		description: 'Postal or ZIP code',
	},
	{
		displayName: 'State',
		name: 'subdivision',
		type: 'string',
		default: '',
		description: 'State or province',
	},
];

/**
 * Contact details fixedCollection field
 */
export const contactDetailsField: INodeProperties = {
	displayName: 'Contact Details',
	name: 'contactDetails',
	type: 'fixedCollection',
	default: {},
	options: [
		{
			displayName: 'Contact Details',
			name: 'contactDetailsValues',
			values: contactDetailsValues,
		},
	],
};

/**
 * Address fixedCollection field
 */
export const addressField: INodeProperties = {
	displayName: 'Address',
	name: 'address',
	type: 'fixedCollection',
	default: {},
	options: [
		{
			displayName: 'Address',
			name: 'addressValues',
			values: addressValues,
		},
	],
};

