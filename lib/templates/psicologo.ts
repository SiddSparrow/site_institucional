import { TemplateConfig } from '@/types/templates'

export const psicologoTemplate: TemplateConfig = {
  name: 'Júlia Azevedo',
  logo: '',
  type: 'psicologo',
  colors: {
    navbar: '#8c866b',
    services: '#8c866b',
    about: 'rgb(173 167 141)',
    testimonials: '#8c866b',
    faq: 'rgb(173 167 141)',
    cta: '#8c866b',
    contact: 'rgb(173 167 141)',
    footer: '#8c866b',
    primary: '#6B9AC4', // Roxo suave e profissional
    secondary: '#4A4A4A',
    accent: '#e4eee9ff',
    background: '#F5F3EF',
    text: 'white',
    blog: '#EDE9FE',
    
    active: '#8FB9A8'
  },
  foto_perfil: '/images/psicologo_perfil.jpg',
  foto_geral: '/images/psicologo_geral.png',
  features: {
    blog: false, // Ativar/desativar blog
    testimonials: true,
    faq: true,
    newsletter: false
  },
  hero: {
    title: 'Cuidando da sua <span>saúde mental</span> com acolhimento',
    subtitle: 'Psicoterapia baseada em evidências para ajudar <br> você a viver melhor.',
    ctaPrimary: 'Agendar Sessão',
    ctaSecondary: 'WhatsApp'
  },
  services: {
    title: 'Como Posso Ajudar',
    subtitle: 'Ofereço diferentes abordagens terapêuticas para atender suas necessidades específicas.',
    services: [
      {
        id: '1',
        icon: 'Brain',
        title: 'Psicoterapia Individual',
        description: 'Atendimento personalizado para suas necessidades emocionais e psicológicas.'
      },
      {
        id: '2',
        icon: 'Users',
        title: 'Terapia de Casal',
        description: 'Fortalecimento de relacionamentos através de comunicação e compreensão.'
      },
      {
        id: '3',
        icon: 'Heart',
        title: 'Gestão de Ansiedade',
        description: 'Técnicas comprovadas para lidar com ansiedade e estresse do dia a dia.'
      },
      {
        id: '4',
        icon: 'Video',
        title: 'Consultas Online',
        description: 'Atendimento por videochamada com a mesma qualidade do presencial.'
      }
    ]
  },
  about: {
    title: 'Sobre Mim',
    description: [
      'Sou psicóloga clínica com especialização em Terapia Cognitivo-Comportamental (TCC), formada pela [Universidade] e com mais de [X] anos de experiência.',
      'Minha abordagem é acolhedora e baseada em evidências científicas, sempre respeitando a individualidade de cada pessoa.'
    ],
    credentials: [
      { icon: 'Award', title: 'CRP 00/00000', description: 'Registro ativo' },
      { icon: 'BookOpen', title: '10+ Anos', description: 'De experiência clínica' },
      { icon: 'Users', title: '500+', description: 'Pacientes atendidos' }
    ]
  },
  testimonials: {
    title: 'Depoimentos de Pacientes',
    subtitle: 'O que dizem as pessoas que confiaram em meu trabalho.',
    testimonials: [
      {
        id: '1',
        name: 'Maria Silva',
        role: 'Paciente',
        content: 'O atendimento transformou minha vida. Aprendi a lidar com a ansiedade de forma saudável.',
        rating: 5
      },
      {
        id: '2',
        name: 'João Santos',
        role: 'Paciente',
        content: 'Profissional extremamente competente e acolhedora. Me ajudou a superar momentos difíceis.',
        rating: 5
      },
      {
        id: '3',
        name: 'Ana Costa',
        role: 'Paciente',
        content: 'Recomendo de olhos fechados! Ambiente acolhedor e técnicas que realmente funcionam.',
        rating: 5
      }
    ]
  },
  cta: {
    title: 'Pronto para cuidar da sua saúde mental?',
    subtitle: 'Agende sua primeira sessão e comece sua jornada de autoconhecimento.',
    wppText: 'Olá! Gostaria de agendar uma sessão de psicoterapia.'
  },
  faq: {
    text: 'Perguntas frequentes sobre atendimento psicológico.',
    questions: [
      {
        id: '1',
        question: 'Como funciona a primeira sessão?',
        answer: 'Na primeira sessão, faremos uma avaliação inicial para entender suas necessidades e definir os objetivos do tratamento.'
      },
      {
        id: '2',
        question: 'Quanto tempo dura cada sessão?',
        answer: 'Cada sessão tem duração de 50 minutos, seguindo o padrão do Conselho Federal de Psicologia.'
      },
      {
        id: '3',
        question: 'Qual a frequência recomendada?',
        answer: 'Geralmente sessões semanais, mas a frequência pode variar de acordo com cada caso.'
      },
      {
        id: '4',
        question: 'Atende por convênio?',
        answer: 'Trabalho como particular, mas forneço recibo para reembolso junto ao convênio.'
      }
    ]
  },
  blog: {
    enabled: false,
    title: 'Artigos sobre Saúde Mental',
    subtitle: 'Informações e dicas para o seu bem-estar emocional.',
    openInNewPage: false,
    categories: ['Ansiedade', 'Depressão', 'Relacionamentos', 'Autoestima', 'Crescimento Pessoal']
  }
}