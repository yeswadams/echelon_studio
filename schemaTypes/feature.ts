import {defineField, defineType} from 'sanity'

export const feature = defineType({
  name: 'feature',
  title: 'Feature',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Feature Name',
      type: 'string',
      description: 'e.g. "Solar Panels", "Smart Home System", "Private Rooftop Terrace".',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Auto-generated from name. Used for URL-safe filtering.',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Groups features into sections on the listing page.',
      options: {
        list: [
          {title: 'Interior', value: 'interior'},
          {title: 'Exterior', value: 'exterior'},
          {title: 'Technology & Smart Home', value: 'technology'},
          {title: 'Energy & Sustainability', value: 'sustainability'},
          {title: 'Kitchen & Appliances', value: 'kitchen'},
          {title: 'Bathrooms & Wellness', value: 'bathroom'},
          {title: 'Outdoor & Garden', value: 'outdoor'},
          {title: 'Security', value: 'security'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),

    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description:
        'Icon identifier from the frontend icon library (e.g. Lucide). e.g. "sun", "wifi", "zap". Check with your frontend developer.',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional: a brief explanation of this feature for buyers.',
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
        title: title || 'Unnamed Feature',
        subtitle: subtitle || '',
      }
    },
  },
})
