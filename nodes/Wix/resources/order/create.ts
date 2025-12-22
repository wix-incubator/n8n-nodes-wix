import type { INodeProperties } from 'n8n-workflow';

import { addressField, contactDetailsField } from './common';

const showOnlyForOrderCreate = {
	operation: ['create'],
	resource: ['order'],
};

export const orderCreateDescription: INodeProperties[] = [
	{
		displayName: 'Line Items',
		name: 'lineItems',
		type: 'fixedCollection',
		placeholder: 'Add Line Item',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: showOnlyForOrderCreate,
		},
		default: {},
		required: true,
		description: 'The line items in the order',
		options: [
			{
				displayName: 'Line Item',
				name: 'lineItem',
				values: [
					{
						displayName: 'Catalog Reference',
						name: 'catalogReference',
						type: 'fixedCollection',
						placeholder: 'Add Catalog Reference',
						default: {},
						required: true,
						description: 'Reference to the catalog item',
						options: [
							{
								displayName: 'Catalog Reference',
								name: 'catalogReferenceValues',
								values: [
									{
										displayName: 'Catalog Item ID',
										name: 'catalogItemId',
										type: 'string',
										default: '',
										required: true,
										description: 'The ID of the catalog item',
									},
									{
										displayName: 'App ID',
										name: 'appId',
										type: 'options',
										options: [
											{
												name: 'Wix Bookings',
												value: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
											},
											{
												name: 'Wix Restaurants',
												value: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
											},
											{
												name: 'Wix Stores',
												value: '215238eb-22a5-4c36-9e7b-e7c08025e04e',
											},
										],
										default: '215238eb-22a5-4c36-9e7b-e7c08025e04e',
										required: true,
										description: 'The ID of the app that owns the catalog',
										typeOptions: {
											allowAny: true,
										},
									},
									{
										displayName: 'Options',
										name: 'options',
										type: 'json',
										default: '{}',
										description: 'Additional item details in key-value pairs. Use this optional field to provide more specificity with item selection. The options field values differ depending on which catalog is providing the items.',
										typeOptions: {
											alwaysOpenEditWindow: false,
										},
									},
								],
							},
						],
					},					
					{
						displayName: 'Item Type',
						name: 'itemType',
						type: 'options',
						options: [
							{
								name: 'Custom',
								value: 'CUSTOM',
							},
							{
								name: 'Digital',
								value: 'DIGITAL',
							},
							{
								name: 'Gift Card',
								value: 'GIFT_CARD',
							},
							{
								name: 'Physical',
								value: 'PHYSICAL',
							},
							{
								name: 'Service',
								value: 'SERVICE',
							},
							{
								name: 'Unrecognised',
								value: 'UNRECOGNISED',
							},
						],
						default: 'PHYSICAL',
						required: true,
						description: 'The type of item',
					},
					{
						displayName: 'Item Type - Custom',
						name: 'itemTypeCustom',
						type: 'string',
						displayOptions: {
							show: {
								itemType: ['CUSTOM'],
							},
						},
						default: '',
						required: true,
						description: 'Custom item type (used when preset types are not suitable)',
					},
					{
						displayName: 'Price',
						name: 'price',
						type: 'string',
						default: '',
						required: true,
						description: 'The price of the line item (e.g., 10.00)',						
					},
					{
						displayName: 'Product Name',
						name: 'productName',
						type: 'string',
						default: '',
						required: true,
						description: 'The name of the product',						
					},
					{
						displayName: 'Quantity',
						name: 'quantity',
						type: 'number',
						default: 1,
						required: true,
						description: 'The quantity of the item',
						typeOptions: {
							minValue: 1,
						},
					},
					{
						displayName: 'Tax Info',
						name: 'taxInfo',
						type: 'fixedCollection',
						placeholder: 'Add Tax Info',
						default: {},
						required: true,
						description: 'Tax information for the line item',
						options: [
							{
								displayName: 'Tax Info',
								name: 'taxInfoValues',
								values: [
									{
										displayName: 'Tax Amount',
										name: 'taxAmount',
										type: 'string',
										default: '',
										description: 'Calculated tax amount (e.g., 1.50)',
									},
									{
										displayName: 'Tax Group ID',
										name: 'taxGroupId',
										type: 'string',
										default: '',
									},
									{
										displayName: 'Tax Included in Price',
										name: 'taxIncludedInPrice',
										type: 'boolean',
										default: false,
										description: 'Whether the price already includes tax',
									},
									{
										displayName: 'Tax Rate',
										name: 'taxRate',
										type: 'string',
										default: '',
										description: 'Tax rate as a decimal (e.g., "0.10" for 10%)',
									},
									{
										displayName: 'Taxable Amount',
										name: 'taxableAmount',
										type: 'string',
										default: '',
										description: 'Amount for which tax is calculated (e.g., 10.00)',
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
				property: 'order.lineItems',
				value: '={{ $value.lineItem ? $value.lineItem.map(item => ({ itemType: item.itemType === "CUSTOM" ? { custom: item.itemTypeCustom } : { preset: item.itemType }, ...(item.catalogReference?.catalogReferenceValues?.catalogItemId ? { catalogReference: { ...item.catalogReference.catalogReferenceValues, ...(item.catalogReference.catalogReferenceValues.options ? { options: typeof item.catalogReference.catalogReferenceValues.options === "string" ? JSON.parse(item.catalogReference.catalogReferenceValues.options) : item.catalogReference.catalogReferenceValues.options } : {}) } } : {}), quantity: item.quantity, price: { amount: item.price }, productName: { original: item.productName }, taxInfo: item.taxInfo?.taxInfoValues ? { ...(item.taxInfo.taxInfoValues.taxAmount ? { taxAmount: { amount: item.taxInfo.taxInfoValues.taxAmount } } : {}), ...(item.taxInfo.taxInfoValues.taxableAmount ? { taxableAmount: { amount: item.taxInfo.taxInfoValues.taxableAmount } } : {}), ...(item.taxInfo.taxInfoValues.taxRate ? { taxRate: item.taxInfo.taxInfoValues.taxRate } : {}), ...(item.taxInfo.taxInfoValues.taxGroupId ? { taxGroupId: item.taxInfo.taxInfoValues.taxGroupId } : {}), ...(item.taxInfo.taxInfoValues.taxIncludedInPrice !== undefined ? { taxIncludedInPrice: item.taxInfo.taxInfoValues.taxIncludedInPrice } : {}) } : {} })) : [] }}',
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Approved',
				value: 'APPROVED',
			},
			{
				name: 'Canceled',
				value: 'CANCELED',
			},
			{
				name: 'Initialized',
				value: 'INITIALIZED',
			},
			{
				name: 'Pending',
				value: 'PENDING',
			},
			{
				name: 'Rejected',
				value: 'REJECTED',
			},
		],
		default: 'APPROVED',
		required: true,
		displayOptions: {
			show: showOnlyForOrderCreate,
		},
		description: 'The status of the order',
		routing: {
			send: {
				type: 'body',
				property: 'order.status',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Buyer Info',
		name: 'buyerInfo',
		type: 'fixedCollection',
		placeholder: 'Add Buyer Info',
		displayOptions: {
			show: showOnlyForOrderCreate,
		},
		default: {},
		required: true,
		description: 'Information about the buyer',
		options: [
			{
				displayName: 'Buyer Info',
				name: 'buyerInfoValues',
				values: [
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						placeholder: 'name@email.com',
						default: '',
						required: true,
						description: 'The buyer email address',
					},
					{
						displayName: 'Contact ID',
						name: 'contactId',
						type: 'string',
						default: '',
						description: 'The ID of the contact',
					}
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'order.buyerInfo',
				value: '={{ Object.fromEntries(Object.entries($value.buyerInfoValues || {}).filter(([_, v]) => v !== "" && v !== null && v !== undefined)) }}',
			},
		},
	},
	{
		displayName: 'Channel Info',
		name: 'channelInfo',
		type: 'fixedCollection',
		placeholder: 'Add Channel Info',
		displayOptions: {
			show: showOnlyForOrderCreate,
		},
		default: {},
		required: true,
		description: 'Channel information for the order',
		options: [
			{
				displayName: 'Channel Info',
				name: 'channelInfoValues',
				values: [
					{
						displayName: 'Channel Type',
						name: 'type',						
						type: 'options',
						options: [							
							{
								name: 'Amazon',
								value: 'AMAZON',
							},
							{
								name: 'Backoffice Merchant',
								value: 'BACKOFFICE_MERCHANT',
							},
							{
								name: 'ClassPass',
								value: 'CLASS_PASS',
							},
							{
								name: 'eBay',
								value: 'EBAY',
							},
							{
								name: 'Etsy',
								value: 'ETSY',
							},
							{
								name: 'Facebook',
								value: 'FACEBOOK',
							},
							{
								name: 'Faire Com',
								value: 'FAIRE_COM',
							},
							{
								name: 'Global-E',
								value: 'GLOBAL_E',
							},
							{
								name: 'None',
								value: '',
							},
							{
								name: 'Other Platform',
								value: 'OTHER_PLATFORM',
							},
							{
								name: 'PayPal Agentic Checkout',
								value: 'PAYPAL_AGENTIC_CHECKOUT',
							},
							{
								name: 'Point of Sale',
								value: 'POS',
							},
							{
								name: 'TikTok',
								value: 'TIKTOK',
							},
							{
								name: 'Web',
								value: 'WEB',
							},
							{
								name: 'Wish',
								value: 'WISH',
							},
							{
								name: 'Wix App Store',
								value: 'WIX_APP_STORE',
							},
							{
								name: 'Wix Invoices',
								value: 'WIX_INVOICES',
							},
						],
						default: '',
						required: true,
					},
					{
						displayName: 'External Order ID',
						name: 'externalOrderId',
						type: 'string',
						default: '',
						description: 'A unique identifier for the order in an external system',
					},
					{
						displayName: 'External Order URL',
						name: 'externalOrderUrl',
						type: 'string',
						default: '',
						description: 'A URL linking to the order in an external system',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'order.channelInfo',
				value: '={{ Object.fromEntries(Object.entries($value.channelInfoValues || {}).filter(([_, v]) => v !== "" && v !== null && v !== undefined)) }}',
			},
		},
	},
	{
		displayName: 'Price Summary',
		name: 'priceSummary',
		type: 'fixedCollection',
		placeholder: 'Add Price Summary',
		displayOptions: {
			show: showOnlyForOrderCreate,
		},
		default: {},
		required: true,
		description: 'Price summary for the order',
		options: [
			{
				displayName: 'Price Summary',
				name: 'priceSummaryValues',
				values: [
					{
						displayName: 'Discount',
						name: 'discount',
						type: 'string',
						default: '',
						description: 'Total calculated discount value (e.g., 10.00)',
					},
					{
						displayName: 'Shipping',
						name: 'shipping',
						type: 'string',
						default: '',
						description: 'Total shipping price, before discounts and before tax (e.g., 5.00)',
					},
					{
						displayName: 'Subtotal',
						name: 'subtotal',
						type: 'string',
						default: '',
						description: 'Subtotal of all line items, before discounts and before tax (e.g., 100.00)',
					},
					{
						displayName: 'Tax',
						name: 'tax',
						type: 'string',
						default: '',
						description: 'Total tax on this order (e.g., 8.00)',
					},
					{
						displayName: 'Total',
						name: 'total',
						type: 'string',
						default: '',
						description: 'Order total price after discounts and tax (e.g., 100.00)',
					},
					{
						displayName: 'Total Additional Fees',
						name: 'totalAdditionalFees',
						type: 'string',
						default: '',
						description: 'Total price of additional fees before tax (e.g., 2.00)',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'order.priceSummary',
				value: '={{ Object.fromEntries(Object.entries({ subtotal: $value.priceSummaryValues?.subtotal ? { amount: $value.priceSummaryValues.subtotal } : null, shipping: $value.priceSummaryValues?.shipping ? { amount: $value.priceSummaryValues.shipping } : null, tax: $value.priceSummaryValues?.tax ? { amount: $value.priceSummaryValues.tax } : null, discount: $value.priceSummaryValues?.discount ? { amount: $value.priceSummaryValues.discount } : null, total: $value.priceSummaryValues?.total ? { amount: $value.priceSummaryValues.total } : null, totalAdditionalFees: $value.priceSummaryValues?.totalAdditionalFees ? { amount: $value.priceSummaryValues.totalAdditionalFees } : null }).filter(([_, v]) => v !== null)) }}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: showOnlyForOrderCreate,
		},
		default: {},
		description: 'Additional optional fields for the order',
		options: [
			{
				displayName: 'Billing Info',
				name: 'billingInfo',
				type: 'fixedCollection',
				default: {},
				description: 'Billing information for the order',
				options: [
					{
					displayName: 'Billing Info',
					name: 'billingInfoValues',
					values: [
						{
							...addressField,
							description: 'Billing address',
						},
						{
							...contactDetailsField,
							description: 'Contact details for billing',
						},
					],
					},
				],
			},
		{
			displayName: 'Currency',
			name: 'currency',
			type: 'string',
			default: 'USD',
			description: 'The currency code (e.g., USD, EUR)',
		},
		{
			displayName: 'Custom',
			name: 'custom',
			type: 'json',
			default: '{}',
			description: 'Custom JSON to extend the order create call with additional fields not available in this form',
			typeOptions: {
				alwaysOpenEditWindow: true,
			},
		},
		{
			displayName: 'Shipping Info',
			name: 'shippingInfo',
			type: 'fixedCollection',
			default: {},
			description: 'Shipping information for the order',
			options: [
				{
					displayName: 'Shipping Info',
					name: 'shippingInfoValues',
					values: [
						{
							displayName: 'Carrier ID',
							name: 'carrierId',
							type: 'string',
							default: '',
							description: 'App Def ID of external provider which was a source of shipping info',
						},
						{
							displayName: 'Logistics',
							name: 'logistics',
							type: 'fixedCollection',
							default: {},
							description: 'Shipping logistics',
							options: [
								{
									displayName: 'Logistics',
									name: 'logisticsValues',
									values: [
										{
											displayName: 'Shipping Destination',
											name: 'shippingDestination',
											type: 'fixedCollection',
											default: {},
											description: 'Shipping address and contact details',
											options: [
												{
													displayName: 'Shipping Destination',
													name: 'shippingDestinationValues',
													values: [
														{
															...addressField,
															description: 'Shipping address',
														},
														{
															...contactDetailsField,
															description: 'Contact details for shipping',
														},
													],
												},
											],
										},
										{
											displayName: 'Delivery Time',
											name: 'deliveryTime',
											type: 'string',
											default: '',
											description: 'Expected delivery time in free text (e.g., "3-5 business days")',
										},
										{
											displayName: 'Instructions',
											name: 'instructions',
											type: 'string',
											default: '',
											description: 'Instructions for carrier',
										},
									],
								},
							],
						},
						{
							displayName: 'Region',
							name: 'region',
							type: 'fixedCollection',
							default: {},
							description: 'Shipping region',
							options: [
								{
									displayName: 'Region',
									name: 'regionValues',
									values: [
										{
											displayName: 'Name',
											name: 'name',
											type: 'string',
											default: '',
											description: 'Name of shipping region (e.g., "Metropolitan London")',
										},
									],
								},
							],
						},
						{
							displayName: 'Shipping Code',
							name: 'code',
							type: 'string',
							default: '',
							description: 'Unique code (or ID) of selected shipping option (e.g., "usps_std_overnight")',
						},
						{
							displayName: 'Shipping Cost',
							name: 'cost',
							type: 'string',
							default: '',
							description: 'Shipping costs (e.g., 10.00)',
						},
						{
							displayName: 'Shipping Title',
							name: 'title',
							type: 'string',
							default: '',
							description: 'Shipping option title (e.g., "USPS Standard Overnight Delivery")',
						},
					],
				},
			],
			routing: {
				send: {
					type: 'body',
					property: 'order.shippingInfo',
					value: '={{ Object.fromEntries(Object.entries({ carrierId: $value.shippingInfoValues?.carrierId || null, code: $value.shippingInfoValues?.code || null, title: $value.shippingInfoValues?.title || null, cost: $value.shippingInfoValues?.cost ? { price: { amount: $value.shippingInfoValues.cost } } : null, logistics: $value.shippingInfoValues?.logistics?.logisticsValues ? { shippingDestination: $value.shippingInfoValues.logistics.logisticsValues.shippingDestination?.shippingDestinationValues ? { address: $value.shippingInfoValues.logistics.logisticsValues.shippingDestination.shippingDestinationValues.address?.addressValues || null, contactDetails: $value.shippingInfoValues.logistics.logisticsValues.shippingDestination.shippingDestinationValues.contactDetails?.contactDetailsValues || null } : null, ...($value.shippingInfoValues.logistics.logisticsValues.deliveryTime ? { deliveryTime: $value.shippingInfoValues.logistics.logisticsValues.deliveryTime } : {}), ...($value.shippingInfoValues.logistics.logisticsValues.instructions ? { instructions: $value.shippingInfoValues.logistics.logisticsValues.instructions } : {}) } : null, region: $value.shippingInfoValues?.region?.regionValues?.name ? { name: $value.shippingInfoValues.region.regionValues.name } : null }).filter(([_, v]) => v !== null && v !== undefined)) }}',
				},
			},
		},
		],
		routing: {
			send: {
				type: 'body',
				property: 'order',
				value: '={{ (() => { const customData = $value.custom ? (typeof $value.custom === "string" ? JSON.parse($value.custom) : $value.custom) : {}; const fields = Object.fromEntries(Object.entries($value).filter(([k, v]) => k !== "custom" && v !== "" && v !== null && v !== undefined).map(([k, v]) => { if (k === "billingInfo") return [k, { contactDetails: v.billingInfoValues?.contactDetails?.contactDetailsValues, address: v.billingInfoValues?.address?.addressValues }]; if (k === "currency") return [k, v]; return [k, v]; })); return { ...fields, ...customData }; })() }}',
			},
		},
	},
];
