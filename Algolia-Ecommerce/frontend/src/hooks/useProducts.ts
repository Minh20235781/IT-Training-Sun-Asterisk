import { useState, useEffect, useCallback } from 'react';
import { productApi } from '@/api/productApi';
import { Product, ProductQueryParams } from '@/types/product';
import { ProductFacets } from '@/types/common';

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
      const res = await productApi.getProducts(params);
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
    productApi.getFacets().then(setFacets).catch(() => {});
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const updateParams = useCallback((patch: Partial<ProductQueryParams>) => {
    setParams((prev) => ({ ...prev, ...patch, page: 1 })); // reset page khi filter đổi
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