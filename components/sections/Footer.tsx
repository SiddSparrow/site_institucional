'use client'

import Container from '@/components/ui/Container'
import { siteConfig } from '@/lib/site-config'
import { Instagram, Facebook, Linkedin } from 'lucide-react'
import useProcessTitle from '@/hooks/templateFunctions'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12" style={{backgroundColor:siteConfig.colors.footer}}>
      <Container>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{color:siteConfig.colors.text}}>{siteConfig.name}</h3>
            <p className="text-gray-400">
              {useProcessTitle(siteConfig.description, {
                                                  defaultColor: siteConfig.colors.text,
                                                  spanColor: siteConfig.colors.accent
                                              })}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{color:siteConfig.colors.text}}>Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400" style={{color:siteConfig.colors.text}}>
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{color:siteConfig.colors.text}}>Redes Sociais</h4>
            <div className="flex gap-4">
              {siteConfig.social.instagram && (
                <a 
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a 
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a 
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400" style={{color:siteConfig.colors.text}}>
          <p>&copy; {currentYear} {siteConfig.name}. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  )
}