const schema = {
  name: "t:sections.main-list-collections.name",
  class: "section",
  settings: [
    {
      type: "text",
      id: "title",
      label: "t:sections.main-list-collections.settings.title.label",
      default: "Collections"
    },
    {
      type: "select",
      id: "sort",
      options: [
        {
          value: "alphabetical",
          label: "t:sections.main-list-collections.settings.sort.options__1.label"
        },
        {
          value: "alphabetical_reversed",
          label: "t:sections.main-list-collections.settings.sort.options__2.label"
        },
        {
          value: "date_reversed",
          label: "t:sections.main-list-collections.settings.sort.options__3.label"
        },
        {
          value: "date",
          label: "t:sections.main-list-collections.settings.sort.options__4.label"
        },
        {
          value: "products_high",
          label: "t:sections.main-list-collections.settings.sort.options__5.label"
        },
        {
          value: "products_low",
          label: "t:sections.main-list-collections.settings.sort.options__6.label"
        }
      ],
      default: "alphabetical",
      label: "t:sections.main-list-collections.settings.sort.label"
    },
    {
      type: "select",
      id: "image_ratio",
      options: [
        {
          value: "adapt",
          label: "t:sections.main-list-collections.settings.image_ratio.options__1.label"
        },
        {
          value: "portrait",
          label: "t:sections.main-list-collections.settings.image_ratio.options__2.label"
        },
        {
          value: "square",
          label: "t:sections.main-list-collections.settings.image_ratio.options__3.label"
        }
      ],
      default: "adapt",
      label: "t:sections.main-list-collections.settings.image_ratio.label",
      info: "t:sections.main-list-collections.settings.image_ratio.info"
    },
    {
      type: "range",
      id: "columns_desktop",
      min: 1,
      max: 5,
      step: 1,
      default: 3,
      label: "t:sections.main-list-collections.settings.columns_desktop.label"
    },
    {
      type: "header",
      "content": "t:sections.main-list-collections.settings.header_mobile.content"
    },
    {
      type: "select",
      id: "columns_mobile",
      options: [
        {
          value: "1",
          label: "t:sections.main-list-collections.settings.columns_mobile.options__1.label"
        },
        {
          value: "2",
          label: "t:sections.main-list-collections.settings.columns_mobile.options__2.label"
        }
      ],
      default: "2",
      label: "t:sections.main-list-collections.settings.columns_mobile.label"
    }
  ]
};

module.exports = { schema };
