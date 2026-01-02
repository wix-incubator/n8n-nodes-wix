import type {
	IDataObject,
	ILoadOptionsFunctions,
	INodeListSearchResult,
	INodeListSearchItems,
} from 'n8n-workflow';
import { wixApiRequest } from '../../utils/wix-api-request';
import type { Product, SearchProductsResponse } from '../../types';

export async function getProducts(
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
			...(filter ? { filter: { $or: [ { name: { $startsWith: filter } }, { slug: { $startsWith: filter } } ] } } : {}),
		},
	};

	const responseData = (await wixApiRequest.call(
		this,
		'POST',
		'/stores/v3/products/search',
		body,
	)) as SearchProductsResponse;

	const results: INodeListSearchItems[] = (responseData.products || []).map((product: Product) => ({
		name: `${product.name}${product.slug ? ` (${product.slug})` : ''}`,
		value: product.id || '',
	}));

	const nextPaginationToken = responseData.pagingMetadata?.cursors?.next;
	return { results, paginationToken: nextPaginationToken };
}

