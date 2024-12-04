import { Strapi } from '@strapi/strapi';
import { Client } from 'square';

export interface PluginConfig {
  enabled: boolean;
  squareAccessToken: string;
  squareEnvironment: 'sandbox' | 'production';
  webhookSecret: string;
}

export interface SquareService {
  client: Client;
  initialize(): void;
  createPayment(params: CreatePaymentParams): Promise<any>;
  getPayment(paymentId: string): Promise<any>;
  refundPayment(params: RefundPaymentParams): Promise<any>;
}

export interface CreatePaymentParams {
  amount: number;
  currency: string;
  sourceId: string;
  customerId?: string;
}

export interface RefundPaymentParams {
  paymentId: string;
  amount: number;
  currency: string;
}

export interface StrapiContext {
  strapi: Strapi;
}