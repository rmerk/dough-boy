import { Core } from '@strapi/strapi';

export const fetchPayments = async () => {
  const response = await Core.requestContext('/square-payments/payments', {
    method: 'GET',
  });
  return response;
};

export const createPayment = async (data: {
  amount: number;
  currency: string;
  sourceId: string;
  customerId?: string;
}) => {
  const response = await request('/square-payments/payments', {
    method: 'POST',
    body: data,
  });
  return response;
};