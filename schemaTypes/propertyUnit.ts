import { defineField, defineType } from 'sanity'

export const propertyUnit = defineType({
  name: 'propertyUnit',
  title: 'Property Unit',
  type: 'document',
  fields: [
    defineField({
      name: 'property',
      title: 'Parent Property',
      type: 'reference',
      to: [{ type: 'property' }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({ name: 'title', title: 'Unit Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'unitCode', title: 'Unit Code', type: 'string' }),

    defineField({
      name: 'unitType',
      title: 'Unit Type',
      type: 'string',
      options: {
        list: [
          { title: 'Studio', value: 'studio' },
          { title: '1 Bedroom', value: '1br' },
          { title: '2 Bedroom', value: '2br' },
          { title: '3 Bedroom', value: '3br' },
          { title: '4 Bedroom', value: '4br' },
          { title: '5 Bedroom+', value: '5br-plus' },
          { title: 'Office', value: 'office' },
          { title: 'Retail', value: 'retail' },
          { title: 'Plot', value: 'plot' },
        ],
      },
    }),

    defineField({ name: 'bedrooms', title: 'Bedrooms', type: 'number' }),
    defineField({ name: 'bathrooms', title: 'Bathrooms', type: 'number' }),
    defineField({ name: 'toilets', title: 'Toilets', type: 'number' }),
    defineField({ name: 'ensuiteBedrooms', title: 'Ensuite Bedrooms', type: 'number' }),
    defineField({ name: 'sizeSqm', title: 'Size (m²)', type: 'number' }),
    defineField({ name: 'sizeSqft', title: 'Size (Sq Ft)', type: 'number' }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),

    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      initialValue: 'KES',
    }),

    defineField({
      name: 'floorLevel',
      title: 'Floor Level',
      type: 'string',
    }),

    defineField({
      name: 'view',
      title: 'View',
      type: 'string',
    }),

    defineField({
      name: 'availabilityStatus',
      title: 'Availability Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Reserved', value: 'reserved' },
          { title: 'Sold', value: 'sold' },
          { title: 'Occupied', value: 'occupied' },
        ],
      },
    }),

    defineField({
      name: 'completionDate',
      title: 'Expected Completion Date',
      type: 'date',
    }),

    defineField({
      name: 'floorPlan',
      title: 'Floor Plan',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'gallery',
      title: 'Unit Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),

    defineField({
      name: 'virtualTours',
      title: 'Unit Virtual Tours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'provider', title: 'Provider', type: 'string' }),
            defineField({ name: 'embedUrl', title: 'Embed URL', type: 'url' }),
            defineField({ name: 'thumbnail', title: 'Thumbnail', type: 'image' }),
          ],
        },
      ],
    }),

    defineField({
      name: 'features',
      title: 'Unit Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'aiUnitSummary',
      title: 'AI Unit Summary',
      type: 'object',
      fields: [
        defineField({ name: 'summary', title: 'Summary', type: 'text' }),
        defineField({ name: 'bestFor', title: 'Best For', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'pros', title: 'Pros', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'cons', title: 'Cons', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),
  ],
})