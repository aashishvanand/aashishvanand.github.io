import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Base variants defined outside to avoid re-creation; delay is applied per-instance
const createContainerVariants = (delay) => ({
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            ease: [0.19, 1, 0.22, 1],
            delay: delay,
            staggerChildren: 0.2
        }
    }
});

export default function ProjectSection({ title, children, delay = 0.2, id }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
    const controls = useAnimation();

    const containerVariants = createContainerVariants(delay);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.section
            ref={ref}
            id={id}
            className="section pb-0"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <div className="container">
                <div className="display-lg">{title}</div>
                {children}
            </div>
        </motion.section>
    );
}