'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/ui/FadeIn'
import { siteConfig, template } from '@/lib/site-config'
import { getWhatsAppLink } from '@/lib/utils'
import Image from 'next/image'

export default function Hero() {
    const handleAgendarClick = () => {
        window.location.href = '#contact'
    }

    const handleWhatsAppClick = () => {
        window.open(
            getWhatsAppLink(siteConfig.social.whatsapp || '', 'Olá! Gostaria de mais informações.'),
            '_blank'
        )
    }

    const processTitle = (
        title: string,
        options?: {
            defaultColor?: string
            spanColor?: string
            spanBold?: boolean
        }
    ) => {
        const {
            defaultColor = siteConfig.colors.text || '#1f2937',
            spanColor = siteConfig.colors.accent || siteConfig.colors.primary,
            spanBold = true
        } = options || {}

        // Regex para capturar <br>, <br/>, <br /> e spans
        const parts = title.split(/(<br\s*\/?>|<\/?span>)/gi)

        const result: React.ReactNode[] = []
        let currentText = ''
        let isInSpan = false

        parts.forEach((part, index) => {
            const partLower = part.toLowerCase()

            if (partLower === '<br>' || partLower === '<br/>' || partLower === '<br />') {
                // Adicionar texto acumulado antes do <br>
                if (currentText) {
                    const element = isInSpan ? (
                        <span
                            key={`span-${index}`}
                            style={{
                                color: spanColor,
                                fontWeight: spanBold ? 'bold' : 'normal'
                            }}
                        >
                            {currentText}
                        </span>
                    ) : (
                        <span
                            key={`text-${index}`}
                            style={{ color: defaultColor }}
                        >
                            {currentText}
                        </span>
                    )
                    result.push(element)
                    currentText = ''
                }

                // Adicionar a quebra de linha
                result.push(<br key={`br-${index}`} />)
            }
            else if (partLower === '<span>') {
                // Adicionar texto normal antes de entrar no span
                if (currentText && !isInSpan) {
                    result.push(
                        <span
                            key={`text-before-${index}`}
                            style={{ color: defaultColor }}
                        >
                            {currentText}
                        </span>
                    )
                    currentText = ''
                }
                isInSpan = true
            }
            else if (partLower === '</span>') {
                // Adicionar texto do span
                if (currentText) {
                    result.push(
                        <span
                            key={`span-content-${index}`}
                            style={{
                                color: spanColor,
                                fontWeight: spanBold ? 'bold' : 'normal'
                            }}
                        >
                            {currentText}
                        </span>
                    )
                    currentText = ''
                }
                isInSpan = false
            }
            else {
                // É texto normal, acumular
                currentText += part
            }
        })

        // Adicionar qualquer texto restante
        if (currentText) {
            const element = isInSpan ? (
                <span
                    key="final-span"
                    style={{
                        color: spanColor,
                        fontWeight: spanBold ? 'bold' : 'normal'
                    }}
                >
                    {currentText}
                </span>
            ) : (
                <span
                    key="final-text"
                    style={{ color: defaultColor }}
                >
                    {currentText}
                </span>
            )
            result.push(element)
        }

        return result
    }

    const imageUrl = template.foto_geral || '/images/placeholder.jpg'

    return (
        <section id="home" className="relative min-h-screen py-20 md:py-32 overflow-hidden">
            {/* Imagem de background que ocupa toda a tela */}
            <div className=" inset-0 z-0">

                <Image
                    src={imageUrl}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    sizes="100vw"
                />


                {/* Overlay para melhor contraste do texto */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <Container className="relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <div className="space-y-8">
                        <FadeIn delay={0.1}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                                {processTitle(template.hero.title, {
                                    defaultColor: siteConfig.colors.text,
                                    spanColor: siteConfig.colors.primary
                                })}
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
                                {processTitle(template.hero.subtitle, {
                                    defaultColor: siteConfig.colors.text,
                                    spanColor: siteConfig.colors.accent
                                })}
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    onClick={handleAgendarClick}
                                    style={{ backgroundColor: siteConfig.colors.primary }}
                                    className="hover:opacity-90 transition-opacity transform hover:scale-105 duration-200 shadow-lg"
                                >
                                    {template.hero.ctaPrimary}
                                </Button>
                                <Button
                                    size="lg"
                                    className="border-2 transition-all transform hover:scale-105 duration-200 shadow-lg"
                                    style={{
                                        borderColor: 'white',
                                        color: 'white',
                                        backgroundColor: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent'
                                    }}
                                    onClick={handleWhatsAppClick}
                                >
                                    {template.hero.ctaSecondary}
                                </Button>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Espaço vazio para balancear o grid */}
                    <div></div>
                </div>
            </Container>
        </section>
    )
}