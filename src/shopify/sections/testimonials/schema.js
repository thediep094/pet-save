const schema = {
  name: 't:sections.testimonials.name',
  class: 'section-slideshow',
  max_blocks: 5,
  settings: [
    {
      type: 'text',
      id: 'title',
      default: 'From our customer story',
      label: 't:sections.testimonials.settings.title.label',
    },
  ],
  blocks: [
    {
      type: 'slide',
      limit: 5,
      name: 't:sections.testimonials.blocks.name',
      settings: [
        {
          type: 'image_picker',
          id: 'image_front',
          label: 't:sections.testimonials.blocks.settings.label_image_front',
        },
        {
          type: "image_picker",
          id: "image_back",
          label: 't:sections.testimonials.blocks.settings.label_image_back',
        },
        {
          type: 'textarea',
          id: 'slide_title',
          label: 't:sections.testimonials.blocks.settings.label_title_slide',
          default:
            "For close to a decade I've been hands-on with dogs transtioning to natural feeding. I have seen the vast majority experience evalated health and viality",
        },
        {
          type: 'image_picker',
          id: 'avatar_author',
          label: 't:sections.testimonials.blocks.settings.label_avatar_author',
        },
        {
          type: 'text',
          id: 'name_author',
          label: 't:sections.testimonials.blocks.settings.label_name_author',
          default: 'Julia Robert',
        },
      ],
    },
  ],
  presets: [
    {
      name: 't:sections.testimonials.presets.name',
      blocks: [
        {
          type: 'slide',
        },
        {
          type: 'slide',
        },
      ],
    },
  ],
};
module.exports = { schema };
