import { SiteConfig } from '@/types'
import { TemplateType } from '@/types/templates'
import { getTemplate } from './templates'

export const CURRENT_TEMPLATE: TemplateType = 'psicologo' // Opções: 'medico' | 'psicologo' | 'barbeiro' | 'coach'

const template = getTemplate(CURRENT_TEMPLATE)

export const siteConfig: SiteConfig = {
  name: template.name,
  description: template.hero.subtitle,
  phone: "(00) 00000-0000",
  email: "contato@exemplo.com",
  address: "Rua Exemplo, 123 - Cidade, Estado",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/in/",
    whatsapp: "5500000000000",
  },
  colors: template.colors
}

export { template }