import axiosClient from './axiosClient';
import { Product, ProductQueryParams } from '@/types/product';
import { PaginatedResponse } from '@/types/common';
import { PRODUCTS_ENDPOINT, DEFAULT_PAGE_SIZE } from '@/utils/constants';

const SORT_MAP: Record<string, { _sort: string; _order: 'asc' | 'desc' }> = {
  price_asc: { _sort: 'price', _order: 'asc' },
  price_desc: { _sort: 'price', _order: 'desc' },
  rating_desc: { _sort: 'rating', _order: 'desc' },
};

function buildParams(params: ProductQueryParams) {
  const {
    page = 1,
    limit = DEFAULT_PAGE_SIZE,
    category,
    brand,
    minPrice,
    maxPrice,
    rating,
    freeShipping,
    q,
    sortBy,
  } = params;

  const query: Record<string, unknown> = { _page: page, _limit: limit };

  if (category?.length) query.category = category;
  if (brand?.length) query.brand = brand;
  if (minPrice !== undefined) query.price_gte = minPrice;
  if (maxPrice !== undefined) query.price_lte = maxPrice;
  if (rating !== undefined) query.rating_gte = rating;
  if (freeShipping) query.freeShipping = true;
  if (q) query.q = q;
  if (sortBy && SORT_MAP[sortBy]) Object.assign(query, SORT_MAP[sortBy]);

  return query;
}

function countBy(items: Product[], key: keyof Product) {
  const map = new Map<string, number>();
  items.forEach((item) => {
    const value = String(item[key]);
    map.set(value, (map.get(value) ?? 0) + 1);
  });
  return Array.from(map.entries())
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => b.count - a.count);
}

export const productApi = {
  getProducts: async (
    params: ProductQueryParams = {}
  ): Promise<PaginatedResponse<Product>> => {
    const query = buildParams(params);
    const page = Number(query._page);
    const limit = Number(query._limit);

    const response = await axiosClient.get<Product[]>(PRODUCTS_ENDPOINT, {
      params: query,
    });

    const total = Number(response.headers['x-total-count'] ?? 0);

    return {
      data: response.data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  },

  getProductById: async (id: string): Promise<Product> => {
    const response = await axiosClient.get<Product>(
      `${PRODUCTS_ENDPOINT}/${id}`
    );
    return response.data;
  },

  getFacets: async () => {
    const response = await axiosClient.get<Product[]>(PRODUCTS_ENDPOINT, {
      params: { _limit: 100000 },
    });
    const items = response.data;
    const prices = items.map((p) => p.price);

    return {
      categories: countBy(items, 'category'),
      brands: countBy(items, 'brand'),
      ratings: countBy(items, 'rating'),
      priceRange: {
        min: Math.min(...prices),
        max: Math.max(...prices),
      },
    };
  },
};