import { TemplateConfig } from '@/types/templates'
import { title } from 'process'

export const medicoTemplate: TemplateConfig = {
  name: 'Dr. João',
  logo: '/images/medico_logo.png',
  type: 'medico',
  colors: {
    // Cores de seção (tons de azul e verde médicos)

    //navbar: '#1E40AF', // Azul escuro (confiança, profissionalismo)
    /* services: '#3B82F6', // Azul médio (calma, confiança)
    about: '#0EA5E9', // Azul céu (esperança, clareza)
    testimonials: '#1E40AF', // Azul escuro (estabilidade)
    faq: '#0EA5E9', // Azul céu
    cta: '#10B981', // Verde esmeralda (ação, saúde)
    contact: '#3B82F6', // Azul médio
    footer: '#1E3A8A', // Azul marinho (autoridade) */

    navbar:'#0EA5E9',
    services: "#d2d2d2", // Azul médio (calma, confiança)
    about: '#f3f3f3', // Azul céu (esperança, clareza)
    testimonials: '#f3f3f3', // Azul escuro (estabilidade)
    faq: '#d2d2d2', // Azul céu
    cta: '#f3f3f3', // Verde esmeralda (ação, saúde)
    contact: '#f3f3f3', // Azul médio
    footer: '#f3f3f3', // Azul marinho (autoridade)
    
    // Cores principais
    primary: '#b88b4a', // Azul escuro principal
    secondary: '#4B5563', // Cinza para textos secundários
    accent: 'black', // Azul muito claro para fundos (cor de destaque)
    background: '#FFFFFF', // Branco puro (limpeza, esterilidade)
    text: 'black', // Cinza muito escuro para textos principais
    blog: '#d2d2d2', // Cinza azulado muito claro para fundo do blog
    
    // Cores de estado
    active: '#10B981', // Verde esmeralda para elementos ativos
  },
  foto_perfil: '/images/medico_perfil.png',
  foto_geral: '/images/medico_geral.jpg',
  features: {
    blog: true, // Ativar/desativar blog
    testimonials: true,
    faq: true,
    newsletter: false,
    cta:false
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
    services: [
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
    title: 'Sobre o Dr. João',
    description: [
      'Formado pela Faculdade de Medicina da Universidade de São Paulo (FMUSP), com Residência Médica em Otorrinolaringologia pela Santa Casa de São Paulo e mais de 12 anos de experiência no atendimento clínico e cirúrgico de pacientes.',
      'Sua prática é baseada nas mais atuais evidências científicas, sempre priorizando o cuidado humanizado e a construção de uma relação de confiança e transparência com cada paciente. Participa anualmente de congressos internacionais para se manter atualizado.'
    ],
    credentials: [
      { icon: 'Award', title: 'CRM-SP 123.456', description: 'Registro ativo no Conselho Regional de Medicina' },
      { icon: 'BookOpen', title: '12+ Anos', description: 'De experiência clínica e cirúrgica' },
      { icon: 'Users', title: '4.500+', description: 'Procedimentos realizados' }
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
      },
      {
        id: '5',
        question: 'Oferece telemedicina?',
        answer: 'Sim, ofereço atendimento por telemedicina para consultas de retorno e acompanhamento, conforme regulamentação do CFM. A primeira consulta deve ser presencial.'
      },
      {
        id: '6',
        question: 'Qual o prazo para liberação de atestados e receitas?',
        answer: 'Atestados e receitas são liberados imediatamente após a consulta, tanto na modalidade presencial quanto online. Receitas digitais são enviadas por e-mail ou WhatsApp.'
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