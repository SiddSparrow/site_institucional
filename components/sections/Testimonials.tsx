'use client'

import { useState, useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { template, siteConfig } from '@/lib/site-config'

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const testimonials = template.testimonials.testimonials

    const autoPlay = true
    const autoPlayInterval = 4000

    const nextSlide = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    useEffect(() => {
        if (!autoPlay) return

        timerRef.current = setInterval(() => {
            nextSlide()
        }, autoPlayInterval)

        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [autoPlay, autoPlayInterval, currentIndex])

    const handleMouseEnter = () => {
        if (timerRef.current) clearInterval(timerRef.current)
    }

    const handleMouseLeave = () => {
        if (autoPlay) {
            timerRef.current = setInterval(nextSlide, autoPlayInterval)
        }
    }

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    }

    return (
        <section
            id="testimonials"
            className="py-20"
            style={{ backgroundColor: siteConfig.colors.testimonials }}
        >
            <Container>
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ color:  siteConfig.colors.text  }}
                    >
                        {siteConfig.Testimonials.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ color:  siteConfig.colors.text  }}>
                        {siteConfig.Testimonials.subtitle}
                    </p>
                </div>

                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Container do Slide */}
                    <div className="relative min-h-[450px] pb-8 overflow-hidden px-4 md:px-20">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 400, damping: 40 },
                                    opacity: { duration: 0.15 }
                                }}
                                className="w-full"
                            >
                                {/* Wrapper com position relative para os botões */}
                                <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                                    <Quote
                                        className="w-12 h-12 mb-6"
                                        style={{ color: siteConfig.colors.primary }}
                                    />

                                    <p className="text-gray-700 text-lg md:text-xl mb-8 italic leading-relaxed">
                                        "{testimonials[currentIndex].content}"
                                    </p>

                                    <div className="flex items-center gap-2 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-2xl">★</span>
                                        ))}
                                    </div>

                                    <div>
                                        <div className="font-bold text-gray-900 text-xl">
                                            {testimonials[currentIndex].name}
                                        </div>
                                        <div className="text-gray-600 mt-1">
                                            {testimonials[currentIndex].role}
                                        </div>
                                    </div>

                                    {/* Botões DENTRO do card para ficarem centralizados nele */}
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-16 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
                                        style={{ color: siteConfig.colors.primary }}
                                        aria-label="Anterior"
                                    >
                                        <ChevronLeft size={20} className="md:w-6 md:h-6" />
                                    </button>

                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-16 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
                                        style={{ color: siteConfig.colors.primary }}
                                        aria-label="Próximo"
                                    >
                                        <ChevronRight size={20} className="md:w-6 md:h-6" />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Indicadores permanecem fora */}
                    <div className="flex justify-center gap-2 mt-8 pb-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className="w-3 h-3 rounded-full transition-all duration-300"
                                style={{
                                    backgroundColor: index === currentIndex
                                        ? siteConfig.colors.primary
                                        : '#D1D5DB',
                                    transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)'
                                }}
                                aria-label={`Ir para depoimento ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}