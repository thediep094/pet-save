const { paddingTopBottom, bgDesktopMobile } = require("../../common/schema");

const schema = {
  name: "t:sections.main-blog.name",
  tag: "section",
  class: "section",
  settings: [
    {
      type: "header",
      content: "t:sections.main-blog.settings.header.content"
    },
    {
      type: "select",
      id: "layout",
      options: [
        {
          value: "grid",
          label: "t:sections.main-blog.settings.layout.options__1.label"
        },
        {
          value: "collage",
          label: "t:sections.main-blog.settings.layout.options__2.label"
        }
      ],
      default: "collage",
      label: "t:sections.main-blog.settings.layout.label",
      info: "t:sections.main-blog.settings.layout.info"
    },
    {
      type: "checkbox",
      id: "show_image",
      default: true,
      label: "t:sections.main-blog.settings.show_image.label"
    },
    {
      type: "select",
      id: "image_height",
      options: [
        {
          value: "adapt",
          label: "t:sections.main-blog.settings.image_height.options__1.label"
        },
        {
          value: "small",
          label: "t:sections.main-blog.settings.image_height.options__2.label"
        },
        {
          value: "medium",
          label: "t:sections.main-blog.settings.image_height.options__3.label"
        },
        {
          value: "large",
          label: "t:sections.main-blog.settings.image_height.options__4.label"
        }
      ],
      default: "medium",
      label: "t:sections.main-blog.settings.image_height.label",
      info: "t:sections.main-blog.settings.image_height.info"
    },
    {
      type: "checkbox",
      id: "show_date",
      default: true,
      label: "t:sections.main-blog.settings.show_date.label"
    },
    {
      type: "checkbox",
      id: "show_author",
      default: false,
      label: "t:sections.main-blog.settings.show_author.label"
    },
    {
      type: "paragraph",
      content: "t:sections.main-blog.settings.paragraph.content"
    },
    ...paddingTopBottom(36, 36),
  ]
};

module.exports = { schema };
