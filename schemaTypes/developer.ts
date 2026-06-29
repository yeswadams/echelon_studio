import {defineArrayMember, defineField, defineType} from 'sanity'

export const developer = defineType({
  name: 'developer',
  title: 'Developer',
  type: 'document',

  groups: [
    {name: 'profile', title: 'Profile', default: true},
    {name: 'contact', title: 'Contact'},
    {name: 'seo', title: 'SEO'},
  ],

  fields: [
    defineField({
      name: 'name',
      title: 'Developer Name',
      type: 'string',
      group: 'profile',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'profile',
      description: 'Used in the developer profile URL.',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      group: 'profile',
      options: {hotspot: true},
      description: 'Upload a transparent PNG or high-resolution logo.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'e.g. "Acacia Developments logo".',
        }),
      ],
    }),

    defineField({
      name: 'description',
      title: 'About',
      type: 'text',
      group: 'profile',
      description: 'A short company overview shown on the developer profile page.',
      rows: 5,
    }),

    defineField({
      name: 'established',
      title: 'Year Established',
      type: 'number',
      group: 'profile',
      description: 'The year the company was founded.',
      validation: (Rule) => Rule.min(1900).max(new Date().getFullYear()).integer(),
    }),

    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      group: 'profile',
      description: 'Primary country of operation.',
    }),

    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      group: 'profile',
      description: 'Inactive developers are hidden from public developer directories.',
      initialValue: true,
    }),

    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      group: 'profile',
      description: 'Private notes visible only to Studio editors — not shown publicly.',
    }),

    // ─── CONTACT ────────────────────────────────────────────────────────────

    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      group: 'contact',
    }),

    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      group: 'contact',
    }),

    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      group: 'contact',
      description: 'Include country code.',
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      group: 'contact',
      of: [
        defineArrayMember({
          name: 'socialLink',
          type: 'object',
          title: 'Social Link',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Twitter / X', value: 'twitter'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'Website', value: 'website'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required().uri({scheme: ['https', 'http']}),
            }),
          ],
          preview: {
            select: {title: 'platform', subtitle: 'url'},
          },
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
          description: 'Defaults to the developer name if blank.',
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
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'country',
      media: 'logo',
      active: 'isActive',
    },
    prepare({title, subtitle, media, active}) {
      return {
        title: title || 'Unnamed Developer',
        subtitle: [subtitle, active === false ? '(Inactive)' : ''].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
