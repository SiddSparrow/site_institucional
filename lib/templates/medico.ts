import { TemplateConfig } from '@/types/templates'
import { title } from 'process'

export const medicoTemplate: TemplateConfig = {
  name: 'Dr. [Nome]',
  logo: '/images/medico_logo.png',
  type: 'medico',
  colors: {
    primary: '#2563EB', // Azul médico profissional
    secondary: '#1E293B',
    accent: '#60A5FA',
    background: '#EFF6FF',
    text: '#374151',
    blog: '#DBEAFE',
    testimonials: '#EFF6FF',
    active: '#1D4ED8'
  },
  foto_perfil: '/images/medico_perfil.jpg',
  foto_geral: '/images/medico_geral.jpg',
  features: {
    blog: true, // Ativar/desativar blog
    testimonials: true,
    faq: true,
    newsletter: false
  },
  hero: {
    title: 'Cuidando da sua saúde com <span>excelência</span> e <span>dedicação</span>',
    subtitle: 'Atendimento médico especializado com foco no seu bem-estar e qualidade de vida.',
    ctaPrimary: 'Agendar Consulta',
    ctaSecondary: 'WhatsApp'
  },
  services: {
    title: "Como Posso Ajudar",
    subtitle: "Oferecemos atendimento especializado e humanizado.",
    services:[
      {
        id: '1',
        icon: 'Stethoscope',
        title: 'Consultas',
        description: 'Atendimento personalizado e humanizado para diagnóstico e acompanhamento.'
      },
      {
        id: '2',
        icon: 'FileText',
        title: 'Exames',
        description: 'Solicitação e análise de exames laboratoriais e de imagem.'
      },
      {
        id: '3',
        icon: 'Heart',
        title: 'Check-up',
        description: 'Avaliação completa de saúde preventiva e acompanhamento regular.'
      },
      {
        id: '4',
        icon: 'Video',
        title: 'Telemedicina',
        description: 'Consultas online com a mesma qualidade do atendimento presencial.'
      }
    ]
  },
  about: {
    title: 'Sobre o Médico',
    description: [
      'Formado pela [Universidade], com especialização em [Especialidade] e mais de [X] anos de experiência no atendimento de pacientes.',
      'Minha prática é baseada em evidências científicas, sempre priorizando o cuidado humanizado e a relação médico-paciente.'
    ],
    credentials: [
      { icon: 'Award', title: 'CRM 00000', description: 'Registro ativo' },
      { icon: 'BookOpen', title: '10+ Anos', description: 'De experiência' },
      { icon: 'Users', title: '1000+', description: 'Pacientes atendidos' }
    ]
  },
  testimonials: {
    title: 'O Que Dizem Meus Pacientes',
    subtitle: 'Depoimentos reais de pessoas satisfeitas.',
    testimonials: [
      {
        id: '1',
        name: 'Maria Silva',
        role: 'Paciente',
        content: 'Excelente profissional! Atencioso, competente e sempre disponível. Me sinto muito segura com o acompanhamento.',
        rating: 5
      },
      {
        id: '2',
        name: 'João Santos',
        role: 'Paciente',
        content: 'Médico dedicado que realmente se preocupa com seus pacientes. Diagnóstico preciso e tratamento eficaz.',
        rating: 5
      },
      {
        id: '3',
        name: 'Ana Costa',
        role: 'Paciente',
        content: 'Atendimento humanizado e de qualidade. Recomendo de olhos fechados!',
        rating: 5
      }
    ]
  },
  cta: {
    title: 'Pronto para cuidar da sua saúde?',
    subtitle: 'Agende sua consulta e receba atendimento médico de qualidade.',
    wppText: 'Olá! Gostaria de agendar uma consulta.'
  },
  faq: {
    text: "Informações importantes sobre consultas e atendimento.",
    questions: [
      {
        id: '1',
        question: 'Como agendar uma consulta?',
        answer: 'Você pode agendar pelo telefone, WhatsApp ou através do formulário de contato no site.'
      },
      {
        id: '2',
        question: 'Atende por convênio?',
        answer: 'Sim, atendo os principais convênios médicos. Entre em contato para confirmar se o seu convênio está na lista.'
      },
      {
        id: '3',
        question: 'Qual a duração da consulta?',
        answer: 'As consultas têm duração média de 30 a 40 minutos, tempo necessário para uma avaliação completa.'
      },
      {
        id: '4',
        question: 'Preciso levar exames anteriores?',
        answer: 'Sim, é importante trazer todos os exames e documentos médicos anteriores para melhor avaliação.'
      }
    ]
  }
  ,
  blog: {
    enabled: true,
    title: 'Artigos sobre Saúde',
    subtitle: 'Informações confiáveis e atualizadas sobre prevenção, tratamentos e bem-estar.',
    openInNewPage: false,
    categories: ['Prevenção', 'Tratamentos', 'Dicas de Saúde', 'Novidades Médicas']
  }
}