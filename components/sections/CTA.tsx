'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { getWhatsAppLink } from '@/lib/utils'
import { siteConfig, template } from '@/lib/site-config'

export default function CTA() {

  if (!siteConfig.features.cta) return null

  const handleClick = () => {
    window.open(
      getWhatsAppLink(
        siteConfig.social.whatsapp || '', siteConfig.cta.wppText
      ),
      '_blank'
    )
  }


  return (
    <section 
      className="py-20"
      style={{ 
        background: siteConfig.colors.cta
        /* `linear-gradient(to bottom right, ${siteConfig.colors.primary}, ${siteConfig.colors.secondary}) `*/
      }}
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold" style={{color:siteConfig.colors.text}}>
            {siteConfig.cta.title}
          </h2>
          <p className="text-xl opacity-90">
            {siteConfig.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-white hover:bg-gray-100 transition-colors transform"
              style={{ color: 'white', background:siteConfig.colors.primary }}
              onClick={handleClick}
            >
              {template.hero.ctaPrimary}
            </Button>
            <Button 
              size="lg"
              className="border-2 border-white text-white hover:bg-white transition-colors"
              style={{ borderColor: 'white',
                backgroundColor: 'transparent'
               }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = siteConfig.colors.primary
                e.currentTarget.style.backgroundColor = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
              onClick={() => window.location.href = '#contact'}
            >
              Enviar Mensagem
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}