import { useState, useMemo } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { ProductQueryParams } from '@/types/product';
import { ProductFacets } from '@/types/common';

// Danh sách cố định theo ảnh mẫu
const MAIN_CATEGORIES = [
  'Appliances', 'Audio', 'Cameras & Camcorders', 'Car Electronics & GPS',
  'Cell Phones', 'Computers & Tablets', 'Health, Fitness & Beauty',
  'Office & School Supplies', 'TV & Home Theater', 'Video Games'
];

const MAIN_BRANDS = [
  'Apple', 'Insignia™', 'Metra', 'HP', 'Samsung',
  'Sony', 'Incipio', 'Canon', 'Speck', 'OtterBox'
];

interface FilterMenuProps {
  facets: ProductFacets;
  params: ProductQueryParams;
  onChange: (params: Partial<ProductQueryParams>) => void;
  onClearAll: () => void;
}

export function FilterMenu({
  facets,
  params,
  onChange,
  onClearAll,
}: FilterMenuProps) {
  return (
    <aside className="filter-menu">
      <div className="filter-menu__header">
        <h3>Filters</h3>
        <button onClick={onClearAll} className="filter-menu__clear">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
            <path d="M21 2v6h-6"></path>
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          </svg>
          Clear filters
        </button>
      </div>

      <CategoryFilter
        options={facets.categories}
        selected={params.category ?? []}
        onChange={(category) => onChange({ category })}
      />

      <BrandFilter
        options={facets.brands}
        selected={params.brand ?? []}
        onChange={(brand) => onChange({ brand })}
      />

      <PriceFilter
        min={facets.priceRange.min}
        max={facets.priceRange.max}
        currentMin={params.minPrice ?? facets.priceRange.min}
        currentMax={params.maxPrice ?? facets.priceRange.max}
        onChange={(minPrice, maxPrice) => onChange({ minPrice, maxPrice })}
      />

      <div className="filter-menu__section">
        <h4>Free Shipping</h4>
        <div className="filter-menu__free-shipping">
          <span className="free-shipping-text">Display only items with free shipping</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {params.freeShipping && <span style={{ color: '#f5a623', fontSize: '14px', fontWeight: 600 }}>Yes</span>}
            <label className="toggle">
              <input
                type="checkbox"
                checked={params.freeShipping ?? false}
                onChange={(e) => onChange({ freeShipping: e.target.checked })}
              />
              <span className="toggle__slider" />
            </label>
          </div>
        </div>
      </div>

      <RatingFilter
        options={facets.ratings}
        selected={params.rating}
        onChange={(rating) => onChange({ rating })}
      />
    </aside>
  );
}

/* ---------- Category ---------- */

function CategoryFilter({
  options,
  selected,
  onChange,
}: {
  options: ProductFacets['categories'];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  const toggle = (value: string) => {
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    onChange(next);
  };

  // Chỉ lấy các category có trong MAIN_CATEGORIES
  const filteredCategories = options.filter(o => MAIN_CATEGORIES.includes(o.value));

  return (
    <div className="filter-menu__section">
      <h4>Category</h4>
      <div className="filter-menu__section-content">
        {filteredCategories.map(({ value, count }) => (
          <div 
            key={value} 
            className="filter-section-list-item filter-menu__category-item"
            onClick={() => toggle(value)}
            style={{ fontWeight: selected.includes(value) ? 600 : 400 }}
          >
            <span className="item-text">{value}</span>
            <span className="category-count">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Brand (có search) ---------- */

function BrandFilter({
  options,
  selected,
  onChange,
}: {
  options: ProductFacets['brands'];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  const filteredOptions = useMemo(() => {
    // Chỉ lấy các brand có trong MAIN_BRANDS, sau đó lọc tiếp bằng thanh search
    const baseBrands = options.filter(o => MAIN_BRANDS.includes(o.value));
    if (!debouncedSearch) return baseBrands;
    return baseBrands.filter((o) =>
      o.value.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [options, debouncedSearch]);

  const toggle = (value: string) => {
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    onChange(next);
  };

  return (
    <div className="filter-menu__section">
      <h4>Brands</h4>
      <div className="filter-menu__search-wrapper">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          placeholder="Search for brands..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="filter-menu__search-input"
        />
      </div>
      <div className="filter-menu__section-content">
        {filteredOptions.map(({ value, count }) => (
          <label key={value} className="filter-section-list-item filter-menu__checkbox-row">
            <input
              type="checkbox"
              hidden
              checked={selected.includes(value)}
              onChange={() => toggle(value)}
            />
            <span className="custom-checkbox"></span>
            <span className="item-text" style={{ fontWeight: selected.includes(value) ? 600 : 400 }}>{value}</span>
            <span className="category-count">{count}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

/* ---------- Price range slider ---------- */

function PriceFilter({
  min,
  max,
  currentMin,
  currentMax,
  onChange,
}: {
  min: number;
  max: number;
  currentMin: number;
  currentMax: number;
  onChange: (min: number, max: number) => void;
}) {
  const [localMin, setLocalMin] = useState(currentMin);
  const [localMax, setLocalMax] = useState(currentMax);

  const commit = () => onChange(localMin, localMax);

  return (
    <div className="filter-menu__section">
      <h4>Price</h4>
      <div className="filter-menu__price-labels">
        <span><span style={{color: '#f5a623', marginRight: '2px'}}>$</span>{localMin}</span>
        <span><span style={{color: '#f5a623', marginRight: '2px'}}>$</span>{localMax}</span>
      </div>
      <div className="filter-menu__slider-wrapper">
        <input
          type="range"
          min={min}
          max={max}
          value={localMin}
          onChange={(e) =>
            setLocalMin(Math.min(Number(e.target.value), localMax - 1))
          }
          onMouseUp={commit}
          onTouchEnd={commit}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={localMax}
          onChange={(e) =>
            setLocalMax(Math.max(Number(e.target.value), localMin + 1))
          }
          onMouseUp={commit}
          onTouchEnd={commit}
        />
      </div>
    </div>
  );
}

/* ---------- Rating stars ---------- */

function RatingFilter({
  options,
  selected,
  onChange,
}: {
  options: ProductFacets['ratings'];
  selected?: number;
  onChange: (rating: number | undefined) => void;
}) {
  const sorted = [...options].sort(
    (a, b) => Number(b.value) - Number(a.value)
  );

  return (
    <div className="filter-menu__section">
      <h4>Ratings</h4>
      <div className="filter-menu__section-content">
        {sorted.map(({ value, count }) => {
          const stars = Number(value);
          const isActive = selected === stars;
          return (
            <button
              key={value}
              className={`filter-menu__rating-row ${isActive ? 'active' : ''}`}
              onClick={() => onChange(isActive ? undefined : stars)}
            >
              <div style={{ display: 'flex', gap: '4px' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < stars ? 'star star--filled' : 'star'}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="category-count">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}