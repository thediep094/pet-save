const { paddingTopBottom, bgDesktopMobile } = require("../../common/schema");

const schema = {
  name: "t:sections.main-page.name",
  tag: "section",
  class: "section",
  settings: [
    ...paddingTopBottom(36, 36),
  ],
};

module.exports = { schema };
