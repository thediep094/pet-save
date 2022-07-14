const { paddingTopBottom, bgDesktopMobile, colorSchema } = require("../../common/schema");

const schema = {
  name: "t:sections.custom-liquid.name",
  tag: "section",
  class: "section",
  settings: [
    {
      type: "liquid",
      id: "custom_liquid",
      label: "t:sections.custom-liquid.settings.custom_liquid.label",
      info: "t:sections.custom-liquid.settings.custom_liquid.info"
    },
    {
      ...colorSchema,
    },
		...bgDesktopMobile,
    ...paddingTopBottom(36, 36),
  ],
  presets: [
    {
      name: "t:sections.custom-liquid.presets.name"
    }
  ]
};

module.exports = { schema };
