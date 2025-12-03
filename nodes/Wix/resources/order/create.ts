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
										type: 'string',
										default: '',
										required: true,
										description: 'The ID of the app that owns the catalog',
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
								name: 'Digital',
								value: 'DIGITAL',
							},
							{
								name: 'Physical',
								value: 'PHYSICAL',
							},
						],
						default: 'PHYSICAL',
						required: true,
						description: 'The type of item',
					},
					{
						displayName: 'Price',
						name: 'price',
						type: 'string',
						default: '',
						required: true,
						description: 'The price of the line item (e.g., "10.00")',
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
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'lineItems',
				value: '={{ $value.map(item => ({ itemType: item.itemType, catalogReference: item.catalogReference?.catalogReferenceValues, quantity: item.quantity, price: { amount:item.price }, productName: item.productName })) }}',
			},
		},
	},
	{
		displayName: 'Buyer Info',
		name: 'buyerInfo',
		type: 'fixedCollection',
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
					},
					{
						displayName: 'Member ID',
						name: 'memberId',
						type: 'string',
						default: '',
						description: 'The ID of the member',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'buyerInfo',
				value: '={{ $value.buyerInfoValues }}',
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
										name: 'Online',
										value: 'ONLINE',
									},
									{
										name: 'Offline',
										value: 'OFFLINE',
									},
									{
										name: 'Manual',
										value: 'MANUAL',
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
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: 'USD',
				description: 'The currency code (e.g., USD, EUR)',
			},
		],
		routing: {
			send: {
				type: 'body',
				property: '=',
				value: '={{ Object.fromEntries(Object.entries($value).filter(([_, v]) => v !== "" && v !== null && v !== undefined).map(([k, v]) => { if (k === "billingInfo") return [k, { contactDetails: v.billingInfoValues?.contactDetails?.contactDetailsValues, address: v.billingInfoValues?.address?.addressValues }]; if (k === "shippingInfo") return [k, { deliveryType: v.shippingInfoValues?.deliveryType, address: v.shippingInfoValues?.address?.addressValues }]; if (k === "paymentInfo") return [k, v.paymentInfoValues]; return [k, v]; })) }}',
			},
		},
	},
];
