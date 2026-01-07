import type { INodeProperties } from 'n8n-workflow';

import { productSelect } from '../../listSearch/product/productSelect';
import {
	commonProductAdditionalFields,
	inventoryTrackingOptionsWithNoChange,
	productTypeOptions,
} from './common';

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
		description: 'Fields to update in the product. Note: To update array fields like options, modifiers, or variants, you must pass the entire existing array.',
		options: [
			...commonProductAdditionalFields,
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Product name',
			},
			{
				displayName: 'Product Type',
				name: 'productType',
				type: 'options',
				options: productTypeOptions,
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
								options: inventoryTrackingOptionsWithNoChange,
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
								description: 'The ID of the existing variant to update (required)',
							},
						],
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'product',
				value: '={{ (() => { const customData = $value.custom ? (typeof $value.custom === "string" ? JSON.parse($value.custom) : $value.custom) : {}; const fields = {}; if ($value.name) fields.name = $value.name; if ($value.productType) fields.productType = $value.productType; if ($value.description) fields.description = typeof $value.description === "string" ? JSON.parse($value.description) : $value.description; if ($value.plainDescription) fields.plainDescription = $value.plainDescription; if ($value.slug) fields.slug = $value.slug; if ($value.visible !== undefined) fields.visible = $value.visible; if ($value.visibleInPos !== undefined) fields.visibleInPos = $value.visibleInPos; if ($value.seoData) fields.seoData = typeof $value.seoData === "string" ? JSON.parse($value.seoData) : $value.seoData; if ($value.taxGroupId) fields.taxGroupId = $value.taxGroupId; if ($value.mainCategoryId) fields.mainCategoryId = $value.mainCategoryId; if ($value.brandName) fields.brand = { name: $value.brandName }; if ($value.ribbon?.ribbonValues?.text) { fields.ribbon = { text: $value.ribbon.ribbonValues.text }; if ($value.ribbon.ribbonValues.id) fields.ribbon.id = $value.ribbon.ribbonValues.id; } const mediaItems = $value.mediaItems?.item; if (mediaItems && mediaItems.length > 0) { const items = mediaItems.map(m => { const item = {}; if (m.id) item.id = m.id; else if (m.url) item.url = m.url; if (m.altText) item.altText = m.altText; if (m.displayName) item.displayName = m.displayName; return item; }).filter(item => item.id || item.url); if (items.length > 0) { fields.media = { itemsInfo: { items } }; } } if ($value.infoSections?.section && $value.infoSections.section.length > 0) { fields.infoSections = $value.infoSections.section.map(s => { const section = {}; if (s.id) section.id = s.id; if (s.title) section.title = s.title; if (s.uniqueName) section.uniqueName = s.uniqueName; if (s.plainDescription) section.plainDescription = s.plainDescription; return section; }); } if ($value.physicalProperties?.physicalPropertiesValues) { const pp = $value.physicalProperties.physicalPropertiesValues; fields.physicalProperties = {}; if (pp.deliveryProfileId) fields.physicalProperties.deliveryProfileId = pp.deliveryProfileId; if (pp.fulfillerId) fields.physicalProperties.fulfillerId = pp.fulfillerId; const ppu = pp.pricePerUnit?.settings; if (ppu?.measurementUnit && ppu?.quantity) fields.physicalProperties.pricePerUnit = { quantity: ppu.quantity, measurementUnit: ppu.measurementUnit }; } if ($value.subscriptionDetails?.settings) { const sd = $value.subscriptionDetails.settings; fields.subscriptionDetails = {}; if (sd.allowOneTimePurchases !== undefined) fields.subscriptionDetails.allowOneTimePurchases = sd.allowOneTimePurchases; if (sd.subscriptions?.subscription && sd.subscriptions.subscription.length > 0) { fields.subscriptionDetails.subscriptions = sd.subscriptions.subscription.map(sub => { const s = { title: sub.title, frequency: sub.frequency || "MONTH" }; if (sub.description) s.description = sub.description; if (sub.interval) s.interval = sub.interval; if (sub.billingCycles && sub.billingCycles > 0) s.billingCycles = sub.billingCycles; else s.autoRenewal = true; if (sub.visible !== undefined) s.visible = sub.visible; if (sub.discountType && sub.discountType !== "NONE" && sub.discountValue) { s.discount = { type: sub.discountType }; if (sub.discountType === "AMOUNT") s.discount.amountOff = sub.discountValue; else s.discount.percentOff = parseFloat(sub.discountValue); } return s; }); } } if ($value.variantInventory?.variant && $value.variantInventory.variant.length > 0) { fields.variantsInfo = { variants: $value.variantInventory.variant.map(v => { const variant = { id: v.id }; if (v.inventoryTracking === "QUANTITY") { variant.inventoryItem = { quantity: v.inventoryQuantity }; } else if (v.inventoryTracking === "IN_STOCK") { variant.inventoryItem = { inStock: v.inventoryInStock }; } return variant; }) }; } return { ...fields, ...customData }; })() }}',
			},
		},
	},
];
