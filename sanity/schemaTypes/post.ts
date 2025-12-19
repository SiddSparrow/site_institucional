import { defineType, defineField } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Artigo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 3
    }),

    defineField({
      name: 'coverImage',
      title: 'Imagem de Capa',
      type: 'image',
      options: {
        hotspot: true
      }
    }),

    defineField({
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }]
    }),

    defineField({
      name: 'publishedAt',
      title: 'Publicado em',
      type: 'datetime'
    }),

    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string'
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      options: { collapsible: true },
      fields: [
        {
          name: 'metaTitle',
          title: 'Título SEO',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Descrição SEO',
          type: 'text',
          rows: 3,
        },
      ],
    }),
  ]
})


