import { TemplateConfig, TemplateType } from '@/types/templates'
import { medicoTemplate } from './medico'


export const templates: Record<TemplateType, TemplateConfig> = {
  medico: medicoTemplate,
}

export function getTemplate(type: TemplateType): TemplateConfig {
  return templates[type]
}

export { medicoTemplate, }