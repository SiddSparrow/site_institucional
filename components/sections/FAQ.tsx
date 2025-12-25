import FAQSection from "./FAQSection"



export default function FAQ() {
  const faqs = [
    {
      question: 'Preciso entender de tecnologia para ter um site?',
      answer: 'Não! Nós cuidamos de tudo. Você só precisa enviar seu logo, fotos, textos e identidade visual (cores). Cuidamos de toda a parte técnica: design, programação, hospedagem e publicação. Você recebe o site pronto e funcionando.'
    },
    {
      question: 'Quanto tempo leva para o site ficar pronto?',
      answer: 'Seu site fica pronto em até 3 dias úteis após você enviar os materiais (logo, fotos, textos). Se precisar de revisões, adicionamos mais 1-2 dias. Na maioria dos casos, o site está no ar em menos de uma semana.'
    },
    {
      question: 'E se eu não gostar do resultado?',
      answer: 'Você tem direito a até 3 rodadas de ajustes incluídas no pacote. Além disso, oferecemos 30 dias de suporte para qualquer modificação de cores, textos ou imagens. Sem perguntas, sem complicação.'
    },
    {
      question: 'Posso mudar textos e imagens depois?',
      answer: 'Sim! Nos primeiros 30 dias, todas as mudanças de cores, textos e imagens são gratuitas. Após esse período, cobramos R$100 por rodada de ajustes. Alterações simples geralmente levam 24-48h.'
    },
    {
      question: 'Vocês ajudam a escolher e comprar o domínio?',
      answer: 'Sim! Te orientamos sobre como escolher um bom domínio e onde comprar (geralmente Registro.br para .com.br). Depois que você compra, nós conectamos o domínio ao site gratuitamente. É super simples e rápido.'
    },
    {
      question: 'Como funciona o suporte de 30 dias?',
      answer: 'Durante 30 dias após a entrega, você pode solicitar ajustes ilimitados em:\n• Cores e fontes\n• Textos e descrições\n• Troca de imagens\n• Links e botões\n\nRespondemos em até 24h úteis e fazemos os ajustes em 24-48h. Suporte via WhatsApp.'
    },
    {
      question: 'Preciso pagar por hospedagem separadamente?',
      answer: 'Não! A hospedagem na Vercel é gratuita e está incluída no pacote. Seu site fica online 24/7 com alta performance e segurança, sem custo adicional algum. Isso só mudará caso a política da própria vercel mude, mas você será contatado antes.'
    }
  ]

  return (
    <main>
      {/* Outras seções... */}
      
      <FAQSection 
        faqs={faqs}
        title="Perguntas Frequentes"
        subtitle="Tire suas dúvidas sobre nossos serviços"
      />
      
      {/* Mais seções... */}
    </main>
  )
}

// ========== VARIAÇÃO: FAQ COM CATEGORIAS ==========

export const categorizedFAQs = [
  // Categoria: Sobre o Serviço
  {
    question: 'Como funciona o processo de criação?',
    answer: 'Simples: 1) Você envia materiais (logo, fotos, textos), 2) Customizamos em 48h, 3) Você aprova, 4) Site no ar! Todo o processo leva de 3 a 5 dias.',
    category: 'Sobre o Serviço'
  },
  {
    question: 'Quais nichos vocês atendem?',
    answer: 'Atendemos principalmente: médicos, dentistas, advogados, barbearias, salões de beleza, designers, coaches, consultores e profissionais liberais em geral.',
    category: 'Sobre o Serviço'
  },

  // Categoria: Pagamento
  {
    question: 'Quais formas de pagamento aceitam?',
    answer: 'Aceitamos Pix, transferência bancária e cartão de crédito (via MercadoPago). Pagamento único de R$300, sem parcelamento.',
    category: 'Pagamento'
  },
  {
    question: 'Preciso pagar adiantado?',
    answer: 'Sim, pedimos 50% ao iniciar o projeto e 50% na entrega final. Isso garante comprometimento de ambas as partes e agiliza o processo.',
    category: 'Pagamento'
  },

  // Categoria: Técnico
  {
    question: 'Posso adicionar um blog depois?',
    answer: 'Sim! Podemos adicionar um blog funcional por R$200 adicionais. Inclui estrutura completa com categorias, busca e compartilhamento.',
    category: 'Técnico'
  },
  {
    question: 'O site é otimizado para Google (SEO)?',
    answer: 'Sim! Todos os sites incluem SEO básico: meta tags otimizadas, estrutura semântica, velocidade de carregamento rápida e mobile-friendly.',
    category: 'Técnico'
  },

  // Categoria: Pós-entrega
  {
    question: 'E depois dos 30 dias de suporte?',
    answer: 'Após 30 dias, você pode contratar ajustes pontuais por R$100 cada rodada, ou um plano de manutenção mensal por R$150/mês (ajustes ilimitados).',
    category: 'Pós-entrega'
  },
  {
    question: 'Posso cancelar o domínio depois?',
    answer: 'Sim, o domínio é seu. Você pode cancelar a renovação quando quiser. O site continuará funcionando no subdomínio gratuito da Vercel.',
    category: 'Pós-entrega'
  }
]

// ========== DICAS PARA ESCREVER BOAS FAQs ==========

/*
ESTRUTURA DE UMA BOA FAQ:

1. PERGUNTA CLARA E DIRETA
✅ "Quanto tempo leva para o site ficar pronto?"
❌ "Qual é o prazo de entrega do projeto?"

2. RESPOSTA COMPLETA MAS CONCISA
- Responda diretamente primeiro
- Adicione detalhes depois
- Use bullet points quando possível
- Máximo 4-5 linhas

3. TOM CONVERSACIONAL
✅ "Não! Nós cuidamos de tudo."
❌ "Não é necessário conhecimento técnico."

4. ELIMINE OBJEÇÕES
Cada FAQ deve responder uma objeção comum:
- "É caro?" → FAQ sobre preço e o que está incluso
- "É complicado?" → FAQ sobre processo
- "E se não gostar?" → FAQ sobre garantia
- "Tem taxa escondida?" → FAQ sobre mensalidade

5. USE NÚMEROS CONCRETOS
✅ "3 dias úteis"
✅ "R$300"
✅ "30 dias de suporte"
❌ "Rápido"
❌ "Preço acessível"
❌ "Suporte estendido"

6. SEJA TRANSPARENTE
- Mencione custos extras (domínio)
- Explique limitações
- Não prometa o que não pode entregar

ORDEM DAS PERGUNTAS (MAIS IMPORTANTES PRIMEIRO):

1. "Preciso entender de tecnologia?" (medo técnico)
2. "Quanto tempo leva?" (urgência)
3. "O que está incluído?" (valor)
4. "E se eu não gostar?" (garantia)
5. "Vocês cobram mensalidade?" (custo oculto)
6-12. Outras dúvidas técnicas e operacionais

PERGUNTAS QUE SEMPRE DEVEM ESTAR:
✅ Tempo de entrega
✅ O que está incluído no preço
✅ Garantia/política de reembolso
✅ Mensalidade (ou falta dela)
✅ Suporte pós-entrega
✅ Funcionamento em mobile
✅ Exemplos/portfólio
✅ Como funciona o processo
*/

// ========== PERGUNTAS POR NICHO ==========

// PARA MÉDICOS:
export const medicoFAQs = [
  {
    question: 'O site atende às normas do CFM?',
    answer: 'Sim! Seguimos todas as diretrizes do CFM sobre publicidade médica. Não fazemos promessas de resultado, não usamos fotos de antes/depois sem autorização e mantemos ética profissional.'
  },
  {
    question: 'Posso colocar agendamento online?',
    answer: 'Sim! Integramos com sistemas como Doctoralia, iClinic ou um botão direto para WhatsApp. A integração com agenda própria tem custo adicional.'
  }
]

// PARA BARBEARIAS:
export const barbeariaFAQs = [
  {
    question: 'Posso colocar tabela de preços?',
    answer: 'Sim! Incluímos uma seção de serviços com preços, descrições e tempo estimado. Você pode atualizar quando quiser durante os 30 dias de suporte.'
  },
  {
    question: 'Dá pra integrar com Instagram?',
    answer: 'Sim! Colocamos feed do Instagram no site mostrando suas últimas fotos automaticamente. Também linkamos todas as suas redes sociais.'
  }
]