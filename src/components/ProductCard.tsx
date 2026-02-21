import { useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  index: number;
};

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(0);

  const currentImage = product.colors[selectedColor]?.image;

  return (
    <div
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="relative aspect-square bg-secondary rounded-sm overflow-hidden mb-3 cursor-pointer block">
        <img
          src={currentImage}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 right-3 bg-badge-sale text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </Link>

      {/* Info */}
      <h3 className="font-heading text-base font-semibold text-foreground mb-1">
        {product.name}
      </h3>

      {/* Price */}
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-sm font-medium text-foreground">
          ₹{product.price.toLocaleString()}
        </span>
        {product.originalPrice && (
          <span className="text-sm text-muted-foreground line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* Color Swatches */}
      {product.colors.length > 1 && (
        <div className="flex items-center gap-2 mb-2">
          {product.colors.map((color, i) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(i)}
              title={color.name}
              className={`w-5 h-5 rounded-full border-2 transition-all ${
                i === selectedColor
                  ? "border-foreground scale-110"
                  : "border-border hover:border-muted-foreground"
              }`}
              style={{ backgroundColor: color.hex }}
              aria-label={color.name}
            />
          ))}
        </div>
      )}

      {/* Rating */}
      <div className="flex items-center gap-1.5">
        <StarRating rating={product.rating} />
        <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
      </div>
    </div>
  );
};

export default ProductCard;
