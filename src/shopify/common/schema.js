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
];

const colorSchema = {
  type: "select",
  id: "color_scheme",
  options: [
    {
      value: "accent-1",
      label: "t:sections.all.colors.accent_1.label"
    },
    {
      value: "accent-2",
      label: "t:sections.all.colors.accent_2.label"
    },
    {
      value: "background-1",
      label: "t:sections.all.colors.background_1.label"
    },
    {
      value: "background-2",
      label: "t:sections.all.colors.background_2.label"
    },
    {
      value: "inverse",
      label: "t:sections.all.colors.inverse.label"
    }
  ],
  default: "background-1",
  label: "t:sections.all.colors.label"
};

const headingSize = {
  type: "select",
  id: "heading_size",
  options: [
    {
      value: "h2",
      label: "t:sections.all.heading_size.options__1.label"
    },
    {
      value: "h1",
      label: "t:sections.all.heading_size.options__2.label"
    },
    {
      value: "h0",
      label: "t:sections.all.heading_size.options__3.label"
    }
  ],
  default: "h1",
  label: "t:sections.all.heading_size.label"
};

module.exports = {
  paddingTopBottom,
  bgDesktopMobile,
  colorSchema,
  headingSize,
};
