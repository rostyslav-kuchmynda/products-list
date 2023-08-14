export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  category: string;
  brand?: string;
  thumbnail?: string;
  images?: Array<string>;
};
