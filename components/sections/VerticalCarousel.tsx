'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination, Parallax } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

// TypeScript interfaces
export interface CarouselSlide {
  image: string;
  label?: string;
  link?: string;
}

export interface VerticalCarouselProps {
  slides: CarouselSlide[];
  direction?: 'vertical' | 'horizontal';
  autoplay?: boolean;
  autoplayDelay?: number;
  clickable?: boolean;
  showPagination?: boolean;
  effect?: 'creative' | 'slide' | 'fade';
}

/**
 * VerticalCarousel - Componente de carrossel configurável
 */
const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
  slides = [],
  direction = 'vertical',
  autoplay = true,
  autoplayDelay = 4000,
  clickable = false,
  showPagination = true,
  effect = 'creative'
}) => {
  
  const handleSlideClick = (link?: string) => {
    if (clickable && link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative w-full h-full">
      <Swiper
        direction={direction}
        slidesPerView={1}
        modules={[Autoplay, EffectCreative, Pagination]}
        effect={effect}
        creativeEffect={{
          prev: {
            opacity: 0.6,
            translate: [0, direction === 'vertical' ? '-120%' : '-120%', -400],
            scale: 0.85,
          },
          next: {
            opacity: 0.6,
            translate: [0, direction === 'vertical' ? '120%' : '120%', -400],
            scale: 0.85,
          },
        }}
        autoplay={autoplay ? {
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        } : false}
        loop={true}
        speed={1200}
        pagination={showPagination ? {
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/40 !w-2 !h-2 transition-all duration-300',
          bulletActiveClass: '!bg-white !w-2 !h-8',
        } : false}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className={`relative h-full w-full group ${clickable && slide.link ? 'cursor-pointer' : ''}`}
              onClick={() => handleSlideClick(slide.link)}
            >
              {/* Mockup Container com efeito 3D */}
              <div className="relative h-full w-full flex items-center justify-center p-8">
                {/* Browser Mockup */}
                <div className="relative w-full max-w-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1">
                  {/* Browser Chrome */}
                  <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-t-xl p-3 shadow-2xl border border-zinc-700">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <div className="flex-1 bg-zinc-900/50 rounded px-3 py-1 text-xs text-zinc-400 font-mono ml-2">
                        webexpress.net.br
                      </div>
                    </div>
                  </div>
                  
                  {/* Screenshot */}
                  <div className="relative bg-white rounded-b-xl overflow-hidden shadow-2xl border-x border-b border-zinc-700">
                    <img 
                      src={slide.image} 
                      alt={slide.label || `Slide ${index + 1}`}
                      className="w-full h-auto object-cover object-top"
                      style={{ maxHeight: '500px' }}
                    />
                    
                    {/* Overlay gradient para dar profundidade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Hover effect */}
                    {clickable && slide.link && (
                      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                          <span className="text-sm font-semibold text-zinc-900">Ver Demo ao Vivo →</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Label badge */}
                  {slide.label && (
                    <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm transform rotate-3 border-2 border-white">
                      {slide.label}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VerticalCarousel;