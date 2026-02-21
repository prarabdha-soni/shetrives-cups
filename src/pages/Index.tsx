import { useState } from "react";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const sortOptions = [
  "Featured",
  "Best selling",
  "Price, low to high",
  "Price, high to low",
  "Newest",
];

const Index = () => {
  const [sortBy, setSortBy] = useState("Featured");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "Price, low to high") return a.price - b.price;
    if (sortBy === "Price, high to low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />

      {/* Hero Section */}
      <section className="container py-10 md:py-14">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
          SheTrives Menstrual Cups
        </h1>
        <h2 className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mb-2">
          Upgrade your period with SheTrives reusable menstrual cups and discs.
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Easy to use and comfortable. Live free of the tampon aisle—forever. Wear up to 12 hours to swim, run, bike, hike, or travel the world.
        </p>
      </section>

      {/* Sort Bar + Products */}
      <section className="container pb-20">
        {/* Sort Row */}
        <div className="flex items-center justify-end gap-4 mb-6 border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm font-medium text-foreground bg-transparent border-none cursor-pointer focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <span className="text-sm text-muted-foreground">{products.length} products</span>
        </div>

        {/* Grid with Sidebar */}
        <div className="flex gap-10">
          {/* Sidebar */}
          <div className="hidden lg:block w-56 shrink-0">
            <FilterSidebar />
          </div>

          {/* Product Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
            {sortedProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
