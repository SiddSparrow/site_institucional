import { LucideIcon } from 'lucide-react'

export type TemplateType = 'medico' | 'psicologo' | 'barbeiro' | 'coach'

export interface TemplateConfig {
  name: string
  type: TemplateType
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string//cor base para textos e elementos neutros
  }
  foto_perfil: string
  foto_geral: string
  features: {
    blog: boolean, // Ativar/desativar blog
    testimonials: boolean,
    faq: boolean,
    newsletter: boolean
  },
  hero: {
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
  }
  services: ServiceTemplate[]
  about: {
    title: string
    description: string[]
    credentials: CredentialTemplate[]
  }
  testimonials: TestimonialTemplate[]
  faq: FAQTemplate[]
}

export interface ServiceTemplate {
  id: string
  icon: string
  title: string
  description: string
}

export interface CredentialTemplate {
  icon: string
  title: string
  description: string
}

export interface TestimonialTemplate {
  id: string
  name: string
  role: string
  content: string
  rating: number
}

export interface FAQTemplate {
  id: string
  question: string
  answer: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage?: string
  author: string
  publishedAt: string
  category: string
  tags: string[]
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description?: string
}