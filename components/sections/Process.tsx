// example-process-usage.tsx
// Como usar o ProcessSection para mostrar seu processo

import ProcessSection from '@/components/sections/ProcessSection'

export default function LandingPage() {
  const processSteps = [
    {
      step: 1,
      title: 'Você Envia os Materiais',
      description: 'Preencha um formulário rápido com informações do seu negócio, logo, fotos e textos.',
      icon: 'FileText', // ← STRING ao invés de componente
      duration: '5-10 min',
      details: [
        'Formulário simples e objetivo',
        'Logo e fotos do negócio',
        'Textos e informações',
        'Cores da sua marca'
      ]
    },
    {
      step: 2,
      title: 'Customizamos Tudo',
      description: 'Nossa equipe adapta o modelo com suas cores, textos, imagens e identidade visual.',
      icon: 'Palette', // ← STRING
      duration: '24-48h',
      details: [
        'Design personalizado',
        'Cores da sua marca',
        'Conteúdo otimizado',
        'Layout responsivo'
      ]
    },
    {
      step: 3,
      title: 'Você Aprova',
      description: 'Enviamos o preview para você revisar e solicitar ajustes. Até 3 rodadas de revisão incluídas.',
      icon: 'CheckCircle', // ← STRING
      duration: '1-2 dias',
      details: [
        'Preview completo',
        'Até 3 revisões',
        'Ajustes rápidos',
        'Aprovação final'
      ]
    },
    {
      step: 4,
      title: 'Site no Ar!',
      description: 'Publicamos seu site com domínio próprio e você começa a receber clientes imediatamente.',
      icon: 'Rocket', // ← STRING
      duration: 'Imediato',
      details: [
        'Publicação instantânea',
        'Domínio conectado',
        'SSL/HTTPS ativo',
        'Suporte por 30 dias'
      ]
    }
  ]

  return (
    <main>
      {/* Outras seções... */}
      
      <ProcessSection 
        steps={processSteps}
        title="Como Funciona"
        subtitle="Do pedido ao site no ar em apenas 3 dias"
      />
      
      {/* Mais seções... */}
    </main>
  )
}

// ========== VARIAÇÃO: PROCESSO MAIS DETALHADO ==========

export const detailedProcessSteps = [
  {
    step: 1,
    title: 'Briefing Inicial',
    description: 'Conversa rápida para entender suas necessidades e objetivos com o site.',
    icon: 'FileText', // ← STRING
    duration: '30 min',
    details: [
      'Chamada ou WhatsApp',
      'Definir objetivos',
      'Escolher modelo',
      'Receber materiais'
    ]
  },
  {
    step: 2,
    title: 'Desenvolvimento',
    description: 'Desenvolvemos seu site com base no modelo escolhido e nos materiais enviados.',
    icon: 'Palette', // ← STRING
    duration: '2 dias',
    details: [
      'Customização visual',
      'Integração de conteúdo',
      'Otimização SEO',
      'Testes de qualidade'
    ]
  },
  {
    step: 3,
    title: 'Revisão e Ajustes',
    description: 'Você revisa o site e solicitamos os ajustes necessários até ficar perfeito.',
    icon: 'CheckCircle', // ← STRING
    duration: '1 dia',
    details: [
      'Preview em ambiente de teste',
      'Feedback detalhado',
      'Ajustes ilimitados',
      'Aprovação por escrito'
    ]
  },
  {
    step: 4,
    title: 'Publicação',
    description: 'Publicamos seu site no ar com domínio próprio e treinamento de uso.',
    icon: 'Rocket', // ← STRING
    duration: '2-4h',
    details: [
      'Deploy em produção',
      'Configuração de domínio',
      'Treinamento básico',
      'Documentação de uso'
    ]
  }
]

// ========== VARIAÇÃO: PROCESSO SIMPLIFICADO (3 PASSOS) ==========

export const simpleProcessSteps = [
  {
    step: 1,
    title: 'Envie Seus Dados',
    description: 'Formulário rápido com logo, fotos e textos do seu negócio.',
    icon: 'Send', // ← STRING
    duration: '10 min',
    details: [
      'Formulário online',
      'Upload de arquivos',
      'Informações básicas'
    ]
  },
  {
    step: 2,
    title: 'Customizamos',
    description: 'Adaptamos o modelo e enviamos para aprovação.',
    icon: 'Zap', // ← STRING
    duration: '48h',
    details: [
      'Design personalizado',
      'Preview para aprovação',
      'Ajustes incluídos'
    ]
  },
  {
    step: 3,
    title: 'Site Online',
    description: 'Publicamos e você já pode começar a receber clientes.',
    icon: 'Globe', // ← STRING
    duration: 'Imediato',
    details: [
      'Publicação instantânea',
      'Domínio próprio',
      '30 dias de suporte'
    ]
  }
]

// ========== ÍCONES SUGERIDOS POR TIPO DE STEP ==========

/*
ÍCONES DO LUCIDE REACT - USE COMO STRING:

Início/Briefing:
- 'FileText' (formulário)
- 'ClipboardList' (checklist)
- 'MessageSquare' (conversa)
- 'FileEdit' (edição)

Desenvolvimento/Customização:
- 'Palette' (design)
- 'Code' (desenvolvimento)
- 'Paintbrush' (customização)
- 'Wand2' (mágica/automação)

Revisão/Aprovação:
- 'CheckCircle' (aprovado)
- 'Eye' (revisar)
- 'ThumbsUp' (aprovar)
- 'Shield' (garantia)

Publicação/Lançamento:
- 'Rocket' (lançamento)
- 'Globe' (online)
- 'Zap' (rápido)
- 'Star' (sucesso)

Suporte/Manutenção:
- 'Headphones' (suporte)
- 'LifeBuoy' (ajuda)
- 'Settings' (configuração)
- 'Users' (equipe)

IMPORTANTE: Use o nome do ícone como STRING, não importe o componente!
Exemplo correto: icon: 'FileText'
Exemplo errado: icon: FileText (sem aspas)
*/

// ========== DICAS DE COPY ==========

/*
TÍTULOS EFICAZES:
✅ Use verbos de ação: "Você Envia", "Customizamos", "Aprovamos"
✅ Seja específico: "Site no Ar" ao invés de "Finalização"
✅ Mantenha curto: 2-4 palavras

DESCRIÇÕES PERSUASIVAS:
✅ Foque em benefícios, não processos
✅ Use "você" para personalizar
✅ Seja claro sobre o que acontece
✅ Tranquilize sobre complexidade

DURAÇÕES REALISTAS:
✅ Seja honesto com prazos
✅ Use ranges: "24-48h" ao invés de "2 dias"
✅ "Imediato" transmite urgência positiva
*/