import { defineField, defineType } from 'sanity'

export const property = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Property Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'referenceCode',
      title: 'Reference Code',
      type: 'string',
      description: 'Internal code used by sales and support teams.',
    }),

    defineField({
      name: 'listingType',
      title: 'Listing Type',
      type: 'string',
      options: {
        list: [
          { title: 'For Sale', value: 'sale' },
          { title: 'For Rent', value: 'rent' },
          { title: 'Lease', value: 'lease' },
          { title: 'Short Let', value: 'short-let' },
          { title: 'Off Plan', value: 'off-plan' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'assetType',
      title: 'Asset Type',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Land', value: 'land' },
          { title: 'Mixed Use', value: 'mixed-use' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          { title: 'Apartment', value: 'apartment' },
          { title: 'Condo', value: 'condo' },
          { title: 'Villa', value: 'villa' },
          { title: 'Townhouse', value: 'townhouse' },
          { title: 'Penthouse', value: 'penthouse' },
          { title: 'Maisonette', value: 'maisonette' },
          { title: 'Bungalow', value: 'bungalow' },
          { title: 'Detached House', value: 'detached-house' },
          { title: 'Semi Detached House', value: 'semi-detached-house' },
          { title: 'Office', value: 'office' },
          { title: 'Shop', value: 'shop' },
          { title: 'Warehouse', value: 'warehouse' },
          { title: 'Commercial Building', value: 'commercial-building' },
          { title: 'Plot', value: 'plot' },
          { title: 'Farm Land', value: 'farm-land' },
          { title: 'Industrial', value: 'industrial' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'projectStatus',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          { title: 'Coming Soon', value: 'coming-soon' },
          { title: 'Off Plan', value: 'off-plan' },
          { title: 'Under Construction', value: 'under-construction' },
          { title: 'Completed', value: 'completed' },
          { title: 'Renovated', value: 'renovated' },
          { title: 'Sold Out', value: 'sold-out' },
          { title: 'Rented Out', value: 'rented-out' },
          { title: 'Withdrawn', value: 'withdrawn' },
        ],
      },
    }),

    defineField({
      name: 'availabilityStatus',
      title: 'Availability Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Few Units Left', value: 'few-units-left' },
          { title: 'Waiting List', value: 'waiting-list' },
          { title: 'Sold Out', value: 'sold-out' },
          { title: 'Occupied', value: 'occupied' },
          { title: 'Coming Soon', value: 'coming-soon' },
        ],
      },
    }),

    defineField({
      name: 'isFeatured',
      title: 'Featured Property',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'isNew',
      title: 'New Listing',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'price',
      title: 'Starting Price',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'priceTo',
      title: 'Maximum Price',
      type: 'number',
      description: 'Use this when the property has a range.',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      initialValue: 'KES',
      options: {
        list: [
          { title: 'KES', value: 'KES' },
          { title: 'USD', value: 'USD' },
          { title: 'GBP', value: 'GBP' },
          { title: 'EUR', value: 'EUR' },
        ],
      },
    }),

    defineField({
      name: 'priceLabel',
      title: 'Price Label',
      type: 'string',
      description: 'Examples: Starting from, Asking price, Monthly rent, Per acre.',
    }),

    defineField({
      name: 'serviceCharge',
      title: 'Service Charge',
      type: 'number',
      description: 'Monthly service charge if applicable.',
    }),

    defineField({
      name: 'deposit',
      title: 'Deposit',
      type: 'number',
    }),

    defineField({
      name: 'paymentPlan',
      title: 'Payment Plan',
      type: 'object',
      fields: [
        defineField({ name: 'available', title: 'Payment Plan Available', type: 'boolean', initialValue: false }),
        defineField({ name: 'description', title: 'Plan Description', type: 'text' }),
        defineField({ name: 'initialDeposit', title: 'Initial Deposit', type: 'number' }),
        defineField({ name: 'balancePeriod', title: 'Balance Period', type: 'string' }),
        defineField({ name: 'installmentAmount', title: 'Installment Amount', type: 'number' }),
      ],
    }),

    defineField({
      name: 'financing',
      title: 'Financing',
      type: 'object',
      fields: [
        defineField({ name: 'mortgageAvailable', title: 'Mortgage Available', type: 'boolean', initialValue: false }),
        defineField({ name: 'developerFinancing', title: 'Developer Financing', type: 'boolean', initialValue: false }),
        defineField({ name: 'bankPartners', title: 'Bank Partners', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        defineField({ name: 'country', title: 'Country', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'county', title: 'County / State / Region', type: 'string' }),
        defineField({ name: 'city', title: 'City', type: 'string' }),
        defineField({ name: 'area', title: 'Area / Neighborhood', type: 'string' }),
        defineField({ name: 'estate', title: 'Estate / Street / Plot Area', type: 'string' }),
        defineField({ name: 'addressLine', title: 'Address Line', type: 'string' }),
        defineField({ name: 'mapLocation', title: 'Map Location', type: 'geopoint' }),
      ],
    }),

    defineField({
      name: 'tenure',
      title: 'Tenure',
      type: 'string',
      options: {
        list: [
          { title: 'Freehold', value: 'freehold' },
          { title: 'Leasehold', value: 'leasehold' },
          { title: 'Sectional', value: 'sectional' },
          { title: 'Shared Ownership', value: 'shared-ownership' },
          { title: 'TBD', value: 'tbd' },
        ],
      },
    }),

    defineField({
      name: 'titleDeedStatus',
      title: 'Title / Ownership Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Processing', value: 'processing' },
          { title: 'Held by Developer', value: 'held-by-developer' },
          { title: 'Not Applicable', value: 'not-applicable' },
        ],
      },
    }),

    defineField({
      name: 'zoning',
      title: 'Zoning',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Mixed Use', value: 'mixed-use' },
          { title: 'Agricultural', value: 'agricultural' },
          { title: 'Industrial', value: 'industrial' },
          { title: 'Not Specified', value: 'not-specified' },
        ],
      },
    }),

    defineField({
      name: 'developer',
      title: 'Developer',
      type: 'reference',
      to: [{ type: 'developer' }],
    }),

    defineField({
      name: 'agent',
      title: 'Assigned Agent',
      type: 'reference',
      to: [{ type: 'agent' }],
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    }),

    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'amenity' }] }],
    }),

    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'feature' }] }],
    }),

    defineField({
      name: 'nearbyPlaces',
      title: 'Nearby Places',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'nearbyPlace' }] }],
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'brochure',
      title: 'Brochure',
      type: 'file',
    }),

    defineField({
      name: 'videoTours',
      title: 'Video Tours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({
              name: 'provider',
              title: 'Provider',
              type: 'string',
              options: {
                list: [
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Vimeo', value: 'vimeo' },
                  { title: 'Other', value: 'other' },
                ],
              },
            }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
            defineField({ name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'isPrimary', title: 'Primary Tour', type: 'boolean', initialValue: false }),
          ],
        },
      ],
    }),

    defineField({
      name: 'virtualTours',
      title: 'Virtual Tours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Tour Title', type: 'string' }),
            defineField({
              name: 'provider',
              title: 'Provider',
              type: 'string',
              options: {
                list: [
                  { title: 'Matterport', value: 'matterport' },
                  { title: 'Kuula', value: 'kuula' },
                  { title: 'Custom 3D', value: 'custom-3d' },
                  { title: '360 Tour', value: '360-tour' },
                ],
              },
            }),
            defineField({ name: 'embedUrl', title: 'Embed / Share URL', type: 'url' }),
            defineField({ name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'isPrimary', title: 'Primary Tour', type: 'boolean', initialValue: false }),
          ],
        },
      ],
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'body',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'idealBuyer',
      title: 'Ideal Buyer',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'bestFor',
      title: 'Best For',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'notFor',
      title: 'Not Best For',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'pros',
      title: 'Pros',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'cons',
      title: 'Cons',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'aiSalesProfile',
      title: 'AI Sales Profile',
      type: 'object',
      fields: [
        defineField({ name: 'oneLineSummary', title: 'One Line Summary', type: 'string' }),
        defineField({ name: 'plainEnglishSummary', title: 'Plain English Summary', type: 'text' }),
        defineField({ name: 'salesAngle', title: 'Main Sales Angle', type: 'text' }),
        defineField({ name: 'valueProposition', title: 'Value Proposition', type: 'text' }),
        defineField({ name: 'objectionHandling', title: 'Objection Handling', type: 'array', of: [{ type: 'object', fields: [
          defineField({ name: 'objection', title: 'Objection', type: 'string' }),
          defineField({ name: 'response', title: 'Response', type: 'text' }),
        ]}] }),
        defineField({ name: 'idealQuestionsToAsk', title: 'Ideal Questions To Ask', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'recommendedBuyerProfiles', title: 'Recommended Buyer Profiles', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'comparisonNotes', title: 'Comparison Notes', type: 'text' }),
        defineField({ name: 'aiSummaryPoints', title: 'AI Summary Points', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'disclaimer', title: 'AI Disclaimer', type: 'text' }),
      ],
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
        defineField({ name: 'ogImage', title: 'OG Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'canonicalUrl', title: 'Canonical URL', type: 'url' }),
        defineField({ name: 'noIndex', title: 'No Index', type: 'boolean', initialValue: false }),
      ],
    }),

    defineField({
      name: 'leadCapture',
      title: 'Lead Capture',
      type: 'object',
      fields: [
        defineField({ name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string' }),
        defineField({ name: 'callNumber', title: 'Call Number', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'bookingUrl', title: 'Viewing / Booking URL', type: 'url' }),
        defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
      ],
    }),

    defineField({
      name: 'listingOrder',
      title: 'Listing Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
})