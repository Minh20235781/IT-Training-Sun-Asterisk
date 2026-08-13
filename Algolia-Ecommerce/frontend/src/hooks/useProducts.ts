import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { productApi } from '@/api/productApi';
import { Product, ProductQueryParams } from '@/types/product';
import { ProductFacets } from '@/types/common';

const RETRY_ATTEMPTS = 3;
const RETRY_DELAY_MS = 800;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function isRetriableError(error: unknown) {
  if (!axios.isAxiosError(error)) {
    return true;
  }

  if (!error.response) {
    return true;
  }

  const status = error.response.status;
  return status >= 500 || status === 408 || status === 429;
}

async function withRetry<T>(request: () => Promise<T>) {
  let lastError: unknown;

  for (let attempt = 1; attempt <= RETRY_ATTEMPTS; attempt += 1) {
    try {
      return await request();
    } catch (error) {
      lastError = error;

      if (attempt === RETRY_ATTEMPTS || !isRetriableError(error)) {
        throw error;
      }

      await sleep(RETRY_DELAY_MS * attempt);
    }
  }

  throw lastError;
}

export function useProducts(initialParams: ProductQueryParams = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [facets, setFacets] = useState<ProductFacets | null>(null);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<ProductQueryParams>(initialParams);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await withRetry(() => productApi.getProducts(params));
      setProducts(res.data);
      setTotal(res.total);
      setTotalPages(res.totalPages);
    } catch {
      setError('Không tải được danh sách sản phẩm.');
    } finally {
      setLoading(false);
    }
  }, [params]);

  // Facets chỉ cần load 1 lần lúc mount (không phụ thuộc params)
  useEffect(() => {
    withRetry(() => productApi.getFacets())
      .then(setFacets)
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const updateParams = useCallback((patch: Partial<ProductQueryParams>) => {
    setParams((prev) => {
      const newParams = { ...prev, ...patch, page: 1 };
      
      if (JSON.stringify(prev) === JSON.stringify(newParams)) {
        return prev;
      }
      
      return newParams;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setParams((prev) => ({
      page: 1,
      limit: prev.limit,
      sortBy: prev.sortBy,
    }));
  }, []);

  return {
    products,
    facets,
    total,
    totalPages,
    loading,
    error,
    params,
    setParams,
    updateParams,
    clearFilters,
  };
}