import { useEffect } from 'react';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
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

    return <Component {...pageProps} />;
}