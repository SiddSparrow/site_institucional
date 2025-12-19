import { client } from './client'
import { BlogPost } from '@/types/blog'

export async function getAllPosts(limit?: number): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) ${limit ? `[0...${limit}]` : ''} {
    _id,
    _createdAt,
    title,
    slug,
    author,
    mainImage,
    categories,
    publishedAt,
    excerpt,
    body
  }`

  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    author,
    mainImage,
    categories,
    publishedAt,
    excerpt,
    body
  }`

  try {
    return await client.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function getPostsByCategory(category: string, limit?: number): Promise<BlogPost[]> {
  const query = `*[_type == "post" && $category in categories] | order(publishedAt desc) ${limit ? `[0...${limit}]` : ''} {
    _id,
    _createdAt,
    title,
    slug,
    author,
    mainImage,
    categories,
    publishedAt,
    excerpt,
    body
  }`

  try {
    return await client.fetch(query, { category })
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }
}