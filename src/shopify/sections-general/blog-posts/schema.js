const { paddingTopBottom, colorSchema, headingSize } = require("../../common/schema");

const schema = {
  name: "t:sections.blog-posts.name",
  tag: "section",
  class: "section",
  settings: [
    {
      type: "text",
      id: "heading",
      default: "Blog posts",
      label: "t:sections.blog-posts.settings.heading.label"
    },
    {
      ...headingSize,
    },
    {
      type: "blog",
      id: "blog",
      label: "t:sections.blog-posts.settings.blog.label"
    },
    {
      type: "range",
      id: "post_limit",
      min: 2,
      max: 4,
      step: 1,
      default: 3,
      label: "t:sections.blog-posts.settings.post_limit.label"
    },
    {
      type: "range",
      id: "columns_desktop",
      min: 1,
      max: 4,
      step: 1,
      default: 3,
      label: "t:sections.blog-posts.settings.columns_desktop.label"
    },
    {
      ...colorSchema,
      info: "t:sections.all.colors.has_cards_info"
    },
    {
      type: "checkbox",
      id: "show_image",
      default: true,
      label: "t:sections.blog-posts.settings.show_image.label",
      info: "t:sections.blog-posts.settings.show_image.info"
    },
    {
      type: "checkbox",
      id: "show_date",
      default: true,
      label: "t:sections.blog-posts.settings.show_date.label"
    },
    {
      type: "checkbox",
      id: "show_author",
      default: false,
      label: "t:sections.blog-posts.settings.show_author.label"
    },
    {
      type: "checkbox",
      id: "show_view_all",
      default: true,
      label: "t:sections.blog-posts.settings.show_view_all.label"
    },
    ...paddingTopBottom(36, 36),
  ],
  presets: [
    {
      name: "t:sections.blog-posts.presets.name",
      settings: {
        blog: "News"
      }
    }
  ]
};

module.exports = { schema };
