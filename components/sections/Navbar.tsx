'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '@/components/ui/Container'
import { siteConfig, template } from '@/lib/site-config'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useHandleWhatsAppClick } from '@/hooks/templateFunctions'

// ========== TIPOS ==========
type NavbarStyle = 'solid' | 'transparent' | 'glass' | 'gradient'
type BlurLevel = 'none' | 'sm' | 'md' | 'lg'
type ShadowLevel = 'none' | 'sm' | 'md' | 'lg'

// ========== CONFIGURAÇÕES DE ESTILO DA NAVBAR ==========
const NAVBAR_CONFIG = {
  // Estilo principal: 'solid' | 'transparent' | 'glass' | 'gradient'
  style: 'transparent' as NavbarStyle,

  // Blur (apenas para 'transparent' e 'glass'): 'none' | 'sm' | 'md' | 'lg'
  blur: 'md' as BlurLevel,

  // Opacidade do fundo (0-100)
  opacity: 90,

  // Sombra: 'none' | 'sm' | 'md' | 'lg'
  shadow: 'md' as ShadowLevel,

  // Borda inferior
  bottomBorder: true,

  // Animação ao fazer scroll
  shrinkOnScroll: true,

  // Adicionar backdrop quando scroll > 0
  changeOnScroll: true
}
// ======================================================

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const menuItems = [
    { label: 'Início', href: '#home' },
    /* { label: 'Sobre', href: '#about' }, */
    { label: 'Serviços', href: '#services' },
    /* { label: 'Depoimentos', href: '#testimonials' }, */
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
    
    styles.backgroundColor = 'transparent'
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
                width={130}
                height={100}
                className={`transition-all duration-300 ${NAVBAR_CONFIG.shrinkOnScroll && scrolled ? 'scale-90' : 'scale-100'}`}
                priority
              />
            </motion.div>
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-24">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-700 transition-all duration-200 relative group"
                style={{ color: '#cecdcdff' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = siteConfig.colors.primary
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cecdcdff'
                }}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: siteConfig.colors.primary }}
                />
              </motion.a>
            ))}
          </div>
          
          {/* CTA Button - Desktop - Elegant Glass Style */}
          <motion.button
            onClick={useHandleWhatsAppClick}
            className="hidden md:flex items-center  gap-2 px-6 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 group relative overflow-hidden"
            style={{ 
              backgroundColor: `${siteConfig.colors.primary}10`,
              border: `1.5px solid ${siteConfig.colors.primary}30`,
              color: '#cecdcdff'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              borderColor: `${siteConfig.colors.primary}60`
            }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${siteConfig.colors.primary}20`
              e.currentTarget.style.boxShadow = `0 8px 20px ${siteConfig.colors.primary}25`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `${siteConfig.colors.primary}10`
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Background gradient on hover */}
            <span 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at center, ${siteConfig.colors.primary}15 0%, transparent 70%)`
              }}
            />
            
            <span className="relative font-medium text-sm tracking-wide">
              {template.hero.ctaPrimary}
            </span>
            
            <svg 
              className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>

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
                
                {/* CTA Button - Mobile */}
                <motion.button
                  onClick={() => {
                    useHandleWhatsAppClick()
                    setIsOpen(false)
                  }}
                  className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300"
                  style={{ 
                    backgroundColor: `${siteConfig.colors.primary}15`,
                    border: `1.5px solid ${siteConfig.colors.primary}30`,
                    color: siteConfig.colors.primary
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: menuItems.length * 0.05 }}
                >
                  <span className="font-medium text-sm tracking-wide">
                    {template.hero.ctaPrimary}
                  </span>
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  )
}