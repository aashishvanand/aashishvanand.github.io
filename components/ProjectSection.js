import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function ProjectSection({ title, children, delay = 0.2 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1.5,
                    ease: [0.19, 1, 0.22, 1],
                    delay: delay
                }
            });
        }
    }, [isInView, controls, delay]);

    return (
        <motion.section
            ref={ref}
            className="section pb-0"
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
        >
            <div className="container">
                <div className="display-lg">{title}</div>
                {children}
            </div>
        </motion.section>
    );
}