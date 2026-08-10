import { useState, useMemo } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { ProductQueryParams } from '@/types/product';
import { ProductFacets } from '@/types/common';
import { formatCurrency } from '@/utils/formatters';

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
          ↻ Clear filters
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

      <RatingFilter
        options={facets.ratings}
        selected={params.rating}
        onChange={(rating) => onChange({ rating })}
      />

      <div className="filter-menu__section">
        <div className="filter-menu__row">
          <span>Free Shipping</span>
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

  return (
    <div className="filter-menu__section">
      <h4>Category</h4>
      {options.map(({ value, count }) => (
        <label key={value} className="filter-menu__checkbox-row">
          <input
            type="checkbox"
            checked={selected.includes(value)}
            onChange={() => toggle(value)}
          />
          <span>{value}</span>
          <span className="filter-menu__count">{count}</span>
        </label>
      ))}
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
    if (!debouncedSearch) return options;
    return options.filter((o) =>
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
      <input
        type="text"
        placeholder="Search for brands..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="filter-menu__search-input"
      />
      {filteredOptions.map(({ value, count }) => (
        <label key={value} className="filter-menu__checkbox-row">
          <input
            type="checkbox"
            checked={selected.includes(value)}
            onChange={() => toggle(value)}
          />
          <span>{value}</span>
          <span className="filter-menu__count">{count}</span>
        </label>
      ))}
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
  // State nội bộ để kéo mượt, chỉ bắn ra ngoài (gọi API) khi thả tay (onMouseUp/onChange cuối)
  const [localMin, setLocalMin] = useState(currentMin);
  const [localMax, setLocalMax] = useState(currentMax);

  const commit = () => onChange(localMin, localMax);

  return (
    <div className="filter-menu__section">
      <h4>Price</h4>
      <div className="filter-menu__price-labels">
        <span>${localMin}</span>
        <span>${localMax}</span>
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
  // Sort giảm dần theo sao (4 -> 1), giống ảnh 4
  const sorted = [...options].sort(
    (a, b) => Number(b.value) - Number(a.value)
  );

  return (
    <div className="filter-menu__section">
      <h4>Ratings</h4>
      {sorted.map(({ value, count }) => {
        const stars = Number(value);
        const isActive = selected === stars;
        return (
          <button
            key={value}
            className={`filter-menu__rating-row ${isActive ? 'active' : ''}`}
            onClick={() => onChange(isActive ? undefined : stars)}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={i < stars ? 'star star--filled' : 'star'}
              >
                ★
              </span>
            ))}
            <span className="filter-menu__count">{count}</span>
          </button>
        );
      })}
    </div>
  );
}