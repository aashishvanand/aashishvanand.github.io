import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const useScrollReveal = (options = {}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: options.threshold || 0.1,
        triggerOnce: options.triggerOnce !== false,
        rootMargin: options.rootMargin || '-100px 0px',
    });

    const variantInit = options.direction === 'left' ? { x: -100, opacity: 0 } :
        options.direction === 'right' ? { x: 100, opacity: 0 } :
            options.direction === 'down' ? { y: -100, opacity: 0 } :
                { y: 100, opacity: 0 };

    const variants = {
        hidden: variantInit,
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: options.type || 'spring',
                damping: options.damping || 12,
                mass: options.mass || 0.75,
                stiffness: options.stiffness || 100,
                delay: options.delay || 0,
                duration: options.duration || 0.8,
            },
        },
    };

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return {
        ref,
        variants,
        initial: 'hidden',
        animate: controls,
    };
};