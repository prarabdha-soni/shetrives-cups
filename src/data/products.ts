import softCupBlush from "@/assets/soft-cup-blush.png";
import cupGrey from "@/assets/cup-grey.png";
import cupLavender from "@/assets/cup-lavender.png";

export type ProductColor = {
  name: string;
  hex: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  colors: ProductColor[];
  badge?: string;
  description?: string;
  features?: string[];
  sizes?: string[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "SheTrives Soft Cup",
    price: 2500,
    rating: 4.5,
    reviewCount: 2096,
    description: "Same design, softer silicone. Period care simplified. Made in India.",
    sizes: ["Regular", "Small"],
    features: [
      "12 hours of protection day and night",
      "Reusable for up to 10 years",
      "BPA & Latex Free",
      "Made in India",
    ],
    colors: [
      { name: "Desert Blush", hex: "#d4a089", image: softCupBlush },
      { name: "Charcoal", hex: "#6b6b6b", image: cupGrey },
      { name: "Lavender", hex: "#b89cc7", image: cupLavender },
    ],
  },
];
