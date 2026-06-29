import {defineField, defineType} from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',

  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'Write the question as a buyer would ask it.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{type: 'block'}],
      description: 'A clear, concise answer. Supports rich text formatting.',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Groups FAQs into sections. Use "General" for platform-wide FAQs.',
      options: {
        list: [
          {title: 'General', value: 'general'},
          {title: 'Buying Process', value: 'buying'},
          {title: 'Renting', value: 'renting'},
          {title: 'Off-Plan & New Developments', value: 'off-plan'},
          {title: 'Financing & Mortgages', value: 'financing'},
          {title: 'Legal & Ownership', value: 'legal'},
          {title: 'Property Management', value: 'management'},
          {title: 'Viewings', value: 'viewings'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),

    defineField({
      name: 'property',
      title: 'Related Property',
      type: 'reference',
      to: [{type: 'property'}],
      description:
        'Link to a specific property if this FAQ is property-specific. Leave blank for general site-wide FAQs.',
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first within the same category.',
      initialValue: 0,
    }),

    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      description: 'Unpublish to hide this FAQ without deleting it.',
      initialValue: true,
    }),
  ],

  orderings: [
    {
      title: 'Category, then Order',
      name: 'categoryOrder',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'order', direction: 'asc'},
      ],
    },
  ],

  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
      published: 'isPublished',
    },
    prepare({title, subtitle, published}) {
      return {
        title: title || 'Unnamed FAQ',
        subtitle: [subtitle, published === false ? '(Draft)' : ''].filter(Boolean).join(' · '),
      }
    },
  },
})
