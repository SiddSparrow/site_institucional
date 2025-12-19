export interface BlogPost {
  _id: string
  _createdAt: string
  title: string
  slug: {
    current: string
  }
  author: string
  mainImage?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  categories?: string[]
  publishedAt: string
  excerpt?: string
  body: any[]
}

export interface BlogCategory {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
}