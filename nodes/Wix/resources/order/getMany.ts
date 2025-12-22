import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrderGetMany = {
	operation: ['getMany'],
	resource: ['order'],
};

export const orderGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForOrderGetMany,
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
						continue: '={{ $response.body?.metadata?.hasNext }}',
						request: {
							body: {
								search: {
									cursorPaging: {
										cursor: '={{ $response.body?.metadata?.cursors?.next }}',
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
				...showOnlyForOrderGetMany,
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
			show: showOnlyForOrderGetMany,
		},
		default: {},
		placeholder: 'Add Filter',
		description: 'Filter criteria for searching orders',
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
		routing: {
			send: {
				type: 'body',
				property: 'search.filter',
				value: '={{ Array.isArray($value.filterField) && $value.filterField.length > 0 ? Object.fromEntries($value.filterField.map(f => { const op = f.operator || "$eq"; const val = f.value; if (!f.fieldName || !val) return null; return [f.fieldName, { [op]: val }]; }).filter(Boolean)) : {} }}',
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
			show: showOnlyForOrderGetMany,
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
				property: 'search.sort',
				value: '={{ Array.isArray($value.sortOption) && $value.sortOption.length > 0 ? $value.sortOption.map(s => ({ fieldName: s.fieldName, order: s.order })) : [] }}',			
			},
		},
	},
];
