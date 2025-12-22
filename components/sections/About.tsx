import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { template, siteConfig } from '@/lib/site-config'
import * as LucideIcons from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const getIcon = (iconName: string) => {
    const icons = LucideIcons as any
    return icons[iconName] || LucideIcons.HelpCircle
  }

  return (
    <section id="about" className="py-20 overflow-hidden" style={{background:siteConfig.colors.about}}>
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            {/* Container flexível */}
            {/* Imagem com largura máxima e altura automática */}
            <div className="relative w-full max-w-md overflow-hidden">
              <div className="relative w-full h-auto">
                <Image 
                  src={template.foto_perfil || '/images/placeholder.jpg'}
                  alt="Foto Profissional"
                  width={600}      // Largura desejada
                  height={0}       // Altura será calculada automaticamente
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                  priority
                  style={{ 
                    height: 'auto', // Mantém proporção
                    objectFit: 'contain' // Não corta a imagem
                  }}
                />
              </div>
            </div>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{color:siteConfig.colors.text}}>
                {template.about.title}
              </h2>
            </FadeIn>
            
            {template.about.description.map((paragraph, index) => (
              <FadeIn key={index} delay={0.3 + (index * 0.1)}>
                <p className="text-lg text-gray-600" style={{color:siteConfig.colors.text}}>
                  {paragraph}
                </p>
              </FadeIn>
            ))}

            <div className="grid grid-cols-3 gap-6 pt-6">
              {template.about.credentials.map((credential, index) => {
                const IconComponent = getIcon(credential.icon)
                
                return (
                  <FadeIn key={index} delay={0.5 + (index * 0.1)}>
                    <div className="text-center group">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${siteConfig.colors.primary}20` }}
                      >
                        <IconComponent 
                          className="w-6 h-6" 
                          style={{ color: siteConfig.colors.text }}
                        />
                      </div>
                      <div className="font-bold text-gray-900" style={{color:siteConfig.colors.text}}>{credential.title}</div>
                      <div className="text-sm text-gray-600" style={{color:siteConfig.colors.text}}>{credential.description}</div>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}