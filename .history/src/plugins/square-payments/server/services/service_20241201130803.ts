import type { Core } from '@strapi/strapi';
import { Client, Environment } from 'square';
import {
  SquareService,
  CreatePaymentParams,
  RefundPaymentParams
} from '../types';


const service = ({ strapi }: { strapi: Core.Strapi }): SquareService => ({
  client: {} as Client,

  initialize(): void {
    const config = strapi.config.get('plugin.square-payments');

    this.client = new Client({
      accessToken: config.squareAccessToken,
      environment: config.squareEnvironment === 'production'
        ? Environment.Production
        : Environment.Sandbox
    });
  },

  async createPayment({ amount, currency, sourceId, customerId }: CreatePaymentParams) {
    try {
      const response = await this.client.paymentsApi.createPayment({
        sourceId,
        amountMoney: {
          amount,
          currency
        },
        customerId,
        idempotencyKey: Date.now().toString()
      });

      return response.result;
    } catch (error) {
      strapi.log.error('Square payment error:', error);
      throw error;
    }
  },

  async getPayment(paymentId: string) {
    try {
      const response = await this.client.paymentsApi.getPayment(paymentId);
      return response.result;
    } catch (error) {
      strapi.log.error('Error fetching payment:', error);
      throw error;
    }
  },

  async refundPayment({ paymentId, amount, currency }: RefundPaymentParams) {
    try {
      const response = await this.client.refundsApi.refundPayment({
        paymentId,
        amountMoney: {
          amount,
          currency
        },
        idempotencyKey: Date.now().toString()
      });

      return response.result;
    } catch (error) {
      strapi.log.error('Refund error:', error);
      throw error;
    }
  }
});

export default service;
