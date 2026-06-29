import {defineArrayMember, defineField, defineType} from 'sanity'

export const property = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',

  groups: [
    {name: 'listing', title: 'Listing', default: true},
    {name: 'location', title: 'Location'},
    {name: 'specs', title: 'Specifications'},
    {name: 'pricing', title: 'Pricing'},
    {name: 'content', title: 'Content'},
    {name: 'media', title: 'Media'},
    {name: 'relationships', title: 'Relationships'},
    {name: 'ai', title: 'AI Profile'},
    {name: 'seo', title: 'SEO & Leads'},
  ],

  fields: [
    // ─── LISTING ────────────────────────────────────────────────────────────

    defineField({
      name: 'title',
      title: 'Property Name',
      type: 'string',
      group: 'listing',
      description: 'The full marketing name of the property. This appears as the page heading.',
      validation: (Rule) => Rule.required().min(3).max(120),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'listing',
      description: 'Auto-generated from the property name. Used in the page URL — do not change after publishing.',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'referenceCode',
      title: 'Reference Code',
      type: 'string',
      group: 'listing',
      description: 'Internal code used by sales and support teams. e.g. ECH-2024-001',
    }),

    defineField({
      name: 'listingType',
      title: 'Listing Type',
      type: 'string',
      group: 'listing',
      description: 'How this property is being offered to the market.',
      options: {
        list: [
          {title: 'For Sale', value: 'sale'},
          {title: 'For Rent', value: 'rent'},
          {title: 'Lease', value: 'lease'},
          {title: 'Short Let', value: 'short-let'},
          {title: 'Off Plan', value: 'off-plan'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'assetType',
      title: 'Asset Type',
      type: 'string',
      group: 'listing',
      description: 'Broad category of the asset.',
      options: {
        list: [
          {title: 'Residential', value: 'residential'},
          {title: 'Commercial', value: 'commercial'},
          {title: 'Land', value: 'land'},
          {title: 'Mixed Use', value: 'mixed-use'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      group: 'listing',
      description: 'Specific property sub-type used for filtering.',
      options: {
        list: [
          {title: 'Apartment', value: 'apartment'},
          {title: 'Condo', value: 'condo'},
          {title: 'Villa', value: 'villa'},
          {title: 'Townhouse', value: 'townhouse'},
          {title: 'Penthouse', value: 'penthouse'},
          {title: 'Maisonette', value: 'maisonette'},
          {title: 'Bungalow', value: 'bungalow'},
          {title: 'Detached House', value: 'detached-house'},
          {title: 'Semi-Detached House', value: 'semi-detached-house'},
          {title: 'Office', value: 'office'},
          {title: 'Shop / Retail', value: 'shop'},
          {title: 'Warehouse', value: 'warehouse'},
          {title: 'Commercial Building', value: 'commercial-building'},
          {title: 'Plot', value: 'plot'},
          {title: 'Farm Land', value: 'farm-land'},
          {title: 'Industrial', value: 'industrial'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'projectStatus',
      title: 'Project Status',
      type: 'string',
      group: 'listing',
      description: 'The current development or construction stage of the property.',
      options: {
        list: [
          {title: 'Coming Soon', value: 'coming-soon'},
          {title: 'Off Plan', value: 'off-plan'},
          {title: 'Under Construction', value: 'under-construction'},
          {title: 'Completed', value: 'completed'},
          {title: 'Renovated', value: 'renovated'},
          {title: 'Sold Out', value: 'sold-out'},
          {title: 'Rented Out', value: 'rented-out'},
          {title: 'Withdrawn', value: 'withdrawn'},
        ],
      },
    }),

    defineField({
      name: 'availabilityStatus',
      title: 'Availability Status',
      type: 'string',
      group: 'listing',
      description: 'Shown to buyers on the listing card and detail page.',
      options: {
        list: [
          {title: 'Available', value: 'available'},
          {title: 'Few Units Left', value: 'few-units-left'},
          {title: 'Waiting List', value: 'waiting-list'},
          {title: 'Sold Out', value: 'sold-out'},
          {title: 'Occupied', value: 'occupied'},
          {title: 'Coming Soon', value: 'coming-soon'},
        ],
      },
    }),

    defineField({
      name: 'isFeatured',
      title: 'Featured Property',
      type: 'boolean',
      group: 'listing',
      description: 'Pin to featured sections on the homepage and search results.',
      initialValue: false,
    }),

    defineField({
      name: 'isNew',
      title: 'New Listing',
      type: 'boolean',
      group: 'listing',
      description: 'Show a "New" badge on the listing card.',
      initialValue: false,
    }),

    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      group: 'listing',
      description: 'Unpublish to hide from all platforms without deleting the record.',
      initialValue: true,
    }),

    defineField({
      name: 'listingOrder',
      title: 'Listing Order',
      type: 'number',
      group: 'listing',
      description: 'Lower numbers appear first. Use 0 for default ordering.',
      initialValue: 0,
    }),

    // ─── LOCATION ───────────────────────────────────────────────────────────

    defineField({
      name: 'locationRef',
      title: 'Location Area',
      type: 'reference',
      group: 'location',
      to: [{type: 'location'}],
      description:
        'Link to a Location document. Enables browse-by-area pages and location-based filtering.',
    }),

    defineField({
      name: 'location',
      title: 'Property Address',
      type: 'object',
      group: 'location',
      description: 'Specific address details and map pin for this property.',
      fields: [
        defineField({
          name: 'country',
          title: 'Country',
          type: 'string',
          initialValue: 'Kenya',
          validation: (Rule) => Rule.required(),
        }),
        defineField({name: 'county', title: 'County / State / Region', type: 'string'}),
        defineField({name: 'city', title: 'City', type: 'string'}),
        defineField({name: 'area', title: 'Area / Neighbourhood', type: 'string'}),
        defineField({name: 'estate', title: 'Estate / Street', type: 'string'}),
        defineField({
          name: 'addressLine',
          title: 'Full Address Line',
          type: 'string',
          description:
            'Override to show a custom address string on the listing. Leave blank to build from the fields above.',
        }),
        defineField({
          name: 'mapLocation',
          title: 'Map Pin',
          type: 'geopoint',
          description: 'Drop a pin on the exact location. Used for map views and distance calculations.',
        }),
      ],
    }),

    // ─── SPECIFICATIONS ─────────────────────────────────────────────────────

    defineField({
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
      group: 'specs',
      description: 'Number of bedrooms. Leave blank for commercial or land properties.',
      validation: (Rule) => Rule.min(0).integer(),
    }),

    defineField({
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
      group: 'specs',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'toilets',
      title: 'Toilets',
      type: 'number',
      group: 'specs',
      validation: (Rule) => Rule.min(0).integer(),
    }),

    defineField({
      name: 'ensuiteBedrooms',
      title: 'Ensuite Bedrooms',
      type: 'number',
      group: 'specs',
      validation: (Rule) => Rule.min(0).integer(),
    }),

    defineField({
      name: 'sizeSqm',
      title: 'Size (m²)',
      type: 'number',
      group: 'specs',
      description: 'Total floor area in square metres.',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'sizeSqft',
      title: 'Size (Sq Ft)',
      type: 'number',
      group: 'specs',
      description: 'Total floor area in square feet.',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'floors',
      title: 'Number of Floors / Storeys',
      type: 'number',
      group: 'specs',
      description: 'For multi-storey properties or buildings.',
      validation: (Rule) => Rule.min(1).integer(),
    }),

    defineField({
      name: 'parkingSpaces',
      title: 'Parking Spaces',
      type: 'number',
      group: 'specs',
      validation: (Rule) => Rule.min(0).integer(),
    }),

    defineField({
      name: 'garageSpaces',
      title: 'Garage Spaces',
      type: 'number',
      group: 'specs',
      validation: (Rule) => Rule.min(0).integer(),
    }),

    defineField({
      name: 'yearBuilt',
      title: 'Year Built',
      type: 'number',
      group: 'specs',
      description: 'Year the property was completed or constructed.',
      validation: (Rule) => Rule.min(1900).max(2040).integer(),
    }),

    defineField({
      name: 'completionDate',
      title: 'Expected Completion Date',
      type: 'date',
      group: 'specs',
      description: 'For off-plan or under-construction properties.',
      options: {dateFormat: 'MMMM YYYY'},
    }),

    defineField({
      name: 'tenure',
      title: 'Tenure',
      type: 'string',
      group: 'specs',
      description: 'The legal ownership structure of this property.',
      options: {
        list: [
          {title: 'Freehold', value: 'freehold'},
          {title: 'Leasehold', value: 'leasehold'},
          {title: 'Sectional Title', value: 'sectional'},
          {title: 'Shared Ownership', value: 'shared-ownership'},
          {title: 'TBD', value: 'tbd'},
        ],
      },
    }),

    defineField({
      name: 'titleDeedStatus',
      title: 'Title / Ownership Status',
      type: 'string',
      group: 'specs',
      description: 'Current status of the title deed.',
      options: {
        list: [
          {title: 'Available', value: 'available'},
          {title: 'Processing', value: 'processing'},
          {title: 'Held by Developer', value: 'held-by-developer'},
          {title: 'Not Applicable', value: 'not-applicable'},
        ],
      },
    }),

    defineField({
      name: 'zoning',
      title: 'Zoning',
      type: 'string',
      group: 'specs',
      options: {
        list: [
          {title: 'Residential', value: 'residential'},
          {title: 'Commercial', value: 'commercial'},
          {title: 'Mixed Use', value: 'mixed-use'},
          {title: 'Agricultural', value: 'agricultural'},
          {title: 'Industrial', value: 'industrial'},
          {title: 'Not Specified', value: 'not-specified'},
        ],
      },
    }),

    // ─── PRICING ────────────────────────────────────────────────────────────

    defineField({
      name: 'price',
      title: 'Starting Price',
      type: 'number',
      group: 'pricing',
      description: 'The base or starting price in the selected currency.',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'priceTo',
      title: 'Maximum Price',
      type: 'number',
      group: 'pricing',
      description:
        'For price ranges — e.g. from KES 8M to KES 12M. Leave blank for a fixed price.',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      group: 'pricing',
      initialValue: 'KES',
      options: {
        list: [
          {title: 'KES – Kenyan Shilling', value: 'KES'},
          {title: 'USD – US Dollar', value: 'USD'},
          {title: 'GBP – British Pound', value: 'GBP'},
          {title: 'EUR – Euro', value: 'EUR'},
        ],
      },
    }),

    defineField({
      name: 'priceLabel',
      title: 'Price Label',
      type: 'string',
      group: 'pricing',
      description:
        'Displayed before the price on the listing. e.g. "Starting from", "Asking price", "Monthly rent", "Per acre".',
    }),

    defineField({
      name: 'serviceCharge',
      title: 'Service Charge (Monthly)',
      type: 'number',
      group: 'pricing',
      description: 'Monthly service or maintenance charge in the listing currency, if applicable.',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'deposit',
      title: 'Deposit',
      type: 'number',
      group: 'pricing',
      description: 'Required deposit or reservation fee.',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'paymentPlan',
      title: 'Payment Plan',
      type: 'object',
      group: 'pricing',
      fields: [
        defineField({
          name: 'available',
          title: 'Payment Plan Available',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'description',
          title: 'Plan Description',
          type: 'text',
          description: 'Briefly describe the payment plan terms for buyers.',
        }),
        defineField({
          name: 'initialDeposit',
          title: 'Initial Deposit (%)',
          type: 'number',
          description: 'Enter as a percentage. e.g. 30 = 30%.',
          validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
          name: 'balancePeriod',
          title: 'Balance Period',
          type: 'string',
          description: 'When must the balance be paid? e.g. "24 months after completion".',
        }),
        defineField({
          name: 'installmentAmount',
          title: 'Monthly Instalment Amount',
          type: 'number',
          description: 'In the listing currency.',
          validation: (Rule) => Rule.min(0),
        }),
      ],
    }),

    defineField({
      name: 'financing',
      title: 'Financing Options',
      type: 'object',
      group: 'pricing',
      fields: [
        defineField({
          name: 'mortgageAvailable',
          title: 'Mortgage Available',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'developerFinancing',
          title: 'Developer Financing',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'bankPartners',
          title: 'Bank / Lender Partners',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Banks or financial institutions offering loans for this property.',
        }),
      ],
    }),

    // ─── CONTENT ────────────────────────────────────────────────────────────

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      group: 'content',
      description:
        'A concise 2–4 sentence summary used in listing cards, search results, and SEO meta descriptions. Aim for 100–300 characters.',
      rows: 4,
      validation: (Rule) => Rule.required().min(50).max(500),
    }),

    defineField({
      name: 'body',
      title: 'Full Description',
      type: 'array',
      group: 'content',
      description:
        'The long-form property description shown on the detail page. Supports headings, bullet lists, and inline images.',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Describe the image for screen readers and SEO.',
            }),
            defineField({name: 'caption', title: 'Caption', type: 'string'}),
          ],
        },
      ],
    }),

    defineField({
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      group: 'content',
      of: [{type: 'string'}],
      description:
        'Short bullet points displayed prominently on the listing. e.g. "Rooftop pool", "24/7 security", "Ocean views". Keep to 8 or fewer.',
    }),

    defineField({
      name: 'pros',
      title: 'Pros',
      type: 'array',
      group: 'content',
      of: [{type: 'string'}],
      description: 'Advantages of this property shown in the pros/cons comparison.',
    }),

    defineField({
      name: 'cons',
      title: 'Cons',
      type: 'array',
      group: 'content',
      of: [{type: 'string'}],
      description: 'Drawbacks or considerations — be honest to build buyer trust.',
    }),

    defineField({
      name: 'idealBuyer',
      title: 'Ideal Buyer',
      type: 'array',
      group: 'content',
      of: [{type: 'string'}],
      description:
        'Who is this property best suited for? e.g. "Young professional", "Family with children", "Buy-to-let investor".',
    }),

    defineField({
      name: 'bestFor',
      title: 'Best For',
      type: 'array',
      group: 'content',
      of: [{type: 'string'}],
      description: 'Use cases this property excels at. e.g. "Airbnb rentals", "Remote working".',
    }),

    defineField({
      name: 'notFor',
      title: 'Not Ideal For',
      type: 'array',
      group: 'content',
      of: [{type: 'string'}],
      description: 'Honest caveats. e.g. "Buyers needing immediate occupation".',
    }),

    // ─── MEDIA ──────────────────────────────────────────────────────────────

    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'media',
      description: 'The primary listing image. Use a high-quality landscape photo (min 1200px wide).',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for SEO and accessibility. e.g. "Exterior view of Westgate Residences".',
        }),
      ],
    }),

    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      group: 'media',
      description: 'Upload multiple photos. The first image is the fallback if no hero image is set.',
      of: [
        defineArrayMember({
          name: 'galleryImage',
          type: 'object',
          title: 'Photo',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Brief description of the photo for screen readers and SEO.',
            }),
            defineField({name: 'caption', title: 'Caption', type: 'string'}),
          ],
          preview: {
            select: {media: 'image', title: 'alt', subtitle: 'caption'},
            prepare({media, title, subtitle}) {
              return {
                title: title || 'Photo',
                subtitle: subtitle || '',
                media,
              }
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'brochure',
      title: 'Property Brochure',
      type: 'file',
      group: 'media',
      description: 'Upload a PDF brochure. Buyers can download it directly from the listing page.',
      options: {accept: '.pdf'},
    }),

    defineField({
      name: 'videoTours',
      title: 'Video Tours',
      type: 'array',
      group: 'media',
      description: 'Add YouTube or Vimeo walkthrough videos.',
      of: [
        defineArrayMember({
          name: 'videoTour',
          type: 'object',
          title: 'Video Tour',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'e.g. "Full Property Walkthrough", "Kitchen & Living Area Tour"',
            }),
            defineField({
              name: 'provider',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'Vimeo', value: 'vimeo'},
                  {title: 'Other', value: 'other'},
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'Video URL',
              type: 'url',
              description: 'Full URL to the YouTube or Vimeo video page.',
              validation: (Rule) => Rule.uri({scheme: ['https', 'http']}),
            }),
            defineField({
              name: 'thumbnail',
              title: 'Custom Thumbnail',
              type: 'image',
              options: {hotspot: true},
              description: 'Optional. Overrides the auto-generated thumbnail.',
            }),
            defineField({
              name: 'isPrimary',
              title: 'Primary Video',
              type: 'boolean',
              initialValue: false,
              description: 'The primary video is displayed first and may be embedded on the hero.',
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'provider', media: 'thumbnail'},
            prepare({title, subtitle, media}) {
              return {
                title: title || 'Video Tour',
                subtitle: subtitle || '',
                media,
              }
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'virtualTours',
      title: 'Virtual Tours',
      type: 'array',
      group: 'media',
      description:
        'Add immersive 3D or 360° tours. Use "Matterport 3D Tour" for Matterport links — the embed viewer is fully supported.',
      of: [
        defineArrayMember({
          name: 'matterportTour',
          type: 'object',
          title: 'Matterport 3D Tour',
          fields: [
            defineField({
              name: 'title',
              title: 'Tour Title',
              type: 'string',
              description: 'e.g. "3-Bedroom Show Unit", "Full Building Tour"',
            }),
            defineField({
              name: 'shareUrl',
              title: 'Matterport Share URL',
              type: 'url',
              description:
                'Paste the share link from Matterport. Format: https://my.matterport.com/show/?m=XXXXXXXXX',
              validation: (Rule) => [
                Rule.required().error('A Matterport share URL is required.'),
                Rule.uri({scheme: ['https']}).error('The URL must use HTTPS.'),
                Rule.custom((url: string | undefined) => {
                  if (!url) return true
                  if (!/matterport\.com/i.test(url)) {
                    return 'Must be a valid Matterport URL containing matterport.com — e.g. https://my.matterport.com/show/?m=ABC123'
                  }
                  return true
                }),
              ],
            }),
            defineField({
              name: 'modelId',
              title: 'Model ID (Optional)',
              type: 'string',
              description:
                'The Matterport model ID — the value of the "?m=" parameter in the share URL. Example: SFR2tst4aXF. The frontend can extract this from the share URL automatically, but setting it here is more reliable.',
            }),
            defineField({
              name: 'thumbnail',
              title: 'Custom Thumbnail',
              type: 'image',
              options: {hotspot: true},
              description:
                'Optional. If left blank, the frontend uses the Matterport default preview image.',
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                }),
              ],
            }),
            defineField({
              name: 'description',
              title: 'Tour Description',
              type: 'text',
              description:
                'Brief description of what the viewer will see. Shown below the embed.',
            }),
            defineField({
              name: 'isFeatured',
              title: 'Featured Tour',
              type: 'boolean',
              initialValue: false,
              description:
                'Mark as featured to display this tour prominently on the listing page. Only one tour should be featured.',
            }),
            defineField({
              name: 'autoPlay',
              title: 'Auto Play',
              type: 'boolean',
              initialValue: false,
              description:
                'Start the tour automatically when the page loads. Not recommended for mobile users.',
            }),
            defineField({
              name: 'hideUi',
              title: 'Hide Matterport Controls',
              type: 'boolean',
              initialValue: false,
              description:
                'Hides the Matterport navigation UI for a cleaner embedded experience.',
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'shareUrl', media: 'thumbnail'},
            prepare({title, subtitle, media}) {
              return {
                title: title || 'Matterport 3D Tour',
                subtitle: subtitle || 'No URL set',
                media,
              }
            },
          },
        }),

        defineArrayMember({
          name: 'genericVirtualTour',
          type: 'object',
          title: 'Other Virtual Tour',
          fields: [
            defineField({name: 'title', title: 'Tour Title', type: 'string'}),
            defineField({
              name: 'provider',
              title: 'Provider',
              type: 'string',
              options: {
                list: [
                  {title: 'Kuula', value: 'kuula'},
                  {title: 'Custom 3D', value: 'custom-3d'},
                  {title: '360° Tour', value: '360-tour'},
                  {title: 'Other', value: 'other'},
                ],
              },
            }),
            defineField({
              name: 'embedUrl',
              title: 'Embed URL',
              type: 'url',
              description:
                'The iframe embed URL provided by the virtual tour platform.',
              validation: (Rule) => Rule.required().uri({scheme: ['https', 'http']}),
            }),
            defineField({
              name: 'thumbnail',
              title: 'Thumbnail',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'isPrimary',
              title: 'Primary Tour',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'provider', media: 'thumbnail'},
            prepare({title, subtitle, media}) {
              return {
                title: title || 'Virtual Tour',
                subtitle: subtitle || '',
                media,
              }
            },
          },
        }),
      ],
    }),

    // ─── RELATIONSHIPS ──────────────────────────────────────────────────────

    defineField({
      name: 'developer',
      title: 'Developer',
      type: 'reference',
      group: 'relationships',
      to: [{type: 'developer'}],
      description:
        'The property developer or construction company. Leave blank for individual or private-seller listings.',
    }),

    defineField({
      name: 'agent',
      title: 'Assigned Agent',
      type: 'reference',
      group: 'relationships',
      to: [{type: 'agent'}],
      description: 'The primary agent responsible for this listing.',
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'relationships',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
      description: 'Searchable labels. e.g. "Luxury", "Pet Friendly", "Sea View".',
    }),

    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      group: 'relationships',
      of: [{type: 'reference', to: [{type: 'amenity'}]}],
      description: 'Shared amenities available to residents. e.g. Pool, Gym, Parking, Concierge.',
    }),

    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      group: 'relationships',
      of: [{type: 'reference', to: [{type: 'feature'}]}],
      description: 'Property-specific selling features. e.g. Smart Home, Solar Panels, Backup Generator.',
    }),

    defineField({
      name: 'nearbyPlaces',
      title: 'Nearby Places',
      type: 'array',
      group: 'relationships',
      of: [{type: 'reference', to: [{type: 'nearbyPlace'}]}],
      description: 'Notable places close to the property. e.g. schools, hospitals, shopping malls.',
    }),

    // ─── AI SALES PROFILE ───────────────────────────────────────────────────

    defineField({
      name: 'aiSalesProfile',
      title: 'AI Sales Profile',
      type: 'object',
      group: 'ai',
      description:
        'Structured content fed to the AI recommendation engine and chatbot to help it pitch and describe this property accurately.',
      fields: [
        defineField({
          name: 'oneLineSummary',
          title: 'One-Line Summary',
          type: 'string',
          description: 'A single punchy sentence. e.g. "A luxury penthouse with panoramic Nairobi skyline views and a rooftop pool."',
          validation: (Rule) => Rule.max(160),
        }),
        defineField({
          name: 'plainEnglishSummary',
          title: 'Plain English Summary',
          type: 'text',
          description: 'A jargon-free summary the AI can use to explain this property to buyers.',
        }),
        defineField({
          name: 'salesAngle',
          title: 'Main Sales Angle',
          type: 'text',
          description: 'What is the single strongest reason to buy or rent this property?',
        }),
        defineField({
          name: 'valueProposition',
          title: 'Value Proposition',
          type: 'text',
          description: 'Why does this property represent good value compared to alternatives?',
        }),
        defineField({
          name: 'objectionHandling',
          title: 'Objection Handling',
          type: 'array',
          description: 'Common buyer objections and how to address them.',
          of: [
            defineArrayMember({
              name: 'objectionItem',
              type: 'object',
              fields: [
                defineField({
                  name: 'objection',
                  title: 'Buyer Objection',
                  type: 'string',
                  description: 'e.g. "The price seems high for the area."',
                }),
                defineField({
                  name: 'response',
                  title: 'Suggested Response',
                  type: 'text',
                }),
              ],
              preview: {
                select: {title: 'objection', subtitle: 'response'},
              },
            }),
          ],
        }),
        defineField({
          name: 'idealQuestionsToAsk',
          title: 'Questions to Ask Buyers',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Qualifying questions the AI should ask a prospect about this property.',
        }),
        defineField({
          name: 'recommendedBuyerProfiles',
          title: 'Recommended Buyer Profiles',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({
          name: 'comparisonNotes',
          title: 'Comparison Notes',
          type: 'text',
          description: 'How does this property compare to similar listings on the platform?',
        }),
        defineField({
          name: 'aiSummaryPoints',
          title: 'AI Summary Points',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Key bullet points the AI should always mention about this property.',
        }),
        defineField({
          name: 'disclaimer',
          title: 'AI Disclaimer',
          type: 'text',
          initialValue:
            'This summary was generated or reviewed by an AI assistant. Always verify details with the listing agent before making any decisions.',
        }),
      ],
    }),

    // ─── SEO & LEAD CAPTURE ─────────────────────────────────────────────────

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
          description: 'Target 50–60 characters. Defaults to the property name if left blank.',
          validation: (Rule) => Rule.max(60).warning('Keep the meta title under 60 characters.'),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description:
            'Target 120–160 characters. Defaults to the short description if left blank.',
          rows: 3,
          validation: (Rule) =>
            Rule.max(160).warning('Keep the meta description under 160 characters.'),
        }),
        defineField({
          name: 'ogImage',
          title: 'Social Share Image',
          type: 'image',
          options: {hotspot: true},
          description:
            'Used when the listing is shared on social media. Recommended size: 1200×630px.',
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          description: 'e.g. "3 bedroom apartment Westlands Nairobi for sale".',
        }),
        defineField({
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Only set if this listing duplicates content at another URL.',
        }),
        defineField({
          name: 'noIndex',
          title: 'No Index',
          type: 'boolean',
          initialValue: false,
          description: 'Prevent search engines from indexing this listing (e.g. draft or expired listings).',
        }),
      ],
    }),

    defineField({
      name: 'leadCapture',
      title: 'Lead Capture',
      type: 'object',
      group: 'seo',
      description:
        'Override the default agency contact details for this specific listing.',
      fields: [
        defineField({
          name: 'whatsappNumber',
          title: 'WhatsApp Number',
          type: 'string',
          description: 'Include country code. e.g. +254712345678',
        }),
        defineField({
          name: 'callNumber',
          title: 'Call Number',
          type: 'string',
          description: 'Include country code.',
        }),
        defineField({
          name: 'email',
          title: 'Enquiry Email',
          type: 'string',
        }),
        defineField({
          name: 'bookingUrl',
          title: 'Viewing / Booking URL',
          type: 'url',
          description: 'Link to a booking form, Calendly, or viewing scheduler.',
        }),
        defineField({
          name: 'ctaLabel',
          title: 'CTA Button Label',
          type: 'string',
          description: 'Text on the primary call-to-action button. e.g. "Book a Viewing", "Request a Callback".',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      listingType: 'listingType',
      area: 'location.area',
      city: 'location.city',
      media: 'heroImage',
      status: 'availabilityStatus',
    },
    prepare({title, listingType, area, city, media, status}) {
      const loc = [area, city].filter(Boolean).join(', ')
      const type = listingType ? listingType.toUpperCase() : ''
      const statusBadge = status && status !== 'available' ? ` · ${status}` : ''
      return {
        title: title || 'Untitled Property',
        subtitle: [type, loc].filter(Boolean).join(' · ') + statusBadge,
        media,
      }
    },
  },
})
