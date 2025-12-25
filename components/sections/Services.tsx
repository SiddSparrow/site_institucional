'use client'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { template, siteConfig } from '@/lib/site-config'
import { 
  Palette,      // Design/Customização
  Rocket,       // Hospedagem/Deploy
  Headphones,   // Suporte
  Zap,          // Velocidade/Performance
  Shield,       // Segurança
  Code,         // Código
  Layout,       // Responsivo
  Globe,        // Domínio
  Heart,        // Customização
  CheckCircle   // Garantia
} from 'lucide-react'
import ServicesSection from './ServiceSection'

// ========== TIPOS ==========
type CardStyle = 'bordered' | 'elevated' | 'glass' | 'gradient' | 'minimal' | 'neon'
type IconStyle = 'circle' | 'square' | 'rounded' | 'hexagon' | 'floating'
type HoverEffect = 'lift' | 'glow' | 'scale' | 'tilt' | 'none'

// ========== CONFIGURAÇÕES DE ESTILO ==========
const SERVICES_CONFIG = {
  // Estilo do card: 'bordered' | 'elevated' | 'glass' | 'gradient' | 'minimal' | 'neon'
  cardStyle: 'glass' as CardStyle, // MUDE AQUI!
  
  // Estilo do ícone: 'circle' | 'square' | 'rounded' | 'hexagon' | 'floating'
  iconStyle: 'floating' as IconStyle,
  
  // Efeito ao hover: 'lift' | 'glow' | 'scale' | 'tilt' | 'none'
  hoverEffect: 'scale' as HoverEffect,
  
  // Tamanho do ícone (em pixels)
  iconSize: 56,
  
  // Espaçamento interno do card
  cardPadding: 'normal', // 'compact' | 'normal' | 'spacious'
  
  // Mostrar backdrop colorido atrás do ícone
  iconBackdrop: true,
  
  // Animação do ícone no hover
  iconAnimation: true,
  
  // Borda inferior colorida
  accentBorder: false,
}
// ======================================================

export default function Services() {
  
    const services = [
    {
      title: 'Design Profissional',
      description: 'Site totalmente customizado com suas cores, logo, imagens e identidade visual.',
      icon: Palette,
      //: 'Mais Popular', // Badge opcional
      features: [
        'Cores da sua marca',
        'Logo integrado',
        'Layout moderno',
        'Identidade visual única'
      ]
    },
    {
      title: 'Hospedagem Grátis',
      description: 'Seu site hospedado na Vercel. Sem mensalidades, sem custo escondido. Sujeito à mudanças que a empresa possa fazer.',
      icon: Rocket,
      features: [
        'Deploy automático',
        'SSL/HTTPS incluído',
        'Sem mensalidades'
      ]
    },
    {
      title: '30 Dias de Suporte',
      description: 'Ajustes ilimitados de cores, textos e imagens durante 30 dias. Você tem total liberdade para refinar seu site.',
      icon: Headphones,
      features: [
        'Ajustes de cores',
        'Troca de imagens',
        'Edição de textos',
        'Suporte via WhatsApp'
      ]
    },
    {
      title: 'Performance Otimizada',
      description: 'Site construído com Next.js para carregamento ultra-rápido. Google vai adorar e seus clientes também!',
      icon: Zap,
      features: [
        'Carregamento rápido',
        'SEO otimizado',
        'Core Web Vitals',
        'Mobile First'
      ]
    },
    {
      title: 'Design Responsivo',
      description: 'Funciona perfeitamente em qualquer dispositivo: computador, tablet ou celular. Testado em todos os navegadores.',
      icon: Layout,
      features: [
        'Mobile otimizado',
        'Tablet friendly',
        'Desktop perfeito',
        'Cross-browser'
      ]
    },
    {
      title: 'Domínio Próprio',
      description: 'Conectamos seu domínio próprio (seusite.com.br). Orientamos todo o processo de compra e configuração.',
      icon: Globe,
      features: [
        'Domínio personalizado',
        'Configuração incluída'
      ]
    }
  ]
  return (
    <section id="services" className=" bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" >
      
      <Container>
        <ServicesSection 
        services={services}
        title="Nossos Serviços"
        subtitle="Cuidado completo para sua saúde e bem-estar"
      />
      </Container>
    </section>
  )
}