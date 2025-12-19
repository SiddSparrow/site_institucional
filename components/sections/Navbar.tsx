'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/lib/site-config'
import { menu } from 'framer-motion/client'
import { MenuItemBuilder } from 'sanity/structure'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  function checkRoute(rota: string) {
    return window.location.pathname.includes(rota)
  }
  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ]

  if(siteConfig.features.blog) {
    menuItems.splice(3, 0, { label: 'Blog', href: '#blog' })
  }

  /* if(checkRoute('artigos')) { isso é apenas caso queira usar rotas diferentes para o blog
    menuItems.map(item => {
      if(item.href === '#home') {
        item.href = '/#home'
      }else if(item.href === '#about') {
        item.href = '/#about'
      }else if(item.href === '#services') {
        item.href = '/#services'
      }else if(item.href === '#testimonials') {
        item.href = '/#testimonials'
      }else if(item.href === '#contact') {
        item.href = '/#contact'
      }
    })
  } */

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <div 
            className="text-xl font-bold"
            style={{ color: siteConfig.colors.primary }}
          >
            {siteConfig.name}
          </div> */}
          <Image
            src={siteConfig.logo}
            alt="Logo" 
            width={70} //configurar manualmente conforme necessidade
            height={100}
            /* className="object-contain h-10 w-auto max-w-[150px]"  */// Classes adicionadas
            priority
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 transition-colors"
                style={{
                  '--hover-border-color': { color: siteConfig.colors.primary }
                }as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = siteConfig.colors.primary
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#374151'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: siteConfig.colors.primary }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = siteConfig.colors.primary
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#374151'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </Container>
    </nav>
  )
}