const { paddingTopBottom, headingSize, colorSchema } = require("../../common/schema");

const schema = {
  name: "t:sections.product-recommendations.name",
  tag: "section",
  class: "section",
  settings: [
    {
      type: "paragraph",
      content: "t:sections.product-recommendations.settings.paragraph__1.content"
    },
    {
      type: "text",
      id: "heading",
      default: "You may also like",
      label: "t:sections.product-recommendations.settings.heading.label"
    },
    {
      ...headingSize,
    },
    {
      type: "range",
      id: "products_to_show",
      min: 2,
      max: 10,
      step: 1,
      default: 4,
      label: "t:sections.product-recommendations.settings.products_to_show.label"
    },
    {
      type: "range",
      id: "columns_desktop",
      min: 1,
      max: 5,
      step: 1,
      default: 4,
      label: "t:sections.product-recommendations.settings.columns_desktop.label"
    },
    {
      ...colorSchema,
      info: "t:sections.all.colors.has_cards_info"
    },
    {
      type: "header",
      content: "t:sections.product-recommendations.settings.header__2.content"
    },
    {
      type: "select",
      id: "image_ratio",
      options: [
        {
          value: "adapt",
          label: "t:sections.product-recommendations.settings.image_ratio.options__1.label"
        },
        {
          value: "portrait",
          label: "t:sections.product-recommendations.settings.image_ratio.options__2.label"
        },
        {
          value: "square",
          label: "t:sections.product-recommendations.settings.image_ratio.options__3.label"
        }
      ],
      default: "adapt",
      label: "t:sections.product-recommendations.settings.image_ratio.label"
    },
    {
      type: "checkbox",
      id: "show_secondary_image",
      default: false,
      label: "t:sections.product-recommendations.settings.show_secondary_image.label"
    },
    {
      type: "checkbox",
      id: "show_vendor",
      default: false,
      label: "t:sections.product-recommendations.settings.show_vendor.label"
    },
    {
      type: "checkbox",
      id: "show_rating",
      default: false,
      label: "t:sections.product-recommendations.settings.show_rating.label",
      info: "t:sections.product-recommendations.settings.show_rating.info"
    },
    {
      type: "header",
      content: "t:sections.product-recommendations.settings.header_mobile.content"
    },
    {
      type: "select",
      id: "columns_mobile",
      default: "2",
      label: "t:sections.product-recommendations.settings.columns_mobile.label",
      options: [
        {
          value: "1",
          label: "t:sections.product-recommendations.settings.columns_mobile.options__1.label"
        },
        {
          value: "2",
          label: "t:sections.product-recommendations.settings.columns_mobile.options__2.label"
        }
      ]
    },
    ...paddingTopBottom(36, 36),
  ]
};

module.exports = { schema };
