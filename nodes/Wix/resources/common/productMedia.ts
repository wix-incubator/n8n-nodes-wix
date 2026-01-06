import type { INodeProperties } from 'n8n-workflow';

/**
 * Reusable field values for a single ProductMedia item.
 * Used in both main media and media items array.
 */
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

/**
 * Media items array field (for itemsInfo.items).
 * Supports multiple media items. The first item becomes the main product image automatically.
 */
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

/**
 * Helper to build media object for API request from form values.
 * Use in routing expressions.
 *
 * Note: The "main" property is read-only and automatically set from the first item in the items array.
 */
export const buildMediaRoutingExpression = `
(() => {
	const mediaItems = $value.mediaItems?.item;
	if (mediaItems && mediaItems.length > 0) {
		const items = mediaItems.map(m => {
			const item = {};
			if (m.id) item.id = m.id;
			else if (m.url) item.url = m.url;
			if (m.altText) item.altText = m.altText;
			if (m.displayName) item.displayName = m.displayName;
			return item;
		}).filter(item => item.id || item.url);
		
		if (items.length > 0) {
			return { itemsInfo: { items } };
		}
	}
	return undefined;
})()
`.trim();

