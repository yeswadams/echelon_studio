import {defineField, defineType} from 'sanity'

export const agent = defineType({
  name: 'agent',
  title: 'Agent',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'languages', title: 'Languages', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'socials', title: 'Socials', type: 'object', fields: [
      defineField({ name: 'whatsapp', title: 'WhatsApp', type: 'url' }),
      defineField({ name: 'linkedin', title: 'LinkedIn', type: 'url' }),
      defineField({ name: 'instagram', title: 'Instagram', type: 'url' }),
      defineField({ name: 'facebook', title: 'Facebook', type: 'url' }),
      defineField({ name: 'website', title: 'Website', type: 'url' }),
    ]}),
    defineField({ name: 'bio', title: 'Bio', type: 'text' }),
    defineField({ name: 'specialties', title: 'Specialties', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'isActive', title: 'Active', type: 'boolean', initialValue: true }),
  ],
})
