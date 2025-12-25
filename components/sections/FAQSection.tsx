'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useHandleWhatsAppClick } from '@/hooks/templateFunctions'

// ========== TIPOS ==========
export interface FAQItem {
  question: string
  answer: string
  category?: string // Opcional: categorizar perguntas
}

export interface FAQSectionProps {
  faqs: FAQItem[]
  title?: string
  subtitle?: string
}

// ========== COMPONENTE DE FAQ ITEM ==========
const FAQAccordion = ({ 
  faq, 
  index
}: { 
  faq: FAQItem
  index: number
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="group"
    >
      <div 
        className={`relative backdrop-blur-md border rounded-2xl transition-all duration-300 overflow-hidden ${
          isOpen 
            ? 'bg-gradient-to-br from-blue-900/40 via-blue-950/50 to-slate-900/40 border-blue-500/40 shadow-lg shadow-blue-500/20' 
            : 'bg-gradient-to-br from-slate-900/60 via-blue-950/40 to-slate-900/60 border-blue-500/20 hover:border-blue-500/30'
        }`}
      >
        {/* Question - Clickable */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-6 flex items-start justify-between gap-4 group"
        >
          <div className="flex-1">
            {/* Category Badge (opcional) */}
            {faq.category && (
              <span className="inline-block text-xs px-2 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30 mb-2">
                {faq.category}
              </span>
            )}
            
            {/* Question */}
            <span className={`text-lg font-semibold transition-colors duration-300 ${
              isOpen ? 'text-white' : 'text-blue-100/90 group-hover:text-white'
            }`}>
              {faq.question}
            </span>
          </div>

          {/* Icon */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isOpen 
                ? 'bg-blue-600/30 text-blue-300' 
                : 'bg-blue-600/10 text-blue-400 group-hover:bg-blue-600/20'
            }`}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>

        {/* Answer - Animated */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                {/* Separator line */}
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-4" />
                
                {/* Answer text */}
                <p className="text-blue-100/70 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative glow on open */}
        {isOpen && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none opacity-50" />
        )}
      </div>
    </motion.div>
  )
}

// ========== COMPONENTE PRINCIPAL ==========
export default function FAQSection({
  faqs,
  title = 'Perguntas Frequentes',
  subtitle = 'Tire suas dúvidas sobre nossos serviços'
}: FAQSectionProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  // Agrupar FAQs por categoria (se houver)
  const categories = [...new Set(faqs.map(faq => faq.category).filter(Boolean))]
  const hasCategories = categories.length > 0

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative  overflow-hidden"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-blue-200 text-sm font-medium">
                Dúvidas Comuns
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

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          {hasCategories ? (
            // Se tem categorias, agrupa por categoria
            categories.map((category, catIndex) => (
              <div key={catIndex} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
                  {category}
                </h2>
                <div className="space-y-4">
                  {faqs
                    .filter(faq => faq.category === category)
                    .map((faq, index) => (
                      <FAQAccordion key={index} faq={faq} index={index} />
                    ))}
                </div>
              </div>
            ))
          ) : (
            // Se não tem categorias, lista todas
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQAccordion key={index} faq={faq} index={index} />
              ))}
            </div>
          )}
        </div>

        {/* CTA Final - Ainda tem dúvidas? */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: faqs.length * 0.05 + 0.5 }}
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-blue-900/30 via-blue-950/40 to-slate-900/30 border border-blue-500/20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Ainda tem dúvidas?
              </h3>
              <p className="text-blue-100/70 mb-4">
                Estamos aqui para ajudar! Entre em contato via WhatsApp.
              </p>
            </div>

            <a
              onClick={useHandleWhatsAppClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}