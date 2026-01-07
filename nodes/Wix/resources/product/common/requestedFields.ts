import type { INodeProperties } from 'n8n-workflow';

/**
 * Options for the fields parameter that specify which additional fields to include in the response.
 * Based on SingleEntityOpsRequestedFields enum from the Wix API.
 */
export const requestedFieldsOptions: INodeProperties['options'] = [
	{
		name: 'All Categories Info',
		value: 'ALL_CATEGORIES_INFO',
		description: 'IDs and indexes for all categories including inherited parent categories',
	},
	{
		name: 'Breadcrumbs Info',
		value: 'BREADCRUMBS_INFO',
		description: 'Category breadcrumb navigation path from root categories down to the product\'s main category',
	},
	{
		name: 'Currency',
		value: 'CURRENCY',
		description: 'Currency information including the currency code and formatted price amounts for storefront display',
	},
	{
		name: 'Description',
		value: 'DESCRIPTION',
		description: 'Product description as rich content with complete node structure, metadata, and styling information',
	},
	{
		name: 'Direct Categories Info',
		value: 'DIRECT_CATEGORIES_INFO',
		description: 'IDs and indexes of categories the product is directly assigned to',
	},
	{
		name: 'Info Section',
		value: 'INFO_SECTION',
		description: 'Basic info section metadata including IDs, unique names, and titles',
	},
	{
		name: 'Info Section Description',
		value: 'INFO_SECTION_DESCRIPTION',
		description: 'Info section descriptions as rich content with complete node structure',
	},
	{
		name: 'Info Section Plain Description',
		value: 'INFO_SECTION_PLAIN_DESCRIPTION',
		description: 'Info section descriptions as HTML content',
	},
	{
		name: 'Media Items Info',
		value: 'MEDIA_ITEMS_INFO',
		description: 'All media items associated with the product including detailed metadata',
	},
	{
		name: 'Merchant Data',
		value: 'MERCHANT_DATA',
		description: 'Merchant-related financial data including cost ranges and variant revenue details (requires admin permission)',
	},
	{
		name: 'Plain Description',
		value: 'PLAIN_DESCRIPTION',
		description: 'Product description as plain HTML text',
	},
	{
		name: 'Subscription Prices Info',
		value: 'SUBSCRIPTION_PRICES_INFO',
		description: 'Subscription pricing options (empty for non-subscription products)',
	},
	{
		name: 'Thumbnail',
		value: 'THUMBNAIL',
		description: 'Optimized thumbnail image with standard dimensions suitable for listings or previews',
	},
	{
		name: 'URL',
		value: 'URL',
		description: 'The product\'s public storefront URL including both relative path and full URL with base domain',
	},
	{
		name: 'Variant Option Choice Names',
		value: 'VARIANT_OPTION_CHOICE_NAMES',
		description: 'Variant choices with human-readable option and choice names alongside render types',
	},
	{
		name: 'Weight Measurement Unit Info',
		value: 'WEIGHT_MEASUREMENT_UNIT_INFO',
		description: 'Weight measurement unit (KG, LB) for the product',
	},
];

/**
 * Creates a fields parameter for specifying which additional fields to include in the response.
 * @param displayOptions - Display options for when to show this field
 * @param bodyProperty - The body property path to send the fields to (e.g., 'fields' or 'search.fields')
 */
export function createRequestedFieldsField(
	displayOptions: INodeProperties['displayOptions'],
	bodyProperty: string = 'fields',
): INodeProperties {
	return {
		displayName: 'Fields',
		name: 'requestedFields',
		type: 'multiOptions',
		displayOptions,
		options: requestedFieldsOptions,
		default: [],
		description: 'Additional fields to include in the response',
		routing: {
			send: {
				type: 'body',
				property: bodyProperty,
			},
		},
	};
}

