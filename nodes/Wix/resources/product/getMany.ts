import type { INodeProperties } from 'n8n-workflow';
import {
	filterFieldValues,
	filterRoutingValue,
	sortDirectionOptions,
	sortRoutingValue,
} from '../common/getMany';
import { createRequestedFieldsField } from './common/requestedFields';

const showOnlyForProductGetMany = {
	operation: ['getMany'],
	resource: ['product'],
};

export const productGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForProductGetMany,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: {
				paginate: '={{ $value }}',
			},
			operations: {
				pagination: {
					type: 'generic',
					properties: {
						continue: '={{ $response.body?.pagingMetadata?.hasNext }}',
						request: {
							body: {
								search: {
									cursorPaging: {
										cursor: '={{ $response.body?.pagingMetadata?.cursors?.next }}',
										limit: '={{ $parameter.returnAll ? 100 : Math.min($parameter.limit || 100, 100) }}',
									},
								},
							},
						},
					},
				},
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForProductGetMany,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'search.cursorPaging.limit',
			},
			output: {
				maxResults: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: showOnlyForProductGetMany,
		},
		default: {},
		placeholder: 'Add Filter',
		description: 'Filter criteria for searching products',
		options: [
			{
				displayName: 'Filter Field',
				name: 'filterField',
				values: filterFieldValues,
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'search.filter',
				value: filterRoutingValue,
			},
		},
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: showOnlyForProductGetMany,
		},
		default: {},
		placeholder: 'Add Sort Criteria',
		description: 'Sort criteria for the results',
		options: [
			{
				displayName: 'Sort Option',
				name: 'sortOption',
				values: [
					{
						displayName: 'Sort Field',
						name: 'fieldName',
						type: 'options',
						options: [
							{
								name: 'Actual Price Max',
								value: 'actualPriceRange.maxValue.amount',
							},
							{
								name: 'Actual Price Min',
								value: 'actualPriceRange.minValue.amount',
							},
							{
								name: 'Compare At Price Max',
								value: 'compareAtPriceRange.maxValue.amount',
							},
							{
								name: 'Compare At Price Min',
								value: 'compareAtPriceRange.minValue.amount',
							},
							{
								name: 'Created Date',
								value: 'createdDate',
							},
							{
								name: 'Name',
								value: 'name',
							},
							{
								name: 'Updated Date',
								value: 'updatedDate',
							},
						],
						default: 'createdDate',
						required: true,
						description: 'Field to sort by',
					},
					{
						displayName: 'Sort Direction',
						name: 'order',
						type: 'options',
						options: sortDirectionOptions,
						default: 'DESC',
						required: true,
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'search.sort',
				value: sortRoutingValue,
			},
		},
	},
	createRequestedFieldsField({ show: showOnlyForProductGetMany }, 'fields'),
];
