import {defineType, defineField} from 'sanity'

export const nearbyPlace = defineType({
  name: 'nearbyPlace',
  title: 'Nearby Place',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'mapLocation', title: 'Map Location', type: 'geopoint' }),
  ],
})