const { colorSchema } = require("../../common/schema");

const schema = {
  name: "t:sections.announcement-bar.name",
  max_blocks: 12,
  blocks: [
    {
      type: "announcement",
      name: "t:sections.announcement-bar.blocks.announcement.name",
      settings: [
        {
          type: "text",
          id: "text",
          default: "Welcome to our store",
          label: "t:sections.announcement-bar.blocks.announcement.settings.text.label"
        },
        {
          ...colorSchema,
        },
        {
          type: "url",
          id: "link",
          label: "t:sections.announcement-bar.blocks.announcement.settings.link.label"
        }
      ]
    }
  ],
  default: {
    blocks: [
      {
        type: "announcement"
      }
    ]
  }
};

module.exports = { schema };
