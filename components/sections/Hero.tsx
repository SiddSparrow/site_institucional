'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/ui/FadeIn'
import { siteConfig, template } from '@/lib/site-config'
import { getWhatsAppLink } from '@/lib/utils'
import Image from 'next/image'
import useProcessTitle from '@/hooks/templateFunctions'

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
                                {useProcessTitle(template.hero.title, {
                                    defaultColor: siteConfig.colors.text,
                                    spanColor: siteConfig.colors.primary
                                })}
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
                                {useProcessTitle(template.hero.subtitle, {
                                    defaultColor: siteConfig.colors.text,
                                    spanColor: siteConfig.colors.accent
                                })}
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    /* onClick={handleAgendarClick} */
                                    onClick={handleWhatsAppClick}
                                    style={{ backgroundColor: siteConfig.colors.primary }}
                                    className="hover:opacity-90 transition-opacity transform hover:scale-105 duration-200 shadow-lg"
                                >
                                    {template.hero.ctaPrimary}
                                </Button>

                            </div>
                        </FadeIn>
                    </div>
                    <div></div>
                </div>
            </Container>
        </section>
    )
}