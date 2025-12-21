'use client'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { template, siteConfig } from '@/lib/site-config'
import * as LucideIcons from 'lucide-react'

// ========== TIPOS ==========
type CardStyle = 'bordered' | 'elevated' | 'glass' | 'gradient' | 'minimal' | 'neon'
type IconStyle = 'circle' | 'square' | 'rounded' | 'hexagon' | 'floating'
type HoverEffect = 'lift' | 'glow' | 'scale' | 'tilt' | 'none'

// ========== CONFIGURAÇÕES DE ESTILO ==========
const SERVICES_CONFIG = {
  // Estilo do card: 'bordered' | 'elevated' | 'glass' | 'gradient' | 'minimal' | 'neon'
  cardStyle: 'glass' as CardStyle, // MUDE AQUI!
  
  // Estilo do ícone: 'circle' | 'square' | 'rounded' | 'hexagon' | 'floating'
  iconStyle: 'floating' as IconStyle,
  
  // Efeito ao hover: 'lift' | 'glow' | 'scale' | 'tilt' | 'none'
  hoverEffect: 'scale' as HoverEffect,
  
  // Tamanho do ícone (em pixels)
  iconSize: 56,
  
  // Espaçamento interno do card
  cardPadding: 'normal', // 'compact' | 'normal' | 'spacious'
  
  // Mostrar backdrop colorido atrás do ícone
  iconBackdrop: true,
  
  // Animação do ícone no hover
  iconAnimation: true,
  
  // Borda inferior colorida
  accentBorder: false,
}
// ======================================================

export default function Services() {
  const getIcon = (iconName: string) => {
    const icons = LucideIcons as any
    return icons[iconName] || LucideIcons.HelpCircle
  }

  // Estilos do card baseado na configuração
  const getCardClasses = () => {
    const baseClasses = 'group h-full min-h-[260px] flex flex-col transition-all duration-300'
    const paddingMap = {
      compact: 'p-4',
      normal: 'p-6',
      spacious: 'p-8'
    }
    
    let styleClasses = ''
    
    switch (SERVICES_CONFIG.cardStyle) {
      case 'bordered':
        styleClasses = 'rounded-xl border-2 border-gray-200 bg-white hover:shadow-xl'
        break
      case 'elevated':
        styleClasses = 'rounded-2xl bg-white shadow-lg hover:shadow-2xl'
        break
      case 'glass':
        styleClasses = 'rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/80'
        break
      case 'gradient':
        styleClasses = 'rounded-2xl bg-gradient-to-tr from-sky-100 to-blue-400 shadow-lg hover:shadow-xl border border-gray-100'
        break
      case 'minimal':
        styleClasses = 'rounded-lg hover:bg-gray-50/50'
        break
      case 'neon':
        styleClasses = 'rounded-2xl bg-gray-900 border border-gray-800 hover:shadow-2xl'
        break
    }
    //let config = SERVICES_CONFIG.cardPadding;
    return `${baseClasses} ${paddingMap[SERVICES_CONFIG.cardPadding as keyof typeof paddingMap]} ${styleClasses}`
  }

  // Estilos do ícone
  const getIconContainerClasses = () => {
    const sizeMap = {
      circle: 'rounded-full',
      square: 'rounded-none',
      rounded: 'rounded-xl',
      hexagon: 'rounded-xl rotate-0',
      floating: 'rounded-full shadow-lg'
    }
    
    const animation = SERVICES_CONFIG.iconAnimation ? 'group-hover:scale-110 group-hover:rotate-3' : ''
    
    return `flex items-center justify-center mb-4 transition-all duration-300 ${sizeMap[SERVICES_CONFIG.iconStyle]} ${animation}`
  }

  // Efeito de hover
  const getHoverClasses = () => {
    const effects = {
      lift: 'hover:-translate-y-2',
      glow: 'hover:ring-4 hover:ring-opacity-20',
      scale: 'hover:scale-105',
      tilt: 'hover:rotate-1',
      none: ''
    }
    return effects[SERVICES_CONFIG.hoverEffect]
  }

  // Estilo inline do card
  const getCardStyle = (onHover: boolean = false) => {
    const styles: React.CSSProperties = {}
    
    if (SERVICES_CONFIG.cardStyle === 'bordered' && onHover) {
      styles.borderColor = siteConfig.colors.primary
    }
    
    if (SERVICES_CONFIG.cardStyle === 'neon') {
      styles.backgroundColor = '#0a0a0a'
      if (onHover) {
        styles.boxShadow = `0 0 30px ${siteConfig.colors.primary}40`
      }
    }
    
    if (SERVICES_CONFIG.hoverEffect === 'glow' && onHover) {
      styles.boxShadow = `0 0 40px ${siteConfig.colors.primary}30`
    }
    
    return styles
  }

  // Cor do texto baseada no estilo
  const getTextColor = () => {
    return SERVICES_CONFIG.cardStyle === 'neon' ? '#ffffff' : siteConfig.colors.text
  }

  return (
    <section id="services" className="py-20" style={{background:siteConfig.colors.services}}>
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{color:siteConfig.colors.text}}>
              {siteConfig.services.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{color:siteConfig.colors.text}}>
              {siteConfig.services.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {template.services.services.map((service, index) => {
            const IconComponent = getIcon(service.icon)
            
            return (
              <FadeIn key={service.id} delay={0.1 * (index + 1)}>
                <div 
                  className={`${getCardClasses()} ${getHoverClasses()} ${SERVICES_CONFIG.accentBorder ? 'border-b-4' : ''}`}
                  style={SERVICES_CONFIG.accentBorder ? { borderBottomColor: siteConfig.colors.primary } : {}}
                  onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, getCardStyle(true))
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.currentTarget.style, getCardStyle(false))
                  }}
                >
                  {/* Ícone */}
                  <div 
                    className={getIconContainerClasses()}
                    style={{ 
                      width: SERVICES_CONFIG.iconSize,
                      height: SERVICES_CONFIG.iconSize,
                      backgroundColor: SERVICES_CONFIG.iconBackdrop 
                        ? `${siteConfig.colors.primary}${SERVICES_CONFIG.cardStyle === 'neon' ? '40' : '20'}` 
                        : 'transparent'
                    }}
                  >
                    <IconComponent 
                      className="transition-all duration-300" 
                      style={{ 
                        color: SERVICES_CONFIG.cardStyle === 'neon' 
                          ? siteConfig.colors.primary 
                          : siteConfig.colors.text,
                        width: SERVICES_CONFIG.iconSize * 0.5,
                        height: SERVICES_CONFIG.iconSize * 0.5
                      }}
                    />
                  </div>

                  {/* Conteúdo */}
                  <h3 
                    className="text-xl font-semibold mb-2 transition-colors duration-300"
                    style={{color: getTextColor()}}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-gray-600 transition-colors duration-300 flex-grow"
                    style={{
                      color: SERVICES_CONFIG.cardStyle === 'neon' 
                        ? '#9ca3af' 
                        : siteConfig.colors.text
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Decoração extra para estilo neon */}
                  {SERVICES_CONFIG.cardStyle === 'neon' && (
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${siteConfig.colors.primary}15, transparent 70%)`
                      }}
                    />
                  )}
                </div>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}