// Response dạng phân trang chuẩn hoá, không phụ thuộc trực tiếp vào json-server
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
  ratings: FacetCount[]; // count theo từng mức sao 1-4 (giống ảnh 4)
  priceRange: { min: number; max: number };
}