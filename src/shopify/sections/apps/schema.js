const { paddingTopBottom, bgDesktopMobile } = require("../../common/schema");

const schema = {
  name: "t:sections.apps.name",
  tag: "section",
  class: "spaced-section",
  settings: [
    {
      type: "checkbox",
      id: "include_margins",
      default: true,
      label: "t:sections.apps.settings.include_margins.label"
    },
		...bgDesktopMobile,
    ...paddingTopBottom(36, 36),
  ],
  blocks: [
    {
      type: "@app"
    }
  ],
  presets: [
    {
      name: "t:sections.apps.presets.name"
    }
  ]
};

module.exports = { schema };
