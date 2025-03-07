import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';
import ScrollProgressIndicator from './ScrollProgressIndicator';
import MobileNavigation from './MobileNavigation';

export default function Layout({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate preloader timing similar to the original site
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {loading && <Preloader />}
            </AnimatePresence>

            <ScrollProgressIndicator />
            <MobileNavigation />

            <motion.div
                className="page-wrap"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: loading ? 0 : 1,
                    transition: { duration: 1.5, delay: 0.5 }
                }}
            >
                <Header />
                <main id="main-content" role="main" className="main">
                    {children}
                </main>
                <Footer />
            </motion.div>
            
            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="skip-to-content">
                Skip to content
            </a>
            
            <style jsx global>{`
                .skip-to-content {
                    position: absolute;
                    top: -40px;
                    left: 0;
                    background: var(--primary-500);
                    color: white;
                    padding: 8px;
                    z-index: 1001;
                    transition: top 0.3s;
                }
                
                .skip-to-content:focus {
                    top: 0;
                }
            `}</style>
        </>
    );
}