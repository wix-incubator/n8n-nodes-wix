import type { INodeProperties } from 'n8n-workflow';

/**
 * Common filter operators used across Wix APIs
 */
export const filterOperatorOptions: INodeProperties['options'] = [
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
	{
		name: 'Starts With',
		value: '$startsWith',
	},
];

/**
 * Common filter field values (fieldName, operator, value) for use in fixedCollection
 */
export const filterFieldValues: INodeProperties[] = [
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
		options: filterOperatorOptions,
		default: '$eq',
		required: true,
		description: 'The filter operator',
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'string',
		default: '',
		description: 'The filter value (for In and Not In, use comma-separated values)',
	},
];

/**
 * Common sort direction options
 */
export const sortDirectionOptions: INodeProperties['options'] = [
	{
		name: 'Ascending',
		value: 'ASC',
	},
	{
		name: 'Descending',
		value: 'DESC',
	},
];

/**
 * Routing expression for filter - handles parsing of array operators and $exists
 */
export const filterRoutingValue = '={{ Array.isArray($value.filterField) && $value.filterField.length > 0 ? Object.fromEntries($value.filterField.map(f => { const op = f.operator || "$eq"; let val = f.value; if (!f.fieldName || val === undefined || val === "") return null; if (op === "$in" || op === "$nin") { val = val.split(",").map(v => v.trim()); } else if (op === "$exists") { val = val === "true" || val === true; } return [f.fieldName, { [op]: val }]; }).filter(Boolean)) : undefined }}';

/**
 * Routing expression for sort
 */
export const sortRoutingValue = '={{ Array.isArray($value.sortOption) && $value.sortOption.length > 0 ? $value.sortOption.map(s => ({ fieldName: s.fieldName, order: s.order })) : undefined }}';

