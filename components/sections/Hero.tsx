import React from 'react';
import VerticalCarousel, { CarouselSlide } from './VerticalCarousel';
import { useHandleWhatsAppClick } from '@/hooks/templateFunctions';

const HeroSection: React.FC = () => {
  // Dados dos slides - você substituirá pelos seus screenshots reais
  const carouselSlides: CarouselSlide[] = [
    {
      image: '/images/medical_1.png',
      label: 'Médicos',
      link: 'https://medical.webexpress.net.br/'
    },
    {
      image: '/images/barber.png',
      label: 'Barbearias',
      link: 'https://barbershop.webexpress.net.br/'
    },
    {
      image: '/images/webdesign.png',
      label: 'Design de Interiores',
      link: 'https://visualdesign.webexpress.net.br/'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Efeitos de fundo decorativos */}


      <div className="relative container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Column - Content */}
          <div className="space-y-8 lg:pr-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-200 text-sm font-medium">Sites Profissionais • Entrega Rápida</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                Seu Site
              </span>
              <br />
              <span className="text-white">
                Profissional
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                em 3 Dias
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-blue-100/80 leading-relaxed max-w-xl">
              Landing pages customizadas, hospedadas e otimizadas para converter visitantes em clientes. 
              <span className="text-white font-semibold"> Sem mensalidades, sem complicação.</span>
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {[
                'Totalmente customizado para sua marca',
                'Hospedagem gratuita inclusa',
                '30 dias de suporte para ajustes',
                'Design responsivo (mobile + desktop)'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-50/90 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl shadow-2xl shadow-blue-900/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
              onClick={useHandleWhatsAppClick}>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Falar no Whatsapp
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </button>
              
              {/* <button className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Falar no WhatsApp
              </button> */}
            </div>

            {/* Trust Indicators */}
            {/* <div className="flex items-center gap-6 pt-4 border-t border-white/10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-slate-950"></div>
                ))}
              </div>
              <div className="text-sm">
                <div className="text-white font-semibold">12+ clientes satisfeitos</div>
                <div className="text-blue-200/60">Sites entregues em 2024</div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Carousel */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Glow effect atrás do carrossel */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl scale-90"></div>
            
            <VerticalCarousel 
              slides={carouselSlides}
              direction="vertical"
              autoplay={true}
              autoplayDelay={4000}
              clickable={true}
              showPagination={true}
              effect="creative"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;