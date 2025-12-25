'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import * as Icons from 'lucide-react'

// ========== MAPEAMENTO DE ÍCONES ==========
const getIcon = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName]
  return IconComponent || Icons.Circle // Fallback para Circle se não encontrar
}

// ========== TIPOS ==========
export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string // ← MUDADO: agora é string ao invés de LucideIcon
  duration: string
  details?: string[]
}

export interface ProcessSectionProps {
  steps: ProcessStep[]
  title?: string
  subtitle?: string
}

// ========== COMPONENTE DE STEP ==========
const StepCard = ({ 
  step, 
  index,
  isLast
}: { 
  step: ProcessStep
  index: number
  isLast: boolean
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  const Icon = getIcon(step.icon) // ← Resolve o ícone aqui

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="relative"
    >
      {/* Timeline connector - vertical line */}
      {!isLast && (
        <div className="hidden lg:block absolute left-1/2 top-32 w-0.5 h-full -translate-x-1/2 z-0">
          <motion.div
            className="h-full bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            style={{ transformOrigin: 'top' }}
          />
        </div>
      )}

      {/* Card */}
      <div className="relative group">
        {/* Step Number Badge - Grande e central */}
        <motion.div
          className="mx-auto w-20 h-20 rounded-full backdrop-blur-md border-2 border-blue-500/30 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-6 relative z-10"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 200,
            delay: index * 0.2 + 0.1
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)'
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl group-hover:bg-blue-500/30 transition-all duration-300" />
          
          <span className="relative text-3xl font-bold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {step.step}
          </span>
        </motion.div>

        {/* Icon Circle */}
        <motion.div
          className="mx-auto w-16 h-16 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-400/30 flex items-center justify-center mb-6"
          initial={{ rotate: -180, opacity: 0 }}
          animate={isInView ? { rotate: 0, opacity: 1 } : { rotate: -180, opacity: 0 }}
          transition={{ 
            duration: 0.6,
            delay: index * 0.2 + 0.2
          }}
          whileHover={{ 
            scale: 1.1, 
            rotate: 5,
            boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
          }}
        >
          <Icon className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
        </motion.div>

        {/* Content Card */}
        <div className="text-center px-6 py-8 rounded-2xl backdrop-blur-md border border-blue-500/20 bg-gradient-to-br from-slate-900/80 via-blue-950/60 to-slate-900/80 transition-all duration-500 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/20"
        style={{minHeight: '26.7rem'}}>
          {/* Duration Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 mb-4">
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-blue-200 font-medium">{step.duration}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-blue-100/70 leading-relaxed mb-6">
            {step.description}
          </p>

          {/* Details List */}
          {step.details && step.details.length > 0 && (
            <ul className="space-y-2">
              {step.details.map((detail, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-blue-100/60"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: index * 0.2 + idx * 0.05 + 0.5 }}
                >
                  <svg 
                    className="w-5 h-5 flex-shrink-0 text-blue-400 mt-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-left">{detail}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        {/* Decorative corner glow */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  )
}

// ========== COMPONENTE PRINCIPAL ==========
export default function ProcessSection({
  steps,
  title = 'Como Funciona',
  subtitle = 'Processo simples e transparente do início ao fim'
}: ProcessSectionProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-10 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
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
                Processo Simples
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

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-7xl mx-auto relative">
          {steps.map((step, index) => (
            <StepCard 
              key={index}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}

          {/* Desktop Timeline - Horizontal connector */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 -z-10">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
        </div>

        {/* CTA Final */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: steps.length * 0.2 + 0.5 }}
        >
          <p className="text-blue-100/70 mb-6 text-lg">
            Pronto para começar seu projeto?
          </p>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl shadow-2xl shadow-blue-900/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Iniciar Agora
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
    </section>
  )
}