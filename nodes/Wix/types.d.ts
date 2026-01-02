/* NOTE: Only importing types from the Wix SDK */
/* eslint-disable @n8n/community-nodes/no-restricted-imports */

import type {
	Order as WixOrder,
	SearchOrdersResponse as WixSearchOrdersResponse,
} from '@wix/auto_sdk_ecom_orders';

import type {
	V3Product as WixV3Product,
	V3SearchProductsResponse as WixSearchProductsResponse,
} from '@wix/auto_sdk_stores_products-v-3';

export type WithId<T> = T extends (infer U)[]
	? WithId<U>[]
	: T extends object
		? { [K in keyof T as K extends '_id' ? 'id' : K]: WithId<T[K]> }
		: T;

export type Order = WithId<WixOrder>;
export type SearchOrdersResponse = WithId<WixSearchOrdersResponse>;

export type Product = WithId<WixV3Product>;
export type SearchProductsResponse = WithId<WixSearchProductsResponse>;
