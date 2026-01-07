import type { INodeProperties } from 'n8n-workflow';

import { createChoicesSettingsField } from './choices';

export const optionsField: INodeProperties = {
	displayName: 'Options',
	name: 'options',
	type: 'fixedCollection',
	typeOptions: {
		multipleValues: true,
	},
	default: {},
	placeholder: 'Add Option',
	description: 'Product options (e.g., Size, Color) that create variant combinations',
	options: [
		{
			displayName: 'Option',
			name: 'option',
			values: [
				{
					displayName: 'Name',
					name: 'name',
					type: 'string',
					default: '',
					required: true,
					placeholder: 'e.g., Size',
					description: 'Option name (max 50 chars)',
				},
				{
					displayName: 'Settings',
					name: 'settings',
					type: 'fixedCollection',
					default: {},
					description: 'Option type and choices',
					options: [
						{
							displayName: 'Settings',
							name: 'config',
							values: [
								{
									displayName: 'Render Type',
									name: 'optionRenderType',
									type: 'options',
									options: [
										{ name: 'Swatch Choices', value: 'SWATCH_CHOICES' },
										{ name: 'Text Choices', value: 'TEXT_CHOICES' },
									],
									default: 'TEXT_CHOICES',
									description: 'How this option is displayed',
								},
								createChoicesSettingsField(),
							],
						},
					],
				},
				{
					displayName: 'Customization ID',
					name: 'id',
					type: 'string',
					default: '',
					description: 'ID of an existing customization to connect (leave empty to create new)',
				},
			],
		},
	],
};

export const modifiersField: INodeProperties = {
	displayName: 'Modifiers',
	name: 'modifiers',
	type: 'fixedCollection',
	typeOptions: {
		multipleValues: true,
	},
	default: {},
	placeholder: 'Add Modifier',
	description: 'Product modifiers (e.g., engraving, gift wrapping). Optional add-ons that don\'t create new variants.',
	options: [
		{
			displayName: 'Modifier',
			name: 'modifier',
			values: [
				{
					displayName: 'Name',
					name: 'name',
					type: 'string',
					default: '',
					required: true,
					placeholder: 'e.g., Engraving',
					description: 'Modifier title (max 50 chars)',
				},
				{
					displayName: 'Settings',
					name: 'settings',
					type: 'fixedCollection',
					default: {},
					description: 'Modifier type and configuration',
					options: [
						{
							displayName: 'Settings',
							name: 'config',
							values: [
								{
									displayName: 'Modifier Type',
									name: 'modifierRenderType',
									type: 'options',
									options: [
										{ name: 'Free Text', value: 'FREE_TEXT' },
										{ name: 'Swatch Choices', value: 'SWATCH_CHOICES' },
										{ name: 'Text Choices', value: 'TEXT_CHOICES' },
									],
									default: 'TEXT_CHOICES',
									description: 'Modifier input type',
								},
								createChoicesSettingsField({
									show: {
										modifierRenderType: ['TEXT_CHOICES', 'SWATCH_CHOICES'],
									},
								}),
								{
									displayName: 'Free Text Settings',
									name: 'freeTextSettings',
									type: 'fixedCollection',
									default: {},
									description: 'Settings for free text input',
									displayOptions: {
										show: {
											modifierRenderType: ['FREE_TEXT'],
										},
									},
									options: [
										{
											displayName: 'Settings',
											name: 'settings',
											values: [
												{
													displayName: 'Title',
													name: 'title',
													type: 'string',
													default: '',
													placeholder: 'e.g., Enter your custom text',
													description: 'Title shown for free text input (max 150 chars)',
												},
												{
													displayName: 'Min Characters',
													name: 'minCharCount',
													type: 'number',
													default: 0,
													description: 'Minimum characters required',
												},
												{
													displayName: 'Max Characters',
													name: 'maxCharCount',
													type: 'number',
													default: 500,
													description: 'Maximum characters allowed (max 500)',
												},
												{
													displayName: 'Price Adjustment',
													name: 'defaultAddedPrice',
													type: 'string',
													default: '',
													placeholder: 'e.g., 5.00',
													description: 'Amount added to product price',
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
					displayName: 'Additional Fields',
					name: 'additionalFields',
					type: 'collection',
					placeholder: 'Add Field',
					default: {},
					options: [
						{
							displayName: 'Customization ID',
							name: 'id',
							type: 'string',
							default: '',
							description: 'ID of an existing customization to connect (leave empty to create new)',
						},
						{
							displayName: 'Mandatory',
							name: 'mandatory',
							type: 'boolean',
							default: false,
							description: 'Whether customer input is required for this modifier',
						},
					],
				},
			],
		},
	],
};

export const optionsRoutingExpression = `$value.option && $value.option.length > 0 ? $value.option.map(o => { const cfg = o.settings?.config || {}; const opt = { name: o.name, optionRenderType: cfg.optionRenderType || "TEXT_CHOICES" }; if (o.id) opt.id = o.id; if (cfg.choicesSettings?.choice && cfg.choicesSettings.choice.length > 0) { opt.choicesSettings = { choices: cfg.choicesSettings.choice.map(c => { const choice = { name: c.name, choiceType: c.choiceType || "CHOICE_TEXT" }; if (c.choiceType === "ONE_COLOR" && c.colorCode) choice.colorCode = c.colorCode; return choice; }) }; } return opt; }) : undefined`;

export const modifiersRoutingExpression = `$value.modifier && $value.modifier.length > 0 ? $value.modifier.map(m => { const af = m.additionalFields || {}; const cfg = m.settings?.config || {}; const mod = { name: m.name, modifierRenderType: cfg.modifierRenderType || "TEXT_CHOICES", mandatory: af.mandatory || false }; if (af.id) mod.id = af.id; if (cfg.modifierRenderType === "FREE_TEXT") { const fs = cfg.freeTextSettings?.settings || {}; mod.freeTextSettings = { minCharCount: fs.minCharCount || 0, maxCharCount: fs.maxCharCount || 500 }; if (fs.title) mod.freeTextSettings.title = fs.title; if (fs.defaultAddedPrice) mod.freeTextSettings.defaultAddedPrice = fs.defaultAddedPrice; } else if (cfg.choicesSettings?.choice && cfg.choicesSettings.choice.length > 0) { mod.choicesSettings = { choices: cfg.choicesSettings.choice.map(c => { const choice = { name: c.name, choiceType: c.choiceType || "CHOICE_TEXT" }; if (c.choiceType === "ONE_COLOR" && c.colorCode) choice.colorCode = c.colorCode; return choice; }) }; } return mod; }) : undefined`;

