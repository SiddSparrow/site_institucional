export interface SiteConfig {
  name: string
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