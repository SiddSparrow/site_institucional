import { TemplateConfig } from '@/types/templates'

export const barbeiroTemplate: TemplateConfig = {
  name: 'Barbearia [Nome]',
  type: 'barbeiro',
  colors: {
    primary: '#D97706', // Âmbar/dourado mais sofisticado
    secondary: '#18181B',
    accent: '#FBBF24',
    background: '#FFFBEB',
    text: '#27272A' // Cinza escuro para textos e elementos neutros
  },
  foto_perfil: '/images/barbeiro_perfil.jpg',
  foto_geral: '/images/barbeiro_geral.jpg',
  features: {
    blog: true, // Ativar/desativar blog
    testimonials: true,
    faq: true,
    newsletter: false
  },
  hero: {
    title: 'Estilo e <span>tradição</span> em cada corte',
    subtitle: 'Barbearia premium com atendimento personalizado e ambiente exclusivo.',
    ctaPrimary: 'Agendar Horário',
    ctaSecondary: 'WhatsApp'
  },
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
  ],
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
  ],
  faq: [
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
}