import { Media } from './media';
import { Article } from './article';

export interface Author {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name?: string;
  avatar?: Media | null;
  email?: string;
  articles?: Article[] | null;
};
