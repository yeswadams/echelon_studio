import {defineField, defineType} from 'sanity'

export const tag = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Tag Name',
      type: 'string',
      description: 'e.g. "Luxury", "Pet Friendly", "Sea View", "Gated Community".',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used for URL-safe tag filtering. Auto-generated from name.',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'group',
      title: 'Group',
      type: 'string',
      description: 'Used to organise tags in the filtering UI.',
      options: {
        list: [
          {title: 'Lifestyle', value: 'lifestyle'},
          {title: 'Views & Setting', value: 'views'},
          {title: 'Investment', value: 'investment'},
          {title: 'Property Style', value: 'style'},
          {title: 'Buyer Type', value: 'buyer-type'},
          {title: 'Promotion', value: 'promotion'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'group',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Unnamed Tag',
        subtitle: subtitle || '',
      }
    },
  },
})
