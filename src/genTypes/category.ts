import { Article } from './article';
import { Product } from './product';

export interface Category {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name?: string;
  slug?: string;
  articles?: Article[] | null;
  description?: string;
  product?: Product | null;
};
