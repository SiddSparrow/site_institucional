'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import Image from 'next/image'

// ========== TIPOS ==========
type ContactStyle = 'modern-dark' | 'split-image' | 'glass' | 'minimal' | 'gradient' | 'side-by-side'
type InputStyle = 'outlined' | 'filled' | 'minimal' | 'underline'
type ButtonPosition = 'center' | 'left' | 'right' | 'full-width'

// ========== CONFIGURAÇÕES ==========
const CONTACT_CONFIG = {
  // Estilo geral: 'modern-dark' | 'split-image' | 'glass' | 'minimal' | 'gradient' | 'side-by-side'
  style: siteConfig.contact.style as ContactStyle, // MUDE AQUI!
  
  // Estilo dos inputs: 'outlined' | 'filled' | 'minimal' | 'underline'
  inputStyle: 'minimal' as InputStyle,
  
  // Posição do botão: 'center' | 'left' | 'right' | 'full-width'
  buttonPosition: 'center' as ButtonPosition,
  
  // ===== CONFIGURAÇÕES DE IMAGEM (para 'split-image') =====
  showImage: true,
  imageUrl: '/images/contact-photo.jpg', // Coloque sua imagem aqui
  imagePosition: 'left' as 'left' | 'right',
  imageOverlay: true, // Sobreposição escura na imagem
  
  // ===== INFORMAÇÕES DE CONTATO =====
  showContactInfo: true,
  showPhone: true,
  showEmail: false,
  showAddress: false,
  
  // ===== TEXTOS =====
  sectionTitle: 'Entre em Contato',
  sectionSubtitle: 'Preencha o formulário abaixo e retornaremos em breve.',
  submitButtonText: 'Enviar Mensagem',
  
  // ===== VISUAL =====
  showIcons: true,
  animateOnSubmit: true,
  showSuccessIcon: true,
  
  // ===== CAMPOS =====
  phoneRequired: true,
  showMessageField: true,
  placeholderStyle: 'descriptive' as 'simple' | 'descriptive', // "Nome" vs "Digite seu nome completo"
}
// ======================================================

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      console.log('Form data:', data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      reset()
      
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Placeholders baseado no estilo
  const placeholders = {
    simple: {
      name: 'Nome',
      email: 'Email',
      phone: 'Telefone',
      message: 'Mensagem'
    },
    descriptive: {
      name: 'Digite seu nome completo',
      email: 'Seu melhor e-mail',
      phone: 'Seu whatsapp',
      message: 'Como posso ajudar?'
    }
  }

  const p = placeholders[CONTACT_CONFIG.placeholderStyle]

  // Estilos dos inputs
  const getInputClasses = () => {
    const base = 'w-full px-4 py-3 transition-all duration-300'
    
    switch (CONTACT_CONFIG.inputStyle) {
      case 'outlined':
        return `${base} border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-current focus:border-transparent bg-transparent`
      case 'filled':
        return `${base} border-0 rounded-lg bg-gray-100 focus:bg-gray-200 focus:ring-2 focus:ring-current`
      case 'minimal':
        return `${base} border-2 border-white/20 rounded-lg focus:border-white bg-transparent text-white placeholder:text-white/60`
      case 'underline':
        return `${base} border-0 border-b-2 border-gray-300 rounded-none focus:border-current bg-transparent`
    }
  }

  const getLabelClasses = () => {
    const isDark = ['modern-dark', 'split-image'].includes(CONTACT_CONFIG.style)
    return `block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-400'}`
  }

  const getButtonClasses = () => {
    const positions = {
      center: 'mx-auto',
      left: 'mr-auto',
      right: 'ml-auto',
      'full-width': 'w-full'
    }
    return positions[CONTACT_CONFIG.buttonPosition]
  }

  // Renderiza baseado no estilo
  const getContainerStyles = () => {
    switch (CONTACT_CONFIG.style) {
      case 'modern-dark':
        return 'bg-gray-600 text-white'
      case 'gradient':
        return 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white'
      case 'glass':
        return 'bg-white/10 backdrop-blur-xl border border-white/20'
      default:
        return 'bg-white'
    }
  }

  // Layout Split Image
  if (CONTACT_CONFIG.style === 'split-image') {
    return (
      <section className="py-20 bg-gray-900">
        <Container>
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl shadow-2xl max-w-6xl mx-auto">
            {/* Imagem */}
            {CONTACT_CONFIG.showImage && CONTACT_CONFIG.imagePosition === 'left' && (
              <div className="relative min-h-[600px] lg:min-h-0">
                <Image
                  src={CONTACT_CONFIG.imageUrl}
                  alt="Contato"
                  fill
                  className="object-cover"
                />
                {CONTACT_CONFIG.imageOverlay && (
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                )}
              </div>
            )}

            {/* Formulário */}
            <div className="bg-gray-900 p-8 lg:p-12">
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-bold mb-4 rounded">
                  {CONTACT_CONFIG.sectionTitle.split(' ')[0]}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {CONTACT_CONFIG.sectionTitle}
                </h2>
                <p className="text-gray-400">
                  {CONTACT_CONFIG.sectionSubtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  {...register('name', { required: 'Nome é obrigatório' })}
                  type="text"
                  className={getInputClasses()}
                  placeholder={p.name}
                />
                {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}

                <input
                  {...register('email', { 
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  type="email"
                  className={getInputClasses()}
                  placeholder={p.email}
                />
                {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}

                <input
                  {...register('phone', { required: CONTACT_CONFIG.phoneRequired ? 'Telefone é obrigatório' : false })}
                  type="tel"
                  className={getInputClasses()}
                  placeholder={p.phone}
                />
                {errors.phone && <p className="text-sm text-red-400">{errors.phone.message}</p>}

                {CONTACT_CONFIG.showMessageField && (
                  <>
                    <textarea
                      {...register('message', { required: 'Mensagem é obrigatória' })}
                      rows={4}
                      className={getInputClasses()}
                      placeholder={p.message}
                    />
                    {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}
                  </>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wider"
                >
                  {isSubmitting ? 'Enviando...' : CONTACT_CONFIG.submitButtonText}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 flex items-center gap-2">
                    <CheckCircle size={20} />
                    Mensagem enviada com sucesso!
                  </div>
                )}
              </form>
            </div>

            {/* Imagem à direita */}
            {CONTACT_CONFIG.showImage && CONTACT_CONFIG.imagePosition === 'right' && (
              <div className="relative min-h-[600px] lg:min-h-0">
                <Image
                  src={CONTACT_CONFIG.imageUrl}
                  alt="Contato"
                  fill
                  className="object-cover"
                />
                {CONTACT_CONFIG.imageOverlay && (
                  <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />
                )}
              </div>
            )}
          </div>
        </Container>
      </section>
    )
  }

  // Layout Modern Dark (Estilo Imagem 1)
  if (CONTACT_CONFIG.style === 'modern-dark') {
    return (
      <section className="py-20 bg-gray-900" >
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                {CONTACT_CONFIG.sectionTitle}
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className={getLabelClasses()}>
                  Nome *
                </label>
                <input
                  {...register('name', { required: 'Nome é obrigatório' })}
                  type="text"
                  className={getInputClasses()}
                  placeholder={p.name}
                />
                {errors.name && <p className="text-sm text-red-400 mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className={getLabelClasses()}>
                  Email *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  type="email"
                  className={getInputClasses()}
                  placeholder={p.email}
                />
                {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className={getLabelClasses()}>
                  Telefone {CONTACT_CONFIG.phoneRequired && '*'}
                </label>
                <input
                  {...register('phone', { required: CONTACT_CONFIG.phoneRequired ? 'Telefone é obrigatório' : false })}
                  type="tel"
                  className={getInputClasses()}
                  placeholder={p.phone}
                />
                {errors.phone && <p className="text-sm text-red-400 mt-1">{errors.phone.message}</p>}
              </div>

              {CONTACT_CONFIG.showMessageField && (
                <div>
                  <label className={getLabelClasses()}>
                    Mensagem *
                  </label>
                  <textarea
                    {...register('message', { required: 'Mensagem é obrigatória' })}
                    rows={5}
                    className={getInputClasses()}
                    placeholder={p.message}
                  />
                  {errors.message && <p className="text-sm text-red-400 mt-1">{errors.message.message}</p>}
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${getButtonClasses()} bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-12 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wider`}
                  style={{background:siteConfig.colors.primary, color:siteConfig.colors.text}}>
                  {isSubmitting ? 'Enviando...' : CONTACT_CONFIG.submitButtonText}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 flex items-center gap-2">
                  {CONTACT_CONFIG.showSuccessIcon && <CheckCircle size={20} />}
                  Mensagem enviada com sucesso!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 flex items-center gap-2">
                  <AlertCircle size={20} />
                  Erro ao enviar mensagem. Tente novamente.
                </div>
              )}
            </form>
          </div>
        </Container>
      </section>
    )
  }

  // Layout Side by Side (Original Melhorado)
  return (
    <section className="py-20" style={{ backgroundColor: siteConfig.colors.contact }}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-200" >
            {CONTACT_CONFIG.sectionTitle}
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto" >
            {CONTACT_CONFIG.sectionSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          {CONTACT_CONFIG.showContactInfo && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-200 mb-4" >
                  Informações de Contato
                </h3>
                <p className="text-blue-200" >
                  Estamos aqui para ajudar. Entre em contato!
                </p>
              </div>

              <div className="space-y-4">
                {CONTACT_CONFIG.showPhone && (
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${siteConfig.colors.primary}20` }}
                    >
                      <Phone className="w-6 h-6 text-blue-200"/>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-200">Telefone</div>
                      <div className="text-blue-200">{siteConfig.phone}</div>
                    </div>
                  </div>
                )}

                {CONTACT_CONFIG.showEmail && (
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-200"
                      style={{ backgroundColor: `${siteConfig.colors.primary}20` }}
                    >
                      <Mail className="w-6 h-6 text-blue-200" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue-200">Email</div>
                      <div className="text-blue-200">{siteConfig.email}</div>
                    </div>
                  </div>
                )}

                {CONTACT_CONFIG.showAddress && (
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-200"
                      style={{ backgroundColor: `${siteConfig.colors.primary}20` }}
                    >
                      <MapPin className="w-6 h-6 text-blue-200"/>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-200" >Localização</div>
                      <div className="text-blue-200">{siteConfig.address}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className={getLabelClasses()}>
                Nome Completo *
              </label>
              <input
                {...register('name', { required: 'Nome é obrigatório' })}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-current focus:border-transparent text-blue-200 placeholder-gray-400"
                placeholder={p.name}
                style={{backgroundColor:'#352e58'}}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label className={getLabelClasses()}>
                Email *
              </label>
              <input
                {...register('email', { 
                  required: 'Email é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                  }
                })}
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-current focus:border-transparent text-blue-200 placeholder-gray-400"
                placeholder={p.email}
                style={{backgroundColor:'#352e58'}}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label className={getLabelClasses()}>
                Telefone *
              </label>
              <input
                {...register('phone', { required: 'Telefone é obrigatório' })}
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-current focus:border-transparent text-blue-200 placeholder-gray-400"
                placeholder={p.phone}
                style={{backgroundColor:'#352e58'}}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>

            {CONTACT_CONFIG.showMessageField && (
              <div>
                <label className={getLabelClasses()}>
                  Mensagem *
                </label>
                <textarea
                  {...register('message', { required: 'Mensagem é obrigatória' })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-current focus:border-transparent text-blue-200 placeholder-gray-400"
                  placeholder={p.message}
                  style={{backgroundColor:'#352e58'}}
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
              </div>
            )}

            <Button 
              type="submit" 
              size="lg" 
              className={getButtonClasses()+` bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600`}
              disabled={isSubmitting}
              style={{ backgroundColor: siteConfig.colors.primary, width:'100%' }}
            >
              {isSubmitting ? 'Enviando...' : CONTACT_CONFIG.submitButtonText}
            </Button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center gap-2">
                {CONTACT_CONFIG.showSuccessIcon && <CheckCircle size={20} />}
                Mensagem enviada com sucesso!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 flex items-center gap-2">
                <AlertCircle size={20} />
                Erro ao enviar mensagem.
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  )
}