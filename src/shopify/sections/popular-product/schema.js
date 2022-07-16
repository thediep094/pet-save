
const schema = {
  name: 't:sections.popular-product.name',
  class: 'section-popular-product',
  tag: "section",
  settings: [
    {
      type: 'text',
      id: 'title',
      label: 't:sections.popular-product.settings.popularproduct.title',
      default: 'Our popular products',
    },
    {
      type: 'textarea',
      id: 'description',
      label: 't:sections.popular-product.settings.popularproduct.description',
      default: 'Dry food, wet food and dog treats - only natural raw materials made with less pressure and temperature for a higher natural nutritional content.',
    }

  ],
  presets: [
    {
      name: "t:sections.popular-product.presets.name"
    }
  ]

};

module.exports = { schema };
