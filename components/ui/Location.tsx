'use client'

import { useState } from 'react'
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

// ========== TIPOS ==========
type MapStyle = 'default' | 'satellite' | 'terrain'| 'roadmap'
type LayoutStyle = 'side-by-side' | 'map-top' | 'map-bottom' | 'overlay'
type CardStyle = 'bordered' | 'elevated' | 'glass' | 'minimal'

// ========== PROPS ==========
interface LocationWidgetProps {
  // Informações obrigatórias
  address: string
  city: string
  latitude: number
  longitude: number
  
  // Informações opcionais
  zipCode?: string
  placeName?: string
  phone?: string
  email?: string
  workingHours?: string
  
  // Estilos (opcional - usa defaults)
  layout?: LayoutStyle
  cardStyle?: CardStyle
  mapStyle: MapStyle
  mapHeight?: number
  mapZoom?: number
  
  // Flags (opcional)
  showDirectionsButton?: boolean
  showPhoneButton?: boolean
  showEmailButton?: boolean
  
  // Classes customizadas (opcional)
  className?: string
}

// ========== COMPONENTE ==========
export default function LocationWidget({
  address,
  city,
  latitude,
  longitude,
  zipCode,
  placeName,
  phone,
  email,
  workingHours,
  layout = 'side-by-side',
  cardStyle = 'glass',
  mapStyle = 'roadmap',
  mapHeight = 450,
  mapZoom = 15,
  showDirectionsButton = true,
  showPhoneButton = true,
  showEmailButton = true,
  className = ''
}: LocationWidgetProps) {
  const [isHovered, setIsHovered] = useState(false)

  // URL do Google Maps Embed (SEM API KEY - GRATUITO)
  const getMapEmbedUrl = () => {
    // Usa o formato de iframe público do Google Maps (sem necessidade de API key)
    return `https://maps.google.com/maps?q=${latitude},${longitude}&hl=pt&z=${mapZoom}&output=embed&maptype=${mapStyle}`
  }

  // URL para abrir no Google Maps
  const getDirectionsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
  }

  // Estilos do card
  const getCardClasses = () => {
    const base = 'h-full transition-all duration-300'
    
    switch (cardStyle) {
      case 'bordered':
        return `${base} border-2 border-gray-200 rounded-2xl bg-white hover:shadow-lg`
      case 'elevated':
        return `${base} rounded-2xl bg-white shadow-lg hover:shadow-xl`
      case 'glass':
        return `${base} rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200/50 shadow-lg hover:bg-white/90`
      case 'minimal':
        return `${base} rounded-lg bg-gray-50 hover:bg-gray-100`
    }
  }

  // Classes do layout
  const getLayoutClasses = () => {
    switch (layout) {
      case 'side-by-side':
        return 'grid lg:grid-cols-2 gap-8 items-start'
      case 'map-top':
        return 'flex flex-col gap-8'
      case 'map-bottom':
        return 'flex flex-col-reverse gap-8'
      case 'overlay':
        return 'relative'
    }
  }

  // Card de informações
  const InfoCard = () => (
    <div className={`${getCardClasses()} p-8 space-y-6`}>
      {/* Cabeçalho */}
      {placeName && (
        <div>
          <h3 
            className="text-2xl font-bold mb-2"
            style={{ color: siteConfig.colors.text }}
          >
            {placeName}
          </h3>
          <div className="h-1 w-16 rounded-full" style={{ backgroundColor: siteConfig.colors.primary }} />
        </div>
      )}

      {/* Endereço */}
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <MapPin 
            className="w-5 h-5 mt-1 flex-shrink-0" 
            style={{ color: siteConfig.colors.primary }}
          />
          <div style={{ color: siteConfig.colors.text }}>
            <p className="font-medium">{address}</p>
            <p className="text-sm opacity-80">{city}</p>
            {zipCode && <p className="text-sm opacity-80">{zipCode}</p>}
          </div>
        </div>
      </div>

      {/* Horário de funcionamento */}
      {workingHours && (
        <div className="flex items-start gap-3">
          <Clock 
            className="w-5 h-5 mt-1 flex-shrink-0" 
            style={{ color: siteConfig.colors.primary }}
          />
          <div style={{ color: siteConfig.colors.text }}>
            <p className="font-medium">Horário de Funcionamento</p>
            <p className="text-sm opacity-80">{workingHours}</p>
          </div>
        </div>
      )}

      {/* Telefone */}
      {phone && showPhoneButton && (
        <div className="flex items-center gap-3">
          <Phone 
            className="w-5 h-5 flex-shrink-0" 
            style={{ color: siteConfig.colors.primary }}
          />
          <a 
            href={`tel:${phone.replace(/\D/g, '')}`}
            className="font-medium hover:underline transition-all"
            style={{ color: siteConfig.colors.text }}
          >
            {phone}
          </a>
        </div>
      )}

      {/* Email */}
      {email && showEmailButton && (
        <div className="flex items-center gap-3">
          <Mail 
            className="w-5 h-5 flex-shrink-0" 
            style={{ color: siteConfig.colors.primary }}
          />
          <a 
            href={`mailto:${email}`}
            className="font-medium hover:underline transition-all"
            style={{ color: siteConfig.colors.text }}
          >
            {email}
          </a>
        </div>
      )}

      {/* Botão de Direções */}
      {showDirectionsButton && (
        <div className="pt-4">
          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ 
              backgroundColor: siteConfig.colors.primary,
              color: 'white'
            }}
          >
            <Navigation className="w-5 h-5" />
            Como Chegar
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  )

  // Componente do Mapa
  const MapComponent = () => (
    <div 
      className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      style={{ height: mapHeight }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <iframe
        src={getMapEmbedUrl()}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="transition-all duration-300"
      />
      
      {/* Overlay para estilo overlay */}
      {layout === 'overlay' && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      )}
    </div>
  )

  // Layout Overlay
  if (layout === 'overlay') {
    return (
      <div className={className}>
        <div className="relative">
          <MapComponent />
          
          {/* Card flutuante */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4 lg:left-8 lg:translate-x-0">
            <InfoCard />
          </div>
        </div>
      </div>
    )
  }

  // Layout padrão
  return (
    <div className={`${getLayoutClasses()} ${className}`}>
      {layout === 'map-top' && <MapComponent />}
      <InfoCard />
      {(layout === 'side-by-side' || layout === 'map-bottom') && <MapComponent />}
    </div>
  )
}

// ========== EXPORTS NOMEADOS PARA FACILITAR ==========
// Versão com seção completa
export function LocationSection({
  title = 'Como Chegar',
  subtitle = 'Venha nos visitar! Estamos localizados em uma região de fácil acesso.',
  backgroundColor,
  ...props
}: LocationWidgetProps & {
  title?: string
  subtitle?: string
  backgroundColor?: string
}) {
  return (
    <section 
      className="py-20"
      style={{ backgroundColor: backgroundColor || siteConfig.colors.about }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: siteConfig.colors.text }}
          >
            {title}
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: siteConfig.colors.text }}
          >
            {subtitle}
          </p>
        </div>

        <LocationWidget {...props} />
      </div>
    </section>
  )
}