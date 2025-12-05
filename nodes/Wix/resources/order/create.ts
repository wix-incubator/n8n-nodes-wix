import type { INodeProperties } from 'n8n-workflow';

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
				value: '={{ $value.lineItem ? $value.lineItem.map(item => ({ itemType: item.itemType === "CUSTOM" ? { custom: item.itemTypeCustom } : { preset: item.itemType }, catalogReference: item.catalogReference?.catalogReferenceValues, quantity: item.quantity, price: { amount: item.price }, productName: { original: item.productName }, taxInfo: item.taxInfo?.taxInfoValues ? { ...(item.taxInfo.taxInfoValues.taxAmount ? { taxAmount: { amount: item.taxInfo.taxInfoValues.taxAmount } } : {}), ...(item.taxInfo.taxInfoValues.taxableAmount ? { taxableAmount: { amount: item.taxInfo.taxInfoValues.taxableAmount } } : {}), ...(item.taxInfo.taxInfoValues.taxRate ? { taxRate: item.taxInfo.taxInfoValues.taxRate } : {}), ...(item.taxInfo.taxInfoValues.taxGroupId ? { taxGroupId: item.taxInfo.taxInfoValues.taxGroupId } : {}), ...(item.taxInfo.taxInfoValues.taxIncludedInPrice !== undefined ? { taxIncludedInPrice: item.taxInfo.taxInfoValues.taxIncludedInPrice } : {}) } : {} })) : [] }}',
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
						default: 'WEB',
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
						displayName: 'Subtotal',
						name: 'subtotal',
						type: 'fixedCollection',
						default: {},
						required: true,
						description: 'Subtotal of all line items, before discounts and before tax',
						options: [
							{
								displayName: 'Subtotal',
								name: 'subtotalValues',
								values: [
									{
										displayName: 'Amount',
										name: 'amount',
										type: 'string',
										default: '',
										required: true,
										description: 'The subtotal amount (e.g., "100.00")',
									},
								],
							},
						],
					},
					{
						displayName: 'Total',
						name: 'total',
						type: 'fixedCollection',
						default: {},
						required: true,
						description: 'Order total price after discounts and tax',
						options: [
							{
								displayName: 'Total',
								name: 'totalValues',
								values: [
									{
										displayName: 'Amount',
										name: 'amount',
										type: 'string',
										default: '',
										required: true,
										description: 'The total amount (e.g., "100.00")',
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
				property: 'order.priceSummary',
				value: '={{ { subtotal: $value.priceSummaryValues?.subtotal?.subtotalValues ? { amount: $value.priceSummaryValues.subtotal.subtotalValues.amount } : {}, total: $value.priceSummaryValues?.total?.totalValues ? { amount: $value.priceSummaryValues.total.totalValues.amount } : {} } }}',
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
								displayName: 'Contact Details',
								name: 'contactDetails',
								type: 'fixedCollection',
								default: {},
								description: 'Contact details for billing',
								options: [
									{
										displayName: 'Contact Details',
										name: 'contactDetailsValues',
										values: [
											{
												displayName: 'First Name',
												name: 'firstName',
												type: 'string',
												default: '',
											},
											{
												displayName: 'Last Name',
												name: 'lastName',
												type: 'string',
												default: '',
											},
											{
												displayName: 'Phone',
												name: 'phone',
												type: 'string',
												default: '',
												description: 'Phone number',
											},
											{
												displayName: 'Email',
												name: 'email',
												type: 'string',
												placeholder: 'name@email.com',
												default: '',
											},
										],
									},
								],
							},
							{
								displayName: 'Address',
								name: 'address',
								type: 'fixedCollection',
								default: {},
								description: 'Billing address',
								options: [
									{
										displayName: 'Address',
										name: 'addressValues',
										values: [
											{
												displayName: 'Address Line 1',
												name: 'addressLine1',
												type: 'string',
												default: '',
												description: 'Street address',
											},
											{
												displayName: 'Address Line 2',
												name: 'addressLine2',
												type: 'string',
												default: '',
												description: 'Apartment, suite, etc',
											},
											{
												displayName: 'City',
												name: 'city',
												type: 'string',
												default: '',
											},
											{
												displayName: 'State',
												name: 'state',
												type: 'string',
												default: '',
												description: 'State or province',
											},
											{
												displayName: 'Postal Code',
												name: 'postalCode',
												type: 'string',
												default: '',
												description: 'Postal or ZIP code',
											},
											{
												displayName: 'Country',
												name: 'country',
												type: 'string',
												default: '',
												description: 'Country code (e.g., US)',
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
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: 'USD',
				description: 'The currency code (e.g., USD, EUR)',
			},
			{
				displayName: 'Payment Info',
				name: 'paymentInfo',
				type: 'fixedCollection',
				default: {},
				description: 'Payment information for the order',
				options: [
					{
						displayName: 'Payment Info',
						name: 'paymentInfoValues',
						values: [
							{
								displayName: 'Payment Method',
								name: 'method',
								type: 'options',
								options: [
									{
										name: 'Manual',
										value: 'MANUAL',
									},
									{
										name: 'Offline',
										value: 'OFFLINE',
									},
									{
										name: 'Online',
										value: 'ONLINE',
									},
								],
								default: 'ONLINE',
							},
							{
								displayName: 'Payment Provider',
								name: 'paymentProvider',
								type: 'string',
								default: '',
								description: 'The payment provider name',
							},
						],
					},
				],
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
								displayName: 'Delivery Type',
								name: 'deliveryType',
								type: 'options',
								options: [
									{
										name: 'Digital',
										value: 'DIGITAL',
									},
									{
										name: 'Physical',
										value: 'PHYSICAL',
									},
									{
										name: 'Pickup',
										value: 'PICKUP',
									},
									{
										name: 'Shipment',
										value: 'SHIPMENT',
									},
								],
								default: 'SHIPMENT',
							},
							{
								displayName: 'Address',
								name: 'address',
								type: 'fixedCollection',
								default: {},
								description: 'Shipping address',
								options: [
									{
										displayName: 'Address',
										name: 'addressValues',
										values: [
											{
												displayName: 'Address Line 1',
												name: 'addressLine1',
												type: 'string',
												default: '',
												description: 'Street address',
											},
											{
												displayName: 'Address Line 2',
												name: 'addressLine2',
												type: 'string',
												default: '',
												description: 'Apartment, suite, etc',
											},
											{
												displayName: 'City',
												name: 'city',
												type: 'string',
												default: '',
											},
											{
												displayName: 'State',
												name: 'state',
												type: 'string',
												default: '',
												description: 'State or province',
											},
											{
												displayName: 'Postal Code',
												name: 'postalCode',
												type: 'string',
												default: '',
												description: 'Postal or ZIP code',
											},
											{
												displayName: 'Country',
												name: 'country',
												type: 'string',
												default: '',
												description: 'Country code (e.g., US)',
											},
										],
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
				property: 'order',
				value: '={{ Object.fromEntries(Object.entries($value).filter(([_, v]) => v !== "" && v !== null && v !== undefined).map(([k, v]) => { if (k === "billingInfo") return [k, { contactDetails: v.billingInfoValues?.contactDetails?.contactDetailsValues, address: v.billingInfoValues?.address?.addressValues }]; if (k === "shippingInfo") return [k, { deliveryType: v.shippingInfoValues?.deliveryType, address: v.shippingInfoValues?.address?.addressValues }]; if (k === "paymentInfo") return [k, v.paymentInfoValues]; if (k === "currency") return [k, v]; return [k, v]; })) }}',
			},
		},
	},
];
