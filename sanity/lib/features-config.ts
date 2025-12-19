export interface FeaturesConfig {
  blog: {
    enabled: boolean
    showInNavbar: boolean
  }
  testimonials: {
    enabled: boolean
  }
  faq: {
    enabled: boolean
  }
  cta: {
    enabled: boolean
  }
}

// ⚠️ CONFIGURAÇÃO DE FEATURES - ATIVE/DESATIVE SEÇÕES AQUI
export const featuresConfig: FeaturesConfig = {
  blog: {
    enabled: true, // Mude para false para desativar o blog
    showInNavbar: true // Mostrar link do blog no menu
  },
  testimonials: {
    enabled: true
  },
  faq: {
    enabled: true
  },
  cta: {
    enabled: true
  }
}