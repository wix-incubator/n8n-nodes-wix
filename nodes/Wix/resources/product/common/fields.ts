import type { INodeProperties } from 'n8n-workflow';

import { mediaItemsField } from './media';
import { physicalPropertiesField } from './physicalProperties';

export const infoSectionsField: INodeProperties = {
	displayName: 'Info Sections',
	name: 'infoSections',
	type: 'fixedCollection',
	typeOptions: {
		multipleValues: true,
	},
	default: {},
	placeholder: 'Add Info Section',
	description: 'Additional product information sections (e.g., refund policy, care instructions)',
	options: [
		{
			displayName: 'Info Section',
			name: 'section',
			values: [
				{
					displayName: 'Section ID',
					name: 'id',
					type: 'string',
					default: '',
					description: 'Info section ID (leave empty to create new)',
				},
				{
					displayName: 'Title',
					name: 'title',
					type: 'string',
					default: '',
					placeholder: 'e.g., Refund Policy',
					description: 'Info section title (max 50 chars)',
				},
				{
					displayName: 'Unique Name',
					name: 'uniqueName',
					type: 'string',
					default: '',
					placeholder: 'e.g., refund-policy',
					description: 'Info section unique name (max 100 chars)',
				},
				{
					displayName: 'Plain Description',
					name: 'plainDescription',
					type: 'string',
					typeOptions: {
						rows: 4,
					},
					default: '',
					description: 'Info section description in HTML (max 16000 chars)',
				},
			],
		},
	],
};

export const subscriptionDetailsField: INodeProperties = {
	displayName: 'Subscription Details',
	name: 'subscriptionDetails',
	type: 'fixedCollection',
	default: {},
	description: 'Subscription-based purchase settings for the product',
	options: [
		{
			displayName: 'Settings',
			name: 'settings',
			values: [
				{
					displayName: 'Allow One-Time Purchases',
					name: 'allowOneTimePurchases',
					type: 'boolean',
					default: false,
					description: 'Whether to allow one-time purchases in addition to subscription-based purchases',
				},
				{
					displayName: 'Subscriptions',
					name: 'subscriptions',
					type: 'fixedCollection',
					typeOptions: {
						multipleValues: true,
					},
					default: {},
					placeholder: 'Add Subscription',
					description: 'Available subscriptions (max 6)',
					options: [
						{
							displayName: 'Subscription',
							name: 'subscription',
							values: [
								{
									displayName: 'Billing Cycles',
									name: 'billingCycles',
									type: 'number',
									default: 0,
									typeOptions: { minValue: 0, maxValue: 999 },
									description: 'Number of billing cycles before subscription ends (0 for auto-renewal)',
								},
								{
									displayName: 'Description',
									name: 'description',
									type: 'string',
									default: '',
									placeholder: 'e.g., Save 10% with monthly delivery',
									description: 'Subscription description (max 60 chars)',
								},
								{
									displayName: 'Discount Type',
									name: 'discountType',
									type: 'options',
									options: [
										{ name: 'None', value: 'NONE' },
										{ name: 'Amount Off', value: 'AMOUNT' },
										{ name: 'Percentage Off', value: 'PERCENT' },
									],
									default: 'NONE',
									description: 'Type of subscription discount',
								},
								{
									displayName: 'Discount Value',
									name: 'discountValue',
									type: 'string',
									default: '',
									placeholder: 'e.g., 10',
									description: 'Discount amount or percentage (based on discount type)',
									displayOptions: {
										show: {
											discountType: ['AMOUNT', 'PERCENT'],
										},
									},
								},
								{
									displayName: 'Frequency',
									name: 'frequency',
									type: 'options',
									options: [
										{ name: 'Day', value: 'DAY' },
										{ name: 'Week', value: 'WEEK' },
										{ name: 'Month', value: 'MONTH' },
										{ name: 'Year', value: 'YEAR' },
									],
									default: 'MONTH',
									description: 'Frequency of recurring payment',
								},
								{
									displayName: 'Interval',
									name: 'interval',
									type: 'number',
									default: 1,
									typeOptions: { minValue: 1, maxValue: 50 },
									description: 'Interval of recurring payment (e.g., 2 means every 2 months if frequency is MONTH)',
								},
								{
									displayName: 'Title',
									name: 'title',
									type: 'string',
									default: '',
									required: true,
									placeholder: 'e.g., Monthly Plan',
									description: 'Subscription title (max 20 chars)',
								},
								{
									displayName: 'Visible',
									name: 'visible',
									type: 'boolean',
									default: true,
									description: 'Whether the subscription is visible to site visitors',
								},
							],
						},
					],
				},
			],
		},
	],
};

export const seoDataField: INodeProperties = {
	displayName: 'SEO Data',
	name: 'seoData',
	type: 'json',
	default: '{}',
	placeholder: '{"tags": [{"type": "title", "children": "My Product"}, {"type": "meta", "props": {"name": "description", "content": "Product description"}}]}',
	description: 'SEO schema with tags and settings. Tags support types: title, meta, script, link.',
};

export const commonProductAdditionalFields: INodeProperties[] = [
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
		description: 'The ID of the product\'s primary direct category, which defines the product\'s breadcrumbs path',
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
];

