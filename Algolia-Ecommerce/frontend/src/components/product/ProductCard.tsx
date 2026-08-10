import { Product } from '@/types/product';
import { formatCurrency, truncateText } from '@/utils/formatters';

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const { name, category, description, price, rating, image } = product;

  return (
    <div
      className="product-card"
      onClick={() => onClick?.(product)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* KHÓA CỨNG CHIỀU CAO Ở ĐÂY (height: 200px) để các ảnh luôn bằng nhau */}
      <div 
        className="product-card__image-wrapper"
        style={{ 
          height: '200px', 
          width: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginBottom: '20px'
        }}
      >
        <img
          src={image}
          alt={name}
          className="product-card__image"
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      <div className="product-category">{category.toUpperCase()}</div>

      <h3 className="product-title">{name}</h3>

      <p className="product-description">
        {truncateText(description, 90)}
      </p>

      <div className="product-price-row">
        <span className="product-price">
          {/* Tách ký hiệu $ ra để nhận CSS màu vàng */}
          <span className="product-price-symbol">$</span>
          {formatCurrency(price)}
        </span>

        {rating !== undefined && (
          <span className="rating-badge">
            <span className="star star--filled" style={{ marginRight: '4px' }}>★</span>
            {rating}
          </span>
        )}
      </div>
    </div>
  );
}