import { TemplateConfig } from '@/types/templates'

export const coachTemplate: TemplateConfig = {
  name: '[Nome] - Coach',
  type: 'coach',
  colors: {
    primary: '#DC2626', // Vermelho energético e motivacional
    secondary: '#1E293B',
    accent: '#F87171',
    background: '#FEF2F2',
    text: '#374151' // Cinza escuro para textos e elementos neutros
  },
  foto_perfil: '/images/coach_perfil.jpg',
  foto_geral: '/images/coach_geral.jpg',
  features: {
    blog: true, // Ativar/desativar blog
    testimonials: true,
    faq: true,
    newsletter: false
  },
  hero: {
    title: 'Transforme sua <span>vida</span> e alcance seus <span>objetivos</span>',
    subtitle: 'Coaching profissional para te ajudar a descobrir seu potencial máximo.',
    ctaPrimary: 'Agendar Sessão',
    ctaSecondary: 'WhatsApp'
  },
  services: [
    {
      id: '1',
      icon: 'Target',
      title: 'Coaching de Carreira',
      description: 'Direcionamento profissional e estratégias para alcançar seus objetivos.'
    },
    {
      id: '2',
      icon: 'TrendingUp',
      title: 'Coaching de Performance',
      description: 'Maximize sua produtividade e desempenho pessoal e profissional.'
    },
    {
      id: '3',
      icon: 'Heart',
      title: 'Coaching de Vida',
      description: 'Equilíbrio, propósito e realização em todas as áreas da sua vida.'
    },
    {
      id: '4',
      icon: 'Users',
      title: 'Coaching Executivo',
      description: 'Desenvolvimento de liderança e habilidades de gestão para executivos.'
    }
  ],
  about: {
    title: 'Sobre o Coach',
    description: [
      'Sou coach profissional certificado(a) com formação em [Instituição] e mais de [X] anos ajudando pessoas a transformarem suas vidas.',
      'Meu método combina técnicas comprovadas de coaching, PNL e desenvolvimento pessoal para resultados reais e duradouros.'
    ],
    credentials: [
      { icon: 'Award', title: 'Certificado', description: 'ICC/IBC' },
      { icon: 'Users', title: '200+', description: 'Clientes transformados' },
      { icon: 'Star', title: '95%', description: 'Taxa de sucesso' }
    ]
  },
  testimonials: [
    {
      id: '1',
      name: 'Juliana Martins',
      role: 'Empresária',
      content: 'O processo de coaching me ajudou a clarear meus objetivos e criar um plano de ação efetivo. Resultados incríveis!',
      rating: 5
    },
    {
      id: '2',
      name: 'Roberto Alves',
      role: 'Executivo',
      content: 'Profissional excepcional! Me ajudou a desenvolver habilidades de liderança que transformaram minha carreira.',
      rating: 5
    },
    {
      id: '3',
      name: 'Fernanda Costa',
      role: 'Empreendedora',
      content: 'Coaching transformador! Hoje tenho mais clareza, foco e confiança para alcançar meus sonhos.',
      rating: 5
    }
  ],
  faq: [
    {
      id: '1',
      question: 'O que é coaching?',
      answer: 'Coaching é um processo de desenvolvimento pessoal e profissional que te ajuda a alcançar objetivos específicos através de técnicas e ferramentas estruturadas.'
    },
    {
      id: '2',
      question: 'Quanto tempo dura o processo?',
      answer: 'Geralmente entre 3 a 6 meses, com sessões semanais ou quinzenais, dependendo do objetivo.'
    },
    {
      id: '3',
      question: 'Qual a diferença entre coaching e terapia?',
      answer: 'Coaching é focado no presente e futuro, em objetivos e ações. Terapia trabalha questões emocionais e traumas do passado.'
    },
    {
      id: '4',
      question: 'Como funcionam as sessões?',
      answer: 'As sessões são individuais, duram cerca de 1h e podem ser presenciais ou online via videochamada.'
    }
  ]
}