import { useEffect, Suspense, lazy } from 'react';
import '../styles/globals.css';
import { ThemeProvider } from '../components/ThemeToggle';
import LoadingSpinner from '../components/LoadingSpinner';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const CustomCursor = dynamic(() => import('../components/CustomCursor'), { ssr: false });
const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), { ssr: false });

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

    return (
        <ThemeProvider>
            <Component {...pageProps} />
            <Suspense fallback={<LoadingSpinner />}>
                <CustomCursor />
                <ThemeToggle />
            </Suspense>
        </ThemeProvider>
    );
}