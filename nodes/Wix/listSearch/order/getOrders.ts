import type {
	IDataObject,
	ILoadOptionsFunctions,
	INodeListSearchResult,
	INodeListSearchItems,
} from 'n8n-workflow';
import { wixApiRequest } from '../../utils/wix-api-request';

type OrderItem = {
	id: string;
	number: string;
	buyerInfo?: {
		email?: string;
	};
};

type OrderSearchResponse = {
	orders: OrderItem[];
	pagingMetadata?: {
		cursor?: string;
	};
};

export async function getOrders(
	this: ILoadOptionsFunctions,
	filter?: string,
	paginationToken?: string,
): Promise<INodeListSearchResult> {

	const body: IDataObject = {
		search: {
			cursorPaging: {
				limit: 100,
				...(paginationToken ? { cursor: paginationToken } : {}),
			},
			...(filter ? { filter: { $or: [ { number: { $startsWith: filter } }, { 'buyerInfo.email': { $startsWith: filter } } ] } } : {}),
		},
	};

	const responseData = (await wixApiRequest.call(
		this,
		'POST',
		'/ecom/v1/orders/search',
		body,
	)) as OrderSearchResponse;

	const results: INodeListSearchItems[] = (responseData.orders || []).map((order: OrderItem) => ({
		name: `Order #${order.number}${order.buyerInfo?.email ? ` - ${order.buyerInfo.email}` : ''}`,
		value: order.id,
	}));

	const nextPaginationToken = responseData.pagingMetadata?.cursor;
	return { results, paginationToken: nextPaginationToken };
}

