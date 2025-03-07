import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleLinkHover = () => {
      setIsHovering(true);
    };

    const handleLinkLeave = () => {
      setIsHovering(false);
    };

    // Add event listeners
    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Add event listeners to all clickable elements
    const clickableElements = document.querySelectorAll('a, button, .btn');
    clickableElements.forEach(element => {
      element.addEventListener('mouseenter', handleLinkHover);
      element.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);

      clickableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleLinkHover);
        element.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, [isVisible]);

  // Don't render on server or before mounting
  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          mixBlendMode: 'difference',
        }}
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 5 : 1,
          backgroundColor: isHovering ? '#ffffff' : '#ffffff',
        }}
        transition={{
          type: 'spring',
          mass: 0.3,
        }}
      />
      <style jsx global>{`
        .cursor-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #ffffff;
        }
        body {
          cursor: none;
        }
        a, button, .btn {
          cursor: none;
        }
        
        /* Fallback for mobile or when component is not mounted */
        @media (max-width: 768px) {
          body, a, button, .btn {
            cursor: auto;
          }
          .cursor-dot {
            display: none;
          }
        }
      `}</style>
    </>
  );
}