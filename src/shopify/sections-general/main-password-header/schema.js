const { colorSchema } = require("../../common/schema");

const schema = {
  name: "t:sections.main-password-header.name",
  settings: [
    {
      type: "image_picker",
      id: "logo",
      label: "t:sections.main-password-header.settings.logo.label"
    },
    {
      type: "range",
      id: "logo_max_width",
      min: 50,
      max: 250,
      step: 10,
      default: 100,
      unit: "t:sections.main-password-header.settings.logo_max_width.unit",
      label: "t:sections.main-password-header.settings.logo_max_width.label"
    },
    {
      ...colorSchema,
    },
  ]
};

module.exports = { schema };
