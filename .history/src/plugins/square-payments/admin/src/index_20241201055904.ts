import { prefixPluginTranslations } from '@strapi/helper-plugin';

export default {
  register(app: any) {
    app.addMenuLink({
      to: '/plugins/square-payments',
      icon: '💳',
      intlLabel: {
        id: 'square-payments.plugin.name',
        defaultMessage: 'Square Payments',
      },
      Component: async () => {
        const component = await import('./pages/App');
        return component;
      },
      permissions: []
    });
  },

  bootstrap(app: any) {},

  async registerTrads({ locales }: { locales: string[] }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "square-payments-translation-[request]" */ 
          `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, 'square-payments'),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};