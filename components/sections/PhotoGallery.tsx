'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { siteConfig } from '@/lib/site-config'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, ExternalLink } from 'lucide-react'

// ========== TIPOS ==========
type GalleryMode = 'carousel' | 'grid' | 'masonry' | 'cards'
type GridColumns = 2 | 3 | 4 | 5
type AspectRatio = 'square' | 'portrait' | 'landscape' | 'auto'

// ========== CONFIGURAÇÕES ==========
const GALLERY_CONFIG = {
  // Modo: 'carousel' | 'grid' | 'masonry' | 'cards'
  mode: 'cards' as GalleryMode, // MUDE AQUI!
  
  // Colunas (para grid/masonry): 2 | 3 | 4 | 5
  columns: 2 as GridColumns,
  
  // Aspect ratio das imagens: 'square' | 'portrait' | 'landscape' | 'auto'
  aspectRatio: 'landscape' as AspectRatio,
  
  // Abrir modal ao clicar
  enableModal: true,
  
  // Mostrar zoom no hover
  hoverZoom: true,
  
  // Mostrar overlay no hover
  showOverlay: true,
  
  // Animação de entrada
  animateOnScroll: true,
  
  // Espaçamento entre fotos
  spacing: 'normal' as 'tight' | 'normal' | 'relaxed',
  
  // Bordas arredondadas
  rounded: 'lg' as 'none' | 'sm' | 'lg' | 'xl' | '2xl',
  
  // ===== PARA MODO 'CARDS' =====
  showCardTitle: true,
  showCardDescription: true,
  cardStyle: 'overlay' as 'overlay' | 'below',
  
  // ===== TEXTOS =====
  sectionTitle: 'Conheça a nossa equipe',
  sectionSubtitle: 'Temos os melhores especialistas',
}
// ======================================================

// ========== INTERFACE DE DADOS ==========
interface GalleryItem {
  id: string
  image: string
  title?: string
  description?: string
  category?: string
  // Para modo cards - múltiplas imagens
  images?: string[]
}

// ========== DADOS DE EXEMPLO ==========
// Substitua com seus dados reais
const GALLERY_DATA: GalleryItem[] = [
  {
    id: '1',
    image: '/images/fernando/fernando2.jpeg',
    title: 'Fernando',
    description: 'Especialista em cortes',
    category: 'Corte',
    images: [
      '/images/fernando/fernando_3.jpeg',
      '/images/fernando/fernando_4.jpeg',
    ]
  },
  {
    id: '2',
    image: '/images/juliano/juliano2.jpg',
    title: 'Juliano',
    description: 'Especialista em barbas',
    category: 'Barba',
    images: [
      '/images/juliano/juliano_3.jpg',
      '/images/juliano/juliano_4.jpg',
    ]
  },
  /*{
    id: '3',
    image: '/images/juliano/juliano_1.jpeg',
    title: 'Henrique',
    description: 'Especialista em tratamento capilar',
    category: 'Tratamento',
    images: [
      '/images/juliano/juliano_1.jpeg',
      '/images/juliano/juliano_2.jpg',
    ]
  },
   {
    id: '4',
    image: '/images/gallery/project-4.jpg',
    title: 'Loft Industrial',
    description: 'Conceito urbano com materiais brutos',
    category: 'Residencial',
    images: [
      '/images/gallery/project-4.jpg',
      '/images/gallery/project-4-2.jpg',
    ]
  }, */
]

export default function PhotoGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (item: GalleryItem, imageIndex: number = 0) => {
    setSelectedItem(item)
    setCurrentImageIndex(imageIndex)
  }

  const closeModal = () => {
    setSelectedItem(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (!selectedItem) return
    const images = selectedItem.images || [selectedItem.image]
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    if (!selectedItem) return
    const images = selectedItem.images || [selectedItem.image]
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Classes dinâmicas
  const getSpacingClass = () => {
    const map = { tight: 'gap-2', normal: 'gap-6', relaxed: 'gap-8' }
    return map[GALLERY_CONFIG.spacing]
  }

  const getRoundedClass = () => {
    const map = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl'
    }
    return map[GALLERY_CONFIG.rounded]
  }

  const getAspectClass = () => {
    const map = {
      square: 'aspect-square',
      portrait: 'aspect-[3/4]',
      landscape: 'aspect-[4/3]',
      auto: 'aspect-auto'
    }
    return map[GALLERY_CONFIG.aspectRatio]
  }

  const getGridCols = () => {
    const map = {
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-2 lg:grid-cols-3',
      4: 'md:grid-cols-2 lg:grid-cols-4',
      5: 'md:grid-cols-3 lg:grid-cols-5'
    }
    return map[GALLERY_CONFIG.columns]
  }

  // Renderiza baseado no modo
  const renderGallery = () => {
    switch (GALLERY_CONFIG.mode) {
      case 'carousel':
        return <CarouselMode data={GALLERY_DATA} onImageClick={openModal} />
      case 'grid':
        return <GridMode data={GALLERY_DATA} onImageClick={openModal} />
      case 'masonry':
        return <MasonryMode data={GALLERY_DATA} onImageClick={openModal} />
      case 'cards':
        return <CardsMode data={GALLERY_DATA} onCardClick={openModal} />
    }
  }

  return (
    <>
      <section className="py-20" style={{ backgroundColor: siteConfig.colors.about }}>
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: siteConfig.colors.text }}
              >
                {GALLERY_CONFIG.sectionTitle}
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: siteConfig.colors.text }}
              >
                {GALLERY_CONFIG.sectionSubtitle}
              </p>
            </div>
          </FadeIn>

          {renderGallery()}
        </Container>
      </section>

      {/* Modal de Visualização */}
      {GALLERY_CONFIG.enableModal && selectedItem && (
        <GalleryModal
          item={selectedItem}
          currentIndex={currentImageIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  )
}

// ========== MODO CAROUSEL ==========
function CarouselMode({ data, onImageClick }: any) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % data.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length)

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative overflow-hidden" style={{ height: '600px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 cursor-pointer"
            onClick={() => onImageClick(data[currentIndex])}
          >
            <Image
              src={data[currentIndex].image}
              alt={data[currentIndex].title || 'Imagem'}
              fill
              className={`object-cover ${GALLERY_CONFIG.rounded}`}
            />
            
            {GALLERY_CONFIG.showOverlay && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div className="text-white">
                  {data[currentIndex].title && (
                    <h3 className="text-2xl font-bold mb-2">{data[currentIndex].title}</h3>
                  )}
                  {data[currentIndex].description && (
                    <p className="text-sm">{data[currentIndex].description}</p>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Botões de navegação */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
          style={{ color: siteConfig.colors.primary }}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
          style={{ color: siteConfig.colors.primary }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {data.map((_: any, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              backgroundColor: index === currentIndex ? siteConfig.colors.primary : '#D1D5DB',
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)'
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ========== MODO GRID ==========
function GridMode({ data, onImageClick }: any) {
  return (
    <div className={`grid grid-cols-1 ${GALLERY_CONFIG.columns === 2 ? 'md:grid-cols-2' : GALLERY_CONFIG.columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : GALLERY_CONFIG.columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3 lg:grid-cols-5'} ${GALLERY_CONFIG.spacing === 'tight' ? 'gap-2' : GALLERY_CONFIG.spacing === 'normal' ? 'gap-6' : 'gap-8'}`}>
      {data.map((item: GalleryItem, index: number) => (
        <FadeIn key={item.id} delay={GALLERY_CONFIG.animateOnScroll ? index * 0.1 : 0}>
          <div
            className={`group relative ${GALLERY_CONFIG.aspectRatio === 'square' ? 'aspect-square' : GALLERY_CONFIG.aspectRatio === 'portrait' ? 'aspect-[3/4]' : GALLERY_CONFIG.aspectRatio === 'landscape' ? 'aspect-[4/3]' : 'aspect-auto'} overflow-hidden ${GALLERY_CONFIG.rounded === 'none' ? 'rounded-none' : GALLERY_CONFIG.rounded === 'sm' ? 'rounded-sm' : GALLERY_CONFIG.rounded === 'lg' ? 'rounded-lg' : GALLERY_CONFIG.rounded === 'xl' ? 'rounded-xl' : 'rounded-2xl'} cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300`}
            onClick={() => onImageClick(item)}
          >
            <Image
              src={item.image}
              alt={item.title || 'Imagem'}
              fill
              className={`object-cover ${GALLERY_CONFIG.hoverZoom ? 'group-hover:scale-110' : ''} transition-transform duration-500`}
            />
            
            {GALLERY_CONFIG.showOverlay && (
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white" size={48} />
              </div>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  )
}

// ========== MODO MASONRY ==========
function MasonryMode({ data, onImageClick }: any) {
  return (
    <div className={`columns-1 ${GALLERY_CONFIG.columns === 2 ? 'md:columns-2' : GALLERY_CONFIG.columns === 3 ? 'md:columns-2 lg:columns-3' : GALLERY_CONFIG.columns === 4 ? 'md:columns-2 lg:columns-4' : 'md:columns-3 lg:columns-5'} ${GALLERY_CONFIG.spacing === 'tight' ? 'gap-2' : GALLERY_CONFIG.spacing === 'normal' ? 'gap-6' : 'gap-8'}`}>
      {data.map((item: GalleryItem, index: number) => (
        <FadeIn key={item.id} delay={GALLERY_CONFIG.animateOnScroll ? index * 0.1 : 0}>
          <div
            className={`group relative mb-${GALLERY_CONFIG.spacing === 'tight' ? '2' : GALLERY_CONFIG.spacing === 'normal' ? '6' : '8'} break-inside-avoid overflow-hidden ${GALLERY_CONFIG.rounded === 'none' ? 'rounded-none' : GALLERY_CONFIG.rounded === 'sm' ? 'rounded-sm' : GALLERY_CONFIG.rounded === 'lg' ? 'rounded-lg' : GALLERY_CONFIG.rounded === 'xl' ? 'rounded-xl' : 'rounded-2xl'} cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300`}
            onClick={() => onImageClick(item)}
          >
            <Image
              src={item.image}
              alt={item.title || 'Imagem'}
              width={500}
              height={500}
              className={`w-full h-auto ${GALLERY_CONFIG.hoverZoom ? 'group-hover:scale-110' : ''} transition-transform duration-500`}
            />
            
            {GALLERY_CONFIG.showOverlay && (
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white" size={48} />
              </div>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  )
}

// ========== MODO CARDS ==========
function CardsMode({ data, onCardClick }: any) {
  return (
    <div className={`grid grid-cols-1 ${GALLERY_CONFIG.columns === 2 ? 'md:grid-cols-2' : GALLERY_CONFIG.columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : GALLERY_CONFIG.columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3 lg:grid-cols-5'} ${GALLERY_CONFIG.spacing === 'tight' ? 'gap-2' : GALLERY_CONFIG.spacing === 'normal' ? 'gap-6' : 'gap-8'}`}>
      {data.map((item: GalleryItem, index: number) => (
        <FadeIn key={item.id} delay={GALLERY_CONFIG.animateOnScroll ? index * 0.1 : 0}>
          <div
            className={`group cursor-pointer ${GALLERY_CONFIG.rounded === 'none' ? 'rounded-none' : GALLERY_CONFIG.rounded === 'sm' ? 'rounded-sm' : GALLERY_CONFIG.rounded === 'lg' ? 'rounded-lg' : GALLERY_CONFIG.rounded === 'xl' ? 'rounded-xl' : 'rounded-2xl'} overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            onClick={() => onCardClick(item)}
          >
            {/* Imagem */}
            <div className={`relative ${GALLERY_CONFIG.aspectRatio === 'square' ? 'aspect-square' : GALLERY_CONFIG.aspectRatio === 'portrait' ? 'aspect-[3/4]' : GALLERY_CONFIG.aspectRatio === 'landscape' ? 'aspect-[4/3]' : 'aspect-auto'} overflow-hidden`}>
              <Image
                src={item.image}
                alt={item.title || 'Imagem'}
                fill
                className={`object-cover ${GALLERY_CONFIG.hoverZoom ? 'group-hover:scale-110' : ''} transition-transform duration-500`}
              />
              
              {/* Overlay no estilo overlay */}
              {GALLERY_CONFIG.cardStyle === 'overlay' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    {GALLERY_CONFIG.showCardTitle && item.title && (
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    )}
                    {GALLERY_CONFIG.showCardDescription && item.description && (
                      <p className="text-sm opacity-90">{item.description}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Badge de quantidade de fotos */}
              {item.images && item.images.length > 1 && (
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.images.length} fotos
                </div>
              )}
            </div>

            {/* Texto abaixo no estilo below */}
            {GALLERY_CONFIG.cardStyle === 'below' && (
              <div className="p-6 bg-white">
                {GALLERY_CONFIG.showCardTitle && item.title && (
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: siteConfig.colors.text }}
                  >
                    {item.title}
                  </h3>
                )}
                {GALLERY_CONFIG.showCardDescription && item.description && (
                  <p className="text-sm text-gray-600">{item.description}</p>
                )}
                {item.category && (
                  <span
                    className="inline-block mt-3 text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${siteConfig.colors.primary}20`,
                      color: siteConfig.colors.primary
                    }}
                  >
                    {item.category}
                  </span>
                )}
              </div>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  )
}

// ========== MODAL DE GALERIA ==========
function GalleryModal({ item, currentIndex, onClose, onNext, onPrev }: any) {
  const images = item.images || [item.image]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        onClick={onClose}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-all"
        >
          <X size={24} />
        </button>

        {/* Conteúdo */}
        <div className="relative w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
          {/* Imagem Principal */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-6xl max-h-[85vh] w-full"
          >
            <div className="relative w-full h-[85vh]">
              <Image
                src={images[currentIndex]}
                alt={item.title || 'Imagem'}
                fill
                className="object-contain"
              />
            </div>

            {/* Info */}
            {item.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                {item.description && <p className="text-sm opacity-90">{item.description}</p>}
              </div>
            )}
          </motion.div>

          {/* Navegação */}
          {images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-4 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-all"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={onNext}
                className="absolute right-4 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-all"
              >
                <ChevronRight size={32} />
              </button>

              {/* Contador */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-4xl overflow-x-auto p-2">
            {images.map((img: string, index: number) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  onNext()
                }}
                className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex ? 'ring-4 ring-white scale-110' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}