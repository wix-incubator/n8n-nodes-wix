import type { INodeProperties } from 'n8n-workflow';

/**
 * Common choice field values used in both product options and modifiers.
 */
export const choiceFieldValues: INodeProperties[] = [
	{
		displayName: 'Choice Type',
		name: 'choiceType',
		type: 'options',
		options: [
			{
				name: 'One Color',
				value: 'ONE_COLOR',
			},
			{
				name: 'Text',
				value: 'CHOICE_TEXT',
			},
		],
		default: 'CHOICE_TEXT',
		description: 'Type of choice',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g., Small',
		description: 'Choice name (max 50 chars)',
	},
	{
		displayName: 'Color Code',
		name: 'colorCode',
		type: 'color',
		default: '',
		description: 'Hex color code (only for One Color type)',
		displayOptions: {
			show: {
				choiceType: ['ONE_COLOR'],
			},
		},
	},
];

/**
 * Creates a choicesSettings field configuration.
 * @param displayOptions - Optional display options for showing/hiding the field
 */
export function createChoicesSettingsField(displayOptions?: INodeProperties['displayOptions']): INodeProperties {
	const field: INodeProperties = {
		displayName: 'Choices',
		name: 'choicesSettings',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		placeholder: 'Add Choice',
		description: 'Available choices (max 100)',
		options: [
			{
				displayName: 'Choice',
				name: 'choice',
				values: choiceFieldValues,
			},
		],
	};

	if (displayOptions) {
		field.displayOptions = displayOptions;
	}

	return field;
}

