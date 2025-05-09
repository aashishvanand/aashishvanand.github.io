import { useEffect, useState } from 'react';
import '../styles/globals.css';
import { ThemeProvider } from '../components/ThemeToggle';
import LoadingSpinner from '../components/LoadingSpinner';

export default function MyApp({ Component, pageProps }) {
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
        
        // Handle smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                if (!targetId) return;

                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, []);

    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}