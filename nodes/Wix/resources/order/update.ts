import type { INodeProperties } from 'n8n-workflow';
import { orderSelect } from '../../listSearch/order/orderSelect';

const showOnlyForOrderUpdate = {
	operation: ['update'],
	resource: ['order'],
};

export const orderUpdateDescription: INodeProperties[] = [
	{
		...orderSelect,
		displayOptions: {
			show: showOnlyForOrderUpdate,
		},
		description: 'The ID of the order to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: showOnlyForOrderUpdate,
		},
		default: {},
		description: 'Fields to update in the order',
		options: [
			{
				displayName: 'Archived',
				name: 'archived',
				type: 'boolean',
				default: false,
				description: 'Whether the order is archived',
			},
			{
				displayName: 'Attribution Source',
				name: 'attributionSource',
				type: 'string',
				default: '',
				description: 'The attribution source for the order',
			},
			{
				displayName: 'Billing Address',
				name: 'billingInfo',
				type: 'fixedCollection',
				default: {},
				description: 'Update billing address',
				options: [
					{
						displayName: 'Billing Info',
						name: 'billingInfoValues',
						values: [
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
						],
					},
				],
			},
			{
				displayName: 'Buyer Email',
				name: 'buyerInfo',
				type: 'fixedCollection',
				default: {},
				description: 'Update buyer email',
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
								description: 'The buyer email address',
							},
						],
					},
				],
			},
			{
				displayName: 'Buyer Language',
				name: 'buyerLanguage',
				type: 'string',
				default: '',
				description: 'The buyer language code (e.g., en, es)',
			},
			{
				displayName: 'Extended Fields',
				name: 'extendedFields',
				type: 'json',
				default: '',
				description: 'Extended fields as JSON object',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
			},
			{
				displayName: 'Recipient Info',
				name: 'recipientInfo',
				type: 'fixedCollection',
				default: {},
				description: 'Update recipient information',
				options: [
					{
						displayName: 'Recipient Info',
						name: 'recipientInfoValues',
						values: [
							{
								displayName: 'Address',
								name: 'address',
								type: 'fixedCollection',
								default: {},
								description: 'Recipient address',
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
							{
								displayName: 'Contact Details',
								name: 'contactDetails',
								type: 'fixedCollection',
								default: {},
								description: 'Recipient contact details',
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
						],
					},
				],
			},
			{
				displayName: 'Seen By A Human',
				name: 'seenByAHuman',
				type: 'boolean',
				default: false,
				description: 'Whether the order has been seen by a human',
			},
			{
				displayName: 'Shipping Destination',
				name: 'shippingInfo',
				type: 'fixedCollection',
				default: {},
				description: 'Update shipping destination',
				options: [
					{
						displayName: 'Shipping Info',
						name: 'shippingInfoValues',
						values: [
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
												options: [
													{
														displayName: 'Shipping Destination',
														name: 'shippingDestinationValues',
														values: [
															{
																displayName: 'Address',
																name: 'address',
																type: 'fixedCollection',
																default: {},
																description: 'Destination address',
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
															{
																displayName: 'Contact Details',
																name: 'contactDetails',
																type: 'fixedCollection',
																default: {},
																description: 'Destination contact details',
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
														],
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
			},
			{
				displayName: 'Weight Unit',
				name: 'weightUnit',
				type: 'options',
				options: [
					{
						name: 'Kilogram',
						value: 'KG',
					},
					{
						name: 'Pound',
						value: 'LB',
					},
				],
				default: 'KG',
				description: 'The weight unit for the order',
			},
		],
		routing: {
			send: {
				type: 'body',
				property: '=',
				value: '={{ Object.fromEntries(Object.entries($value).filter(([_, v]) => v !== "" && v !== null && v !== undefined).map(([k, v]) => { if (k === "buyerInfo") return ["buyerInfo", { email: v.buyerInfoValues?.email }]; if (k === "billingInfo") return ["billingInfo", { address: v.billingInfoValues?.address?.addressValues, contactDetails: v.billingInfoValues?.contactDetails?.contactDetailsValues }]; if (k === "recipientInfo") return ["recipientInfo", { address: v.recipientInfoValues?.address?.addressValues, contactDetails: v.recipientInfoValues?.contactDetails?.contactDetailsValues }]; if (k === "shippingInfo") return ["shippingInfo", { logistics: { shippingDestination: { address: v.shippingInfoValues?.logistics?.logisticsValues?.shippingDestination?.shippingDestinationValues?.address?.addressValues, contactDetails: v.shippingInfoValues?.logistics?.logisticsValues?.shippingDestination?.shippingDestinationValues?.contactDetails?.contactDetailsValues } } }]; return [k, v]; })) }}',
			},
		},
	},
];
