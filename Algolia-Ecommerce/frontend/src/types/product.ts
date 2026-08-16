export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  rating: number; // 1 - 5
  image: string;
  description: string;
  freeShipping: boolean;
}

export interface ProductQueryParams {
  page?: number;
  limit?: number;
  category?: string[];   // có thể chọn nhiều category
  brand?: string[];      // có thể chọn nhiều brand
  minPrice?: number;
  maxPrice?: number;
  rating?: number;       // lọc từ N sao trở lên
  freeShipping?: boolean;
  q?: string;            // full-text search (thanh search "Product, brand, color...")
  sortBy?: 'featured' | 'price_asc' | 'price_desc' | 'rating_desc';
  sort?: string;
}