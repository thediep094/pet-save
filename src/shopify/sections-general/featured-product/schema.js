const { paddingTopBottom, colorSchema, headingSize } = require("../../common/schema");

const schema = {
  name: "t:sections.featured-product.name",
  tag: "section",
  class: "section section-featured-product",
  blocks: [
    {
      type: "@app"
    },
    {
      type: "text",
      name: "t:sections.featured-product.blocks.text.name",
      settings: [
        {
          type: "text",
          id: "text",
          default: "Text block",
          label: "t:sections.featured-product.blocks.text.settings.text.label"
        },
        {
          type: "select",
          id: "text_style",
          options: [
            {
              value: "body",
              label: "t:sections.featured-product.blocks.text.settings.text_style.options__1.label"
            },
            {
              value: "subtitle",
              label: "t:sections.featured-product.blocks.text.settings.text_style.options__2.label"
            },
            {
              value: "uppercase",
              label: "t:sections.featured-product.blocks.text.settings.text_style.options__3.label"
            }
          ],
          default: "body",
          label: "t:sections.featured-product.blocks.text.settings.text_style.label"
        }
      ]
    },
    {
      type: "title",
      name: "t:sections.featured-product.blocks.title.name",
      limit: 1,
      settings: [
        {
          ...headingSize,
        },
      ]
    },
    {
      type: "price",
      name: "t:sections.featured-product.blocks.price.name",
      limit: 1
    },
    {
      type: "quantity_selector",
      name: "t:sections.featured-product.blocks.quantity_selector.name",
      limit: 1
    },
    {
      type: "variant_picker",
      name: "t:sections.featured-product.blocks.variant_picker.name",
      limit: 1,
      settings: [
        {
          type: "select",
          id: "picker_type",
          options: [
            {
              value: "dropdown",
              label: "t:sections.featured-product.blocks.variant_picker.settings.picker_type.options__1.label"
            },
            {
              value: "button",
              label: "t:sections.featured-product.blocks.variant_picker.settings.picker_type.options__2.label"
            }
          ],
          default: "button",
          label: "t:sections.featured-product.blocks.variant_picker.settings.picker_type.label"
        }
      ]
    },
    {
      type: "buy_buttons",
      name: "t:sections.featured-product.blocks.buy_buttons.name",
      limit: 1,
      settings: [
        {
          type: "checkbox",
          id: "show_dynamic_checkout",
          default: true,
          label: "t:sections.featured-product.blocks.buy_buttons.settings.show_dynamic_checkout.label",
          info: "t:sections.featured-product.blocks.buy_buttons.settings.show_dynamic_checkout.info"
        }
      ]
    },
    {
      type: "share",
      name: "t:sections.featured-product.blocks.share.name",
      limit: 1,
      settings: [
        {
          type: "text",
          id: "share_label",
          label: "t:sections.featured-product.blocks.share.settings.text.label",
          default: "Share"
        },
        {
          type: "paragraph",
          content: "t:sections.featured-product.blocks.share.settings.featured_image_info.content"
        },
        {
          type: "paragraph",
          content: "t:sections.featured-product.blocks.share.settings.title_info.content"
        }
      ]
    },
    {
      type: "custom_liquid",
      name: "t:sections.featured-product.blocks.custom_liquid.name",
      settings: [
        {
          type: "liquid",
          id: "custom_liquid",
          label: "t:sections.featured-product.blocks.custom_liquid.settings.custom_liquid.label"
        }
      ]
    },
    {
      type: "rating",
      name: "t:sections.featured-product.blocks.rating.name",
      limit: 1,
      settings: [
        {
          type: "paragraph",
          content: "t:sections.featured-product.blocks.rating.settings.paragraph.content"
        }
      ]
    }
  ],
  settings: [
    {
      type: "product",
      id: "product",
      label: "t:sections.featured-product.settings.product.label"
    },
    {
      ...colorSchema,
    },
    {
      type: "checkbox",
      id: "secondary_background",
      default: false,
      label: "t:sections.featured-product.settings.secondary_background.label"
    },
    {
      type: "header",
      content: "t:sections.featured-product.settings.header.content",
      info: "t:sections.featured-product.settings.header.info"
    },
    {
      type: "checkbox",
      id: "hide_variants",
      default: false,
      label: "t:sections.main-product.settings.hide_variants.label"
    },
    {
      type: "checkbox",
      id: "enable_video_looping",
      default: false,
      label: "t:sections.featured-product.settings.enable_video_looping.label"
    },
    ...paddingTopBottom(36, 36),
  ],
  presets: [
    {
      name: "t:sections.featured-product.presets.name",
      blocks: [
        {
          type: "text",
          settings: {
            text: "{{ section.settings.product.vendor }}",
            text_style: "uppercase"
          }
        },
        {
          type: "title"
        },
        {
          type: "text",
          settings: {
            text: "{{ section.settings.product.metafields.descriptors.subtitle.value }}",
            text_style: "subtitle"
          }
        },
        {
          type: "price"
        },
        {
          type: "variant_picker"
        },
        {
          type: "quantity_selector"
        },
        {
          type: "buy_buttons"
        },
        {
          type: "share"
        }
      ]
    }
  ]
};

module.exports = { schema };
