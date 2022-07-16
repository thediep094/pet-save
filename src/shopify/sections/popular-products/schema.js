
const schema = {
  name: 't:sections.popular-products.name',
  class: 'section-popular-products',
  tag: "section",
  settings: [
    {
      type: 'text',
      id: 'title',
      label: 't:sections.popular-products.settings.popularproduct.title',
      default: 'Our popular products',
    },
    {
      type: 'textarea',
      id: 'description',
      label: 't:sections.popular-products.settings.popularproduct.description',
      default: 'Dry food, wet food and dog treats - only natural raw materials made with less pressure and temperature for a higher natural nutritional content.',
    }

  ],
  presets: [
    {
      name: "t:sections.popular-products.presets.name"
    }
  ]

};

module.exports = { schema };
