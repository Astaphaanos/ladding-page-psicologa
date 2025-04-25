import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar plugins uma única vez
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AnimatedSection({ 
  children,
  sectionType = 'default'
}) {
  const ref = useRef(null)

  useEffect(() => {
    // Garantir que o elemento existe
    if (!ref.current) return

    // Configuração básica de animação
    gsap.from(ref.current, {
      opacity: 0,
      y: 50,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
        markers: false // Ative como true para debug
      },
      // Força renderização inicial
      immediateRender: false
    })

    return () => {
      // Limpeza
      gsap.killTweensOf(ref.current)
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [sectionType])

  return (
    <div 
      ref={ref}
      style={{ opacity: 1 }} // Estado inicial visível
      className="will-change-transform"
    >
      {children}
    </div>
  )
}