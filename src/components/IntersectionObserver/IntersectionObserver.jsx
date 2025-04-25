import { useEffect, useRef } from 'react';

const SectionObserver = ({ children, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible'); // CSS puro
            // entry.target.classList.add('animate-fade-in-up'); // Para Tailwind
          }
        });
      },
      { threshold: 0.1 } // Dispara quando 10% do elemento estiver visível
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`section-transition ${className}`} // CSS puro
      // className={`opacity-0 translate-y-5 ${className}`} // Tailwind
    >
      {children}
    </div>
  );
};

export default SectionObserver;