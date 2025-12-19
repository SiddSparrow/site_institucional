
import { title } from 'process';

export interface SiteConfig {
  name: string
  logo: string
  description: string
  phone: string
  email: string
  address: string
  social: {
    instagram?: string
    facebook?: string
    linkedin?: string
    whatsapp?: string
  }
  colors: {
    primary: string
    secondary: string
    accent?: string
    background?: string
    text: string
    blog: string
    testimonials : string
    active: string
  }
  features: {
    blog: boolean
    faq: boolean
    testimonials: boolean
    newsletter: boolean
  }
  Testimonials:{
    title: string
    subtitle: string
    testimonials: Testimonial[]
  }
  cta:{
    title: string
    subtitle: string
    wppText: string
  }
  faq:{
    text: string
    questions: FAQ[]
  }
  services:{
    title: string
    subtitle: string
    services: Service[]
  }
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}