import { OrderCustomerInformation } from './orderCustomerInformation';
import { Product } from './product';
import { Fulfillment } from './fulfillment';
import { User } from './user';

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
