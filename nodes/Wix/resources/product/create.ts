import type { INodeProperties } from 'n8n-workflow';

import {
	createInventoryField,
	createRequestedFieldsField,
	infoSectionsField,
	inventoryTrackingOptions,
	mediaItemsField,
	modifiersField,
	modifiersRoutingExpression,
	optionsField,
	optionsRoutingExpression,
	physicalPropertiesField,
	productTypeOptions,
	seoDataField,
	subscriptionDetailsField,
	variantAdditionalFields,
} from './common/index';

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
		options: productTypeOptions,
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
						displayName: 'Price',
						name: 'price',
						type: 'string',
						default: '',
						required: true,
						placeholder: 'e.g., 10.00',
						description: 'The selling price of this variant',
					},
					{
						displayName: 'Visible',
						name: 'visible',
						type: 'boolean',
						default: true,
						description: 'Whether this variant is visible',
					},					
					createInventoryField(inventoryTrackingOptions, 'NONE'),
					{
						displayName: 'Additional Fields',
						name: 'additionalFields',
						type: 'collection',
						placeholder: 'Add Field',
						default: {},
						options: variantAdditionalFields,
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'product.variantsInfo.variants',
				value: '={{ $value.variant ? $value.variant.map(v => { const af = v.additionalFields || {}; const variant = { price: { actualPrice: { amount: v.price } }, choices: [] }; if (af.compareAtPrice) variant.price.compareAtPrice = { amount: af.compareAtPrice }; if (af.cost) variant.revenueDetails = { cost: { amount: af.cost } }; if (af.sku) variant.sku = af.sku; if (af.barcode) variant.barcode = af.barcode; if (v.visible !== undefined) variant.visible = v.visible; const pp = af.physicalProperties?.settings; if (pp) { variant.physicalProperties = {}; if (pp.weight) variant.physicalProperties.weight = pp.weight; const ppu = pp.pricePerUnit?.settings; if (ppu?.measurementUnit && ppu?.quantity) variant.physicalProperties.pricePerUnit = { settings: { measurementUnit: ppu.measurementUnit, quantity: ppu.quantity } }; } if (af.digitalFileId) variant.digitalProperties = { digitalFile: { id: af.digitalFileId } }; if (af.choices?.choice && af.choices.choice.length > 0) { variant.choices = af.choices.choice.map(c => ({ optionChoiceNames: { optionName: c.optionName, choiceName: c.choiceName, renderType: c.renderType } })); } const inv = v.inventory?.settings; if (inv?.tracking === "QUANTITY") { variant.inventoryItem = { quantity: inv.quantity }; } else if (inv?.tracking === "IN_STOCK") { variant.inventoryItem = { inStock: inv.inStock }; } return variant; }) : [] }}',
			},
		},
	},
	{
		...optionsField,
		displayOptions: {
			show: showOnlyForProductCreate,
		},
		description: 'Product options (e.g., Size, Color) that create variant combinations. Only needed for multi-variant products.',
		routing: {
			send: {
				type: 'body',
				property: 'product.options',
				value: `={{ ${optionsRoutingExpression} }}`,
			},
		},
	},
	{
		...modifiersField,
		displayOptions: {
			show: showOnlyForProductCreate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'product.modifiers',
				value: `={{ ${modifiersRoutingExpression} }}`,
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
				displayName: 'Custom',
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
			infoSectionsField,
			{
				displayName: 'Main Category ID',
				name: 'mainCategoryId',
				type: 'string',
				default: '',
				description: 'The ID of the product\'s primary direct category, which defines the product\'s breadcrumbs path. For example, if the product\'s main category is "T-Shirts" (which is a subcategory of "Clothing"), the breadcrumbs path will be "Clothing > T-Shirts".',
			},
			mediaItemsField,
			physicalPropertiesField,
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
			seoDataField,
			{
				displayName: 'Slug',
				name: 'slug',
				type: 'string',
				default: '',
				description: 'URL-friendly product identifier',
			},
			subscriptionDetailsField,
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
				value: '={{ (() => { const customData = $value.custom ? (typeof $value.custom === "string" ? JSON.parse($value.custom) : $value.custom) : {}; const fields = {}; if ($value.description) fields.description = typeof $value.description === "string" ? JSON.parse($value.description) : $value.description; if ($value.plainDescription) fields.plainDescription = $value.plainDescription; if ($value.slug) fields.slug = $value.slug; if ($value.visible !== undefined) fields.visible = $value.visible; if ($value.visibleInPos !== undefined) fields.visibleInPos = $value.visibleInPos; if ($value.seoData) fields.seoData = typeof $value.seoData === "string" ? JSON.parse($value.seoData) : $value.seoData; if ($value.taxGroupId) fields.taxGroupId = $value.taxGroupId; if ($value.ribbon) fields.ribbon = { name: $value.ribbon }; if ($value.brandName) fields.brand = { name: $value.brandName }; const mediaItems = $value.mediaItems?.item; if (mediaItems && mediaItems.length > 0) { const items = mediaItems.map(m => { const item = {}; if (m.id) item.id = m.id; else if (m.url) item.url = m.url; if (m.altText) item.altText = m.altText; if (m.displayName) item.displayName = m.displayName; return item; }).filter(item => item.id || item.url); if (items.length > 0) { fields.media = { itemsInfo: { items } }; } } if ($value.infoSections?.section && $value.infoSections.section.length > 0) { fields.infoSections = $value.infoSections.section.map(s => { const section = {}; if (s.id) section.id = s.id; if (s.title) section.title = s.title; if (s.uniqueName) section.uniqueName = s.uniqueName; if (s.plainDescription) section.plainDescription = s.plainDescription; return section; }); } if ($value.mainCategoryId) fields.mainCategoryId = $value.mainCategoryId; if ($value.physicalProperties?.physicalPropertiesValues) { const pp = $value.physicalProperties.physicalPropertiesValues; fields.physicalProperties = {}; if (pp.deliveryProfileId) fields.physicalProperties.deliveryProfileId = pp.deliveryProfileId; if (pp.fulfillerId) fields.physicalProperties.fulfillerId = pp.fulfillerId; const ppu = pp.pricePerUnit?.settings; if (ppu?.measurementUnit && ppu?.quantity) fields.physicalProperties.pricePerUnit = { quantity: ppu.quantity, measurementUnit: ppu.measurementUnit }; } else if ($parameter.productType === "PHYSICAL") { fields.physicalProperties = {}; } if ($value.subscriptionDetails?.settings) { const sd = $value.subscriptionDetails.settings; fields.subscriptionDetails = {}; if (sd.allowOneTimePurchases !== undefined) fields.subscriptionDetails.allowOneTimePurchases = sd.allowOneTimePurchases; if (sd.subscriptions?.subscription && sd.subscriptions.subscription.length > 0) { fields.subscriptionDetails.subscriptions = sd.subscriptions.subscription.map(sub => { const s = { title: sub.title, frequency: sub.frequency || "MONTH" }; if (sub.description) s.description = sub.description; if (sub.interval) s.interval = sub.interval; if (sub.billingCycles && sub.billingCycles > 0) s.billingCycles = sub.billingCycles; else s.autoRenewal = true; if (sub.visible !== undefined) s.visible = sub.visible; if (sub.discountType && sub.discountType !== "NONE" && sub.discountValue) { s.discount = { type: sub.discountType }; if (sub.discountType === "AMOUNT") s.discount.amountOff = sub.discountValue; else s.discount.percentOff = parseFloat(sub.discountValue); } return s; }); } } return { ...fields, ...customData }; })() }}',
			},
		},
	},
	createRequestedFieldsField({ show: showOnlyForProductCreate }, 'fields'),
];
