import { useEffect, useState } from 'react';
import '../styles/globals.css';
import { ThemeProvider } from '../components/ThemeToggle';

export default function MyApp({ Component, pageProps }) {
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
        
        // Handle smooth scrolling for anchor links via event delegation
        const handleClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (!anchor) return;
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            if (!targetId) return;
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        };
        
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
