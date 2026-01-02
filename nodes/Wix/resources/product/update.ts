import type { INodeProperties } from 'n8n-workflow';
import { productSelect } from '../../listSearch/product/productSelect';

const showOnlyForProductUpdate = {
	operation: ['update'],
	resource: ['product'],
};

export const productUpdateDescription: INodeProperties[] = [
	{
		...productSelect,
		displayOptions: {
			show: showOnlyForProductUpdate,
		},
		description: 'The ID of the product to update',
	},
	{
		displayName: 'Revision',
		name: 'revision',
		type: 'string',
		displayOptions: {
			show: showOnlyForProductUpdate,
		},
		default: '',
		required: true,
		description: 'The current revision of the product (prevents unintended overwrites). Get this value from a Get Product call.',
		routing: {
			send: {
				type: 'body',
				property: 'product.revision',
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: showOnlyForProductUpdate,
		},
		default: {},
		description: 'Fields to update in the product',
		options: [
			{
				displayName: 'Custom JSON',
				name: 'custom',
				type: 'json',
				default: '{}',
				description: 'Custom JSON to extend the product update call with additional fields not available in this form',
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
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Product name',
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
								displayName: 'Fulfiller ID',
								name: 'fulfillerId',
								type: 'string',
								default: '',
								description: 'Fulfiller ID for this product',
							},
							{
								displayName: 'Shipping Group ID',
								name: 'shippingGroupId',
								type: 'string',
								default: '',
								description: 'Shipping group ID',
							},
						],
					},
				],
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
				default: 'PHYSICAL',
				description: 'The type of product',
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
								displayName: 'Ribbon ID',
								name: 'id',
								type: 'string',
								default: '',
								description: 'Existing ribbon ID (required for update)',
							},
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
				value: '={{ (() => { const customData = $value.custom ? (typeof $value.custom === "string" ? JSON.parse($value.custom) : $value.custom) : {}; const fields = {}; if ($value.name) fields.name = $value.name; if ($value.description) fields.description = $value.description; if ($value.slug) fields.slug = $value.slug; if ($value.productType) fields.productType = $value.productType; if ($value.visible !== undefined) fields.visible = $value.visible; if ($value.visibleInPos !== undefined) fields.visibleInPos = $value.visibleInPos; if ($value.seoTitle) fields.seoTitle = $value.seoTitle; if ($value.seoDescription) fields.seoDescription = $value.seoDescription; if ($value.taxGroupId) fields.taxGroupId = $value.taxGroupId; if ($value.ribbon?.ribbonValues?.text) { fields.ribbon = { text: $value.ribbon.ribbonValues.text }; if ($value.ribbon.ribbonValues.id) fields.ribbon._id = $value.ribbon.ribbonValues.id; } if ($value.physicalProperties?.physicalPropertiesValues) { const pp = $value.physicalProperties.physicalPropertiesValues; fields.physicalProperties = {}; if (pp.fulfillerId) fields.physicalProperties.fulfillerId = pp.fulfillerId; if (pp.shippingGroupId) fields.physicalProperties.shippingGroupId = pp.shippingGroupId; } return { ...fields, ...customData }; })() }}',
			},
		},
	},
];

