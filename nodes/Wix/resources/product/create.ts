import type { INodeProperties } from 'n8n-workflow';

const showOnlyForProductCreate = {
	operation: ['create'],
	resource: ['product'],
};

export const productCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: showOnlyForProductCreate,
		},
		default: '',
		required: true,
		description: 'Product name',
		routing: {
			send: {
				type: 'body',
				property: 'product.name',
			},
		},
	},
	{
		displayName: 'Product Type',
		name: 'productType',
		type: 'options',
		options: [
			{
				name: 'Physical',
				value: 'PHYSICAL',
			},
			{
				name: 'Digital',
				value: 'DIGITAL',
			},
		],
		displayOptions: {
			show: showOnlyForProductCreate,
		},
		default: 'PHYSICAL',
		required: true,
		description: 'The type of product',
		routing: {
			send: {
				type: 'body',
				property: 'product.productType',
			},
		},
	},
	{
		displayName: 'Price',
		name: 'price',
		type: 'string',
		displayOptions: {
			show: showOnlyForProductCreate,
		},
		default: '',
		required: true,
		placeholder: 'e.g., 10.00',
		description: 'The price of the product (creates a default variant with this price)',
		routing: {
			send: {
				type: 'body',
				property: 'product.variantsInfo.variants',
				value: '={{ [{ price: { actualPrice: { amount: $value } }, choices: [] }] }}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: showOnlyForProductCreate,
		},
		default: {},
		description: 'Additional optional fields for the product',
		options: [
			{
				displayName: 'Compare At Price',
				name: 'compareAtPrice',
				type: 'string',
				default: '',
				placeholder: 'e.g., 15.00',
				description: 'Original price before discounts (shown with strikethrough)',
			},
			{
				displayName: 'Cost of Goods',
				name: 'cost',
				type: 'string',
				default: '',
				placeholder: 'e.g., 5.00',
				description: 'Cost of goods for profit calculations',
			},
			{
				displayName: 'Custom JSON',
				name: 'custom',
				type: 'json',
				default: '{}',
				description: 'Custom JSON to extend the product create call with additional fields not available in this form',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Product description (supports rich text)',
			},
			{
				displayName: 'Physical Properties',
				name: 'physicalProperties',
				type: 'fixedCollection',
				default: {},
				description: 'Physical properties for shipping',
				options: [
					{
						displayName: 'Physical Properties',
						name: 'physicalPropertiesValues',
						values: [
							{
								displayName: 'Weight',
								name: 'weight',
								type: 'number',
								default: 0,
								description: 'Product weight',
							},
							{
								displayName: 'SKU',
								name: 'sku',
								type: 'string',
								default: '',
								description: 'Stock Keeping Unit',
							},
						],
					},
				],
			},
			{
				displayName: 'Ribbon',
				name: 'ribbon',
				type: 'fixedCollection',
				default: {},
				description: 'Product ribbon/badge',
				options: [
					{
						displayName: 'Ribbon',
						name: 'ribbonValues',
						values: [
							{
								displayName: 'Text',
								name: 'text',
								type: 'string',
								default: '',
								description: 'Ribbon text (e.g., "Sale", "New")',
							},
						],
					},
				],
			},
			{
				displayName: 'SEO Description',
				name: 'seoDescription',
				type: 'string',
				default: '',
				description: 'SEO meta description',
			},
			{
				displayName: 'SEO Title',
				name: 'seoTitle',
				type: 'string',
				default: '',
				description: 'SEO meta title',
			},
			{
				displayName: 'Slug',
				name: 'slug',
				type: 'string',
				default: '',
				description: 'URL-friendly product identifier',
			},
			{
				displayName: 'Tax Group ID',
				name: 'taxGroupId',
				type: 'string',
				default: '',
				description: 'Tax group ID for the product',
			},
			{
				displayName: 'Visible',
				name: 'visible',
				type: 'boolean',
				default: true,
				description: 'Whether the product is visible in the store',
			},
			{
				displayName: 'Visible in POS',
				name: 'visibleInPos',
				type: 'boolean',
				default: true,
				description: 'Whether the product is visible in Point of Sale',
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'product',
				value: '={{ (() => { const customData = $value.custom ? (typeof $value.custom === "string" ? JSON.parse($value.custom) : $value.custom) : {}; const fields = {}; if ($value.description) fields.description = $value.description; if ($value.slug) fields.slug = $value.slug; if ($value.visible !== undefined) fields.visible = $value.visible; if ($value.visibleInPos !== undefined) fields.visibleInPos = $value.visibleInPos; if ($value.seoTitle) fields.seoTitle = $value.seoTitle; if ($value.seoDescription) fields.seoDescription = $value.seoDescription; if ($value.taxGroupId) fields.taxGroupId = $value.taxGroupId; if ($value.ribbon?.ribbonValues?.text) fields.ribbon = { text: $value.ribbon.ribbonValues.text }; if ($value.physicalProperties?.physicalPropertiesValues) { const pp = $value.physicalProperties.physicalPropertiesValues; if (pp.weight || pp.sku) { fields.physicalProperties = {}; } } return { ...fields, ...customData }; })() }}',
			},
		},
	},
];

// Post-processing to merge variant data with additional fields
export const productCreateVariantMerge: INodeProperties = {
	displayName: 'Variant Additional Fields',
	name: 'variantAdditionalFields',
	type: 'collection',
	placeholder: 'Add Variant Field',
	displayOptions: {
		show: showOnlyForProductCreate,
	},
	default: {},
	description: 'Additional fields for the default variant',
	options: [
		{
			displayName: 'Compare At Price',
			name: 'compareAtPrice',
			type: 'string',
			default: '',
			placeholder: 'e.g., 15.00',
			description: 'Original price before discounts',
		},
		{
			displayName: 'Cost of Goods',
			name: 'cost',
			type: 'string',
			default: '',
			placeholder: 'e.g., 5.00',
			description: 'Cost for profit margin calculations',
		},
		{
			displayName: 'SKU',
			name: 'sku',
			type: 'string',
			default: '',
			description: 'Stock Keeping Unit',
		},
		{
			displayName: 'Barcode',
			name: 'barcode',
			type: 'string',
			default: '',
			description: 'Product barcode (UPC, EAN, etc.)',
		},
		{
			displayName: 'Visible',
			name: 'visible',
			type: 'boolean',
			default: true,
			description: 'Whether this variant is visible',
		},
	],
	routing: {
		send: {
			type: 'body',
			property: 'product.variantsInfo.variants.0',
			value: '={{ (() => { const variant = { price: { actualPrice: { amount: $parameter.price } }, choices: [] }; if ($value.compareAtPrice) variant.price.compareAtPrice = { amount: $value.compareAtPrice }; if ($value.cost) variant.revenueDetails = { cost: { amount: $value.cost } }; if ($value.sku) variant.sku = $value.sku; if ($value.barcode) variant.barcode = $value.barcode; if ($value.visible !== undefined) variant.visible = $value.visible; return variant; })() }}',
		},
	},
};

