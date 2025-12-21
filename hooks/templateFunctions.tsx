'use client'

import { siteConfig, template } from '@/lib/site-config'
import { getWhatsAppLink } from '@/lib/utils'

export  const useHandleWhatsAppClick = () => {
        window.open(
            getWhatsAppLink(siteConfig.social.whatsapp || '', 'Olá! Gostaria de mais informações.'),
            '_blank'
        )
    }
export const useProcessTitle = (
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

export default useProcessTitle