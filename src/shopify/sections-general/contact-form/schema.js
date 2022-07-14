const { paddingTopBottom, colorSchema, headingSize } = require("../../common/schema");

const schema = {
  name: "t:sections.contact-form.name",
  tag: "section",
  class: "section",
  settings: [
    {
      type: "text",
      id: "heading",
      default: "Contact form",
      label: "Heading"
    },
    {
      ...headingSize,
    },
    {
      ...colorSchema,
    },
    ...paddingTopBottom(36, 36),
  ],
  presets: [
    {
      name: "t:sections.contact-form.presets.name"
    }
  ]
};

module.exports = { schema };
