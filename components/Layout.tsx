// components/Layout.tsx
// Layout principal com background unificado

import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Efeitos de background fixos - aparece em todas as páginas */}
      <div className="background-effects">
        <div className="blob-1" />
        <div className="blob-2" />
        <div className="blob-3" />
      </div>

      {/* Grid pattern fixo */}
      <div className="grid-pattern" />

      {/* Conteúdo das páginas */}
      <div className="relative z-10">
        {children}
      </div>
    </>
  )
}