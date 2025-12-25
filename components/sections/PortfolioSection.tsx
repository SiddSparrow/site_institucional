'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Parallax, Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/parallax'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useHandleWhatsAppClick } from '@/hooks/templateFunctions'

// ========== TIPOS ==========
export interface PortfolioTemplate {
  title: string
  description: string
  niche: string
  image: string
  demoUrl: string
  features: string[]
  color: string // Cor de destaque
  ideal: string[] // "Ideal para: Médicos, Dentistas..."
}

export interface PortfolioSectionProps {
  templates: PortfolioTemplate[]
  title?: string
  subtitle?: string
}

// ========== COMPONENTE PRINCIPAL ==========
export default function PortfolioSection({
  templates,
  title = 'Nossos Modelos',
  subtitle = 'Sites profissionais prontos para o seu negócio'
}: PortfolioSectionProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative overflow-hidden"
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
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-200 text-sm font-medium">
                Modelos Especializados
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

        {/* Swiper com Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <Swiper
            modules={[Parallax, Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            speed={800}
            parallax={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-blue-400/40 !w-3 !h-3',
              bulletActiveClass: '!bg-blue-400 !w-8',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 1.2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 1.5,
                centeredSlides: false,
              },
            }}
            className="portfolio-swiper"
          >
            {templates.map((template, index) => (
              <SwiperSlide key={index}>
                {/* Card do Template */}
                <div className="group relative h-[600px] rounded-3xl overflow-hidden backdrop-blur-md border border-blue-500/20 bg-gradient-to-br from-slate-900/80 via-blue-950/60 to-slate-900/80">
                  {/* Background Image com Parallax */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    data-swiper-parallax="-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10" />
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Content com Parallax */}
                  <div className="relative h-full flex flex-col justify-end p-8 md:p-12 z-20">
                    {/* Badge do Nicho */}
                    <div
                      className="inline-flex self-start items-center gap-2 mb-4 px-4 py-2 rounded-full backdrop-blur-md border"
                      style={{
                        background: `${template.color}20`,
                        borderColor: `${template.color}40`
                      }}
                      data-swiper-parallax="-200"
                    >
                      <span
                        className="text-sm font-semibold"
                        style={{ color: template.color }}
                      >
                        {template.niche}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-4xl md:text-5xl font-bold text-white mb-3"
                      data-swiper-parallax="-300"
                    >
                      {template.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-lg text-blue-100/80 mb-6 max-w-2xl"
                      data-swiper-parallax="-400"
                    >
                      {template.description}
                    </p>

                    {/* Ideal Para */}
                    <div
                      className="flex flex-wrap gap-2 mb-6"
                      data-swiper-parallax="-450"
                    >
                      <span className="text-sm text-blue-200/60">Ideal para:</span>
                      {template.ideal.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-3 py-1 rounded-full backdrop-blur-sm border border-blue-400/20 text-blue-200"
                          style={{ background: `${template.color}10` }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Features Grid */}
                    <div
                      className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8"
                      data-swiper-parallax="-500"
                    >
                      {template.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-blue-100/70"
                        >
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: `${template.color}30` }}
                          >
                            <svg
                              className="w-3 h-3"
                              style={{ color: template.color }}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div data-swiper-parallax="-600">
                      <a
                        href={template.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-xl backdrop-blur-md border transition-all duration-300 hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${template.color}20, ${template.color}10)`,
                          borderColor: `${template.color}40`
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `linear-gradient(135deg, ${template.color}30, ${template.color}20)`
                          e.currentTarget.style.boxShadow = `0 10px 40px ${template.color}40`
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `linear-gradient(135deg, ${template.color}20, ${template.color}10)`
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        <ExternalLink className="w-5 h-5" style={{ color: template.color }} />
                        <span className="font-semibold text-white">Ver Demo ao Vivo</span>
                        <ArrowRight
                          className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                          style={{ color: template.color }}
                        />
                      </a>
                    </div>
                  </div>

                  {/* Decorative Glow */}
                  <div
                    className="absolute top-0 right-0 w-96 h-96 opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-3xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${template.color}, transparent 70%)`
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons - Custom */}
          <button
            className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full backdrop-blur-md bg-blue-600/10 border border-blue-500/20 flex items-center justify-center transition-all duration-300 hover:bg-blue-600/20 hover:scale-110 hover:border-blue-400/40"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full backdrop-blur-md bg-blue-600/10 border border-blue-500/20 flex items-center justify-center transition-all duration-300 hover:bg-blue-600/20 hover:scale-110 hover:border-blue-400/40"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-blue-100/70 mb-6 text-lg">
            Gostou do que viu? Escolha seu modelo e comece agora!
          </p>

          <a
            onClick={useHandleWhatsAppClick}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl shadow-2xl shadow-blue-900/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Quero Meu Site Assim
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

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .portfolio-swiper {
          padding: 20px 0 60px;
        }

        .portfolio-swiper .swiper-pagination {
          bottom: 20px;
        }

        .portfolio-swiper .swiper-pagination-bullet {
          transition: all 0.3s ease;
        }

        .portfolio-swiper .swiper-slide {
          transition: transform 0.3s ease;
        }

        .portfolio-swiper .swiper-slide:not(.swiper-slide-active) {
          transform: scale(0.9);
          opacity: 0.5;
        }

        .portfolio-swiper .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
        }
      `}</style>
    </section>
  )
}