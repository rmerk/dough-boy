import type { Schema, Struct } from '@strapi/strapi';

export interface OrderAddress extends Struct.ComponentSchema {
  collectionName: 'components_order_addresses';
  info: {
    displayName: 'Address';
    icon: 'pinMap';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    addressTwo: Schema.Attribute.String;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    state: Schema.Attribute.Enumeration<['MN']> & Schema.Attribute.Required;
    zipcode: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface OrderBillingAddress extends Struct.ComponentSchema {
  collectionName: 'components_order_billing_addresses';
  info: {
    displayName: 'Billing Address';
  };
  attributes: {};
}

export interface OrderCustomerInformation extends Struct.ComponentSchema {
  collectionName: 'components_order_customer_informations';
  info: {
    description: '';
    displayName: 'Customer Information';
    icon: 'bulletList';
  };
  attributes: {
    billingAddress: Schema.Attribute.Component<'order.address', false> &
      Schema.Attribute.Required;
    customerAddress: Schema.Attribute.Component<'order.address', false> &
      Schema.Attribute.Required;
    customerEmail: Schema.Attribute.Email & Schema.Attribute.Required;
    customerName: Schema.Attribute.String & Schema.Attribute.Required;
    customerPhone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedAttributes extends Struct.ComponentSchema {
  collectionName: 'components_shared_attributes';
  info: {
    displayName: 'Attributes';
    icon: 'apps';
  };
  attributes: {
    Size: Schema.Attribute.Enumeration<['Small', 'Medium', 'Large']> &
      Schema.Attribute.DefaultTo<'Medium'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'order.address': OrderAddress;
      'order.billing-address': OrderBillingAddress;
      'order.customer-information': OrderCustomerInformation;
      'shared.attributes': SharedAttributes;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
