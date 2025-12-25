import React from 'react';
import VerticalCarousel, { CarouselSlide } from './VerticalCarousel';

const TestimonialsSection: React.FC = () => {
  // Exemplo de depoimentos em carrossel horizontal
  const testimonialSlides: CarouselSlide[] = [
    {
      image: 'https://placehold.co/800x600/1e40af/ffffff?text=Depoimento+1',
      label: 'Dr. João Silva',
      link: undefined // Sem link para depoimentos
    },
    {
      image: 'https://placehold.co/800x600/dc2626/ffffff?text=Depoimento+2',
      label: 'Barbearia Style',
      link: undefined
    },
    {
      image: 'https://placehold.co/800x600/059669/ffffff?text=Depoimento+3',
      label: 'Ana Designer',
      link: undefined
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Veja como nossos sites profissionais transformaram negócios
          </p>
        </div>

        {/* Carrossel Horizontal */}
        <div className="max-w-4xl mx-auto h-96">
          <VerticalCarousel 
            slides={testimonialSlides}
            direction="horizontal" // Horizontal ao invés de vertical!
            autoplay={true}
            autoplayDelay={5000}
            clickable={false} // Depoimentos não são clicáveis
            showPagination={true}
            effect="creative"
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
            Quero Meu Site Também
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;