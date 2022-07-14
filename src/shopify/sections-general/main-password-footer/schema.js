const { colorSchema } = require("../../common/schema");

const schema = {
  name: "t:sections.main-password-footer.name",
  settings: [
    {
      ...colorSchema,
    }
  ]
};

module.exports = { schema };
