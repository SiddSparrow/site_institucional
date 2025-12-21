'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { template, siteConfig } from '@/lib/site-config'
import { BlogPost } from '@/types/blog'
import { ChevronDown, Clock, Calendar, X, ExternalLink, User } from 'lucide-react'

// ========== TIPOS ==========
type CardStyle = 'default' | 'minimal' | 'elevated' | 'glass' | 'bordered'
type OpenMode = 'inline' | 'modal' | 'new-tab'
type GridLayout = 'compact' | 'standard' | 'masonry' | 'featured'

// ========== CONFIGURAÇÕES ==========
const BLOG_CONFIG = {
  // Estilo dos cards: 'default' | 'minimal' | 'elevated' | 'glass' | 'bordered'
  cardStyle: 'elevated' as CardStyle,
  
  // Como abrir o post: 'inline' | 'modal' | 'new-tab'
  openMode: 'modal' as OpenMode, // ← MODAL OVERLAY!
  
  // Layout do grid: 'compact' | 'standard' | 'masonry' | 'featured'
  gridLayout: 'standard' as GridLayout,
  
  // Mostrar imagem do post
  showImage: true,
  
  // Mostrar autor
  showAuthor: true,
  
  // Mostrar data de publicação
  showDate: true,
  
  // Mostrar excerpt/resumo
  showExcerpt: true,
  
  // Mostrar categorias
  showCategories: true,
  
  // Animação dos cards
  animateCards: true,
  
  // Efeito hover na imagem
  imageHoverEffect: true,
  
  // Número de linhas do excerpt
  excerptLines: 3,
  
  // Overlay escuro no modal
  modalOverlayOpacity: 80, // 0-100
}
// ======================================================

interface BlogProps {
  posts: BlogPost[] 
  categories?: Array<{
    _id: string
    title: string
    slug: string
  }>
}

export default function Blog({ posts }: BlogProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [modalPost, setModalPost] = useState<BlogPost | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  if (!template.blog.enabled) return null

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all' || !selectedCategory) {
      return posts
    }
    
    return posts.filter(post => 
      post.categories?.some(category => 
        category._id === selectedCategory || 
        category.title === selectedCategory ||
        category.slug === selectedCategory
      )
    )
  }, [posts, selectedCategory])

  const handleCardClick = (post: BlogPost) => {
    switch (BLOG_CONFIG.openMode) {
      case 'inline':
        setExpandedCard(expandedCard === post._id ? null : post._id)
        break
      case 'modal':
        setModalPost(post)
        break
      case 'new-tab':
        window.open(`/blog/${post.slug}`, '_blank')
        break
    }
  }

  const getGridClasses = () => {
    switch (BLOG_CONFIG.gridLayout) {
      case 'compact':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
      case 'standard':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      case 'masonry':
        return 'columns-1 md:columns-2 lg:columns-3 gap-8'
      case 'featured':
        return 'grid grid-cols-1 lg:grid-cols-2 gap-8'
    }
  }

  return (
    <>
      <section id="blog" className="py-20" style={{backgroundColor:siteConfig.colors.blog}}>
        <Container>
          {/* Header */}
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{color: siteConfig.colors.text}}>
                {template.blog.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{color: siteConfig.colors.text}}>
                {template.blog.subtitle}
              </p>
            </div>
          </FadeIn> 

          {/* Blog Grid */}
          <FadeIn delay={0.2}>
            <div className={getGridClasses()} style={{marginTop:'1rem'}}>
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post, index) => (
                  <BlogCard
                    key={post._id}
                    post={post}
                    index={index}
                    isExpanded={expandedCard === post._id}
                    onToggle={() => handleCardClick(post)}
                  />
                ))}
              </AnimatePresence>
            </div>
          </FadeIn>

          {filteredPosts.length === 0 && (
            <FadeIn>
              <div className="text-center py-12 text-gray-500">
                Nenhum artigo encontrado nesta categoria.
              </div>
            </FadeIn>
          )}
        </Container>
      </section>

      {/* Modal Overlay */}
      <BlogModal 
        post={modalPost} 
        onClose={() => setModalPost(null)} 
      />
    </>
  )
}

// ========== COMPONENTE DE CARD ==========
function BlogCard({
  post,
  index,
  isExpanded,
  onToggle,
}: {
  post: BlogPost
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const getCardClasses = () => {
    const base = 'group rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer transition-all duration-300'
    
    switch (BLOG_CONFIG.cardStyle) {
      case 'default':
        return `${base} bg-white shadow-md hover:shadow-xl`
      case 'minimal':
        return `${base} bg-white hover:bg-gray-50`
      case 'elevated':
        return `${base} bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1`
      case 'glass':
        return `${base} bg-white/70 backdrop-blur-md border border-gray-200/50 shadow-lg hover:bg-white/90`
      case 'bordered':
        return `${base} bg-white border-2 border-gray-200 hover:border-current hover:shadow-lg`
    }
  }

  const cardMotion = BLOG_CONFIG.animateCards ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { delay: index * 0.05 }
  } : {}

  return (
    <motion.div
      {...cardMotion}
      className={getCardClasses()}
      style={BLOG_CONFIG.cardStyle === 'bordered' ? { borderColor: siteConfig.colors.primary } : {}}
      onClick={onToggle}
    >
      {/* Imagem */}
      {BLOG_CONFIG.showImage && post.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className={`w-full h-full object-cover ${BLOG_CONFIG.imageHoverEffect ? 'transform group-hover:scale-110 transition-transform duration-500' : ''}`}
          />
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{ backgroundColor: siteConfig.colors.primary }}
          />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Metadata */}
        {(BLOG_CONFIG.showAuthor || BLOG_CONFIG.showDate) && (
          <div className="flex items-center gap-3 mb-4">
            {BLOG_CONFIG.showAuthor && post.author?.image && (
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
              />
            )}
            {BLOG_CONFIG.showAuthor && !post.author?.image && (
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: siteConfig.colors.primary }}
              >
                <User size={20} />
              </div>
            )}
            <div className="flex-1 min-w-0">
              {BLOG_CONFIG.showAuthor && post.author?.name && (
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {post.author.name}
                </p>
              )}
              {BLOG_CONFIG.showDate && (
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar size={12} />
                  <time>
                    {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </time>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Categorias */}
        {BLOG_CONFIG.showCategories && post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.slice(0, 2).map((category) => (
              <span
                key={category._id}
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ 
                  backgroundColor: `${siteConfig.colors.primary}20`,
                  color: siteConfig.colors.primary 
                }}
              >
                {category.title}
              </span>
            ))}
          </div>
        )}

        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-opacity-80 transition-all">
          {post.title}
        </h3>

        {/* Excerpt */}
        {BLOG_CONFIG.showExcerpt && (
          <p 
            className={`text-gray-600 mb-4 flex-1 line-clamp-${BLOG_CONFIG.excerptLines}`}
          >
            {post.excerpt}
          </p>
        )}

        {/* Conteúdo Expandido (Inline) */}
        <AnimatePresence>
          {BLOG_CONFIG.openMode === 'inline' && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-200 mb-4">
                <div className="prose prose-sm max-w-none text-gray-700">
                  {post.content}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botão */}
        <div
          className="inline-flex items-center gap-2 font-semibold transition-all duration-300 group/btn mt-auto"
          style={{ color: siteConfig.colors.primary }}
        >
          {BLOG_CONFIG.openMode === 'new-tab' && (
            <>
              Ler artigo completo
              <ExternalLink className="w-4 h-4" />
            </>
          )}
          {BLOG_CONFIG.openMode === 'modal' && (
            <>
              Ler mais
              <svg
                className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </>
          )}
          {BLOG_CONFIG.openMode === 'inline' && (
            <>
              {isExpanded ? 'Mostrar menos' : 'Ler mais'}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ========== COMPONENTE DE MODAL ==========
function BlogModal({ 
  post, 
  onClose 
}: { 
  post: BlogPost | null
  onClose: () => void 
}) {
  if (!post) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: BLOG_CONFIG.modalOverlayOpacity / 100 }}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botão Fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            style={{ color: siteConfig.colors.primary }}
          >
            <X size={24} />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[90vh]">
            {/* Imagem de destaque */}
            {post.image && (
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Título sobreposto na imagem */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {post.title}
                  </h2>
                  
                  {/* Metadata */}
                  <div className="flex items-center gap-4">
                    {post.author?.image && (
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-white"
                      />
                    )}
                    <div>
                      {post.author?.name && (
                        <p className="font-semibold">{post.author.name}</p>
                      )}
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <Calendar size={14} />
                        <time>
                          {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Conteúdo */}
            <div className="p-8 md:p-12">
              {/* Título (se não tiver imagem) */}
              {!post.image && (
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: siteConfig.colors.text }}>
                    {post.title}
                  </h2>
                  
                  {/* Metadata */}
                  {post.author && (
                    <div className="flex items-center gap-4">
                      {post.author.image && (
                        <img
                          src={post.author.image}
                          alt={post.author.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                      <div>
                        {post.author.name && (
                          <p className="font-semibold" style={{ color: siteConfig.colors.text }}>
                            {post.author.name}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar size={14} />
                          <time>
                            {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </time>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Categorias */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.categories.map((category) => (
                    <span
                      key={category._id}
                      className="text-sm px-4 py-2 rounded-full font-medium"
                      style={{ 
                        backgroundColor: `${siteConfig.colors.primary}20`,
                        color: siteConfig.colors.primary 
                      }}
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              {/* Conteúdo principal */}
              <div 
                className="prose prose-lg max-w-none"
                style={{ color: siteConfig.colors.text }}
              >
                {post.content}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}