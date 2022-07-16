const { paddingTopBottom, bgDesktopMobile } = require("../../common/schema");

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
      type: "select",
      id: "color_scheme",
      options: [
        {
          value: "accent-1",
          label: "t:sections.all.colors.accent_1.label"
        },
        {
          value: "accent-2",
          label: "t:sections.all.colors.accent_2.label"
        },
        {
          value: "background-1",
          label: "t:sections.all.colors.background_1.label"
        },
        {
          value: "background-2",
          label: "t:sections.all.colors.background_2.label"
        },
        {
          value: "inverse",
          label: "t:sections.all.colors.inverse.label"
        }
      ],
      default: "background-1",
      label: "t:sections.all.colors.label"
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
