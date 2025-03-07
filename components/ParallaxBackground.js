import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground({ children, speed = 0.5, className = '' }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

    return (
        <div ref={ref} className={`parallax-container ${className}`} style={{ position: 'relative', overflow: 'hidden' }}>
            <motion.div
                className="parallax-background"
                style={{
                    position: 'absolute',
                    height: '120%',
                    width: '100%',
                    top: 0,
                    y,
                    zIndex: -1,
                    backgroundColor: '#f0e0d0', // Slightly lighter than the body background
                    backgroundImage: 'linear-gradient(0deg, #f2e4d5 0%, #f0e0d0 100%)', // Subtle gradient
                }}
            />
            <div className="parallax-content">{children}</div>
        </div>
    );
}