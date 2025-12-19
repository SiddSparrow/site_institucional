export interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image?: string
  publishedAt: string
  category?: string
  author?: {
    name: string
    image?: string
  }
  readingTime?: number
}

export interface BlogProps {
  posts: BlogPost[]
}