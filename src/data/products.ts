import cupSage from "@/assets/cup-sage.png";
import cupCoral from "@/assets/cup-coral.png";
import cupLavender from "@/assets/cup-lavender.png";
import cupBlue from "@/assets/cup-blue.png";
import cupGrey from "@/assets/cup-grey.png";
import discBlue from "@/assets/disc-blue.png";

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
};

export const products: Product[] = [
  {
    id: "1",
    name: "SheTrives Soft Cup",
    price: 2500,
    rating: 4.5,
    reviewCount: 2096,
    colors: [
      { name: "Desert Blush", hex: "#d4a089", image: cupCoral },
      { name: "Charcoal", hex: "#6b6b6b", image: cupGrey },
      { name: "Lavender", hex: "#b89cc7", image: cupLavender },
    ],
  },
  {
    id: "2",
    name: "SheTrives Original Cup",
    price: 2800,
    rating: 4.3,
    reviewCount: 1854,
    colors: [
      { name: "Sage", hex: "#8fb89a", image: cupSage },
      { name: "Coastal Blue", hex: "#6db8d4", image: cupBlue },
      { name: "Lavender", hex: "#b89cc7", image: cupLavender },
    ],
  },
  {
    id: "3",
    name: "SheTrives Disc",
    price: 2800,
    rating: 4.4,
    reviewCount: 1230,
    colors: [
      { name: "Coastal Blue", hex: "#6db8d4", image: discBlue },
    ],
  },
  {
    id: "4",
    name: "SheTrives Firm Cup",
    price: 2500,
    rating: 4.6,
    reviewCount: 987,
    colors: [
      { name: "Sage", hex: "#8fb89a", image: cupSage },
      { name: "Charcoal", hex: "#6b6b6b", image: cupGrey },
    ],
  },
  {
    id: "5",
    name: "SheTrives Cup Duo",
    price: 4200,
    originalPrice: 5000,
    rating: 4.5,
    reviewCount: 654,
    badge: "Save 16%",
    colors: [
      { name: "Coral", hex: "#d4a089", image: cupCoral },
      { name: "Sage", hex: "#8fb89a", image: cupSage },
    ],
  },
  {
    id: "6",
    name: "SheTrives Teen Cup",
    price: 2200,
    rating: 4.7,
    reviewCount: 432,
    colors: [
      { name: "Lavender", hex: "#b89cc7", image: cupLavender },
      { name: "Coastal Blue", hex: "#6db8d4", image: cupBlue },
    ],
  },
  {
    id: "7",
    name: "Welcome to Cup Life Kit",
    price: 5500,
    originalPrice: 6800,
    rating: 4.4,
    reviewCount: 328,
    badge: "20% off",
    colors: [
      { name: "Sage", hex: "#8fb89a", image: cupSage },
    ],
  },
  {
    id: "8",
    name: "SheTrives Soft Cup Small",
    price: 2500,
    rating: 4.5,
    reviewCount: 1102,
    colors: [
      { name: "Coastal Blue", hex: "#6db8d4", image: cupBlue },
      { name: "Charcoal", hex: "#6b6b6b", image: cupGrey },
      { name: "Lavender", hex: "#b89cc7", image: cupLavender },
    ],
  },
];
