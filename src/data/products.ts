import softCupBlush from "@/assets/soft-cup-blush.png";
import softCupKitBlush from "@/assets/soft-cup-kit-blush.png";
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
  {
    id: "2",
    name: "SheTrives Soft Cup Kit",
    price: 3500,
    originalPrice: 4200,
    rating: 4.6,
    reviewCount: 1540,
    badge: "Save 17%",
    description: "Everything you need to start your cup journey. Includes cup, carry pouch, and storage container.",
    sizes: ["Regular", "Small"],
    features: [
      "Complete starter kit with pouch & container",
      "Wear up to 12 hours day and night",
      "Reusable for up to 10 years",
      "Made in India",
    ],
    colors: [
      { name: "Desert Blush", hex: "#d4a089", image: softCupKitBlush },
    ],
  },
];
