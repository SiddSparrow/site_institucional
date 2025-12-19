// lib/sanity/queries.ts
import { groq } from 'next-sanity'
import { sanityClient } from '../sanity' // Usando seu client existente

// Query para buscar todos os posts do blog
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "content": pt::text(body),
    "image": mainImage.asset->url,
    publishedAt,
    "readingTime": round(length(pt::text(body)) / 5 / 180),
    author->{
      name,
      "image": image.asset->url
    }
  }
`

// Query para buscar um post específico
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    "image": mainImage.asset->url,
    publishedAt,
    "readingTime": round(length(pt::text(body)) / 5 / 180),
    author->{
      name,
      "image": image.asset->url
    }
  }
`

// Função para buscar todos os posts
export async function getPosts() {
  return await sanityClient.fetch(postsQuery)
}

// Função para buscar um post específico
export async function getPost(slug: string) {
  return await sanityClient.fetch(postQuery, { slug })
}

// sanity/schemas/post.ts
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'body',
      title: 'Conteúdo',
      type: 'blockContent',
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const { author } = selection
      return { ...selection, subtitle: author && `por ${author}` }
    },
  },
}