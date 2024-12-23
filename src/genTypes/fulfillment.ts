import { Order } from './order';

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
