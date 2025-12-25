'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

// ========== TIPOS ==========
export interface FooterProps {
  logo?: string // Path para logo ou texto
  logoText?: string // Se não tiver imagem, usa texto
  phone?: string
  email?: string
  whatsappNumber?: string // Formato: 5521999999999
  companyName?: string
  year?: number
}

// ========== COMPONENTE PRINCIPAL ==========
export default function Footer({
  logo = siteConfig.logo,
  logoText = 'WebExpress',
  phone = '(21) 98555-1290',
  email = '',
  whatsappNumber = '5521985551290',
  companyName = 'WebExpress',
  year = new Date().getFullYear()
}: FooterProps) {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: '-50px' })

  return (
    <footer
      ref={footerRef}
      className="relative mt-24 border-t border-white/5"
    >
      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="relative backdrop-blur-md bg-slate-900/30"
      >
        <div className="container mx-auto px-6 py-12">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              {logo ? (
                <img 
                  src={logo} 
                  alt={companyName}
                  className="h-8 w-auto"
                  style={{width:'10rem',height:'10rem'}}
                />
              ) : (
                <div className="flex items-center gap-2">
                  {/* Logo Icon/Badge */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-400/30 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xl font-bold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {logoText.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Logo Text */}
                  <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    {logoText}
                  </span>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Phone */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-blue-400/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm text-blue-100/80 group-hover:text-white transition-colors">
                  {phone}
                </span>
              </a>

              {/* Email */}
              {/* <a
                href={`mailto:${email}`}
                className="group flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-blue-400/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm text-blue-100/80 group-hover:text-white transition-colors">
                  {email}
                </span>
              </a> */}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-8" />

          {/* Bottom Section - Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-100/50">
            <p>
              © {year} {companyName}. Todos os direitos reservados.
            </p>
            
            {/* Optional: Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#privacy" 
                className="hover:text-blue-300 transition-colors"
              >
                Privacidade
              </a>
              <span className="text-blue-500/30">•</span>
              <a 
                href="#terms" 
                className="hover:text-blue-300 transition-colors"
              >
                Termos
              </a>
            </div>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-t from-blue-500/5 to-transparent blur-2xl pointer-events-none" />
      </motion.div>
    </footer>
  )
}