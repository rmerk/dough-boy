import { Media } from './media';
import { Category } from './category';
import { SharedAttributes } from './sharedAttributes';
import { Order } from './order';

export interface Product {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  productName: string;
  slug: string;
  description: string;
  productImage?: Media | null;
  price: number;
  stockStatus: "In stock" | "Out of stock";
  categories?: Category[] | null;
  attribute?: SharedAttributes[] | null;
  featured?: boolean;
  order?: Order | null;
};
