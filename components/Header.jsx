import { useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeContext } from './ThemeToggle';
// Inline SVG icons to avoid heavy MUI dependency
const DarkModeIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
    </svg>
);
const LightModeIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
    </svg>
);
import {
    LinkedIn,
    GitHub,
    StackOverflow,
    NPM,
    Facebook,
    Twitter,
    Instagram,
    Blog,
    HackerOne,
} from './SocialIcons';

export default function Header() {
    const heroImgRef = useRef(null);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const profileImageSrc = theme === 'dark'
        ? '/images/profile-dark.jpg'
        : '/images/profile-light.jpg';

    const starSrc = theme === 'dark' ? '/images/star-light.svg' : '/images/star.svg';
    const arrowSrc = theme === 'dark' ? '/images/arrow-up-right-light.svg' : '/images/arrow-up-right.svg';

    // Mouse move effect for the hero image (throttled with rAF)
    useEffect(() => {
        let rafId = null;
        const handleMouseMove = (e) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                if (!heroImgRef.current) { rafId = null; return; }
                const xPercent = (e.clientX / window.innerWidth) - 0.5;
                const yPercent = (e.clientY / window.innerHeight) - 0.5;
                heroImgRef.current.style.transform = `translate3d(${xPercent * 24}px, ${yPercent * 24}px, 0)`;
                rafId = null;
            });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);


    return (
        <header className="header">
            <div className="navigation" role="banner">
                <div className="container">
                    <div className="row row-justify-between">
                        <div className="logo">
                            <Image src={starSrc} alt="Star icon" width={32} height={32} className="logo-icon" />
                            <div className="text-xl text-medium">Aashish Vivekanand</div>
                        </div>
                        <div className="row-btns">
                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className="btn theme-btn"
                                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                            >
                                {theme === 'light' ? (
                                    <DarkModeIcon size={20} />
                                ) : (
                                    <LightModeIcon size={20} />
                                )}
                            </button>

                            <Link
                                href="mailto:aashishvanand@gmail.com?subject=Personal%20Message%20via%20Portfolio"
                                className="btn display-none-mob"
                            >
                                <div>Drop an Email</div>
                                <Image src={arrowSrc} width={20} height={20} alt="Arrow Up Right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="row row-header">
                        <div className="content">
                            <motion.div
                                className="row mb-16"
                                initial={{ opacity: 0, y: '100%' }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <div className="btn-icon-l">
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0)">
                                            <path d="M17.5 8.83334C17.5 14.6667 10 19.6667 10 19.6667C10 19.6667 2.5 14.6667 2.5 8.83334C2.5 6.84422 3.29018 4.93656 4.6967 3.53004C6.10322 2.12352 8.01088 1.33334 10 1.33334C11.9891 1.33334 13.8968 2.12352 15.3033 3.53004C16.7098 4.93656 17.5 6.84422 17.5 8.83334Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 11.3333C11.3807 11.3333 12.5 10.2141 12.5 8.83334C12.5 7.45263 11.3807 6.33334 10 6.33334C8.61929 6.33334 7.5 7.45263 7.5 8.83334C7.5 10.2141 8.61929 11.3333 10 11.3333Z" stroke="#101828" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="text-medium">Singapore</div>
                            </motion.div>

                            <div className="header-text-wrap">
                                <motion.div
                                    className="display-xl"
                                    initial={{ opacity: 0, y: '100%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                >
                                    I&apos;m
                                </motion.div>
                            </div>

                            <div className="header-text-wrap btm">
                                <motion.h1
                                    className="display-xl"
                                    initial={{ opacity: 0, y: '100%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                >
                                    Aashish Vivekanand
                                </motion.h1>
                            </div>

                            <motion.div
                                className="text-xl header-text"
                                initial={{ opacity: 0, y: '50%' }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                Cyber Security Engineer @ Cloudflare | Network and Cloud Security
                            </motion.div>

                            <header className="row-btns">
                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    href="https://www.linkedin.com/in/aashishvanand/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>LinkedIn</div>
                                    <LinkedIn size={20} className="btn-icon-r" />
                                </motion.a>

                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                    href="https://github.com/aashishvanand"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>Github</div>
                                    <GitHub size={20} className="btn-icon-r" />
                                </motion.a>

                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    href="https://stackoverflow.com/users/5414883/aashish-vivekanand"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>StackOverflow</div>
                                    <StackOverflow size={20} className="btn-icon-r" />
                                </motion.a>

                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.85 }}
                                    href="https://blog.aashishvanand.me"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>Blog</div>
                                    <Blog size={20} className="btn-icon-r" />
                                </motion.a>

                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.9 }}
                                    href="https://hackerone.com/aashishvanand/badges?type=user"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>HackerOne</div>
                                    <HackerOne size={20} className="btn-icon-r" />
                                </motion.a>

                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.95 }}
                                    href="https://www.npmjs.com/~aashishvanand"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>npm</div>
                                    <NPM size={20} className="btn-icon-r" />
                                </motion.a>
                            </header>

                            <div className="row-btns">
                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1.0 }}
                                    href="https://www.facebook.com/aashishvanand"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>Facebook</div>
                                    <Facebook size={20} className="btn-icon-r" />
                                </motion.a>

                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1.0 }}
                                    href="https://x.com/aashishvanand"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>Twitter</div>
                                    <Twitter size={20} className="btn-icon-r" />
                                </motion.a>

                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1.0 }}
                                    href="https://www.instagram.com/aashishvanand/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>Instagram</div>
                                    <Instagram size={20} className="btn-icon-r" />
                                </motion.a>
                            </div>
                        </div>

                        <div className="content">
                            <div className="hero-img-content">
                                <div className="hero-image-wrap">
                                    <motion.div
                                        ref={heroImgRef}
                                        initial={{ scale: 1.2 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.5, delay: 0.2 }}
                                        style={{ transformStyle: 'preserve-3d', position: 'relative', width: '100%', aspectRatio: '1/1' }}
                                    >
                                        <picture>
                                            <source
                                                type="image/webp"
                                                srcSet={`
                                                    ${profileImageSrc.replace('.jpg', '-500.webp')} 500w,
                                                    ${profileImageSrc.replace('.jpg', '-800.webp')} 800w,
                                                    ${profileImageSrc.replace('.jpg', '-1080.webp')} 1080w
                                                `}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <img
                                                src={profileImageSrc}
                                                alt="Aashish Vivekanand"
                                                className="hero-img"
                                                width={560}
                                                height={560}
                                                srcSet={`
                                                    ${profileImageSrc.replace('.jpg', '-500.jpg')} 500w,
                                                    ${profileImageSrc.replace('.jpg', '-800.jpg')} 800w,
                                                    ${profileImageSrc.replace('.jpg', '-1080.jpg')} 1080w
                                                `}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                loading="eager"
                                                fetchPriority="high"
                                            />
                                        </picture>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header >
    );
}