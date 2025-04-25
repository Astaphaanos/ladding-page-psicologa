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
    const element = ref.current;
    if (!element) return;

    // Configuração básica de animação
    const animation = gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
        markers: false
      },
      immediateRender: false
    });


    return () => {
      animation?.scrollTrigger?.kill();
      gsap.killTweensOf(element);
    };
  }, [sectionType]);

 
  return (
    <div 
      ref={ref}
      style={{ opacity: 1 }}
      className="will-change-transform"
    >
      {children}
    </div>
  )
}