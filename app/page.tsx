import { Metadata } from 'next'
import { getPosts, getCategories } from '@/lib/sanity/queries'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import Blog from '@/components/sections/Blog'
import { siteConfig, template } from '@/lib/site-config'
import SectionDivider from '@/components/ui/SectionDivider'
import PhotoGallery from '@/components/sections/PhotoGallery'
import LayoutDisplay from '@/components/sections/LayoutDisplay'
import Process from '@/components/sections/Process'
import Pricing from '@/components/sections/Pricing'

// ========== METADATA (SEO) ==========
export const metadata: Metadata = {
  metadataBase: new URL('https://webexpress.com.br'), // ← SEU DOMÍNIO
  
  title: 'Site Profissional em 3 Dias por R$300 | Hospedagem Grátis - WebExpress',
  
  description: 'Tenha seu site profissional pronto em 3 dias por apenas R$300. Hospedagem grátis, design responsivo, 30 dias de suporte. Sem mensalidades. Ideal para médicos, advogados, barbearias e profissionais autônomos. Comece agora!',
  
  keywords: [
    'contratar desenvolvedor web',
    'quanto custa um site',
    'preço de site profissional',
    'orçamento site',
    'fazer site barato',
    'criação de sites',
    'landing page',
    'site profissional',
    'site em 3 dias',
    'site barato r$300',
    'site sem mensalidade',
    'hospedagem grátis',
    'site para médico',
    'site para dentista',
    'site para advogado',
    'site para barbearia',
    'desenvolvedor web rio de janeiro',
    'criar site são gonçalo',
    'alternativa wix',
    'melhor que canva',
  ],
  
  authors: [{ name: 'WebExpress', url: 'https://webexpress.com.br' }],
  creator: 'WebExpress',
  publisher: 'WebExpress Desenvolvimento Web',
  
  alternates: {
    canonical: 'https://webexpress.com.br',
    languages: {
      'pt-BR': 'https://webexpress.com.br',
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://webexpress.com.br',
    siteName: 'WebExpress - Site Profissional em 3 Dias',
    title: 'Site Profissional Pronto em 3 Dias por R$300 | WebExpress',
    description: 'Tenha seu site completo com hospedagem grátis, design responsivo e 30 dias de suporte. Sem mensalidades. Ideal para profissionais e pequenas empresas. Comece hoje!',
    images: [
      {
        url: 'https://webexpress.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebExpress - Criação de Sites Profissionais',
        type: 'image/jpeg',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@webexpress',
    creator: '@webexpress',
    title: 'Site Profissional em 3 Dias por R$300 | WebExpress',
    description: 'Site completo com hospedagem grátis, design responsivo e 30 dias de suporte. Sem mensalidades. Para profissionais e pequenas empresas.',
    images: ['https://webexpress.com.br/twitter-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'seu-codigo-google-search-console', // ← TROCAR DEPOIS
  },
}

// ========== PÁGINA ==========
export default async function Home() {
  let posts = []
  
  if (siteConfig.features.blog) {
    try {
      posts = await getPosts()
    } catch (error) {
      console.error('Erro ao buscar posts:', error)
    }
  }

  // ========== SCHEMAS JSON-LD ==========
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'WebExpress',
    alternateName: 'WebExpress Desenvolvimento Web',
    url: 'https://webexpress.com.br',
    logo: 'https://webexpress.com.br/logo.png',
    image: 'https://webexpress.com.br/og-image.jpg',
    description: 'Desenvolvimento de sites profissionais e landing pages personalizadas em 3 dias. Hospedagem grátis, design responsivo e suporte incluso. A partir de R$300.',
    priceRange: 'R$300 - R$1000',
    email: 'contato@webexpress.com.br', // ← SEU EMAIL
    telephone: '+55-21-99999-9999', // ← SEU TELEFONE
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressLocality: 'São Gonçalo', // ← SUA CIDADE
      addressRegion: 'RJ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-22.8268', // ← Pegar no Google Maps
      longitude: '-43.0534'
    },
    sameAs: [
      'https://facebook.com/webexpress',
      'https://instagram.com/webexpress',
      'https://linkedin.com/company/webexpress',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '15',
      bestRating: '5',
      worstRating: '1'
    }
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Site Profissional WebExpress',
    description: 'Landing page profissional personalizada com hospedagem gratuita, design responsivo e 30 dias de suporte. Entrega em 3 dias.',
    brand: {
      '@type': 'Brand',
      name: 'WebExpress'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'BRL',
      lowPrice: '300',
      highPrice: '1000',
      offerCount: '2',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '15',
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto custa um site profissional?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nossos sites custam R$300 (plano básico) ou R$1.000 (plano premium com design exclusivo). É pagamento único, sem mensalidades. Inclui hospedagem gratuita e 30 dias de suporte.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quanto tempo leva para o site ficar pronto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Seu site fica pronto em 3 dias úteis (plano básico) ou 7-10 dias (plano premium). Após você enviar logo, fotos e textos, começamos imediatamente.'
        }
      },
      {
        '@type': 'Question',
        name: 'Preciso pagar mensalidade de hospedagem?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NÃO! A hospedagem é 100% gratuita na plataforma Vercel. Você paga apenas o valor único do site (R$300 ou R$1.000) e pronto.'
        }
      }
    ]
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'WebExpress',
    image: 'https://webexpress.com.br/og-image.jpg',
    description: 'Desenvolvimento de sites profissionais em São Gonçalo - RJ. Sites prontos em 3 dias com hospedagem grátis.',
    telephone: '+55-21-99999-9999',
    email: 'contato@webexpress.com.br',
    url: 'https://webexpress.com.br',
    priceRange: 'R$300 - R$1000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Gonçalo',
      addressRegion: 'RJ',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-22.8268',
      longitude: '-43.0534'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
  }

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Suas seções */}
      <Navbar />
      <Hero />
      <Services />
      <LayoutDisplay />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}