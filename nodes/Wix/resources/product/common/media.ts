import type { INodeProperties } from 'n8n-workflow';

export const productMediaFieldValues: INodeProperties[] = [
	{
		displayName: 'Alt Text',
		name: 'altText',
		type: 'string',
		default: '',
		description: 'Image alt text for accessibility (max 1000 chars)',
	},
	{
		displayName: 'Display Name',
		name: 'displayName',
		type: 'string',
		default: '',
		description: 'Media display name (max 80 chars). Only applies when using External URL.',
	},
	{
		displayName: 'Media ID',
		name: 'id',
		type: 'string',
		default: '',
		placeholder: 'e.g., 370e1a_c65292a0c0584c26aa32d9d921302af9~mv2.jpeg',
		description: 'ID of an existing file in Wix Media Manager (use this OR External URL)',
	},
	{
		displayName: 'External URL',
		name: 'url',
		type: 'string',
		default: '',
		placeholder: 'e.g., https://example.com/image.jpg',
		description: 'External media URL (use this OR Media ID)',
	},
];

export const mediaItemsField: INodeProperties = {
	displayName: 'Media Items',
	name: 'mediaItems',
	type: 'fixedCollection',
	typeOptions: {
		multipleValues: true,
	},
	default: {},
	placeholder: 'Add Media Item',
	description: 'Product media (images/videos). The first item automatically becomes the main product image.',
	options: [
		{
			displayName: 'Media Item',
			name: 'item',
			values: productMediaFieldValues,
		},
	],
};

