import {defineField, defineType} from 'sanity'

export const amenity = defineType({
  name: 'amenity',
  title: 'Amenity',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Amenity Name',
      type: 'string',
      description: 'e.g. "Swimming Pool", "Gym", "24/7 Security".',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used for URL-safe filtering. Auto-generated from name.',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Used for grouping amenities on the listing page.',
      options: {
        list: [
          {title: 'Leisure & Recreation', value: 'leisure'},
          {title: 'Security & Safety', value: 'security'},
          {title: 'Parking & Transport', value: 'transport'},
          {title: 'Utilities & Services', value: 'utilities'},
          {title: 'Health & Wellness', value: 'wellness'},
          {title: 'Children & Family', value: 'family'},
          {title: 'Community & Social', value: 'community'},
          {title: 'Business & Work', value: 'business'},
          {title: 'Nature & Outdoor', value: 'outdoor'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),

    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description:
        'Icon identifier from the icon library used by the frontend (e.g. Lucide icon name like "pool", "shield", "car"). Check with your frontend developer for the full list.',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional: brief description of what this amenity offers residents.',
      rows: 3,
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Unnamed Amenity',
        subtitle: subtitle || '',
      }
    },
  },
})
