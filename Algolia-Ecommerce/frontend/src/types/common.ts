export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface FacetCount {
  value: string;
  count: number;
}

export interface ProductFacets {
  categories: FacetCount[];
  brands: FacetCount[];
  ratings: FacetCount[];
  priceRange: { min: number; max: number };
}