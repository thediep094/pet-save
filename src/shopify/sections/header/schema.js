const schema = {
  name: "t:sections.header.name",
  class: "section-header",
  settings: [
    {
      "type": "image_picker",
      "id": "logo",
      "label": "t:sections.header.settings.logo.label"
    },
    {
      "type": "link_list",
      "id": "menu",
      "default": "main-menu",
      "label": "t:sections.header.settings.menu.label"
    },
    {
      "type": "range",
      "id": "logo_width",
      "min": 50,
      "max": 150,
      "step": 1,
      "unit": "px",
      "label": "t:sections.header.settings.logo_width.label",
      "default": 100
    }
  ]
};

module.exports = { schema };
