import {defineField, defineType} from 'sanity'

export const location = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',

  groups: [
    {name: 'details', title: 'Details', default: true},
    {name: 'media', title: 'Media'},
    {name: 'seo', title: 'SEO'},
  ],

  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      group: 'details',
      description: 'The neighbourhood, area, or city name. e.g. "Westlands", "Kilimani", "Karen".',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'details',
      description: 'Used in the location browse URL. Auto-generated from name.',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      group: 'details',
      initialValue: 'Kenya',
    }),

    defineField({
      name: 'county',
      title: 'County / Region',
      type: 'string',
      group: 'details',
      description: 'e.g. "Nairobi County".',
    }),

    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      group: 'details',
      description: 'e.g. "Nairobi".',
    }),

    defineField({
      name: 'area',
      title: 'Area / Sub-area',
      type: 'string',
      group: 'details',
      description: 'More specific area within a city. e.g. "Westlands".',
    }),

    defineField({
      name: 'estate',
      title: 'Estate / Street',
      type: 'string',
      group: 'details',
      description: 'Fine-grained location detail. e.g. "Riverside Drive".',
    }),

    defineField({
      name: 'centerPoint',
      title: 'Centre Point',
      type: 'geopoint',
      group: 'details',
      description: 'Drop a pin at the centre of this area for map views.',
    }),

    defineField({
      name: 'description',
      title: 'Area Description',
      type: 'text',
      group: 'details',
      description:
        'An overview of the neighbourhood — lifestyle, amenities, transport links. Shown on location landing pages.',
      rows: 6,
    }),

    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      group: 'details',
      description: 'Inactive locations are hidden from browse-by-area pages.',
      initialValue: true,
    }),

    // ─── MEDIA ──────────────────────────────────────────────────────────────

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      group: 'media',
      options: {hotspot: true},
      description: 'Hero image for the location landing page. Use an aerial or street-level photo.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'e.g. "Aerial view of Westlands, Nairobi".',
        }),
      ],
    }),

    // ─── SEO ────────────────────────────────────────────────────────────────

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'e.g. "Properties for Sale in Westlands, Nairobi". Defaults to location name.',
          validation: (Rule) => Rule.max(60).warning('Keep under 60 characters.'),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160).warning('Keep under 160 characters.'),
        }),
        defineField({
          name: 'ogImage',
          title: 'Social Share Image',
          type: 'image',
          options: {hotspot: true},
          description: 'Defaults to the cover image if blank.',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      city: 'city',
      country: 'country',
      media: 'coverImage',
      active: 'isActive',
    },
    prepare({title, city, country, media, active}) {
      const loc = [city, country].filter(Boolean).join(', ')
      return {
        title: title || 'Unnamed Location',
        subtitle: [loc, active === false ? '(Inactive)' : ''].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
