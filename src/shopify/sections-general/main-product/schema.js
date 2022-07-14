const { paddingTopBottom, bgDesktopMobile } = require("../../common/schema");

const schema = {
  name: "t:sections.main-product.name",
  tag: "section",
  class: "section",
  blocks: [
    {
      type: "@app"
    },
    {
      type: "text",
      name: "t:sections.main-product.blocks.text.name",
      settings: [
        {
          type: "text",
          id: "text",
          default: "Text block",
          label: "t:sections.main-product.blocks.text.settings.text.label"
        },
        {
          type: "select",
          id: "text_style",
          options: [
            {
              value: "body",
              label: "t:sections.main-product.blocks.text.settings.text_style.options__1.label"
            },
            {
              value: "subtitle",
              label: "t:sections.main-product.blocks.text.settings.text_style.options__2.label"
            },
            {
              value: "uppercase",
              label: "t:sections.main-product.blocks.text.settings.text_style.options__3.label"
            }
          ],
          default: "body",
          label: "t:sections.main-product.blocks.text.settings.text_style.label"
        }
      ]
    },
    {
      type: "title",
      name: "t:sections.main-product.blocks.title.name",
      limit: 1
    },
    {
      type: "price",
      name: "t:sections.main-product.blocks.price.name",
      limit: 1
    },
    {
      type: "quantity_selector",
      name: "t:sections.main-product.blocks.quantity_selector.name",
      limit: 1
    },
    {
      type: "variant_picker",
      name: "t:sections.main-product.blocks.variant_picker.name",
      limit: 1,
      settings: [
        {
          type: "select",
          id: "picker_type",
          options: [
            {
              value: "dropdown",
              label: "t:sections.main-product.blocks.variant_picker.settings.picker_type.options__1.label"
            },
            {
              value: "button",
              label: "t:sections.main-product.blocks.variant_picker.settings.picker_type.options__2.label"
            }
          ],
          default: "button",
          label: "t:sections.main-product.blocks.variant_picker.settings.picker_type.label"
        }
      ]
    },
    {
      type: "buy_buttons",
      name: "t:sections.main-product.blocks.buy_buttons.name",
      limit: 1,
      settings: [
        {
          type: "checkbox",
          id: "show_dynamic_checkout",
          default: true,
          label: "t:sections.main-product.blocks.buy_buttons.settings.show_dynamic_checkout.label",
          info: "t:sections.main-product.blocks.buy_buttons.settings.show_dynamic_checkout.info"
        }
      ]
    },
    {
      type: "description",
      name: "t:sections.main-product.blocks.description.name",
      limit: 1
    },
    {
      type: "share",
      name: "t:sections.main-product.blocks.share.name",
      limit: 1,
      settings: [
        {
          type: "text",
          id: "share_label",
          label: "t:sections.main-product.blocks.share.settings.text.label",
          default: "Share"
        },
        {
          type: "paragraph",
          content: "t:sections.main-product.blocks.share.settings.featured_image_info.content"
        },
        {
          type: "paragraph",
          content: "t:sections.main-product.blocks.share.settings.title_info.content"
        }
      ]
    },
    {
      type: "custom_liquid",
      name: "t:sections.main-product.blocks.custom_liquid.name",
      settings: [
        {
          type: "liquid",
          id: "custom_liquid",
          label: "t:sections.main-product.blocks.custom_liquid.settings.custom_liquid.label",
          info: "t:sections.main-product.blocks.custom_liquid.settings.custom_liquid.info"
        }
      ]
    },
    {
      type: "collapsible_tab",
      name: "t:sections.main-product.blocks.collapsible_tab.name",
      settings: [
        {
          type: "text",
          id: "heading",
          default: "Collapsible row",
          info: "t:sections.main-product.blocks.collapsible_tab.settings.heading.info",
          label: "t:sections.main-product.blocks.collapsible_tab.settings.heading.label"
        },
        {
          type: "select",
          id: "icon",
          options: [
            {
              value: "none",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__1.label"
            },
            {
              value: "apple",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__2.label"
            },
            {
              value: "banana",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__3.label"
            },
            {
              value: "bottle",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__4.label"
            },
            {
              value: "box",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__5.label"
            },
            {
              value: "carrot",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__6.label"
            },
            {
              value: "chat_bubble",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__7.label"
            },
            {
              value: "check_mark",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__8.label"
            },
            {
              value: "clipboard",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__9.label"
            },
            {
              value: "dairy",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__10.label"
            },
            {
              value: "dairy_free",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__11.label"
            },
            {
              value: "dryer",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__12.label"
            },
            {
              value: "eye",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__13.label"
            },
            {
              value: "fire",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__14.label"
            },
            {
              value: "gluten_free",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__15.label"
            },
            {
              value: "heart",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__16.label"
            },
            {
              value: "iron",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__17.label"
            },
            {
              value: "leaf",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__18.label"
            },
            {
              value: "leather",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__19.label"
            },
            {
              value: "lightning_bolt",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__20.label"
            },
            {
              value: "lipstick",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__21.label"
            },
            {
              value: "lock",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__22.label"
            },
            {
              value: "map_pin",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__23.label"
            },
            {
              value: "nut_free",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__24.label"
            },
            {
              value: "pants",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__25.label"
            },
            {
              value: "paw_print",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__26.label"
            },
            {
              value: "pepper",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__27.label"
            },
            {
              value: "perfume",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__28.label"
            },
            {
              value: "plane",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__29.label"
            },
            {
              value: "plant",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__30.label"
            },
            {
              value: "price_tag",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__31.label"
            },
            {
              value: "question_mark",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__32.label"
            },
            {
              value: "recycle",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__33.label"
            },
            {
              value: "return",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__34.label"
            },
            {
              value: "ruler",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__35.label"
            },
            {
              value: "serving_dish",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__36.label"
            },
            {
              value: "shirt",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__37.label"
            },
            {
              value: "shoe",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__38.label"
            },
            {
              value: "silhouette",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__39.label"
            },
            {
              value: "snowflake",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__40.label"
            },
            {
              value: "star",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__41.label"
            },
            {
              value: "stopwatch",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__42.label"
            },
            {
              value: "truck",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__43.label"
            },
            {
              value: "washing",
              label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.options__44.label"
            }
          ],
          default: "check_mark",
          label: "t:sections.main-product.blocks.collapsible_tab.settings.icon.label"
        },
        {
          type: "richtext",
          id: "content",
          label: "t:sections.main-product.blocks.collapsible_tab.settings.content.label"
        },
        {
          type: "page",
          id: "page",
          label: "t:sections.main-product.blocks.collapsible_tab.settings.page.label"
        }
      ]
    },
    {
      type: "popup",
      name: "t:sections.main-product.blocks.popup.name",
      settings: [
        {
          type: "text",
          id: "text",
          default: "Pop-up link text",
          label: "t:sections.main-product.blocks.popup.settings.link_label.label"
        },
        {
          id: "page",
          type: "page",
          label: "t:sections.main-product.blocks.popup.settings.page.label"
        }
      ]
    },
    {
      type: "rating",
      name: "t:sections.main-product.blocks.rating.name",
      limit: 1,
      settings: [
        {
          type: "paragraph",
          content: "t:sections.main-product.blocks.rating.settings.paragraph.content"
        }
      ]
    }
  ],
  settings: [
    {
      type: "checkbox",
      id: "enable_sticky_info",
      default: true,
      label: "t:sections.main-product.settings.enable_sticky_info.label"
    },
    {
      type: "header",
      content: "t:sections.main-product.settings.header.content",
      info: "t:sections.main-product.settings.header.info"
    },
    {
      type: "select",
      id: "gallery_layout",
      options: [
        {
          value: "stacked",
          label: "t:sections.main-product.settings.gallery_layout.options__1.label"
        },
        {
          value: "thumbnail",
          label: "t:sections.main-product.settings.gallery_layout.options__2.label"
        },
        {
          value: "thumbnail_slider",
          label: "t:sections.main-product.settings.gallery_layout.options__3.label"
        }
      ],
      default: "stacked",
      label: "t:sections.main-product.settings.gallery_layout.label"
    },
    {
      type: "select",
      id: "media_size",
      options: [
        {
          value: "small",
          label: "t:sections.main-product.settings.media_size.options__1.label"
        },
        {
          value: "medium",
          label: "t:sections.main-product.settings.media_size.options__2.label"
        },
        {
          value: "large",
          label: "t:sections.main-product.settings.media_size.options__3.label"
        }
      ],
      default: "large",
      label: "t:sections.main-product.settings.media_size.label",
      info: "t:sections.main-product.settings.media_size.info"
    },
    {
      type: "select",
      id: "mobile_thumbnails",
      options: [
        {
          value: "show",
          label: "t:sections.main-product.settings.mobile_thumbnails.options__1.label"
        },
        {
          value: "hide",
          label: "t:sections.main-product.settings.mobile_thumbnails.options__2.label"
        }
      ],
      default: "hide",
      label: "t:sections.main-product.settings.mobile_thumbnails.label"
    },
    {
      type: "checkbox",
      id: "hide_variants",
      default: false,
      label: "t:sections.main-product.settings.hide_variants.label"
    },
    {
      type: "checkbox",
      id: "enable_video_looping",
      default: false,
      label: "t:sections.main-product.settings.enable_video_looping.label"
    },
    ...paddingTopBottom(36, 36),
  ]
};

module.exports = { schema };
