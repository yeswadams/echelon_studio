import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog / Article',
  type: 'document',

  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'meta', title: 'Meta'},
    {name: 'seo', title: 'SEO'},
  ],

  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      group: 'content',
      description: 'The headline of the article. Also used as the page title.',
      validation: (Rule) => Rule.required().min(10).max(120),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      description: 'Auto-generated from the title. Used in the article URL — do not change after publishing.',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      group: 'content',
      description:
        'A short 1–2 sentence summary shown in article cards and used as the meta description if SEO is not set.',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      description: 'Hero image for the article. Recommended: 1200×630px.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for accessibility and SEO.',
        }),
        defineField({name: 'caption', title: 'Caption', type: 'string'}),
      ],
    }),

    defineField({
      name: 'body',
      title: 'Article Body',
      type: 'array',
      group: 'content',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Alt Text', type: 'string'}),
            defineField({name: 'caption', title: 'Caption', type: 'string'}),
          ],
        },
      ],
    }),

    // ─── META ───────────────────────────────────────────────────────────────

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'meta',
      to: [{type: 'agent'}],
      description: 'The agent or team member who wrote this article.',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'meta',
      options: {
        list: [
          {title: 'Market Insights', value: 'market-insights'},
          {title: 'Buying Guide', value: 'buying-guide'},
          {title: 'Renting Guide', value: 'renting-guide'},
          {title: 'Investment', value: 'investment'},
          {title: 'Neighbourhood Guide', value: 'neighbourhood-guide'},
          {title: 'Development News', value: 'development-news'},
          {title: 'Legal & Finance', value: 'legal-finance'},
          {title: 'Lifestyle', value: 'lifestyle'},
          {title: 'Company News', value: 'company-news'},
        ],
      },
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'meta',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    }),

    defineField({
      name: 'relatedProperties',
      title: 'Related Properties',
      type: 'array',
      group: 'meta',
      of: [{type: 'reference', to: [{type: 'property'}]}],
      description: 'Link properties featured in or relevant to this article.',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      group: 'meta',
      description: 'Unpublish to hide the article without deleting it.',
      initialValue: false,
    }),

    defineField({
      name: 'isFeatured',
      title: 'Featured Article',
      type: 'boolean',
      group: 'meta',
      description: 'Pin to the featured section on the blog homepage.',
      initialValue: false,
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
          description: 'Defaults to the article title if blank.',
          validation: (Rule) => Rule.max(60).warning('Keep under 60 characters.'),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'Defaults to the excerpt if blank.',
          rows: 3,
          validation: (Rule) => Rule.max(160).warning('Keep under 160 characters.'),
        }),
        defineField({
          name: 'ogImage',
          title: 'Social Share Image',
          type: 'image',
          options: {hotspot: true},
          description: 'Defaults to the featured image if blank.',
        }),
        defineField({
          name: 'noIndex',
          title: 'No Index',
          type: 'boolean',
          initialValue: false,
        }),
      ],
    }),
  ],

  orderings: [
    {
      title: 'Newest First',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Oldest First',
      name: 'publishedAtAsc',
      by: [{field: 'publishedAt', direction: 'asc'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      category: 'category',
      media: 'featuredImage',
      published: 'isPublished',
    },
    prepare({title, author, category, media, published}) {
      return {
        title: title || 'Untitled Article',
        subtitle: [author, category, published === false ? '(Draft)' : ''].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
