import { useState, useEffect } from 'react';
import { SearchBar } from '@/components/common/SearchBar';
import { FilterMenu } from '@/components/product/FilterMenu';
import { ProductCard } from '@/components/product/ProductCard';
import { Pagination } from '@/components/common/Pagination';
import { useDebounce } from '@/hooks/useDebounce';
import { useProducts } from '@/hooks/useProducts';
import { SEARCH_DEBOUNCE_MS, DEFAULT_PAGE_SIZE } from '@/utils/constants';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearch = useDebounce(searchInput, SEARCH_DEBOUNCE_MS);

  const {
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
  } = useProducts({ page: 1, limit: DEFAULT_PAGE_SIZE });

  useEffect(() => {
    updateParams({ q: debouncedSearch || undefined });
  }, [debouncedSearch]); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePageChange = (page: number) => {
    setParams((prev) => ({ ...prev, page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <div className="hero-banner">
        <SearchBar value={searchInput} onChange={setSearchInput} />
      </div>

      <div className="home-page__body">
        {facets && (
          <FilterMenu
            facets={facets}
            params={params}
            onChange={updateParams}
            onClearAll={clearFilters}
          />
        )}

        <main className="product-section">
          {loading && <p>Đang tải...</p>}
          {error && <p className="error">{error}</p>}

          {!loading && products.length === 0 && (
            <p className="empty-state">Không tìm thấy sản phẩm phù hợp.</p>
          )}

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            currentPage={params.page ?? 1}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </main>
      </div>
    </div>
  );
}