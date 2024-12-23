import { Media } from './media';
import { Author } from './author';
import { Category } from './category';

export interface Article {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  description?: string;
  slug?: string;
  cover?: Media | null;
  author?: Author | null;
  category?: Category | null;
  blocks?: any;
};
