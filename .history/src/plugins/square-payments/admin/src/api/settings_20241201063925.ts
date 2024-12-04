import { request } from '@strapi/helper-plugin';

interface SettingsData {
  squareAccessToken: string;
  squareEnvironment: 'sandbox' | 'production';
  webhookSecret: string;
}

export const updateSettings = async (data: SettingsData) => {
  const response = await request('/square-payments/settings', {
    method: 'PUT',
    body: data,
  });
  return response;
};