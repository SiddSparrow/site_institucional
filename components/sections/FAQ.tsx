'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { template, siteConfig } from '@/lib/site-config'
import Image from 'next/image'

// ========== TIPOS ==========
type CardStyle = 'bordered' | 'elevated' | 'glass' | 'minimal' | 'gradient' | 'neon'
type IconType = 'chevron' | 'plus-minus' | 'circle' | 'none'
type LayoutStyle = 'stacked' | 'spaced' | 'connected'

// ========== CONFIGURAÇÕES DE ESTILO ==========
const FAQ_CONFIG = {
  // Estilo do card: 'bordered' | 'elevated' | 'glass' | 'minimal' | 'gradient' | 'neon'
  cardStyle: 'bordered' as CardStyle, // MUDE AQUI!
  
  // Tipo de ícone: 'chevron' | 'plus-minus' | 'circle' | 'none'
  iconType: 'chevron' as IconType,
  
  // Layout: 'stacked' | 'spaced' | 'connected'
  layout: 'spaced' as LayoutStyle,
  
  // Animação de abertura
  smoothAnimation: true,
  
  // Destacar pergunta ativa
  highlightActive: true,
  
  // Numeração das perguntas
  showNumbers: false,
  
  // Borda lateral colorida
  accentBorder: false,
  
  // Permitir múltiplos abertos
  allowMultiple: false,
  
  // Estilo do botão
  roundedButton: true,
  
  // ===== CONFIGURAÇÕES DE IMAGEM =====
  // Mostrar imagem lateral
  showSideImage: true, // HABILITA/DESABILITA IMAGEM
  
  // URL da imagem (deixe vazio para usar placeholder)
  sideImageUrl: template.foto_faq, // Coloque o caminho da sua imagem aqui
  
  // Texto alternativo da imagem
  sideImageAlt: 'Contato',
  
  // Título do card da imagem
  sideImageTitle: 'Se ainda estiver com dúvidas fale conosco!',
  
  // Texto do botão
  sideImageButtonText: 'FALAR COM ATENDIMENTO',
  
  // Link do botão (pode ser WhatsApp, formulário, etc)
  sideImageButtonLink: 'https://wa.me/5521999999999',
  
  // Posição da imagem: 'right' | 'left'
  sideImagePosition: 'right' as 'right' | 'left',
  
  // Estilo do card da imagem: 'default' | 'overlay' | 'minimal'
  sideImageStyle: 'overlay' as 'default' | 'overlay' | 'minimal',
}
// ======================================================

export default function FAQ() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  const toggleFAQ = (id: string) => {
    if (FAQ_CONFIG.allowMultiple) {
      const newOpenIds = new Set(openIds)
      if (newOpenIds.has(id)) {
        newOpenIds.delete(id)
      } else {
        newOpenIds.add(id)
      }
      setOpenIds(newOpenIds)
    } else {
      setOpenIds(openIds.has(id) ? new Set() : new Set([id]))
    }
  }

  const isOpen = (id: string) => openIds.has(id)

  const getFAQDescription = () => {
    switch(template.type) {
      case 'coach':
        return 'Tire suas dúvidas sobre o processo de coaching.'
      case 'barbeiro':
        return 'Respostas para as principais dúvidas.'
      case 'medico':
        return 'Informações importantes sobre consultas e atendimento.'
      case 'psicologo':
        return 'Tire suas dúvidas sobre o processo terapêutico.'
      default:
        return 'Tire suas dúvidas mais comuns.'
    }
  }

  // Estilos do card
  const getCardClasses = (active: boolean) => {
    const baseClasses = 'overflow-hidden transition-all duration-300'
    const layoutMap = {
      stacked: 'rounded-none first:rounded-t-lg last:rounded-b-lg',
      spaced: 'rounded-lg',
      connected: 'rounded-lg'
    }
    
    let styleClasses = ''
    
    switch (FAQ_CONFIG.cardStyle) {
      case 'bordered':
        styleClasses = `border-2 ${active && FAQ_CONFIG.highlightActive ? 'border-current' : 'border-gray-200'} bg-white hover:shadow-md`
        break
      case 'elevated':
        styleClasses = `bg-white shadow-md ${active ? 'shadow-xl' : 'hover:shadow-lg'}`
        break
      case 'glass':
        styleClasses = `bg-white/70 backdrop-blur-md border ${active && FAQ_CONFIG.highlightActive ? 'border-current' : 'border-gray-200/50'} shadow-md hover:bg-white/90`
        break
      case 'minimal':
        styleClasses = `bg-transparent border-b ${active ? 'border-current' : 'border-gray-200'} hover:bg-gray-50/50`
        break
      case 'gradient':
        styleClasses = `bg-gradient-to-r from-white to-gray-50 border ${active ? 'border-current' : 'border-gray-200'} shadow-sm hover:shadow-md`
        break
      case 'neon':
        styleClasses = `bg-gray-900 border ${active && FAQ_CONFIG.highlightActive ? 'border-current' : 'border-gray-800'} shadow-lg hover:shadow-xl`
        break
    }
    
    return `${baseClasses} ${layoutMap[FAQ_CONFIG.layout]} ${styleClasses}`
  }

  // Espaçamento entre cards
  const getSpacing = () => {
    const spacingMap = {
      stacked: 'space-y-0',
      spaced: 'space-y-4',
      connected: 'space-y-2'
    }
    return spacingMap[FAQ_CONFIG.layout]
  }

  // Ícone baseado na configuração
  const getIcon = (active: boolean) => {
    const iconProps = {
      className: "w-5 h-5 flex-shrink-0",
      style: { color: FAQ_CONFIG.cardStyle === 'neon' ? siteConfig.colors.primary : siteConfig.colors.primary }
    }

    switch (FAQ_CONFIG.iconType) {
      case 'chevron':
        return <ChevronDown {...iconProps} />
      case 'plus-minus':
        return active ? <Minus {...iconProps} /> : <Plus {...iconProps} />
      case 'circle':
        return (
          <div 
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300`}
            style={{ borderColor: iconProps.style.color }}
          >
            <div 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${active ? 'scale-100' : 'scale-0'}`}
              style={{ backgroundColor: iconProps.style.color }}
            />
          </div>
        )
      case 'none':
        return null
    }
  }

  // Cor do texto
  const getTextColor = () => {
    return FAQ_CONFIG.cardStyle === 'neon' ? '#ffffff' : siteConfig.colors.text
  }

  const getAnswerBgColor = () => {
    if (FAQ_CONFIG.cardStyle === 'neon') return 'bg-gray-950'
    if (FAQ_CONFIG.cardStyle === 'minimal') return 'bg-gray-50/30'
    return 'bg-gray-50'
  }

  // Componente de imagem lateral
  const SideImageCard = () => {
    if (!FAQ_CONFIG.showSideImage) return null

    const cardClasses = {
      default: 'bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col',
      overlay: 'relative rounded-2xl overflow-hidden shadow-xl h-full',
      minimal: 'rounded-2xl border-2 border-gray-200 p-6 h-full flex flex-col'
    }

    if (FAQ_CONFIG.sideImageStyle === 'overlay') {
      return (
        <FadeIn delay={0.3}>
          <div className={cardClasses.overlay}>
            <div className="relative w-full h-full min-h-[500px]">
              <Image
                src={FAQ_CONFIG.sideImageUrl || '/images/placeholder.jpg'}
                alt={FAQ_CONFIG.sideImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Conteúdo sobre a imagem */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {FAQ_CONFIG.sideImageTitle}
                </h3>
                <a
                  href={FAQ_CONFIG.sideImageButtonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ 
                    backgroundColor: siteConfig.colors.primary,
                    color: 'white'
                  }}
                >
                  {FAQ_CONFIG.sideImageButtonText}
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      )
    }

    return (
      <FadeIn delay={0.3}>
        <div className={cardClasses[FAQ_CONFIG.sideImageStyle]}>
          <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
            <Image
              src={FAQ_CONFIG.sideImageUrl || '/images/placeholder.jpg'}
              alt={FAQ_CONFIG.sideImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <h3 className="text-xl font-bold mb-4" style={{ color: siteConfig.colors.text }}>
            {FAQ_CONFIG.sideImageTitle}
          </h3>
          <div className="mt-auto">
            <a
              href={FAQ_CONFIG.sideImageButtonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ 
                backgroundColor: siteConfig.colors.primary,
                color: 'white'
              }}
            >
              {FAQ_CONFIG.sideImageButtonText}
            </a>
          </div>
        </div>
      </FadeIn>
    )
  }

  return (
    <section className="py-20" style={{backgroundColor:siteConfig.colors.faq}}>
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{color:siteConfig.colors.text}}>
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{color:siteConfig.colors.text}}>
              {getFAQDescription()}
            </p>
          </div>
        </FadeIn>

        <div className={`grid gap-8 ${FAQ_CONFIG.showSideImage ? 'lg:grid-cols-[1fr_400px]' : ''}`}>
          {/* Lista de FAQs */}
          <div className={`${getSpacing()} ${FAQ_CONFIG.sideImagePosition === 'left' && FAQ_CONFIG.showSideImage ? 'lg:order-2' : ''}`}>
            {template.faq.questions.map((faq, index) => {
              const active = isOpen(faq.id)
              
              return (
                <FadeIn key={faq.id} delay={0.05 * (index + 1)}>
                  <div 
                    className={`relative ${getCardClasses(active)}`}
                    style={active && FAQ_CONFIG.highlightActive ? { borderColor: siteConfig.colors.primary } : {}}
                  >
                    {/* Borda lateral de destaque */}
                    {FAQ_CONFIG.accentBorder && active && (
                      <div 
                        className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300"
                        style={{ backgroundColor: siteConfig.colors.primary }}
                      />
                    )}

                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className={`w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-200 ${
                        FAQ_CONFIG.cardStyle !== 'neon' ? 'hover:bg-gray-50/50' : 'hover:bg-gray-800/50'
                      } ${FAQ_CONFIG.accentBorder && active ? 'pl-8' : ''}`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        {FAQ_CONFIG.showNumbers && (
                          <span 
                            className="text-sm font-bold opacity-50"
                            style={{ color: getTextColor() }}
                          >
                            {String(index + 1).padStart(2, '0')}/
                          </span>
                        )}
                        <span 
                          className={`font-semibold pr-4 ${active ? 'font-bold' : ''}`}
                          style={{ color: getTextColor() }}
                        >
                          {faq.question}
                        </span>
                      </div>
                      
                      {FAQ_CONFIG.iconType !== 'none' && (
                        <motion.div
                          animate={{ 
                            rotate: FAQ_CONFIG.iconType === 'chevron' && active ? 180 : 0,
                            scale: active ? 1.1 : 1
                          }}
                          transition={{ 
                            duration: FAQ_CONFIG.smoothAnimation ? 0.3 : 0.2, 
                            ease: [0.4, 0.0, 0.2, 1] 
                          }}
                        >
                          {getIcon(active)}
                        </motion.div>
                      )}
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {active && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: 'auto', 
                            opacity: 1,
                            transition: {
                              height: {
                                duration: FAQ_CONFIG.smoothAnimation ? 0.4 : 0.25,
                                ease: [0.4, 0.0, 0.2, 1]
                              },
                              opacity: {
                                duration: FAQ_CONFIG.smoothAnimation ? 0.3 : 0.2,
                                delay: 0.1,
                                ease: 'easeOut'
                              }
                            }
                          }}
                          exit={{ 
                            height: 0, 
                            opacity: 0,
                            transition: {
                              height: {
                                duration: 0.3,
                                ease: [0.4, 0.0, 0.2, 1]
                              },
                              opacity: {
                                duration: 0.2,
                                ease: 'easeIn'
                              }
                            }
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -10 }}
                            animate={{ 
                              y: 0,
                              transition: {
                                duration: 0.3,
                                ease: 'easeOut'
                              }
                            }}
                            exit={{ 
                              y: -10,
                              transition: {
                                duration: 0.2,
                                ease: 'easeIn'
                              }
                            }}
                            className={`px-6 py-4 ${FAQ_CONFIG.accentBorder && active ? 'pl-8' : ''} ${getAnswerBgColor()}`}
                            style={{ 
                              color: FAQ_CONFIG.cardStyle === 'neon' ? '#9ca3af' : siteConfig.colors.text 
                            }}
                          >
                            {faq.answer}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              )
            })}
          </div>

          {/* Card de imagem lateral */}
          {FAQ_CONFIG.showSideImage && (
            <div className={FAQ_CONFIG.sideImagePosition === 'left' ? 'lg:order-1' : ''}>
              <SideImageCard />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}