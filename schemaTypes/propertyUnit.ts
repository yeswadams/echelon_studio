import {defineArrayMember, defineField, defineType} from 'sanity'

export const propertyUnit = defineType({
  name: 'propertyUnit',
  title: 'Property Unit',
  type: 'document',

  groups: [
    {name: 'unit', title: 'Unit Details', default: true},
    {name: 'specs', title: 'Specifications'},
    {name: 'pricing', title: 'Pricing'},
    {name: 'media', title: 'Media'},
    {name: 'ai', title: 'AI Summary'},
  ],

  fields: [
    defineField({
      name: 'property',
      title: 'Parent Property',
      type: 'reference',
      group: 'unit',
      to: [{type: 'property'}],
      description: 'The development this unit belongs to.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      title: 'Unit Title',
      type: 'string',
      group: 'unit',
      description: 'A descriptive title for the unit. e.g. "3-Bedroom Penthouse – Block A, Floor 12".',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'unit',
      description: 'Auto-generated from the unit title. Used in the unit URL.',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'unitCode',
      title: 'Unit Code',
      type: 'string',
      group: 'unit',
      description: 'Internal unit identifier. e.g. "A-12-3B".',
    }),

    defineField({
      name: 'unitType',
      title: 'Unit Type',
      type: 'string',
      group: 'unit',
      options: {
        list: [
          {title: 'Studio', value: 'studio'},
          {title: '1 Bedroom', value: '1br'},
          {title: '2 Bedroom', value: '2br'},
          {title: '3 Bedroom', value: '3br'},
          {title: '4 Bedroom', value: '4br'},
          {title: '5 Bedroom+', value: '5br-plus'},
          {title: 'Office', value: 'office'},
          {title: 'Retail', value: 'retail'},
          {title: 'Plot', value: 'plot'},
        ],
      },
    }),

    defineField({
      name: 'availabilityStatus',
      title: 'Availability Status',
      type: 'string',
      group: 'unit',
      options: {
        list: [
          {title: 'Available', value: 'available'},
          {title: 'Reserved', value: 'reserved'},
          {title: 'Sold', value: 'sold'},
          {title: 'Occupied', value: 'occupied'},
        ],
      },
      initialValue: 'available',
    }),

    defineField({
      name: 'completionDate',
      title: 'Expected Completion Date',
      type: 'date',
      group: 'unit',
      description: 'For off-plan units.',
      options: {dateFormat: 'MMMM YYYY'},
    }),

    // ─── SPECIFICATIONS ─────────────────────────────────────────────────────

    defineField({
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
      group: 'specs',
      validation: (Rule) => Rule.min(0).integer(),
    }),

    defineField({
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
      group: 'specs',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'toilets',
      title: 'Toilets',
      type: 'number',
      group: 'specs',
      validation: (Rule) => Rule.min(0).integer(),
    }),

    defineField({
      name: 'ensuiteBedrooms',
      title: 'Ensuite Bedrooms',
      type: 'number',
      group: 'specs',
      validation: (Rule) => Rule.min(0).integer(),
    }),

    defineField({
      name: 'sizeSqm',
      title: 'Size (m²)',
      type: 'number',
      group: 'specs',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'sizeSqft',
      title: 'Size (Sq Ft)',
      type: 'number',
      group: 'specs',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'floorLevel',
      title: 'Floor Level',
      type: 'string',
      group: 'specs',
      description: 'e.g. "Ground Floor", "5th Floor", "Penthouse Level".',
    }),

    defineField({
      name: 'view',
      title: 'View',
      type: 'string',
      group: 'specs',
      description: 'e.g. "City skyline", "Garden view", "Pool facing".',
    }),

    defineField({
      name: 'features',
      title: 'Unit Features',
      type: 'array',
      group: 'specs',
      of: [{type: 'reference', to: [{type: 'feature'}]}],
      description: 'Features specific to this unit. e.g. Smart thermostat, Private terrace.',
    }),

    // ─── PRICING ────────────────────────────────────────────────────────────

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      group: 'pricing',
      description: 'Unit price in the selected currency.',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      group: 'pricing',
      initialValue: 'KES',
      options: {
        list: [
          {title: 'KES – Kenyan Shilling', value: 'KES'},
          {title: 'USD – US Dollar', value: 'USD'},
          {title: 'GBP – British Pound', value: 'GBP'},
          {title: 'EUR – Euro', value: 'EUR'},
        ],
      },
    }),

    // ─── MEDIA ──────────────────────────────────────────────────────────────

    defineField({
      name: 'floorPlan',
      title: 'Floor Plan',
      type: 'image',
      group: 'media',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'e.g. "3-bedroom unit floor plan — 148m²".',
        }),
      ],
    }),

    defineField({
      name: 'gallery',
      title: 'Unit Gallery',
      type: 'array',
      group: 'media',
      of: [
        defineArrayMember({
          name: 'galleryImage',
          type: 'object',
          title: 'Photo',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            }),
            defineField({name: 'alt', title: 'Alt Text', type: 'string'}),
            defineField({name: 'caption', title: 'Caption', type: 'string'}),
          ],
          preview: {
            select: {media: 'image', title: 'alt', subtitle: 'caption'},
            prepare({media, title, subtitle}) {
              return {title: title || 'Photo', subtitle: subtitle || '', media}
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'virtualTours',
      title: 'Unit Virtual Tours',
      type: 'array',
      group: 'media',
      description: 'Add Matterport or other 3D tours scoped to this specific unit.',
      of: [
        defineArrayMember({
          name: 'matterportTour',
          type: 'object',
          title: 'Matterport 3D Tour',
          fields: [
            defineField({name: 'title', title: 'Tour Title', type: 'string'}),
            defineField({
              name: 'shareUrl',
              title: 'Matterport Share URL',
              type: 'url',
              description: 'Format: https://my.matterport.com/show/?m=XXXXXXXXX',
              validation: (Rule) => [
                Rule.required().error('A Matterport share URL is required.'),
                Rule.uri({scheme: ['https']}).error('Must be a valid HTTPS URL.'),
                Rule.custom((url: string | undefined) => {
                  if (!url) return true
                  if (!/matterport\.com/i.test(url)) {
                    return 'Must be a valid Matterport URL — e.g. https://my.matterport.com/show/?m=ABC123'
                  }
                  return true
                }),
              ],
            }),
            defineField({
              name: 'modelId',
              title: 'Model ID (Optional)',
              type: 'string',
              description: 'The value after "?m=" in the share URL. The frontend can extract this automatically.',
            }),
            defineField({
              name: 'thumbnail',
              title: 'Custom Thumbnail',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({name: 'isFeatured', title: 'Featured Tour', type: 'boolean', initialValue: false}),
            defineField({name: 'autoPlay', title: 'Auto Play', type: 'boolean', initialValue: false}),
            defineField({name: 'hideUi', title: 'Hide Matterport Controls', type: 'boolean', initialValue: false}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'shareUrl', media: 'thumbnail'},
            prepare({title, subtitle, media}) {
              return {title: title || 'Matterport 3D Tour', subtitle: subtitle || 'No URL set', media}
            },
          },
        }),
        defineArrayMember({
          name: 'genericVirtualTour',
          type: 'object',
          title: 'Other Virtual Tour',
          fields: [
            defineField({name: 'title', title: 'Tour Title', type: 'string'}),
            defineField({
              name: 'provider',
              title: 'Provider',
              type: 'string',
              options: {
                list: [
                  {title: 'Kuula', value: 'kuula'},
                  {title: 'Custom 3D', value: 'custom-3d'},
                  {title: '360° Tour', value: '360-tour'},
                  {title: 'Other', value: 'other'},
                ],
              },
            }),
            defineField({
              name: 'embedUrl',
              title: 'Embed URL',
              type: 'url',
              validation: (Rule) => Rule.required().uri({scheme: ['https', 'http']}),
            }),
            defineField({name: 'thumbnail', title: 'Thumbnail', type: 'image', options: {hotspot: true}}),
            defineField({name: 'isPrimary', title: 'Primary Tour', type: 'boolean', initialValue: false}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'provider', media: 'thumbnail'},
            prepare({title, subtitle, media}) {
              return {title: title || 'Virtual Tour', subtitle: subtitle || '', media}
            },
          },
        }),
      ],
    }),

    // ─── AI SUMMARY ─────────────────────────────────────────────────────────

    defineField({
      name: 'aiUnitSummary',
      title: 'AI Unit Summary',
      type: 'object',
      group: 'ai',
      description: 'AI-generated or curated summary data for this unit.',
      fields: [
        defineField({name: 'summary', title: 'Summary', type: 'text'}),
        defineField({
          name: 'bestFor',
          title: 'Best For',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({name: 'pros', title: 'Pros', type: 'array', of: [{type: 'string'}]}),
        defineField({name: 'cons', title: 'Cons', type: 'array', of: [{type: 'string'}]}),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      unitType: 'unitType',
      status: 'availabilityStatus',
      media: 'floorPlan',
      propertyTitle: 'property.title',
    },
    prepare({title, unitType, status, media, propertyTitle}) {
      return {
        title: title || 'Untitled Unit',
        subtitle: [propertyTitle, unitType, status].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
