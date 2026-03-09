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
        // Use actual page load state with a max 1.5s cap
        const onReady = () => setLoading(false);
        if (document.readyState === 'complete') {
            // If already loaded, show preloader briefly for the animation
            const timer = setTimeout(onReady, 800);
            return () => clearTimeout(timer);
        }
        window.addEventListener('load', onReady);
        // Fallback: never block content for more than 1.5s
        const fallback = setTimeout(onReady, 1500);
        return () => {
            window.removeEventListener('load', onReady);
            clearTimeout(fallback);
        };
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
                    transition: { duration: 0.8, delay: 0.1 }
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
        </>
    );
}