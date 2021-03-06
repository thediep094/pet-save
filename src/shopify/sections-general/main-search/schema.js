const { paddingTopBottom, bgDesktopMobile } = require("../../common/schema");

const schema = {
  name: "t:sections.main-search.name",
  tag: "section",
  class: "section",
  settings: [
    {
      type: "range",
      id: "columns_desktop",
      min: 1,
      max: 5,
      step: 1,
      default: 4,
      label: "t:sections.main-search.settings.columns_desktop.label"
    },
    {
      type: "header",
      content: "t:sections.main-search.settings.header__1.content"
    },
    {
      type: "select",
      id: "image_ratio",
      options: [
        {
          value: "adapt",
          label: "t:sections.main-search.settings.image_ratio.options__1.label"
        },
        {
          value: "portrait",
          label: "t:sections.main-search.settings.image_ratio.options__2.label"
        },
        {
          value: "square",
          label: "t:sections.main-search.settings.image_ratio.options__3.label"
        }
      ],
      default: "adapt",
      label: "t:sections.main-search.settings.image_ratio.label"
    },
    {
      type: "checkbox",
      id: "show_secondary_image",
      default: false,
      label: "t:sections.main-search.settings.show_secondary_image.label"
    },
    {
      type: "checkbox",
      id: "show_vendor",
      default: false,
      label: "t:sections.main-search.settings.show_vendor.label"
    },
    {
      type: "checkbox",
      id: "show_rating",
      default: false,
      label: "t:sections.main-search.settings.show_rating.label",
      info: "t:sections.main-search.settings.show_rating.info"
    },
    {
      type: "header",
      content: "t:sections.main-collection-product-grid.settings.header__1.content"
    },
    {
      type: "checkbox",
      id: "enable_filtering",
      default: true,
      label: "t:sections.main-collection-product-grid.settings.enable_filtering.label",
      info: "t:sections.main-collection-product-grid.settings.enable_filtering.info"
    },
    {
      type: "select",
      id: "filter_type",
      options: [
        {
          value: "horizontal",
          label: "t:sections.main-collection-product-grid.settings.filter_type.options__1.label"
        },
        {
          value: "vertical",
          label: "t:sections.main-collection-product-grid.settings.filter_type.options__2.label"
        },
        {
          value: "drawer",
          label: "t:sections.main-collection-product-grid.settings.filter_type.options__3.label"
        }
      ],
      default: "horizontal",
      label: "t:sections.main-collection-product-grid.settings.filter_type.label",
      info: "t:sections.main-collection-product-grid.settings.filter_type.info"
    },
    {
      type: "checkbox",
      id: "enable_sorting",
      default: true,
      label: "t:sections.main-collection-product-grid.settings.enable_sorting.label"
    },
    {
      type: "header",
      content: "t:sections.main-search.settings.header__2.content"
    },
    {
      type: "checkbox",
      id: "article_show_date",
      default: true,
      label: "t:sections.main-search.settings.article_show_date.label"
    },
    {
      type: "checkbox",
      id: "article_show_author",
      default: false,
      label: "t:sections.main-search.settings.article_show_author.label"
    },
    {
      type: "header",
      content: "t:sections.main-search.settings.header_mobile.content"
    },
    {
      type: "select",
      id: "columns_mobile",
      default: "2",
      label: "t:sections.main-search.settings.columns_mobile.label",
      options: [
        {
          value: "1",
          label: "t:sections.main-search.settings.columns_mobile.options__1.label"
        },
        {
          value: "2",
          label: "t:sections.main-search.settings.columns_mobile.options__2.label"
        }
      ]
    },
    ...paddingTopBottom(36, 36),
  ]
};

module.exports = { schema };
