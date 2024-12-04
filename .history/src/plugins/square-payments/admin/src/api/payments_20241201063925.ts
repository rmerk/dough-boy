import { request } from '@strapi/helper-plugin';

export const fetchPayments = async () => {
  const response = await request('/square-payments/payments', {
    method: 'GET',
  });
  return response;
};

export const createPayment = async (data: {
  amount: string;
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