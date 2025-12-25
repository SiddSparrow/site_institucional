'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { LucideIcon } from 'lucide-react'
import { useHandleWhatsAppClick } from '@/hooks/templateFunctions'

export interface Service {
  title: string
  description: string
  icon: LucideIcon
  features?: string[]
  badge?: string
}

export interface ServicesProps {
  services: Service[]
  title?: string
  subtitle?: string
}

const ServiceCard = ({ 
  service, 
  index
}: { 
  service: Service
  index: number
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  const Icon = service.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="group relative h-full"
    >
      {/* Badge */}
      {service.badge && (
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border border-blue-500/30 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          ⭐ {service.badge}
        </motion.div>
      )}

      {/* Card Container */}
      <div 
        className="relative h-full p-8 rounded-2xl backdrop-blur-md border transition-all duration-500 overflow-hidden bg-gradient-to-br from-slate-900/80 via-blue-950/60 to-slate-900/80 border-blue-500/20"
        style={{
          boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px) rotateX(5deg) rotateY(5deg)'
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(59, 130, 246, 0.3)'
          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) rotateX(0) rotateY(0)'
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.15)'
          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
        }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.2), transparent 70%)'
          }}
        />

        {/* Shimmer effect */}
        <div 
          className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ animation: 'shimmer 1.5s ease-in-out' }}
        />

        {/* Icon Container */}
        <motion.div 
          className="relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-400/30"
          whileHover={{ 
            scale: 1.1, 
            rotate: 5,
            boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)'
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Icon 
            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 text-blue-400" 
            strokeWidth={1.5}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-3 text-white transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-blue-100/70 leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Features List */}
          {service.features && service.features.length > 0 && (
            <ul className="space-y-2 mt-6">
              {service.features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  className="flex items-center gap-2 text-sm text-blue-100/60"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: index * 0.1 + idx * 0.05 + 0.3 }}
                >
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <svg 
                      className="w-2.5 h-2.5 text-white" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        {/* Decorative corner element */}
        <div 
          className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-purple-600 blur-3xl"
        />
      </div>
    </motion.div>
  )
}

export default function ServicesSection({ 
  services, 
  title = 'O Que Está Incluído',
  subtitle = 'Tudo que você precisa para ter presença digital profissional'
}: ServicesProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section 
      ref={sectionRef}
      id="services"
      className="relative py-24 overflow-hidden"
    >
      {/* REMOVIDO: Efeitos de fundo - agora está no Layout global */}
      {/* REMOVIDO: Grid pattern - agora está no Layout global */}

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full backdrop-blur-sm bg-blue-600/10 border border-blue-500/20">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </div>
              <span className="text-blue-200 text-sm font-medium">
                Solução Completa
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* CTA Final */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: services.length * 0.1 + 0.5 }}
        >
          <p className="text-blue-100/70 mb-6 text-lg">
            Pronto para ter seu site profissional no ar?
          </p>
          
          <a 
            onClick={useHandleWhatsAppClick}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl shadow-2xl shadow-blue-900/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Solicitar Orçamento
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
          </a>
        </motion.div>
      </div>

      {/* Shimmer animation */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
      `}</style>
    </section>
  )
}