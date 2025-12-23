import type { INodeProperties } from 'n8n-workflow';
import { orderSelect } from '../../listSearch/order/orderSelect';
import { addressField, contactDetailsField } from './common';

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
								...addressField,
								description: 'Recipient address',
							},
							{
								...contactDetailsField,
								description: 'Recipient contact details',
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
																...addressField,
																description: 'Destination address',
															},
															{
																...contactDetailsField,
																description: 'Destination contact details',
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
				property: 'order',
				value: '={{ Object.fromEntries(Object.entries($value).filter(([_, v]) => v !== "" && v !== null && v !== undefined).map(([k, v]) => { if (k === "buyerInfo") return ["buyerInfo", { email: v.buyerInfoValues?.email }]; if (k === "billingInfo") return ["billingInfo", { address: v.billingInfoValues?.address?.addressValues, contactDetails: v.billingInfoValues?.contactDetails?.contactDetailsValues }]; if (k === "recipientInfo") return ["recipientInfo", { address: v.recipientInfoValues?.address?.addressValues, contactDetails: v.recipientInfoValues?.contactDetails?.contactDetailsValues }]; if (k === "shippingInfo") return ["shippingInfo", { logistics: { shippingDestination: { address: v.shippingInfoValues?.logistics?.logisticsValues?.shippingDestination?.shippingDestinationValues?.address?.addressValues, contactDetails: v.shippingInfoValues?.logistics?.logisticsValues?.shippingDestination?.shippingDestinationValues?.contactDetails?.contactDetailsValues } } }]; return [k, v]; })) }}',
			},
		},
	},
];
