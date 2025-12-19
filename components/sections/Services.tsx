'use client'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { template, siteConfig } from '@/lib/site-config'
import * as LucideIcons from 'lucide-react'

export default function Services() {
  const getIcon = (iconName: string) => {
    const icons = LucideIcons as any
    return icons[iconName] || LucideIcons.HelpCircle
  }

  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {siteConfig.services.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                  className="group
                            p-6
                            rounded-xl
                            border-2
                            border-gray-200
                            hover:shadow-xl
                            transition-all
                            duration-300
                            transform
                            hover:-translate-y-2
                            h-full
                            min-h-[260px]
                            flex
                            flex-col"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = siteConfig.colors.primary
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb'
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${siteConfig.colors.primary}20`
                    }}
                  >
                    <IconComponent 
                      className="w-6 h-6" 
                      style={{ color: siteConfig.colors.primary }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}