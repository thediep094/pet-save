const paddingTopBottom = (dfPTop, dfPBottom) => [
  {
    type: "header",
    content: "t:sections.all.padding.section_padding_heading"
  },
  {
    type: "number",
    id: "padding_top",
    label: "t:sections.all.padding.padding_top",
    default: dfPTop
  },
  {
    type: "number",
    id: "padding_bottom",
    label: "t:sections.all.padding.padding_bottom",
    default: dfPBottom
  }
];

const bgDesktopMobile = [
  {
    type: "image_picker",
    id: "background_image_desktop",
    label: "t:sections.all.background.background_image_desktop"
  },
  {
    type: "image_picker",
    id: "background_image_mobile",
    label: "t:sections.all.background.background_image_mobile"
  }
]

module.exports = {
  paddingTopBottom,
  bgDesktopMobile,
};
