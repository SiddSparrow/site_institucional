// example-portfolio-usage.tsx
// Como usar o PortfolioSection com seus templates

import PortfolioSection from '@/components/sections/PortfolioSection'

export default function LayoutDisplay() {
  const templates = [
    {
      title: 'Modelo Médico',
      description: 'Landing page profissional para médicos e clínicas que desejam atrair mais pacientes e transmitir confiança.',
      niche: 'Saúde & Medicina',
      image: '/images/medical_1.png',
      demoUrl: 'https://medical.webexpress.net.br/',
      color: '#3b82f6', // Azul confiança
      ideal: ['Médicos', 'Dentistas', 'Clínicas', 'Consultórios'],
      features: [
        'Agendamento online',
        'Galeria de procedimentos',
        'Depoimentos',
        'Integração WhatsApp',
        'Blog médico',
        'Localização Google Maps'
      ]
    },
    {
      title: 'Modelo Barbearia',
      description: 'Site moderno para barbearias que querem se destacar e aumentar o fluxo de clientes.',
      niche: 'Beleza & Estética',
      image: '/images/barber.png',
      demoUrl: 'https://barbershop.webexpress.net.br/',
      color: '#dc2626', // Vermelho masculino
      ideal: ['Barbearias', 'Salões Masculinos', 'Barbeiros Autônomos'],
      features: [
        'Galeria de cortes',
        'Tabela de preços',
        'Agendamento direto',
        'Redes sociais',
        'Equipe profissional',
        'Horário de funcionamento'
      ]
    },
    {
      title: 'Modelo Design',
      description: 'Portfólio elegante para designers de interiores mostrarem projetos e conquistarem novos clientes.',
      niche: 'Design & Arquitetura',
      image: '/images/webdesign.png',
      demoUrl: 'https://visualdesign.webexpress.net.br/',
      color: '#10b981', // Verde criativo
      ideal: ['Designers', 'Arquitetos', 'Decoradores', 'Paisagistas'],
      features: [
        'Portfólio de projetos',
        'Galeria interativa',
        'Sobre o designer',
        'Processo de trabalho',
        'Orçamento online',
        'Cases de sucesso'
      ]
    }
  ]

  return (
    <main>
      {/* Outras seções... */}
      
      <PortfolioSection 
        templates={templates}
        title="Nossos Modelos"
        subtitle="Sites profissionais prontos para o seu negócio"
      />
      
      {/* Mais seções... */}
    </main>
  )
}

// ========== CORES RECOMENDADAS POR NICHO ==========

/*
Médico/Saúde: #3b82f6 (azul confiança)
Barbearia: #dc2626 (vermelho masculino)
Design/Criativo: #10b981 (verde criativo)
Advocacia: #1e293b (azul escuro autoridade)
Beleza Feminina: #ec4899 (rosa elegante)
Fitness/Academia: #f59e0b (laranja energia)
Restaurante: #ef4444 (vermelho apetite)
Tecnologia: #8b5cf6 (roxo inovação)
Imobiliária: #0ea5e9 (azul céu)
Coaching: #a855f7 (roxo inspiração)
Fotografia: #6366f1 (índigo arte)
Pet Shop: #f97316 (laranja alegre)
*/

