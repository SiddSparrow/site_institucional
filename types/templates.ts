import { s } from 'framer-motion/client';
import { LucideIcon } from 'lucide-react'
import { StringFormNode } from 'sanity';

export type TemplateType = 'medico' | 'psicologo' | 'barbeiro' | 'coach'

export interface TemplateConfig {
  name: string
  logo: string
  type: TemplateType
  colors: {
    navbar: string
    services: string
    about: string
    faq: string
    cta: string
    contact: string
    footer: string
    primary: string
    secondary: string
    accent: string
    background: string
    text: string//cor base para textos e elementos neutros
    blog: string //cor de fundo da seção blog
    testimonials: string //cor de fundo da seção depoimentos (opcional)
    active: string //cor para estados ativos (opcional)
  }
  foto_perfil: string
  foto_geral: string
  foto_faq: string
  features: {
    blog: boolean, // Ativar/desativar blog
    testimonials: boolean,
    faq: boolean,
    newsletter: boolean,
    cta:boolean
  },
  hero: {
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
  }
  services: {
    title: string
    subtitle: string
    services: ServiceTemplate[]
  }
  about: {
    title: string
    description: string[]
    credentials: CredentialTemplate[]
  }
  testimonials: {
    title: string
    subtitle: string
    testimonials: TestimonialTemplate[]
  }
  faq: {
    text: string
    questions: FAQTemplate[]
  }
  blog: {
    enabled: boolean,
    title: string,
    subtitle: string,
    openInNewPage: boolean,
    categories: string[]
  }
  cta: {
    title: string,
    subtitle: string
    wppText: string
  }
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

export interface BlogConfig {
  enabled: boolean
  title: string
  subtitle: string
  openInNewPage: boolean
  categories?: string[]
}