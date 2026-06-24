import { defineField, defineType } from 'sanity'

export const developer = defineType({
  name: 'developer',
  title: 'Developer',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'website', title: 'Website', type: 'url' }),
    defineField({ name: 'contactEmail', title: 'Contact Email', type: 'string' }),
    defineField({ name: 'contactPhone', title: 'Contact Phone', type: 'string' }),
    defineField({ name: 'socialLinks', title: 'Social Links', type: 'array', of: [{ type: 'url' }] }),
    defineField({ name: 'notes', title: 'Internal Notes', type: 'text' }),
  ],
})