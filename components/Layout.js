import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';

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

            <motion.div
                className="page-wrap"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: loading ? 0 : 1,
                    transition: { duration: 1.5, delay: 0.5 }
                }}
            >
                <Header />
                <main className="main">
                    {children}
                </main>
                <Footer />
            </motion.div>
        </>
    );
}