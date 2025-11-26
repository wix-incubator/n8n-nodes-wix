export const wixAutomationsTriggers: {
	[key: string]: { appId: string; triggerKey: string; displayName: string };
} = {
	'wixstores-catalog-product-created-product_created': {
		appId: '215238eb-22a5-4c36-9e7b-e7c08025e04e',
		triggerKey: 'wixstores-catalog-product-created-product_created',
		displayName: 'Product Created',
	},
	'wix_e_commerce-order_placed': {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wix_e_commerce-order_placed',
		displayName: 'Order Placed',
	},
	'wixstores-legacy_order_placed_v1': {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wixstores-legacy_order_placed_v1',
		displayName: 'Order Placed Legacy',
	},
};
