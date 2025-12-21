import { TemplateConfig } from '@/types/templates'

export const barbeiroTemplate: TemplateConfig = {
  name: 'Barbearia [Nome]',
  logo: '', // Adicionei logo para consistência
  type: 'barbeiro',
  colors: {
    navbar: '#111111',

    services: '#1A1A1A',
    about: '#161616',
    testimonials: '#161616',
    faq: '#1A1A1A',
    cta: '#0F0F0F',
    contact: '#161616',
    footer: '#0F0F0F',
    blog: '#1A1A1A',

    // Cores principais
    primary: '#B87333',     // Bronze / cobre
    secondary: '#3A3A3A',   // Grafite
    accent: '#111111',
    background: '#0F0F0F',
    text: '#E5E5E5',

    // Estados
    active: '#C0843D',
  },
  foto_perfil: '/images/barbeiro_perfil.jpg',
  foto_geral: '/images/barbeiro_geral.jpg',
  foto_faq:'/images/barbearia.jpg',
  features: {
    blog: true, // Ativar/desativar blog
    testimonials: true,
    faq: true,
    newsletter: false,
    cta: false
  },
  hero: {
    title: 'Estilo e <span>tradição</span> em cada corte',
    subtitle: 'Barbearia premium com atendimento personalizado e ambiente exclusivo.',
    ctaPrimary: 'Agendar Horário',
    ctaSecondary: 'WhatsApp'
  },
  services: {
    title: 'Nossos Serviços',
    subtitle: 'Oferecemos serviços premium para cuidar do seu estilo e bem-estar.',
    services: [
      {
        id: '1',
        icon: 'Scissors',
        title: 'Corte Masculino',
        description: 'Cortes modernos e clássicos executados com precisão e técnica.'
      },
      {
        id: '2',
        icon: 'Sparkles',
        title: 'Barba & Bigode',
        description: 'Modelagem, hidratação e acabamento perfeito para sua barba.'
      },
      {
        id: '3',
        icon: 'Shirt',
        title: 'Corte + Barba',
        description: 'Combo completo para você sair renovado e confiante.'
      },
      {
        id: '4',
        icon: 'Star',
        title: 'Tratamentos',
        description: 'Hidratação, luzes, platinado e tratamentos capilares premium.'
      }
    ]
  },
  about: {
    title: 'Sobre a Barbearia',
    description: [
      'Há mais de [X] anos no mercado, oferecemos uma experiência única que combina tradição e modernidade.',
      'Nossa equipe é formada por profissionais qualificados, sempre atualizados com as últimas tendências e técnicas.'
    ],
    credentials: [
      { icon: 'Award', title: '[X] Anos', description: 'De tradição' },
      { icon: 'Star', title: '5.0', description: 'Avaliação no Google' },
      { icon: 'Users', title: '5000+', description: 'Clientes satisfeitos' }
    ]
  },
  testimonials: {
    title: 'O Que Dizem Nossos Clientes',
    subtitle: 'Depoimentos de quem já experimentou nossa barbearia.',
    testimonials: [
      {
        id: '1',
        name: 'Carlos Mendes',
        role: 'Cliente',
        content: 'Melhor barbearia da região! Atendimento top, ambiente impecável e profissionais de primeira.',
        rating: 5
      },
      {
        id: '2',
        name: 'Rafael Lima',
        role: 'Cliente',
        content: 'Corte sempre perfeito! Já sou cliente há anos e não troco por nada.',
        rating: 5
      },
      {
        id: '3',
        name: 'Pedro Souza',
        role: 'Cliente',
        content: 'Ambiente diferenciado, cerveja gelada e profissionais que entendem do que fazem!',
        rating: 5
      }
    ]
  },
  cta: {
    title: 'Pronto para um corte premium?',
    subtitle: 'Agende seu horário e experimente uma experiência única de barbearia.',
    wppText: 'Olá! Gostaria de agendar um horário na barbearia.'
  },
  faq: {
    text: 'Informações importantes sobre nossos serviços e atendimento.',
    questions: [
      {
        id: '1',
        question: 'Precisa agendar?',
        answer: 'Sim, trabalhamos com agendamento para garantir seu horário e evitar espera.'
      },
      {
        id: '2',
        question: 'Aceitam cartão?',
        answer: 'Sim, aceitamos todas as formas de pagamento: dinheiro, cartão e PIX.'
      },
      {
        id: '3',
        question: 'Quanto tempo demora o atendimento?',
        answer: 'O corte simples leva cerca de 30-40 minutos. Combo completo pode levar até 1 hora.'
      },
      {
        id: '4',
        question: 'Atendem crianças?',
        answer: 'Sim, temos experiência com cortes infantis e ambiente acolhedor para os pequenos.'
      }
    ]
  },
  blog: {
    enabled: false,
    title: 'Dicas de Estilo e Cuidados',
    subtitle: 'Artigos sobre tendências masculinas, cuidados com a barba e muito mais.',
    openInNewPage: false,
    categories: ['Cortes', 'Barba', 'Estilo', 'Cuidados Masculinos', 'Produtos']
  }
}