import type { INodeProperties } from 'n8n-workflow';

import {
	createChoicesSettingsField,
	createPricePerUnitField,
	infoSectionsField,
	inventoryTrackingOptions,
	mediaItemsField,
	physicalPropertiesField,
	productTypeOptions,
	seoDataField,
	subscriptionDetailsField,
} from './common';

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
					{
						displayName: 'Inventory',
						name: 'inventory',
						type: 'fixedCollection',
						default: {},
						placeholder: 'Track Inventory',
						description: 'Inventory tracking settings for this variant',
						options: [
							{
								displayName: 'Inventory Settings',
								name: 'settings',
								values: [
								{
									displayName: 'Tracking',
									name: 'tracking',
									type: 'options',
									options: inventoryTrackingOptions,
									default: 'NONE',
									description: 'How to track inventory for this variant',
								},
									{
										displayName: 'In Stock',
										name: 'inStock',
										type: 'boolean',
										default: true,
										description: 'Whether this variant is in stock (only for Track by Availability)',
										displayOptions: {
											show: {
												tracking: ['IN_STOCK'],
											},
										},
									},
									{
										displayName: 'Quantity',
										name: 'quantity',
										type: 'number',
										default: 0,
										description: 'Stock quantity (only for Track by Quantity)',
										displayOptions: {
											show: {
												tracking: ['QUANTITY'],
											},
										},
									},
								],
							},
						],
					},					
					{
						displayName: 'Additional Fields',
						name: 'additionalFields',
						type: 'collection',
						placeholder: 'Add Field',
						default: {},
						options: [
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
											{
												displayName: 'Choice Name',
												name: 'choiceName',
												type: 'string',
												default: '',
												required: true,
												placeholder: 'e.g., S',
												description: 'The choice value for this variant',
											},									
										],
									},
								],
							},
							{
								displayName: 'Compare At Price (Strikethrough Price)',
								name: 'compareAtPrice',
								type: 'string',
								default: '',
								placeholder: 'e.g., 15.00',
								description: 'Original price before discounts (shown with strikethrough)',
							},
							{
								displayName: 'Cost Of Goods',
								name: 'cost',
								type: 'string',
								default: '',
								placeholder: 'e.g., 5.00',
								description: 'Cost for profit margin calculations',
							},
							{
								displayName: 'Digital File ID',
								name: 'digitalFileId',
								type: 'string',
								default: '',
								description: 'ID of the digital file to be downloaded after purchase',
							},
							{
								displayName: 'Physical Properties',
								name: 'physicalProperties',
								type: 'fixedCollection',
								default: {},
								description: 'Physical properties for this variant',
								options: [
									{
										displayName: 'Settings',
										name: 'settings',
										values: [
											createPricePerUnitField('Price per unit settings for this variant'),
											{
												displayName: 'Weight',
												name: 'weight',
												type: 'number',
												default: 0,
												typeOptions: {
													maxValue: 999999999.99,
												},
												description: 'Variant shipping weight',
											},
										],
									},
								],
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
						description: 'Option name (max 50 chars)',
					},
					{
						displayName: 'Settings',
						name: 'settings',
						type: 'fixedCollection',
						default: {},
						description: 'Option type and choices',
						options: [
							{
								displayName: 'Settings',
								name: 'config',
								values: [
								{
									displayName: 'Render Type',
									name: 'optionRenderType',
									type: 'options',
									options: [
										{
											name: 'Swatch Choices',
											value: 'SWATCH_CHOICES',
										},
										{
											name: 'Text Choices',
											value: 'TEXT_CHOICES',
										},
									],
									default: 'TEXT_CHOICES',
									description: 'How this option is displayed',
								},
								createChoicesSettingsField(),
								],
							},
						],
					},
					{
						displayName: 'Customization ID',
						name: 'id',
						type: 'string',
						default: '',
						description: 'ID of an existing customization to connect (leave empty to create new)',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'product.options',
				value: '={{ $value.option && $value.option.length > 0 ? $value.option.map(o => { const cfg = o.settings?.config || {}; const opt = { name: o.name, optionRenderType: cfg.optionRenderType || "TEXT_CHOICES" }; if (o.id) opt.id = o.id; if (cfg.choicesSettings?.choice && cfg.choicesSettings.choice.length > 0) { opt.choicesSettings = { choices: cfg.choicesSettings.choice.map(c => { const choice = { name: c.name, choiceType: c.choiceType || "CHOICE_TEXT" }; if (c.choiceType === "ONE_COLOR" && c.colorCode) choice.colorCode = c.colorCode; return choice; }) }; } return opt; }) : undefined }}',
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
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						required: true,
						placeholder: 'e.g., Engraving',
						description: 'Modifier title (max 50 chars)',
					},
					{
						displayName: 'Settings',
						name: 'settings',
						type: 'fixedCollection',
						default: {},
						description: 'Modifier type and configuration',
						options: [
							{
								displayName: 'Settings',
								name: 'config',
								values: [
									{
										displayName: 'Modifier Type',
										name: 'modifierRenderType',
										type: 'options',
										options: [
											{
												name: 'Free Text',
												value: 'FREE_TEXT',
											},
											{
												name: 'Swatch Choices',
												value: 'SWATCH_CHOICES',
											},
											{
												name: 'Text Choices',
												value: 'TEXT_CHOICES',
											},
										],
										default: 'TEXT_CHOICES',
										description: 'Modifier input type',
									},
								createChoicesSettingsField({
									show: {
										modifierRenderType: ['TEXT_CHOICES', 'SWATCH_CHOICES'],
									},
								}),
									{
										displayName: 'Free Text Settings',
										name: 'freeTextSettings',
										type: 'fixedCollection',
										default: {},
										description: 'Settings for free text input',
										displayOptions: {
											show: {
												modifierRenderType: ['FREE_TEXT'],
											},
										},
										options: [
											{
												displayName: 'Settings',
												name: 'settings',
												values: [
													{
														displayName: 'Title',
														name: 'title',
														type: 'string',
														default: '',
														placeholder: 'e.g., Enter your custom text',
														description: 'Title shown for free text input (max 150 chars)',
													},
													{
														displayName: 'Min Characters',
														name: 'minCharCount',
														type: 'number',
														default: 0,
														description: 'Minimum characters required',
													},
													{
														displayName: 'Max Characters',
														name: 'maxCharCount',
														type: 'number',
														default: 500,
														description: 'Maximum characters allowed (max 500)',
													},
													{
														displayName: 'Price Adjustment',
														name: 'defaultAddedPrice',
														type: 'string',
														default: '',
														placeholder: 'e.g., 5.00',
														description: 'Amount added to product price',
													},
												],
											},
										],
									},
								],
							},
						],
					},
					{
						displayName: 'Additional Fields',
						name: 'additionalFields',
						type: 'collection',
						placeholder: 'Add Field',
						default: {},
						options: [
							{
								displayName: 'Customization ID',
								name: 'id',
								type: 'string',
								default: '',
								description: 'ID of an existing customization to connect (leave empty to create new)',
							},
							{
								displayName: 'Mandatory',
								name: 'mandatory',
								type: 'boolean',
								default: false,
								description: 'Whether customer input is required for this modifier',
							},
						],
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'product.modifiers',
				value: '={{ $value.modifier && $value.modifier.length > 0 ? $value.modifier.map(m => { const af = m.additionalFields || {}; const cfg = m.settings?.config || {}; const mod = { name: m.name, modifierRenderType: cfg.modifierRenderType || "TEXT_CHOICES", mandatory: af.mandatory || false }; if (af.id) mod.id = af.id; if (cfg.modifierRenderType === "FREE_TEXT") { const fs = cfg.freeTextSettings?.settings || {}; mod.freeTextSettings = { minCharCount: fs.minCharCount || 0, maxCharCount: fs.maxCharCount || 500 }; if (fs.title) mod.freeTextSettings.title = fs.title; if (fs.defaultAddedPrice) mod.freeTextSettings.defaultAddedPrice = fs.defaultAddedPrice; } else if (cfg.choicesSettings?.choice && cfg.choicesSettings.choice.length > 0) { mod.choicesSettings = { choices: cfg.choicesSettings.choice.map(c => { const choice = { name: c.name, choiceType: c.choiceType || "CHOICE_TEXT" }; if (c.choiceType === "ONE_COLOR" && c.colorCode) choice.colorCode = c.colorCode; return choice; }) }; } return mod; }) : undefined }}',
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
];
