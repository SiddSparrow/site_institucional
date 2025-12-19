import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { Quote } from 'lucide-react'
import { template, siteConfig } from '@/lib/site-config'

export default function Testimonials() {
    return (
        <section id='testimonials' className="py-20" style={{ backgroundColor: `${siteConfig.colors.primary}10` }}>
            <Container>
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{color:'grey'}}>
                            {template.type === 'barbeiro' ? 'O Que Dizem Nossos Clientes' :
                                template.type === 'coach' ? 'Histórias de Transformação' :
                                    'O Que Dizem Meus Pacientes'}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {template.type === 'coach' ? 'Resultados reais de pessoas que transformaram suas vidas.' :
                                'Depoimentos reais de pessoas satisfeitas.'}
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {template.testimonials.map((testimonial, index) => (
                        <FadeIn key={testimonial.id} delay={0.1 * (index + 1)}>
                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg 
                            transition-all duration-300 transform hover:-translate-y-121:58 
                            h-full min-h-[260px] flex flex-col">
                                <Quote
                                    className="w-10 h-10 mb-4"
                                    style={{ color: siteConfig.colors.primary }}
                                />
                                <p className="text-gray-600 mb-6 italic">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl">★</span>
                                    ))}
                                </div>

                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    )
}