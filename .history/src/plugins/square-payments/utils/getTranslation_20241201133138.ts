import { PLUGIN_ID } from '../../my-strapi-plugin/admin/src/pluginId';

const getTranslation = (id: string) => `${PLUGIN_ID}.${id}`;

export { getTranslation };
