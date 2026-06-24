import {defineField, defineType} from 'sanity'

export const location = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Location Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'country', title: 'Country', type: 'string' }),
    defineField({ name: 'county', title: 'County / Region', type: 'string' }),
    defineField({ name: 'city', title: 'City', type: 'string' }),
    defineField({ name: 'area', title: 'Area', type: 'string' }),
    defineField({ name: 'estate', title: 'Estate / Street', type: 'string' }),
    defineField({ name: 'centerPoint', title: 'Center Point', type: 'geopoint' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ],
})