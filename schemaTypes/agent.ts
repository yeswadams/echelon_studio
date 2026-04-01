import {defineField, defineType} from 'sanity'

export const agent = defineType({
    name: 'agent',
    title: 'Agent',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'},
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                defineField({
                    name: 'socialLink',
                    title: 'Social Link',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                        }),
                        defineField({
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                        }),
                    ],
                }),
            ],
        }),
    ],
})
