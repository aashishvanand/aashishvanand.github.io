import { motion, useScroll } from 'framer-motion';

export default function ScrollProgressIndicator() {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div
                className="progress-bar"
                style={{
                    scaleX: scrollYProgress,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'var(--primary-500)',
                    transformOrigin: '0%',
                    zIndex: 1000
                }}
            />
            <style jsx global>{`
        @media (prefers-reduced-motion) {
          .progress-bar {
            display: none;
          }
        }
      `}</style>
        </>
    );
}