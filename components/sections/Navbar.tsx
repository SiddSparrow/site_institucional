'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '@/components/ui/Container'
import { siteConfig, template } from '@/lib/site-config'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'
import { useProcessTitle, useHandleWhatsAppClick } from '@/hooks/templateFunctions'

// ========== TIPOS ==========
type NavbarStyle = 'solid' | 'transparent' | 'glass' | 'gradient'
type BlurLevel = 'none' | 'sm' | 'md' | 'lg'
type ShadowLevel = 'none' | 'sm' | 'md' | 'lg'

// ========== CONFIGURAÇÕES DE ESTILO DA NAVBAR ==========
const NAVBAR_CONFIG = {
  // Estilo principal: 'solid' | 'transparent' | 'glass' | 'gradient'
  style: 'glass' as NavbarStyle, // MUDE AQUI!

  // Blur (apenas para 'transparent' e 'glass'): 'none' | 'sm' | 'md' | 'lg'
  blur: 'md' as BlurLevel,

  // Opacidade do fundo (0-100)
  opacity: 90,

  // Sombra: 'none' | 'sm' | 'md' | 'lg'
  shadow: 'md' as ShadowLevel,

  // Borda inferior
  bottomBorder: true,

  // Animação ao fazer scroll
  shrinkOnScroll: true, // Reduz altura ao rolar

  // Adicionar backdrop quando scroll > 0
  changeOnScroll: true
}
// ======================================================

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ]

  if (siteConfig.features.blog) {
    menuItems.splice(3, 0, { label: 'Blog', href: '#blog' })
  }

  const logo = siteConfig.logo !== ''

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Estilos baseados na configuração
  const getNavbarStyles = () => {
    const isScrolledAndChangeable = scrolled && NAVBAR_CONFIG.changeOnScroll
    const activeStyle = isScrolledAndChangeable ? 'glass' : NAVBAR_CONFIG.style

    let styles: React.CSSProperties = {}
    styles.position = 'fixed'
    styles.width = '100%'
    switch (activeStyle) {
      case 'solid':
        styles.backgroundColor = siteConfig.colors.navbar
        break

      case 'transparent':
        styles.backgroundColor = `rgba(255, 255, 255, ${NAVBAR_CONFIG.opacity / 100})`
        if (NAVBAR_CONFIG.blur !== 'none') {
          styles.backdropFilter = `blur(${getBlurValue()})`
          styles.WebkitBackdropFilter = `blur(${getBlurValue()})`
        }
        break

      case 'glass':
        styles.backgroundColor = `rgba(255, 255, 255, ${Math.min(NAVBAR_CONFIG.opacity, 70) / 100})`
        styles.backdropFilter = `blur(${getBlurValue()}) saturate(180%)`
        styles.WebkitBackdropFilter = `blur(${getBlurValue()}) saturate(180%)`
        break

      case 'gradient':
        styles.background = `linear-gradient(135deg, ${siteConfig.colors.navbar} 0%, ${siteConfig.colors.primary}20 100%)`
        break
    }

    return styles
  }

  const getBlurValue = () => {
    const blurMap: Record<BlurLevel, string> = {
      none: '0px',
      sm: '4px',
      md: '12px',
      lg: '24px'
    }
    return blurMap[NAVBAR_CONFIG.blur]
  }

  const getShadowClass = () => {
    const shadowMap: Record<ShadowLevel, string> = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg'
    }
    return shadowMap[NAVBAR_CONFIG.shadow]
  }

  const navbarHeight = NAVBAR_CONFIG.shrinkOnScroll && scrolled ? 'h-14' : 'h-16'

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${getShadowClass()} ${NAVBAR_CONFIG.bottomBorder ? 'border-b border-gray-200/20' : ''}`}
      style={getNavbarStyles()}
    >
      <Container>
        <div className={`flex justify-between items-center ${navbarHeight} transition-all duration-300`}>
          {/* Logo */}
          {logo && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={siteConfig.logo}
                alt="Logo"
                width={70}
                height={100}
                className={`transition-all duration-300 ${NAVBAR_CONFIG.shrinkOnScroll && scrolled ? 'scale-90' : 'scale-100'}`}
                priority
              />
            </motion.div>
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-700 transition-all duration-200 relative group"
                style={{ color: siteConfig.colors.accent }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = siteConfig.colors.primary
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = siteConfig.colors.accent
                }}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: siteConfig.colors.primary }}
                />
              </motion.a>
            ))}
            <div className="flex flex-col sm:flex-row gap-4"></div>

          </div>
          <Button
            
            /* onClick={handleAgendarClick} */
            onClick={useHandleWhatsAppClick}
            style={{ backgroundColor: siteConfig.colors.primary }}
            className="hover:opacity-90 transition transform hover:scale-105 duration-200 shadow-lg h-3/4"
          >
            {template.hero.ctaPrimary}
          </Button>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden transition-transform duration-200 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: siteConfig.colors.accent }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="block text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                    style={{ color: siteConfig.colors.accent }}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                      ease: 'easeOut'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = siteConfig.colors.primary
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = siteConfig.colors.accent
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  )
}