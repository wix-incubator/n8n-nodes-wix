import type { INodeProperties } from 'n8n-workflow';

import { mediaItemsField } from '../common/productMedia';

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
		displayName: 'Variants',
		name: 'variants',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: showOnlyForProductCreate,
		},
		default: { variant: [{ price: '', visible: true, choices: {} }] },
		required: true,
		placeholder: 'Add Variant',
		description: 'Product variants. At least one variant is required.',
		options: [
			{
				displayName: 'Variant',
				name: 'variant',
				values: [
					{
						displayName: 'Barcode',
						name: 'barcode',
						type: 'string',
						default: '',
						description: 'Product barcode (UPC, EAN, etc.)',
					},
					{
						displayName: 'Choices',
						name: 'choices',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						placeholder: 'Add Choice',
						description: 'Option choices for this variant (e.g., Size: S, Color: Red). Leave empty for single-variant products.',
						options: [
							{
								displayName: 'Choice',
								name: 'choice',
								values: [
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
										displayName: 'Option Name',
										name: 'optionName',
										type: 'string',
										default: '',
										required: true,
										placeholder: 'e.g., Size',
										description: 'The name of the option (must match an option defined below)',
									},
									{
										displayName: 'Render Type',
										name: 'renderType',
										type: 'options',
										options: [
											{
												name: 'Color Swatch',
												value: 'SWATCH_CHOICES',
											},
											{
												name: 'Text',
												value: 'TEXT_CHOICES',
											},
										],
										default: 'TEXT_CHOICES',
										description: 'How this choice is displayed',
									},
								],
							},
						],
					},
					{
						displayName: 'Compare At Price',
						name: 'compareAtPrice',
						type: 'string',
						default: '',
						placeholder: 'e.g., 15.00',
						description: 'Original price before discounts (shown with strikethrough)',
					},
					{
						displayName: 'Cost',
						name: 'cost',
						type: 'string',
						default: '',
						placeholder: 'e.g., 5.00',
						description: 'Cost for profit margin calculations',
					},
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
								name: 'None',
								value: 'NONE',
								description: 'No inventory tracking',
							},
							{
								name: 'Track by Quantity',
								value: 'QUANTITY',
								description: 'Track exact stock counts',
							},
							{
								name: 'Track by Availability',
								value: 'IN_STOCK',
								description: 'Simple in stock / out of stock',
							},
						],
						default: 'NONE',
						description: 'How to track inventory for this variant',
					},
					{
						displayName: 'Price',
						name: 'price',
						type: 'string',
						default: '',
						required: true,
						placeholder: 'e.g., 10.00',
						description: 'The selling price of this variant',
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
						displayName: 'SKU',
						name: 'sku',
						type: 'string',
						default: '',
						description: 'Stock Keeping Unit',
					},
					{
						displayName: 'Visible',
						name: 'visible',
						type: 'boolean',
						default: true,
						description: 'Whether this variant is visible',
					},
					{
						displayName: 'Weight',
						name: 'weight',
						type: 'number',
						default: 0,
						description: 'Variant weight for shipping',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'product.variantsInfo.variants',
				value: '={{ $value.variant ? $value.variant.map(v => { const variant = { price: { actualPrice: { amount: v.price } }, choices: [] }; if (v.compareAtPrice) variant.price.compareAtPrice = { amount: v.compareAtPrice }; if (v.cost) variant.revenueDetails = { cost: { amount: v.cost } }; if (v.sku) variant.sku = v.sku; if (v.barcode) variant.barcode = v.barcode; if (v.visible !== undefined) variant.visible = v.visible; if (v.weight) variant.physicalProperties = { weight: v.weight }; if (v.choices?.choice && v.choices.choice.length > 0) { variant.choices = v.choices.choice.map(c => ({ optionChoiceNames: { optionName: c.optionName, choiceName: c.choiceName, renderType: c.renderType } })); } if (v.inventoryTracking === "QUANTITY") { variant.inventoryItem = { quantity: v.inventoryQuantity }; } else if (v.inventoryTracking === "IN_STOCK") { variant.inventoryItem = { inStock: v.inventoryInStock }; } return variant; }) : [] }}',
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: showOnlyForProductCreate,
		},
		default: {},
		placeholder: 'Add Option',
		description: 'Product options (e.g., Size, Color) that create variant combinations. Only needed for multi-variant products.',
		options: [
			{
				displayName: 'Option',
				name: 'option',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						required: true,
						placeholder: 'e.g., Size',
						description: 'Option name',
					},
					{
						displayName: 'Render Type',
						name: 'optionRenderType',
						type: 'options',
						options: [
							{
								name: 'Color Swatch',
								value: 'SWATCH_CHOICES',
							},
							{
								name: 'Text',
								value: 'TEXT_CHOICES',
							},
						],
						default: 'TEXT_CHOICES',
						description: 'How this option is displayed',
					},
					{
						displayName: 'Choices',
						name: 'choices',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						placeholder: 'Add Choice',
						options: [
							{
								displayName: 'Choice',
								name: 'choice',
								values: [
									{
										displayName: 'Name',
										name: 'name',
										type: 'string',
										default: '',
										required: true,
										placeholder: 'e.g., Small',
										description: 'Choice name',
									},
									{
										displayName: 'Choice Type',
										name: 'choiceType',
										type: 'options',
										options: [
											{
												name: 'One Color',
												value: 'ONE_COLOR',
											},
											{
												name: 'Text',
												value: 'CHOICE_TEXT',
											},
										],
										default: 'CHOICE_TEXT',
										description: 'Type of choice',
									},
									{
										displayName: 'Color Code',
										name: 'colorCode',
										type: 'color',
										default: '',
										description: 'Hex color code (only for One Color type)',
									},
								],
							},
						],
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'product.options',
				value: '={{ $value.option && $value.option.length > 0 ? $value.option.map(o => ({ name: o.name, optionRenderType: o.optionRenderType, choicesSettings: { choices: o.choices?.choice ? o.choices.choice.map(c => ({ name: c.name, choiceType: c.choiceType, ...(c.colorCode ? { colorCode: c.colorCode } : {}) })) : [] } })) : undefined }}',
			},
		},
	},
	{
		displayName: 'Modifiers',
		name: 'modifiers',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: showOnlyForProductCreate,
		},
		default: {},
		placeholder: 'Add Modifier',
		description: 'Product modifiers (e.g., engraving, gift wrapping). Optional add-ons that don\'t create new variants.',
		options: [
			{
				displayName: 'Modifier',
				name: 'modifier',
				values: [
					{
						displayName: 'Choices',
						name: 'choices',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						placeholder: 'Add Choice',
						description: 'Available choices (only for Text Choices type)',
						options: [
							{
								displayName: 'Choice',
								name: 'choice',
								values: [
									{
										displayName: 'Name',
										name: 'name',
										type: 'string',
										default: '',
										required: true,
										placeholder: 'e.g., Yes',
										description: 'Choice name',
									},
								],
							},
						],
					},
					{
						displayName: 'Free Text Title',
						name: 'freeTextTitle',
						type: 'string',
						default: '',
						placeholder: 'e.g., Enter your custom text',
						description: 'Title shown for free text input (only for Free Text type)',
					},
					{
						displayName: 'Mandatory',
						name: 'mandatory',
						type: 'boolean',
						default: false,
						description: 'Whether this modifier is required',
					},
					{
						displayName: 'Max Characters',
						name: 'maxCharCount',
						type: 'number',
						default: 500,
						description: 'Maximum characters for free text input',
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						required: true,
						placeholder: 'e.g., Engraving',
						description: 'Modifier name',
					},
					{
						displayName: 'Type',
						name: 'modifierRenderType',
						type: 'options',
						options: [
							{
								name: 'Free Text',
								value: 'FREE_TEXT',
							},
							{
								name: 'Text Choices',
								value: 'TEXT_CHOICES',
							},
						],
						default: 'TEXT_CHOICES',
						description: 'Modifier input type',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'product.modifiers',
				value: '={{ $value.modifier && $value.modifier.length > 0 ? $value.modifier.map(m => { const mod = { name: m.name, modifierRenderType: m.modifierRenderType, mandatory: m.mandatory }; if (m.modifierRenderType === "FREE_TEXT") { mod.freeTextSettings = { minCharCount: 0, maxCharCount: m.maxCharCount || 500, title: m.freeTextTitle || "" }; } else if (m.choices?.choice) { mod.choicesSettings = { choices: m.choices.choice.map(c => ({ choiceType: "CHOICE_TEXT", name: c.name })) }; } return mod; }) : undefined }}',
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
				displayName: 'Brand Name',
				name: 'brandName',
				type: 'string',
				default: '',
				description: 'Product brand name',
			},
			{
				displayName: 'Custom JSON',
				name: 'custom',
				type: 'json',
				default: '{}',
				description: 'Custom JSON to extend the product with additional fields not available in this form',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
			},
			{
				displayName: 'Description (Rich Text)',
				name: 'description',
				type: 'json',
				default: '',
				description: 'Product description as rich content JSON. For plain text, use Plain Description instead.',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
			},
			{
				displayName: 'Info Sections',
				name: 'infoSections',
				type: 'json',
				default: '',
				description: 'Additional product information sections (e.g., refund policy, care instructions)',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
			},
			mediaItemsField,
			{
				displayName: 'Physical Properties',
				name: 'physicalProperties',
				type: 'fixedCollection',
				default: {},
				description: 'Physical properties for shipping and display',
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
								displayName: 'Measurement Unit',
								name: 'measurementUnit',
								type: 'options',
								options: [
									{ name: 'Fluid Ounce (FLOZ)', value: 'FLOZ' },
									{ name: 'Gallon (GAL)', value: 'GAL' },
									{ name: 'Gram (G)', value: 'G' },
									{ name: 'Kilogram (KG)', value: 'KG' },
									{ name: 'Liter (L)', value: 'L' },
									{ name: 'Milliliter (ML)', value: 'ML' },
									{ name: 'Ounce (OZ)', value: 'OZ' },
									{ name: 'Pint (PT)', value: 'PT' },
									{ name: 'Pound (LB)', value: 'LB' },
									{ name: 'Quart (QT)', value: 'QT' },
								],
								default: 'KG',
								description: 'Measurement unit for price per unit',
							},
							{
								displayName: 'Quantity',
								name: 'quantity',
								type: 'number',
								default: 1,
								description: 'Quantity for price per unit display',
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
				displayName: 'Plain Description',
				name: 'plainDescription',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Product description as plain text (without formatting)',
			},
			{
				displayName: 'Ribbon',
				name: 'ribbon',
				type: 'string',
				default: '',
				placeholder: 'e.g., Sale, New, Best Seller',
				description: 'Product ribbon/badge text',
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
				value: '={{ (() => { const customData = $value.custom ? (typeof $value.custom === "string" ? JSON.parse($value.custom) : $value.custom) : {}; const fields = {}; if ($value.description) fields.description = typeof $value.description === "string" ? JSON.parse($value.description) : $value.description; if ($value.plainDescription) fields.plainDescription = $value.plainDescription; if ($value.slug) fields.slug = $value.slug; if ($value.visible !== undefined) fields.visible = $value.visible; if ($value.visibleInPos !== undefined) fields.visibleInPos = $value.visibleInPos; if ($value.seoTitle) fields.seoTitle = $value.seoTitle; if ($value.seoDescription) fields.seoDescription = $value.seoDescription; if ($value.taxGroupId) fields.taxGroupId = $value.taxGroupId; if ($value.ribbon) fields.ribbon = { name: $value.ribbon }; if ($value.brandName) fields.brand = { name: $value.brandName }; const mediaItems = $value.mediaItems?.item; if (mediaItems && mediaItems.length > 0) { const items = mediaItems.map(m => { const item = {}; if (m.id) item.id = m.id; else if (m.url) item.url = m.url; if (m.altText) item.altText = m.altText; if (m.displayName) item.displayName = m.displayName; return item; }).filter(item => item.id || item.url); if (items.length > 0) { fields.media = { itemsInfo: { items } }; } } if ($value.infoSections) fields.infoSections = typeof $value.infoSections === "string" ? JSON.parse($value.infoSections) : $value.infoSections; if ($value.physicalProperties?.physicalPropertiesValues) { const pp = $value.physicalProperties.physicalPropertiesValues; fields.physicalProperties = {}; if (pp.fulfillerId) fields.physicalProperties.fulfillerId = pp.fulfillerId; if (pp.shippingGroupId) fields.physicalProperties.shippingGroupId = pp.shippingGroupId; if (pp.measurementUnit && pp.quantity) fields.physicalProperties.pricePerUnit = { quantity: pp.quantity, measurementUnit: pp.measurementUnit }; } else if ($parameter.productType === "PHYSICAL") { fields.physicalProperties = {}; } return { ...fields, ...customData }; })() }}',
			},
		},
	},
];
