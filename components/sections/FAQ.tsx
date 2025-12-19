'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { template, siteConfig } from '@/lib/site-config'

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {siteConfig.faq.text}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {template.faq.questions.map((faq) => (
            <div 
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 transition-transform flex-shrink-0",
                    openId === faq.id && "rotate-180"
                  )}
                  style={{ color: siteConfig.colors.primary }}
                />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openId === faq.id ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 py-4 bg-gray-50 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}