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
				displayName: 'SEO Data',
				name: 'seoData',
				type: 'json',
				default: '',
				placeholder: '{"tags": [{"type": "title", "children": "My Product"}, {"type": "meta", "props": {"name": "description", "content": "Product description"}}]}',
				description: 'SEO schema with tags and settings. Tags support types: title, meta, script, link.',
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
				displayName: 'Update Variant Inventory',
				name: 'variantInventory',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				placeholder: 'Add Variant Inventory Update',
				description: 'Update inventory for existing variants. Provide the variant ID from a Get Product call.',
				options: [
					{
						displayName: 'Variant',
						name: 'variant',
						values: [
							{
								displayName: 'In Stock',
								name: 'inventoryInStock',
								type: 'boolean',
								default: true,
								description: 'Whether this variant is in stock',
								displayOptions: {
									show: {
										inventoryTracking: ['IN_STOCK'],
									},
								},
							},
							{
								displayName: 'Inventory Tracking',
								name: 'inventoryTracking',
								type: 'options',
								options: [
									{
										name: 'No Change',
										value: 'NO_CHANGE',
										description: 'Keep current inventory settings',
									},
									{
										name: 'Track by Availability',
										value: 'IN_STOCK',
										description: 'Simple in stock / out of stock',
									},
									{
										name: 'Track by Quantity',
										value: 'QUANTITY',
										description: 'Track exact stock counts',
									},
								],
								default: 'NO_CHANGE',
								description: 'How to track inventory for this variant',
							},
							{
								displayName: 'Quantity',
								name: 'inventoryQuantity',
								type: 'number',
								default: 0,
								description: 'Stock quantity for this variant',
								displayOptions: {
									show: {
										inventoryTracking: ['QUANTITY'],
									},
								},
							},
							{
								displayName: 'Variant ID',
								name: 'id',
								type: 'string',
								default: '',
								required: true,
								description: 'The ID of the existing variant to update',
							},
						],
					},
				],
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
				value: '={{ (() => { const customData = $value.custom ? (typeof $value.custom === "string" ? JSON.parse($value.custom) : $value.custom) : {}; const fields = {}; if ($value.name) fields.name = $value.name; if ($value.description) fields.description = $value.description; if ($value.slug) fields.slug = $value.slug; if ($value.productType) fields.productType = $value.productType; if ($value.visible !== undefined) fields.visible = $value.visible; if ($value.visibleInPos !== undefined) fields.visibleInPos = $value.visibleInPos; if ($value.seoData) fields.seoData = typeof $value.seoData === "string" ? JSON.parse($value.seoData) : $value.seoData; if ($value.taxGroupId) fields.taxGroupId = $value.taxGroupId; if ($value.ribbon?.ribbonValues?.text) { fields.ribbon = { text: $value.ribbon.ribbonValues.text }; if ($value.ribbon.ribbonValues.id) fields.ribbon._id = $value.ribbon.ribbonValues.id; } if ($value.physicalProperties?.physicalPropertiesValues) { const pp = $value.physicalProperties.physicalPropertiesValues; fields.physicalProperties = {}; if (pp.fulfillerId) fields.physicalProperties.fulfillerId = pp.fulfillerId; if (pp.shippingGroupId) fields.physicalProperties.shippingGroupId = pp.shippingGroupId; } if ($value.variantInventory?.variant && $value.variantInventory.variant.length > 0) { fields.variantsInfo = { variants: $value.variantInventory.variant.map(v => { const variant = { _id: v.id }; if (v.inventoryTracking === "QUANTITY") { variant.inventoryItem = { quantity: v.inventoryQuantity }; } else if (v.inventoryTracking === "IN_STOCK") { variant.inventoryItem = { inStock: v.inventoryInStock }; } return variant; }) }; } return { ...fields, ...customData }; })() }}',
			},
		},
	},
];

