import { Core } from '@strapi/strapi';
import { Context } from 'koa';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  async createPayment(ctx: Context) {
    try {
      const { amount, currency, sourceId, customerId } = ctx.request.body;

      const payment = await strapi
        .plugin('square-payments')
        .service('service')
        .createPayment({ amount, currency, sourceId, customerId });

      ctx.body = payment;
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async getPayment(ctx: Context) {
    try {
      const { id } = ctx.params;

      const payment = await strapi
        .plugin('square-payments')
        .service('squareService')
        .getPayment(id);

      ctx.body = payment;
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async refundPayment(ctx: Context) {
    try {
      const { paymentId } = ctx.params;
      const { amount, currency } = ctx.request.body;

      const refund = await strapi
        .plugin('square-payments')
        .service('squareService')
        .refundPayment({ paymentId, amount, currency });

      ctx.body = refund;
    } catch (error) {
      ctx.throw(500, error);
    }
  }
});

export default controller;