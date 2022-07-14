const { paddingTopBottom, headingSize, colorSchema } = require("../../common/schema");

const schema = {
  name: "t:sections.collection-list.name",
  tag: "section",
  class: "section section-collection-list",
  max_blocks: 15,
  settings: [
    {
      type: "text",
      id: "title",
      default: "Collections",
      label: "t:sections.collection-list.settings.title.label"
    },
    {
      ...headingSize,
    },
    {
      type: "select",
      id: "image_ratio",
      options: [
        {
          value: "adapt",
          label: "t:sections.collection-list.settings.image_ratio.options__1.label"
        },
        {
          value: "portrait",
          label: "t:sections.collection-list.settings.image_ratio.options__2.label"
        },
        {
          value: "square",
          label: "t:sections.collection-list.settings.image_ratio.options__3.label"
        }
      ],
      default: "square",
      label: "t:sections.collection-list.settings.image_ratio.label",
      info: "t:sections.collection-list.settings.image_ratio.info"
    },
    {
      type: "range",
      id: "columns_desktop",
      min: 1,
      max: 5,
      step: 1,
      default: 3,
      label: "t:sections.collection-list.settings.columns_desktop.label"
    },
    {
      ...colorSchema,
      info: "t:sections.all.colors.has_cards_info"
    },
    {
      type: "checkbox",
      id: "show_view_all",
      default: false,
      label: "t:sections.collection-list.settings.show_view_all.label"
    },
    {
      type: "header",
      content: "t:sections.collection-list.settings.header_mobile.content"
    },
    {
      type: "select",
      id: "columns_mobile",
      options: [
        {
          value: "1",
          label: "t:sections.collection-list.settings.columns_mobile.options__1.label"
        },
        {
          value: "2",
          label: "t:sections.collection-list.settings.columns_mobile.options__2.label"
        }
      ],
      default: "1",
      label: "t:sections.collection-list.settings.columns_mobile.label"
    },
    {
      type: "checkbox",
      id: "swipe_on_mobile",
      default: false,
      label: "t:sections.collection-list.settings.swipe_on_mobile.label"
    },
    ...paddingTopBottom(36, 36),
  ],
  blocks: [
    {
      type: "featured_collection",
      name: "t:sections.collection-list.blocks.featured_collection.name",
      settings: [
        {
          type: "collection",
          id: "collection",
          label: "t:sections.collection-list.blocks.featured_collection.settings.collection.label"
        }
      ]
    }
  ],
  presets: [
    {
      name: "t:sections.collection-list.presets.name",
      blocks: [
        {
          type: "featured_collection"
        },
        {
          type: "featured_collection"
        },
        {
          type: "featured_collection"
        }
      ]
    }
  ]
};

module.exports = { schema };
