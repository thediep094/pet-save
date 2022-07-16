const { bgDesktopMobile } = require('../../common/schema');

const schema = {
  name: 't:sections.image-banner.name',
  class: 'section-image-banner',
  settings: [
    ...bgDesktopMobile,
    {
      type: 'text',
      id: 'text_title',
      label: 't:sections.image-banner.settings.imagebaner.title',
      default: 'Welcome to my shop',
    },
    {
      type: 'textarea',
      id: 'text_subtitle',
      label: 't:sections.image-banner.settings.imagebaner.subtitle',
      default: 'Welcome to my shop!',
    },
    {
      type: 'text',
      id: 'text_button',
      label: 't:sections.image-banner.settings.imagebaner.textbutton',
      default: 'Learn More',
    },
    {
      type: 'url',
      id: 'button_link',
      label: 't:sections.image-banner.settings.imagebaner.button_link',
    },
    {
      type: 'select',
      id: 'image_banner_type',
      label: 't:sections.image-banner.settings.imagebaner.image_banner_type',
      options: [
        {
          value: '1',
          label: 'Type 1',
        },
        {
          value: '2',
          label: 'Type 2',
        },
        {
          value: '3',
          label: 'Type 3',
        },
      ],
      default: '1',
    },
  ],
  presets: [
    {
      name: 't:sections.image-banner.presets.name',
    },
  ],
};

module.exports = { schema };
