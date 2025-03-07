export const optimizedAnimations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1]
      }
    }
  },
  // Using transform properties instead of positional ones for better performance
  slideUp: {
    initial: { opacity: 0, transform: 'translateY(50px)' },
    animate: { 
      opacity: 1, 
      transform: 'translateY(0px)',
      transition: { 
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1]
      }
    }
  },
  slideIn: {
    initial: { opacity: 0, transform: 'translateX(-50px)' },
    animate: { 
      opacity: 1, 
      transform: 'translateX(0px)',
      transition: { 
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1]
      }
    }
  },
  scale: {
    initial: { opacity: 0, transform: 'scale(0.9)' },
    animate: { 
      opacity: 1, 
      transform: 'scale(1)',
      transition: { 
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1]
      }
    }
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
};

// Force GPU acceleration for smooth animations
export const useGPUAcceleration = (ref) => {
  if (ref && ref.current) {
    ref.current.style.willChange = 'transform, opacity';
    ref.current.style.backfaceVisibility = 'hidden';
    ref.current.style.perspective = '1000px';
    ref.current.style.transform = 'translateZ(0)';
  }
};