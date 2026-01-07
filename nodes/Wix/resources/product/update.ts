import type { INodeProperties } from 'n8n-workflow';

import { productSelect } from '../../listSearch/product/productSelect';
import {
	commonProductAdditionalFields,
	createInventoryField,
	createRequestedFieldsField,
	inventoryTrackingOptionsWithNoChange,
	modifiersField,
	optionsField,
	productTypeOptions,
	variantAdditionalFields,
} from './common/index';

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
				displayName: 'Variants',
				name: 'variants',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				placeholder: 'Add Variant',
				description: 'Update existing variants or add new ones. Provide Variant ID to update, leave empty to add a new variant.',
				options: [
					{
						displayName: 'Variant',
						name: 'variant',
						values: [
							{
								displayName: 'Variant ID',
								name: 'id',
								type: 'string',
								default: '',
								description: 'The ID of an existing variant to update. Leave empty to add a new variant.',
							},
							{
								displayName: 'Price',
								name: 'price',
								type: 'string',
								default: '',
								placeholder: 'e.g., 10.00',
								description: 'The selling price of this variant',
							},
							createInventoryField(inventoryTrackingOptionsWithNoChange, 'NO_CHANGE'),
							{
								displayName: 'Additional Fields',
								name: 'additionalFields',
								type: 'collection',
								placeholder: 'Add Field',
								default: {},
								options: [
									...variantAdditionalFields,
									{
										displayName: 'Visible',
										name: 'visible',
										type: 'boolean',
										default: true,
										description: 'Whether this variant is visible',
									},
								],
							},
						],
					},
				],
			},
			optionsField,
			modifiersField,
		],
		routing: {
			send: {
				type: 'body',
				property: 'product',
				value: '={{ (() => { const customData = $value.custom ? (typeof $value.custom === "string" ? JSON.parse($value.custom) : $value.custom) : {}; const fields = {}; if ($value.name) fields.name = $value.name; if ($value.productType) fields.productType = $value.productType; if ($value.description) fields.description = typeof $value.description === "string" ? JSON.parse($value.description) : $value.description; if ($value.plainDescription) fields.plainDescription = $value.plainDescription; if ($value.slug) fields.slug = $value.slug; if ($value.visible !== undefined) fields.visible = $value.visible; if ($value.visibleInPos !== undefined) fields.visibleInPos = $value.visibleInPos; if ($value.seoData) fields.seoData = typeof $value.seoData === "string" ? JSON.parse($value.seoData) : $value.seoData; if ($value.taxGroupId) fields.taxGroupId = $value.taxGroupId; if ($value.mainCategoryId) fields.mainCategoryId = $value.mainCategoryId; if ($value.brandName) fields.brand = { name: $value.brandName }; if ($value.ribbon?.ribbonValues?.text) { fields.ribbon = { text: $value.ribbon.ribbonValues.text }; if ($value.ribbon.ribbonValues.id) fields.ribbon.id = $value.ribbon.ribbonValues.id; } const mediaItems = $value.mediaItems?.item; if (mediaItems && mediaItems.length > 0) { const items = mediaItems.map(m => { const item = {}; if (m.id) item.id = m.id; else if (m.url) item.url = m.url; if (m.altText) item.altText = m.altText; if (m.displayName) item.displayName = m.displayName; return item; }).filter(item => item.id || item.url); if (items.length > 0) { fields.media = { itemsInfo: { items } }; } } if ($value.infoSections?.section && $value.infoSections.section.length > 0) { fields.infoSections = $value.infoSections.section.map(s => { const section = {}; if (s.id) section.id = s.id; if (s.title) section.title = s.title; if (s.uniqueName) section.uniqueName = s.uniqueName; if (s.plainDescription) section.plainDescription = s.plainDescription; return section; }); } if ($value.physicalProperties?.physicalPropertiesValues) { const pp = $value.physicalProperties.physicalPropertiesValues; fields.physicalProperties = {}; if (pp.deliveryProfileId) fields.physicalProperties.deliveryProfileId = pp.deliveryProfileId; if (pp.fulfillerId) fields.physicalProperties.fulfillerId = pp.fulfillerId; const ppu = pp.pricePerUnit?.settings; if (ppu?.measurementUnit && ppu?.quantity) fields.physicalProperties.pricePerUnit = { quantity: ppu.quantity, measurementUnit: ppu.measurementUnit }; } if ($value.subscriptionDetails?.settings) { const sd = $value.subscriptionDetails.settings; fields.subscriptionDetails = {}; if (sd.allowOneTimePurchases !== undefined) fields.subscriptionDetails.allowOneTimePurchases = sd.allowOneTimePurchases; if (sd.subscriptions?.subscription && sd.subscriptions.subscription.length > 0) { fields.subscriptionDetails.subscriptions = sd.subscriptions.subscription.map(sub => { const s = { title: sub.title, frequency: sub.frequency || "MONTH" }; if (sub.description) s.description = sub.description; if (sub.interval) s.interval = sub.interval; if (sub.billingCycles && sub.billingCycles > 0) s.billingCycles = sub.billingCycles; else s.autoRenewal = true; if (sub.visible !== undefined) s.visible = sub.visible; if (sub.discountType && sub.discountType !== "NONE" && sub.discountValue) { s.discount = { type: sub.discountType }; if (sub.discountType === "AMOUNT") s.discount.amountOff = sub.discountValue; else s.discount.percentOff = parseFloat(sub.discountValue); } return s; }); } } if ($value.variants?.variant && $value.variants.variant.length > 0) { fields.variantsInfo = { variants: $value.variants.variant.map(v => { const af = v.additionalFields || {}; const variant = {}; if (v.id) variant.id = v.id; if (v.price) variant.price = { actualPrice: { amount: v.price } }; if (af.compareAtPrice) { variant.price = variant.price || {}; variant.price.compareAtPrice = { amount: af.compareAtPrice }; } if (af.cost) variant.revenueDetails = { cost: { amount: af.cost } }; if (af.sku) variant.sku = af.sku; if (af.barcode) variant.barcode = af.barcode; if (af.visible !== undefined) variant.visible = af.visible; const pp = af.physicalProperties?.settings; if (pp) { variant.physicalProperties = {}; if (pp.weight) variant.physicalProperties.weight = pp.weight; const ppu = pp.pricePerUnit?.settings; if (ppu?.measurementUnit && ppu?.quantity) variant.physicalProperties.pricePerUnit = { settings: { measurementUnit: ppu.measurementUnit, quantity: ppu.quantity } }; } if (af.digitalFileId) variant.digitalProperties = { digitalFile: { id: af.digitalFileId } }; if (af.choices?.choice && af.choices.choice.length > 0) { variant.choices = af.choices.choice.map(c => ({ optionChoiceNames: { optionName: c.optionName, choiceName: c.choiceName, renderType: c.renderType } })); } const inv = v.inventory?.settings; if (inv?.tracking === "QUANTITY") { variant.inventoryItem = { quantity: inv.quantity }; } else if (inv?.tracking === "IN_STOCK") { variant.inventoryItem = { inStock: inv.inStock }; } return variant; }) }; } if ($value.options?.option && $value.options.option.length > 0) { fields.options = $value.options.option.map(o => { const cfg = o.settings?.config || {}; const opt = { name: o.name, optionRenderType: cfg.optionRenderType || "TEXT_CHOICES" }; if (o.id) opt.id = o.id; if (cfg.choicesSettings?.choice && cfg.choicesSettings.choice.length > 0) { opt.choicesSettings = { choices: cfg.choicesSettings.choice.map(c => { const choice = { name: c.name, choiceType: c.choiceType || "CHOICE_TEXT" }; if (c.choiceType === "ONE_COLOR" && c.colorCode) choice.colorCode = c.colorCode; return choice; }) }; } return opt; }); } if ($value.modifiers?.modifier && $value.modifiers.modifier.length > 0) { fields.modifiers = $value.modifiers.modifier.map(m => { const af = m.additionalFields || {}; const cfg = m.settings?.config || {}; const mod = { name: m.name, modifierRenderType: cfg.modifierRenderType || "TEXT_CHOICES", mandatory: af.mandatory || false }; if (af.id) mod.id = af.id; if (cfg.modifierRenderType === "FREE_TEXT") { const fs = cfg.freeTextSettings?.settings || {}; mod.freeTextSettings = { minCharCount: fs.minCharCount || 0, maxCharCount: fs.maxCharCount || 500 }; if (fs.title) mod.freeTextSettings.title = fs.title; if (fs.defaultAddedPrice) mod.freeTextSettings.defaultAddedPrice = fs.defaultAddedPrice; } else if (cfg.choicesSettings?.choice && cfg.choicesSettings.choice.length > 0) { mod.choicesSettings = { choices: cfg.choicesSettings.choice.map(c => { const choice = { name: c.name, choiceType: c.choiceType || "CHOICE_TEXT" }; if (c.choiceType === "ONE_COLOR" && c.colorCode) choice.colorCode = c.colorCode; return choice; }) }; } return mod; }); } return { ...fields, ...customData }; })() }}',
			},
		},
	},
	createRequestedFieldsField({ show: showOnlyForProductUpdate }, 'fields'),
];
