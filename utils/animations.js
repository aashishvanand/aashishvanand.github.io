// Animation variants for Framer Motion
export const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.5,
        ease: [0.19, 1, 0.22, 1]
      }
    }
  };
  
  export const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  // Mouse parallax effect for hero image
  export const useMouseParallax = (ref, strength = 12) => {
    if (typeof window === 'undefined' || !ref.current) return;
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage (center = 0)
      const xPercent = (clientX / innerWidth) - 0.5;
      const yPercent = (clientY / innerHeight) - 0.5;
      
      // Apply movement with strength factor
      const moveX = xPercent * strength;
      const moveY = yPercent * strength;
      
      if (ref.current) {
        ref.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  };