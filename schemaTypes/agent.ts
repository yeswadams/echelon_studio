import {defineField, defineType} from 'sanity'

export const agent = defineType({
  name: 'agent',
  title: 'Agent',
  type: 'document',

  groups: [
    {name: 'profile', title: 'Profile', default: true},
    {name: 'contact', title: 'Contact'},
    {name: 'seo', title: 'SEO'},
  ],

  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      group: 'profile',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'profile',
      description: 'Used in the agent profile URL. Auto-generated from name.',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'avatar',
      title: 'Profile Photo',
      type: 'image',
      group: 'profile',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: "Describe the photo for accessibility. e.g. \"Jane Doe, Senior Sales Agent\".",
        }),
      ],
    }),

    defineField({
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      group: 'profile',
      description: 'e.g. "Senior Sales Agent", "Head of Lettings", "Property Consultant".',
    }),

    defineField({
      name: 'licenseNumber',
      title: 'License Number',
      type: 'string',
      group: 'profile',
      description: 'Estate agent license or registration number, if applicable.',
    }),

    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      group: 'profile',
      validation: (Rule) => Rule.min(0).integer(),
    }),

    defineField({
      name: 'languages',
      title: 'Languages Spoken',
      type: 'array',
      group: 'profile',
      of: [{type: 'string'}],
      description: 'e.g. English, Swahili, French.',
    }),

    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      group: 'profile',
      of: [{type: 'string'}],
      description: 'Areas of expertise. e.g. "Off-plan sales", "Luxury residential", "Commercial leasing".',
    }),

    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      group: 'profile',
      description: 'A professional biography shown on the agent profile page.',
      rows: 6,
    }),

    defineField({
      name: 'isActive',
      title: 'Active Agent',
      type: 'boolean',
      group: 'profile',
      description: 'Inactive agents are hidden from public agent directories.',
      initialValue: true,
    }),

    // ─── CONTACT ────────────────────────────────────────────────────────────

    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      group: 'contact',
    }),

    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
      description: 'Include country code. e.g. +254712345678',
    }),

    defineField({
      name: 'location',
      title: 'Office Location',
      type: 'string',
      group: 'contact',
      description: 'City or area the agent is based in. e.g. "Nairobi, Kenya".',
    }),

    defineField({
      name: 'socials',
      title: 'Social & Contact Links',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({
          name: 'whatsapp',
          title: 'WhatsApp Number',
          type: 'string',
          description: 'Phone number with country code. e.g. +254712345678. Used to build the wa.me link.',
        }),
        defineField({name: 'linkedin', title: 'LinkedIn URL', type: 'url'}),
        defineField({name: 'instagram', title: 'Instagram URL', type: 'url'}),
        defineField({name: 'facebook', title: 'Facebook URL', type: 'url'}),
        defineField({name: 'website', title: 'Personal Website', type: 'url'}),
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
          description: 'Defaults to the agent name if blank.',
          validation: (Rule) => Rule.max(60).warning('Keep under 60 characters.'),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'Defaults to the agent bio if blank.',
          rows: 3,
          validation: (Rule) => Rule.max(160).warning('Keep under 160 characters.'),
        }),
        defineField({
          name: 'ogImage',
          title: 'Social Share Image',
          type: 'image',
          options: {hotspot: true},
          description: 'Defaults to the agent avatar if blank.',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'avatar',
      active: 'isActive',
    },
    prepare({title, subtitle, media, active}) {
      return {
        title: title || 'Unnamed Agent',
        subtitle: [subtitle, active === false ? '(Inactive)' : ''].filter(Boolean).join(' '),
        media,
      }
    },
  },
})
