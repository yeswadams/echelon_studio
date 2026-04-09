import { defineField, defineType } from 'sanity'

export const property = defineType({
  name: 'property',
  title: 'Property Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Property/Project Name',
      type: 'string',
      description: 'e.g. Echelon Heights, Westlands',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Starting Price (KES)',
      description: 'The lowest price point for this development. Store numeric value only.',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'estimatedPayment',
      title: 'Estimated Payment',
      description: 'Monthly mortgage or rent estimate.',
      type: 'number',
    }),
    defineField({
      name: 'listingType',
      title: 'Listing Type',
      type: 'string',
      options: {
        list: [
          { title: 'For Sale', value: 'Sale' },
          { title: 'For Rent', value: 'Rent' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: ['Apartment', 'Condo', 'Villa', 'Townhouse', 'Penthouse'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Main Property Gallery',
      description: 'Photos of the building exterior, lobby, and common areas.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'locationName',
      title: 'Location Name',
      placeholder: 'e.g. Westlands, Nairobi',
      type: 'string',
    }),
    defineField({
      name: 'mapLocation',
      title: 'Google Map Location',
      type: 'geopoint',
    }),
    defineField({
      name: 'description',
      title: 'Property Description',
      type: 'text',
    }),

    // --- REFINED FLOOR PLANS / UNIT CONFIGURATIONS ---
    defineField({
      name: 'floorPlans',
      title: 'Available Unit Types & Floor Plans',
      description: 'Add different unit configurations available in this building.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'unitConfig',
          title: 'Unit Configuration',
          fields: [
            defineField({ name: 'title', title: 'Unit Name', type: 'string', placeholder: 'e.g. 2 Bedroom Type A' }),
            defineField({ 
              name: 'unitPrice', 
              title: 'Unit Price (KES)', 
              type: 'number',
              description: 'Specific price for this unit type.' 
            }),
            defineField({ name: 'bedrooms', title: 'Number of Bedrooms', type: 'number' }),
            defineField({ name: 'bathrooms', title: 'Number of Bathrooms', type: 'number' }),
            defineField({ 
              name: 'isEnsuite', 
              title: 'All Bedrooms Ensuite?', 
              type: 'boolean', 
              initialValue: false 
            }),
            defineField({ name: 'floorArea', title: 'Floor Area (SqFt)', type: 'number' }),
            defineField({ name: 'sizeSqm', title: 'Approx. Size (m²)', type: 'number' }),
            defineField({ name: 'serviceCharge', title: 'Service Charge (KES/mo)', type: 'number' }),
            defineField({ name: 'estimatedRent', title: 'Estimated Rent (Range)', type: 'string', placeholder: 'e.g. KSh 60,000 - 85,000' }),
            defineField({
              name: 'pricesPerFloor',
              title: 'Prices Per Floor Range',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'floorRange', title: 'Floor Range', type: 'string', placeholder: 'e.g. 1st - 7th' },
                    { name: 'price', title: 'Price (KES)', type: 'number' },
                  ]
                }
              ]
            }),
            defineField({ name: 'planImage', title: 'Floor Plan Image', type: 'image', options: { hotspot: true } }),
            defineField({ 
              name: 'unitDescription', 
              title: 'Unit Features/Description List', 
              type: 'array', 
              of: [{ type: 'string' }] 
            }),
          ],
          preview: {
            select: {
              title: 'title',
              beds: 'bedrooms',
              price: 'unitPrice',
              media: 'planImage'
            },
            prepare({ title, beds, price, media }) {
              return {
                title: title || 'New Unit',
                subtitle: `${beds || 0} Bed | KES ${price?.toLocaleString() || 'N/A'}`,
                media: media
              }
            }
          }
        },
      ],
    }),

    // --- REMAINING SECTIONS ---
    defineField({
      name: 'propertyFeatures',
      title: 'Detailed Features',
      type: 'object',
      fields: [
        { name: 'introText', title: 'Intro Text', type: 'text' },
        { name: 'propertyDetails', title: 'General Details', type: 'array', of: [{ type: 'string' }] },
        { name: 'utilityDetails', title: 'Utilities', type: 'array', of: [{ type: 'string' }] },
        { name: 'outdoorFeatures', title: 'Outdoor Features', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'object',
      fields: [
        { name: 'introText', title: 'Intro Text', type: 'text' },
        {
          name: 'items',
          title: 'Amenity Items',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: [
              'Swimming Pool', 'Gym', 'Security', 'Elevator', 
              'Parking', 'Playground', 'Garden', 'CCTV', 'Backup Generator', 'Club House'
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'videoTour',
      title: 'Video Tour',
      type: 'object',
      fields: [
        { name: 'placeholderImage', title: 'Video Placeholder', type: 'image' },
        { name: 'youtubeUrl', title: 'YouTube URL', type: 'url' },
      ],
    }),
    defineField({
      name: 'nearbyPlaces',
      title: 'Nearby Places',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Place Name', type: 'string' },
            { name: 'distanceKm', title: 'Distance (KM)', type: 'number' },
          ],
        },
      ],
    }),
    defineField({
      name: 'agent',
      title: 'Assigned Agent',
      type: 'reference',
      to: [{ type: 'agent' }],
    }),
  ],
})

/**
 * Agent Schema
 */
export const agent = defineType({
  name: 'agent',
  title: 'Agents',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({
      name: 'socials',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'twitter', title: 'Twitter URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
      ],
    }),
  ],
})