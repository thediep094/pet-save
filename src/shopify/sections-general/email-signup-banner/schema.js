const { colorSchema, headingSize } = require("../../common/schema");

const schema = {
  name: "t:sections.email-signup-banner.name",
  tag: "section",
  class: "section",
  settings: [
    {
      type: "paragraph",
      content: "t:sections.email-signup-banner.settings.paragraph.content"
    },
    {
      type: "image_picker",
      id: "image",
      label: "t:sections.email-signup-banner.settings.image.label"
    },
    {
      type: "range",
      id: "image_overlay_opacity",
      min: 0,
      max: 100,
      step: 10,
      unit: "%",
      label: "t:sections.email-signup-banner.settings.image_overlay_opacity.label",
      default: 0
    },
    {
      type: "checkbox",
      id: "show_background_image",
      label: "t:sections.email-signup-banner.settings.show_background_image.label",
      default: true
    },
    {
      type: "select",
      id: "image_height",
      options: [
        {
          value: "adapt-image",
          label: "t:sections.email-signup-banner.settings.image_height.options__1.label"
        },
        {
          value: "small",
          label: "t:sections.email-signup-banner.settings.image_height.options__2.label"
        },
        {
          value: "medium",
          label: "t:sections.email-signup-banner.settings.image_height.options__3.label"
        },
        {
          value: "large",
          label: "t:sections.email-signup-banner.settings.image_height.options__4.label"
        }
      ],
      default: "medium",
      label: "t:sections.email-signup-banner.settings.image_height.label",
      info: "t:sections.email-signup-banner.settings.image_height.info"
    },
    {
      type: "select",
      id: "desktop_content_position",
      options: [
        {
          value: "top-left",
          label: "t:sections.email-signup-banner.settings.desktop_content_position.options__1.label"
        },
        {
          value: "top-center",
          label: "t:sections.email-signup-banner.settings.desktop_content_position.options__2.label"
        },
        {
          value: "top-right",
          label: "t:sections.email-signup-banner.settings.desktop_content_position.options__3.label"
        },
        {
          value: "middle-left",
          label: "t:sections.email-signup-banner.settings.desktop_content_position.options__4.label"
        },
        {
          value: "middle-center",
          label: "t:sections.email-signup-banner.settings.desktop_content_position.options__5.label"
        },
        {
          value: "middle-right",
          label: "t:sections.email-signup-banner.settings.desktop_content_position.options__6.label"
        },
        {
          value: "bottom-left",
          label: "t:sections.email-signup-banner.settings.desktop_content_position.options__7.label"
        },
        {
          value: "bottom-center",
          label: "t:sections.email-signup-banner.settings.desktop_content_position.options__8.label"
        },
        {
          value: "bottom-right",
          label: "t:sections.email-signup-banner.settings.desktop_content_position.options__9.label"
        }
      ],
      default: "middle-center",
      label: "t:sections.email-signup-banner.settings.desktop_content_position.label"
    },
    {
      type: "checkbox",
      id: "show_text_box",
      default: true,
      label: "t:sections.email-signup-banner.settings.show_text_box.label"
    },
    {
      type: "select",
      id: "desktop_content_alignment",
      options: [
        {
          value: "left",
          label: "t:sections.email-signup-banner.settings.desktop_content_alignment.options__1.label"
        },
        {
          value: "center",
          label: "t:sections.email-signup-banner.settings.desktop_content_alignment.options__2.label"
        },
        {
          value: "right",
          label: "t:sections.email-signup-banner.settings.desktop_content_alignment.options__3.label"
        }
      ],
      default: "center",
      label: "t:sections.email-signup-banner.settings.desktop_content_alignment.label"
    },
    {
      ...colorSchema,
      info: "t:sections.email-signup-banner.settings.color_scheme.info"
    },
    {
      type: "header",
      content: "t:sections.email-signup-banner.settings.header.content"
    },
    {
      type: "select",
      id: "mobile_content_alignment",
      options: [
        {
          value: "left",
          label: "t:sections.email-signup-banner.settings.mobile_content_alignment.options__1.label"
        },
        {
          value: "center",
          label: "t:sections.email-signup-banner.settings.mobile_content_alignment.options__2.label"
        },
        {
          value: "right",
          label: "t:sections.email-signup-banner.settings.mobile_content_alignment.options__3.label"
        }
      ],
      default: "center",
      label: "t:sections.email-signup-banner.settings.mobile_content_alignment.label"
    },
    {
      type: "checkbox",
      id: "show_text_below",
      default: true,
      label: "t:sections.email-signup-banner.settings.show_text_below.label"
    }
  ],
  blocks: [
    {
      type: "heading",
      name: "t:sections.email-signup-banner.blocks.heading.name",
      limit: 1,
      settings: [
        {
          type: "text",
          id: "heading",
          default: "Opening soon",
          label: "t:sections.email-signup-banner.blocks.heading.settings.heading.label"
        },
        {
          ...headingSize,
        },
      ]
    },
    {
      type: "paragraph",
      name: "t:sections.email-signup-banner.blocks.paragraph.name",
      limit: 1,
      settings: [
        {
          type: "richtext",
          id: "text",
          default: "<p>Be the first to know when we launch.</p>",
          label: "t:sections.email-signup-banner.blocks.paragraph.settings.paragraph.label"
        },
        {
          type: "select",
          id: "text_style",
          options: [
            {
              value: "body",
              label: "t:sections.email-signup-banner.blocks.paragraph.settings.text_style.options__1.label"
            },
            {
              value: "subtitle",
              label: "t:sections.email-signup-banner.blocks.paragraph.settings.text_style.options__2.label"
            }
          ],
          default: "body",
          label: "t:sections.email-signup-banner.blocks.paragraph.settings.text_style.label"
        }
      ]
    },
    {
      type: "email_form",
      name: "t:sections.email-signup-banner.blocks.email_form.name",
      limit: 1
    }
  ],
  presets: [
    {
      name: "t:sections.email-signup-banner.presets.name",
      blocks: [
        {
          type: "heading"
        },
        {
          type: "paragraph"
        },
        {
          type: "email_form"
        }
      ]
    }
  ],
  templates: [
    "password"
  ]
};

module.exports = { schema };
