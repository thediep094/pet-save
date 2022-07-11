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
    }
  ]
};

module.exports = { schema };
