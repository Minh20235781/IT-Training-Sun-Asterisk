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
      <div className="product-card__image-wrapper">
        <img
          src={image}
          alt={name}
          className="product-card__image"
          loading="lazy"
        />
      </div>

      <span className="product-card__category">{category.toUpperCase()}</span>

      <h3 className="product-card__name">{name}</h3>

      <p className="product-card__description">
        {truncateText(description, 90)}
      </p>

      <div className="product-card__footer">
        <span className="product-card__price">
          <span className="product-card__price-symbol">$</span>
          {formatCurrency(price)}
        </span>

        <span className="product-card__rating">
          <span className="star star--filled">★</span>
          {rating}
        </span>
      </div>
    </div>
  );
}