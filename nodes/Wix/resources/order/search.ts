import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrderSearch = {
	operation: ['search'],
	resource: ['order'],
};

export const orderSearchDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForOrderSearch,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: {
				paginate: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForOrderSearch,
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
				property: 'cursorPaging.limit',
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
		displayOptions: {
			show: showOnlyForOrderSearch,
		},
		default: {},
		description: 'Filter criteria for searching orders',
		options: [
			{
				displayName: 'Filter Fields',
				name: 'filterFields',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				placeholder: 'Add Filter',
				description: 'Filter fields as key-value pairs',
				options: [
					{
						displayName: 'Filter Field',
						name: 'filterField',
						values: [
							{
								displayName: 'Field Name',
								name: 'fieldName',
								type: 'string',
								default: '',
								required: true,
								description: 'The field name to filter by',
							},
							{
								displayName: 'Operator',
								name: 'operator',
								type: 'options',
								options: [
									{
										name: 'Equals',
										value: '$eq',
									},
									{
										name: 'Exists',
										value: '$exists',
									},
									{
										name: 'Greater Than',
										value: '$gt',
									},
									{
										name: 'Greater Than or Equal',
										value: '$gte',
									},
									{
										name: 'In',
										value: '$in',
									},
									{
										name: 'Less Than',
										value: '$lt',
									},
									{
										name: 'Less Than or Equal',
										value: '$lte',
									},
									{
										name: 'Not Equals',
										value: '$ne',
									},
									{
										name: 'Not In',
										value: '$nin',
									},
								],
								default: '$eq',
								required: true,
								description: 'The filter operator',
							},
							{
								displayName: 'Value',
								name: 'value',
								type: 'string',
								default: '',
								description: 'The filter value (for $in and $nin, use comma-separated values)',
							},
						],
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'filter',
				value: '={{ $value.filterFields ? Object.fromEntries($value.filterFields.map(f => { const op = f.filterField?.operator || "$eq"; const val = f.filterField?.value; return [f.filterField?.fieldName, { [op]: val }]; })) : {} }}',
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
			show: showOnlyForOrderSearch,
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
								name: 'Created Date',
								value: 'createdDate',
							},
							{
								name: 'Fulfillment Status',
								value: 'fulfillmentStatus',
							},
							{
								name: 'Payment Status',
								value: 'paymentStatus',
							},
							{
								name: 'Purchased Date',
								value: 'purchasedDate',
							},
							{
								name: 'Status',
								value: 'status',
							},
							{
								name: 'Total Amount',
								value: 'priceSummary.total.amount',
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
						options: [
							{
								name: 'Ascending',
								value: 'ASC',
							},
							{
								name: 'Descending',
								value: 'DESC',
							},
						],
						default: 'DESC',
						required: true,
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'sort',
				value: '={{ $value.sortOption ? $value.sortOption.map(s => ({ fieldName: s.fieldName, order: s.order })) : [] }}',
			},
		},
	},
	{
		displayName: 'Cursor',
		name: 'cursor',
		type: 'string',
		displayOptions: {
			show: showOnlyForOrderSearch,
		},
		default: '',
		description: 'Cursor for pagination (returned from previous request)',
		routing: {
			send: {
				type: 'body',
				property: 'cursorPaging.cursor',
			},
		},
	},
];
