import { useFetchClient } from '@strapi/admin/strapi-admin';

const { get, post } = useFetchClient();

export const fetchPayments = async () => {
  const response = await get('/square-payments/payments', {
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