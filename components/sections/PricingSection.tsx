'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// ========== TIPOS ==========
export interface PricingFeature {
  text: string
  included: boolean
  highlight?: boolean // Destaque especial
}

export interface PricingPlan {
  name: string
  price: string
  originalPrice?: string // Preço riscado (se houver desconto)
  period?: string // "pagamento único", "mensal", etc
  description: string
  features: PricingFeature[]
  badge?: string // "Mais Popular", "Melhor Custo-Benefício"
  highlighted?: boolean // Se é o plano em destaque
  ctaText?: string
  ctaLink?: string
}

export interface PricingSectionProps {
  plans: PricingPlan[]
  title?: string
  subtitle?: string
  disclaimer?: string // Texto pequeno no final
}

// ========== COMPONENTE DE CARD DE PREÇO ==========
const PricingCard = ({ 
  plan, 
  index
}: { 
  plan: PricingPlan
  index: number
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: plan.highlighted ? 1.05 : 1 
      } : { 
        opacity: 0, 
        y: 50, 
        scale: 0.95 
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={`relative group ${plan.highlighted ? 'lg:-mt-6' : ''}`}
    >
      {/* Badge */}
      {plan.badge && (
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500/30 text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          ⭐ {plan.badge}
        </motion.div>
      )}

      {/* Card */}
      <div 
        className={`relative h-full p-8 rounded-2xl backdrop-blur-md border transition-all duration-500 ${
          plan.highlighted 
            ? 'bg-gradient-to-br from-blue-900/80 via-blue-950/90 to-slate-900/80 border-blue-500/40 shadow-2xl shadow-blue-500/30' 
            : 'bg-gradient-to-br from-slate-900/80 via-blue-950/60 to-slate-900/80 border-blue-500/20'
        }`}
        style={{
          boxShadow: plan.highlighted 
            ? '0 20px 60px rgba(59, 130, 246, 0.3)' 
            : '0 8px 32px rgba(59, 130, 246, 0.15)'
        }}
      >
        {/* Glow effect no card destacado */}
        {plan.highlighted && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-2xl pointer-events-none" />
        )}

        <div className="relative z-10">
          {/* Nome do Plano */}
          <h3 className="text-2xl font-bold text-white mb-2">
            {plan.name}
          </h3>

          {/* Descrição */}
          <p className="text-blue-100/60 text-sm mb-6">
            {plan.description}
          </p>

          {/* Preço */}
          <div className="mb-6">
            {plan.originalPrice && (
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-200/40 line-through text-lg">
                  {plan.originalPrice}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                  Desconto
                </span>
              </div>
            )}
            
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-blue-200/60 text-sm">
                  {plan.period}
                </span>
              )}
            </div>
          </div>

          {/* Separador */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-6" />

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: index * 0.1 + idx * 0.05 + 0.4 }}
              >
                {feature.included ? (
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mt-0.5">
                    <svg 
                      className="w-3 h-3 text-white" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-700/50 flex items-center justify-center mt-0.5">
                    <svg 
                      className="w-3 h-3 text-slate-500" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                )}
                
                <span className={`text-sm ${
                  feature.included 
                    ? feature.highlight 
                      ? 'text-white font-semibold' 
                      : 'text-blue-100/80' 
                    : 'text-blue-100/40 line-through'
                }`}>
                  {feature.text}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={plan.ctaLink || '#contact'}
            className={`block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
              plan.highlighted
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-xl shadow-blue-900/50 hover:scale-105 hover:-translate-y-0.5'
                : 'bg-white/5 hover:bg-white/10 border border-blue-500/20 hover:border-blue-500/40 text-white'
            }`}
          >
            {plan.ctaText || 'Escolher Plano'}
          </a>
        </div>

        {/* Decorative corner */}
        {plan.highlighted && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        )}
      </div>
    </motion.div>
  )
}

// ========== COMPONENTE PRINCIPAL ==========
export default function PricingSection({
  plans,
  title = 'Investimento',
  subtitle = 'Preço justo e transparente, sem surpresas',
  disclaimer
}: PricingSectionProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-24 overflow-hidden"
    >
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
              <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-blue-200 text-sm font-medium">
                Preço Transparente
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

        {/* Pricing Cards */}
        <div className={`grid grid-cols-1 ${
          plans.length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3 max-w-6xl'
        } mx-auto gap-8`}>
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Disclaimer */}
        {disclaimer && (
          <motion.p
            className="text-center text-sm text-blue-100/50 mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: plans.length * 0.1 + 0.5 }}
          >
            {disclaimer}
          </motion.p>
        )}

        {/* Money Back Guarantee (Opcional) */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: plans.length * 0.1 + 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 p-6 rounded-2xl backdrop-blur-sm bg-blue-600/5 border border-blue-500/10">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="font-semibold text-white mb-1">Garantia de Satisfação</div>
              <div className="text-sm text-blue-100/60">100% do seu dinheiro de volta se não aprovar o resultado</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}