// example-pricing-usage.tsx
// Como usar o PricingSection

import PricingSection from '@/components/sections/PricingSection'

export default function Pricing() {
  // ========== OPÇÃO 1: PLANO ÚNICO (RECOMENDADO) ==========
  const singlePlan = [
    {
      name: 'Site Profissional',
      price: 'R$ 300',
      period: 'pagamento único',
      description: 'Tudo que você precisa para ter presença digital profissional',
      badge: 'Melhor Custo-Benefício',
      highlighted: true,
      ctaText: 'Começar Agora',
      ctaLink: '#contact',
      features: [
        { text: 'Template customizado 100%', included: true, highlight: true },
        { text: 'Hospedagem grátis (sem mensalidades)', included: true, highlight: true },
        { text: '30 dias de suporte para ajustes', included: true },
        { text: 'Design responsivo (mobile + desktop)', included: true },
        { text: 'Integração com WhatsApp', included: true },
        { text: 'Formulário de contato funcional', included: true },
        { text: 'Google Maps integrado', included: true },
        { text: 'SEO básico otimizado', included: true },
        { text: 'SSL/HTTPS incluído', included: true },
        { text: 'Domínio próprio (custo à parte)', included: true },
      ]
    }
  ]

  // ========== OPÇÃO 2: COMPARAÇÃO COM CONCORRENTES ==========
  const comparisonPlans = [
    {
      name: 'Agência Tradicional',
      price: 'R$ 2.500+',
      period: 'projeto',
      description: 'Desenvolvimento customizado do zero',
      features: [
        { text: 'Design customizado', included: true },
        { text: 'Desenvolvimento complexo', included: true },
        { text: 'Prazo: 30-60 dias', included: true },
        { text: 'Custo alto', included: true },
        { text: 'Hospedagem extra', included: false },
        { text: 'Suporte limitado', included: false },
      ]
    },
    {
      name: 'WebExpress',
      price: 'R$ 300',
      period: 'pagamento único',
      description: 'Site profissional pronto em 3 dias',
      badge: 'Recomendado',
      highlighted: true,
      ctaText: 'Escolher Este',
      features: [
        { text: 'Design profissional', included: true, highlight: true },
        { text: 'Template otimizado', included: true },
        { text: 'Prazo: 3 dias', included: true, highlight: true },
        { text: 'Preço acessível', included: true, highlight: true },
        { text: 'Hospedagem grátis', included: true, highlight: true },
        { text: '30 dias de suporte', included: true },
      ]
    },
    {
      name: 'Wix / Canva',
      price: 'R$ 45/mês',
      period: 'assinatura',
      description: 'Plataforma DIY (faça você mesmo)',
      features: [
        { text: 'Templates genéricos', included: true },
        { text: 'Você mesmo monta', included: true },
        { text: 'Limitações técnicas', included: true },
        { text: 'Mensalidade eterna', included: true },
        { text: 'Suporte básico', included: false },
        { text: 'Personalização limitada', included: false },
      ]
    }
  ]

  // ========== OPÇÃO 3: PLANO BÁSICO vs PREMIUM ==========
  const tieredPlans = [
    {
      name: 'Básico',
      price: 'R$ 300',
      period: 'pagamento único',
      description: 'Essencial para começar',
      ctaText: 'Começar com Básico',
      features: [
        { text: 'Personalização completa com suas cores e logo', included: true },
        { text: 'Hospedagem gratuita*.', included: true },
        { text: '30 dias de suporte com 1 revisão por semana', included: true },
        { text: 'Design responsivo (mobile + desktop)', included: true },
        { text: 'Domínio próprio conectado', included: true },
        { text: 'Formulário de contato com email', included: true },
        { text: 'Integração com whatsapp', included: true },
        { text: 'Layout pré-estruturado', included: true },
        { text: 'Entrega em até 3 dias úteis', included: true },
        { text: 'Seções inclusas: Banner principal, Sobre você, Serviços, Formulário de contato, Rodapé', included: true },
        { text: 'Até 2 seções extras: Galeria, Depoimentos, FAQ, Como Funciona, Call to Action intermediário', included: true },
      ]
    },
    {
      name: 'Premium',
      price: 'R$ 1000',
      period: 'pagamento único',
      description: 'Completo para crescer',
      /* badge: 'Mais Popular', */
      highlighted: false,
      ctaText: 'Escolher Premium',
      features: [
        { text: 'Tudo do básico', included: true, highlight: true },
        { text: 'Layout totalmente exclusivo feito sob encomenda', included: true, highlight: true },
        { text: 'Seções ilimitadas', included: true, highlight: true },
        { text: 'SEO avançado otimizado', included: true },
        { text: 'Entrega em até 10 dias úteis', included: true },
        { text: '60 dias de suporte', included: true },
      ]
    }
  ]

  return (
    <main>
      {/* Outras seções... */}
      
      {/* USAR UMA DESSAS OPÇÕES: */}
      
      {/* Opção 1 - Plano único (mais simples e direto) */}
      <PricingSection 
        plans={tieredPlans}
        title="Investimento"
        subtitle="Preço justo, transparente e sem mensalidades"
        disclaimer="* Valor do domínio não incluso (aproximadamente R$40-80/ano)"
      />

      {/* OU Opção 2 - Comparação (mostra valor) */}
      {/* <PricingSection 
        plans={comparisonPlans}
        title="Por Que Escolher WebExpress?"
        subtitle="Compare e veja o melhor custo-benefício"
      /> */}

      {/* OU Opção 3 - Planos Básico/Premium */}
      {/* <PricingSection 
        plans={tieredPlans}
        title="Escolha Seu Plano"
        subtitle="Flexibilidade para começar ou escalar"
      /> */}
      
      {/* Mais seções... */}
    </main>
  )
}

// ========== DICAS DE PRICING PSYCHOLOGY ==========

/*
ANCORAGEM DE PREÇO:
Mostre sempre um preço de referência (concorrente) pra ancorar:
- Agência: R$2.500+
- Wix: R$45/mês = R$540/ano
- Você: R$300 (parece barato!)

DESTACAR VALOR, NÃO PREÇO:
✅ "R$300 - Site completo, hospedagem grátis, 30 dias de suporte"
❌ "R$300"

CRIAR URGÊNCIA (COM CUIDADO):
✅ "Apenas 5 vagas por mês para garantir qualidade"
✅ "Preço promocional: de R$500 por R$300"
❌ "Última chance!" (fake scarcity)

GARANTIA:
Sempre ofereça garantia:
- "100% do dinheiro de volta se não aprovar"
- "Satisfação garantida ou reembolso"

PAYMENT BREAKDOWN:
Mostre o custo diário:
"R$300 = menos de R$1/dia no primeiro ano"

COMPARE COM ALTERNATIVAS:
"Uma agência cobra R$2.500+"
"Wix cobra R$540/ano em mensalidades"
"WebExpress: R$300 pagamento único"

FEATURES QUE VENDEM:
✅ "Hospedagem GRÁTIS" (destaque GRÁTIS)
✅ "30 dias de suporte INCLUSOS"
✅ "SEM mensalidades"
✅ "Pagamento ÚNICO"

Palavras poderosas: GRÁTIS, INCLUÍDO, SEM CUSTO EXTRA, GARANTIDO
*/

// ========== VARIAÇÃO: PLANO COM DESCONTO LIMITADO ==========

export const limitedOfferPlan = [
  {
    name: 'Site Profissional',
    price: 'R$ 300',
    originalPrice: 'R$ 500', // ← Preço riscado
    period: 'pagamento único',
    description: 'Oferta de lançamento - vagas limitadas',
    badge: 'Desconto de Lançamento',
    highlighted: true,
    ctaText: 'Garantir Desconto',
    features: [
      { text: 'Template customizado 100%', included: true, highlight: true },
      { text: 'Hospedagem grátis (economize R$200/ano)', included: true, highlight: true },
      { text: '30 dias de suporte para ajustes', included: true },
      { text: 'Design responsivo profissional', included: true },
      { text: 'SEO básico otimizado', included: true },
      { text: 'SSL/HTTPS seguro', included: true },
      { text: 'Entrega em 3 dias', included: true },
      { text: 'Garantia de satisfação', included: true },
    ]
  }
]