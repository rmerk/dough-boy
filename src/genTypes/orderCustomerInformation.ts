import { OrderAddress } from './orderAddress';

export interface OrderCustomerInformation {
  id?: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: OrderAddress | null;
  billingAddress: OrderAddress | null;
};
