'use client'

import React from 'react'

interface BackgroundHeroProps {
  children: React.ReactNode
}

const BackgroundHero: React.FC<BackgroundHeroProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden ">
      {/* Dégradé coin haut droit */}
      <div
        className="
          pointer-events-none
          absolute
          -top-40
          -right-40
          h-110
          w-130
          rounded-full
          bg-linear-to-br
          from-yellow-400
          via-amber-500
          to-black
          opacity-40
          blur-3xl
        "
      />

      {/* Dégradé coin bas gauche */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-140
          w-130
          rounded-full
          bg-linear-to-tr
          from-yellow-500
          via-amber-600
          to-black
          opacity-40
          blur-3xl
        "
      />

      {/* Étoiles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* Contenu */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default BackgroundHero
