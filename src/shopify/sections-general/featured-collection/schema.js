const { paddingTopBottom, headingSize, colorSchema } = require("../../common/schema");

const schema = {
  name: "t:sections.featured-collection.name",
  tag: "section",
  class: "section",
  settings: [
    {
      type: "text",
      id: "title",
      default: "Featured collection",
      label: "t:sections.featured-collection.settings.title.label"
    },
    {
      ...headingSize,
    },
    {
      type: "richtext",
      id: "description",
      label: "t:sections.featured-collection.settings.description.label"
    },
    {
      type: "checkbox",
      id: "show_description",
      label: "t:sections.featured-collection.settings.show_description.label",
      default: false
    },
    {
      type: "select",
      id: "description_style",
      label: "t:sections.featured-collection.settings.description_style.label",
      options: [
        {
          value: "body",
          label: "t:sections.featured-collection.settings.description_style.options__1.label"
        },
        {
          value: "subtitle",
          label: "t:sections.featured-collection.settings.description_style.options__2.label"
        },
        {
          value: "uppercase",
          label: "t:sections.featured-collection.settings.description_style.options__3.label"
        }
      ],
      default: "body"
    },
    {
      type: "collection",
      id: "collection",
      label: "t:sections.featured-collection.settings.collection.label"
    },
    {
      type: "range",
      id: "products_to_show",
      min: 2,
      max: 12,
      step: 1,
      default: 4,
      label: "t:sections.featured-collection.settings.products_to_show.label"
    },
    {
      type: "range",
      id: "columns_desktop",
      min: 1,
      max: 5,
      step: 1,
      default: 4,
      label: "t:sections.featured-collection.settings.columns_desktop.label"
    },
    {
      type: "checkbox",
      id: "full_width",
      label: "t:sections.featured-collection.settings.full_width.label",
      default: false
    },
    {
      type: "checkbox",
      id: "show_view_all",
      default: true,
      label: "t:sections.featured-collection.settings.show_view_all.label"
    },
    {
      type: "select",
      id: "view_all_style",
      label: "t:sections.featured-collection.settings.view_all_style.label",
      options: [
        {
          value: "link",
          label: "t:sections.featured-collection.settings.view_all_style.options__1.label"
        },
        {
          value: "outline",
          label: "t:sections.featured-collection.settings.view_all_style.options__2.label"
        },
        {
          value: "solid",
          label: "t:sections.featured-collection.settings.view_all_style.options__3.label"
        }
      ],
      default: "solid"
    },
    {
      type: "checkbox",
      id: "enable_desktop_slider",
      label: "t:sections.featured-collection.settings.enable_desktop_slider.label",
      default: false
    },
    {
      ...colorSchema,
      info: "t:sections.all.colors.has_cards_info"
    },
    {
      type: "header",
      content: "t:sections.featured-collection.settings.header.content"
    },
    {
      type: "select",
      id: "image_ratio",
      options: [
        {
          value: "adapt",
          label: "t:sections.featured-collection.settings.image_ratio.options__1.label"
        },
        {
          value: "portrait",
          label: "t:sections.featured-collection.settings.image_ratio.options__2.label"
        },
        {
          value: "square",
          label: "t:sections.featured-collection.settings.image_ratio.options__3.label"
        }
      ],
      default: "adapt",
      label: "t:sections.featured-collection.settings.image_ratio.label"
    },
    {
      type: "checkbox",
      id: "show_secondary_image",
      default: false,
      label: "t:sections.featured-collection.settings.show_secondary_image.label"
    },
    {
      type: "checkbox",
      id: "show_vendor",
      default: false,
      label: "t:sections.featured-collection.settings.show_vendor.label"
    },
    {
      type: "checkbox",
      id: "show_rating",
      default: false,
      label: "t:sections.featured-collection.settings.show_rating.label",
      info: "t:sections.featured-collection.settings.show_rating.info"
    },
    {
      type: "checkbox",
      id: "enable_quick_add",
      default: false,
      label: "t:sections.featured-collection.settings.enable_quick_buy.label"
    },
    {
      type: "header",
      content: "t:sections.featured-collection.settings.header_mobile.content"
    },
    {
      type: "select",
      id: "columns_mobile",
      default: "2",
      label: "t:sections.featured-collection.settings.columns_mobile.label",
      options: [
        {
          value: "1",
          label: "t:sections.featured-collection.settings.columns_mobile.options__1.label"
        },
        {
          value: "2",
          label: "t:sections.featured-collection.settings.columns_mobile.options__2.label"
        }
      ]
    },
    {
      type: "checkbox",
      id: "swipe_on_mobile",
      default: false,
      label: "t:sections.featured-collection.settings.swipe_on_mobile.label"
    },
    ...paddingTopBottom(36, 36),
  ],
  presets: [
    {
      name: "t:sections.featured-collection.presets.name"
    }
  ]
};

module.exports = { schema };
