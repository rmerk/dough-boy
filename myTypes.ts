
export interface OrderAddress {
  id?: number;
  address: string;
  addressTwo?: string;
  city: string;
  state: "MN";
  zipcode: number;
};

export interface OrderBillingAddress {
  id?: number;
};

export interface OrderCustomerInformation {
  id?: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: OrderAddress | null;
  billingAddress: OrderAddress | null;
};

export interface SharedAttributes {
  id?: number;
  Size?: "Small" | "Medium" | "Large";
};

export interface SharedMedia {
  id?: number;
  file?: Media | null;
};

export interface SharedQuote {
  id?: number;
  title?: string;
  body?: string;
};

export interface SharedRichText {
  id?: number;
  body?: string;
};

export interface SharedSeo {
  id?: number;
  metaTitle: string;
  metaDescription: string;
  shareImage?: Media | null;
};

export interface SharedSlider {
  id?: number;
  files?: Media[] | null;
};

export interface About {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  blocks?: any;
};

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
  galleries?: Gallery[] | null;
};

export interface Fulfillment {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  shippingMethod?: "Customer Pickup" | "USPS Standard" | "USPS Express" | "UPS Ground";
  trackingNumber?: string;
  shippingStatus?: "Pending" | "Shipped" | "Delivered" | "Returned" | "Cancelled";
  estimatedDeliveryDate?: Date | string;
  order?: Order | null;
};

export interface Gallery {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  images?: Media[] | null;
  category?: Category | null;
};

export interface Global {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  siteName: string;
  favicon?: Media | null;
  siteDescription: string;
  defaultSeo?: SharedSeo | null;
};

export interface LeadForm {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name?: string;
  email?: string;
  message?: string;
};

export interface Order {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  orderId?: string;
  orderDate: Date | string;
  orderStatus: "Processing" | "Pending" | "Shipped" | "Delivered" | "Cancelled" | "Complete";
  customerInformation: OrderCustomerInformation | null;
  orderTotal: number;
  products?: Product[] | null;
  fulfillments?: Fulfillment[] | null;
  notes?: string;
  adminNotes?: string;
  discountCode?: string;
  discountAmount?: number;
  users_permissions_user?: User | null;
  quantities: Record<string, any>;
};

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

export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: { thumbnail: MediaFormat; small: MediaFormat; medium: MediaFormat; large: MediaFormat; };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}

export interface User {
  id?: number;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  role: Role | null | number;
};

export interface Role {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description: string;
  type: string;
};

export interface FindOne<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
};

export interface FindMany<T> {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
};
