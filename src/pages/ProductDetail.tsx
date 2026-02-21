import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, Clock, RefreshCw, ShieldCheck, MapPin } from "lucide-react";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Header from "@/components/Header";
import StarRating from "@/components/StarRating";
import { products } from "@/data/products";

const featureIcons = [Clock, RefreshCw, ShieldCheck, MapPin];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <AnnouncementBanner />
        <Header />
        <div className="container py-20 text-center">
          <h1 className="font-heading text-2xl text-foreground">Product not found</h1>
          <Link to="/" className="text-accent underline mt-4 inline-block">Back to shop</Link>
        </div>
      </div>
    );
  }

  const currentImage = product.colors[selectedColor]?.image;

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />

      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/" className="hover:text-foreground transition-colors">Menstrual Cups</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image */}
          <div className="relative bg-secondary rounded-sm overflow-hidden aspect-square flex items-center justify-center">
            <img
              src={currentImage}
              alt={product.name}
              className="w-full h-full object-contain p-8 md:p-12"
            />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col gap-5">
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <StarRating rating={product.rating} />
              <span className="text-sm text-muted-foreground">
                {product.reviewCount.toLocaleString()} Reviews
              </span>
              <span className="text-sm text-accent underline cursor-pointer ml-1">
                See reviews summary
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-xl font-medium text-foreground">
                Rs. {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-base text-muted-foreground line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Bulk discount */}
            <p className="text-xs font-semibold text-accent tracking-wide uppercase">
              BUY 3+ SAVE 10% | 5+ SAVE 15% | 7+ SAVE 20%
            </p>

            {/* Color */}
            <div>
              <p className="text-sm text-foreground mb-2">
                Color: <span className="font-medium">{product.colors[selectedColor].name}</span>
              </p>
              <div className="flex items-center gap-3">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(i)}
                    title={color.name}
                    className={`w-9 h-9 rounded-full border-2 transition-all ${
                      i === selectedColor
                        ? "border-foreground ring-2 ring-foreground/20"
                        : "border-border hover:border-muted-foreground"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            {product.sizes && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-foreground font-medium">Size</p>
                  <span className="text-sm text-foreground underline cursor-pointer">Size chart</span>
                </div>
                <div className="flex items-center gap-3">
                  {product.sizes.map((size, i) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(i)}
                      className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all ${
                        i === selectedSize
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background text-foreground border-border hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <p className="text-sm text-foreground font-medium mb-2">Quantity</p>
              <div className="inline-flex items-center border border-border rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-secondary transition-colors rounded-l-full"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-secondary transition-colors rounded-r-full"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="w-full py-3.5 border-2 border-foreground text-foreground text-sm font-semibold tracking-widest uppercase rounded-sm hover:bg-foreground hover:text-background transition-colors">
              ADD TO CART
            </button>

            {/* Buy with Shop */}
            <button className="w-full py-3.5 bg-[hsl(var(--primary))] text-primary-foreground text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity">
              Buy Now
            </button>

            <p className="text-center text-xs text-muted-foreground underline cursor-pointer">
              More payment options
            </p>

            {/* Features */}
            {product.features && (
              <div className="flex flex-col gap-4 mt-2 pt-4 border-t border-border">
                {product.features.map((feature, i) => {
                  const Icon = featureIcons[i] || Clock;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <Icon size={22} className="text-muted-foreground shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
