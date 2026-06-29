import {defineField, defineType} from 'sanity'

export const nearbyPlace = defineType({
  name: 'nearbyPlace',
  title: 'Nearby Place',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Place Name',
      type: 'string',
      description: 'e.g. "Westgate Shopping Mall", "Aga Khan Hospital", "Rosslyn Academy".',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Auto-generated from name.',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Used to group nearby places on the listing page.',
      options: {
        list: [
          {title: 'School / Education', value: 'school'},
          {title: 'Hospital / Clinic', value: 'hospital'},
          {title: 'Shopping Mall', value: 'mall'},
          {title: 'Supermarket', value: 'supermarket'},
          {title: 'Restaurant / Café', value: 'restaurant'},
          {title: 'Gym / Fitness', value: 'gym'},
          {title: 'Park / Recreation', value: 'park'},
          {title: 'Transport / Commute', value: 'transport'},
          {title: 'Bank / ATM', value: 'bank'},
          {title: 'Place of Worship', value: 'worship'},
          {title: 'Entertainment', value: 'entertainment'},
          {title: 'Petrol Station', value: 'petrol'},
          {title: 'Airport', value: 'airport'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),

    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Icon identifier from the frontend icon library (e.g. Lucide). e.g. "school", "hospital", "shopping-bag".',
    }),

    defineField({
      name: 'distanceHint',
      title: 'Distance Hint',
      type: 'string',
      description:
        'Approximate distance from the typical property in this area. e.g. "500m", "2km", "5 min drive". This is a display string, not a calculated value.',
    }),

    defineField({
      name: 'mapLocation',
      title: 'Map Location',
      type: 'geopoint',
      description: 'Pin the exact location of this place on the map.',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional brief description. e.g. "International school with IB curriculum, 800m from the development."',
      rows: 3,
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      distance: 'distanceHint',
    },
    prepare({title, subtitle, distance}) {
      return {
        title: title || 'Unnamed Place',
        subtitle: [subtitle, distance].filter(Boolean).join(' · '),
      }
    },
  },
})
