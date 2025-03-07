import { useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeContext } from './ThemeToggle';
import { Sun, Moon } from 'lucide-react';

export default function Header() {
    const heroImgRef = useRef(null);
    // Correctly destructure both theme and toggleTheme from the context
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Determine which profile image to use based on theme
    const profileImageSrc = theme === 'dark'
        ? '/images/profile_dark.jpg'
        : '/images/profile.jpg';

    // Mouse move effect for the hero image
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroImgRef.current) return;

            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate mouse position as percentage
            const xPercent = (clientX / innerWidth) - 0.5;
            const yPercent = (clientY / innerHeight) - 0.5;

            // Apply movement (12px in each direction)
            const moveX = xPercent * 24;
            const moveY = yPercent * 24;

            heroImgRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <header className="header">
            <div className="navigation" role="banner">
                <div className="container">
                    <div className="row row-justify-between">
                        <div className="logo">
                            <Image src="/images/star.svg" alt="Star icon" width={32} height={32} className="logo-icon" />
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
                                    <Moon size={20} />
                                ) : (
                                    <Sun size={20} />
                                )}
                            </button>

                            <Link
                                href="mailto:aashishvanand@gmail.com?subject=Personal%20Message%20via%20Portfolio"
                                className="btn display-none-mob"
                            >
                                <div>Drop an Email</div>
                                <Image src="/images/arrow-up-right.svg" width={20} height={20} alt="Arrow icon" className="btn-icon-r" />
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
                                transition={{ duration: 1.5, delay: 1.9 }}
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
                                    transition={{ duration: 1.5, delay: 1.9 }}
                                >
                                    I'm
                                </motion.div>
                            </div>

                            <div className="header-text-wrap btm">
                                <motion.div
                                    className="display-xl"
                                    initial={{ opacity: 0, y: '100%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 1.9 }}
                                >
                                    Aashish Vivekanand
                                </motion.div>
                            </div>

                            <motion.div
                                className="text-xl header-text"
                                initial={{ opacity: 0, y: '50%' }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 2.6 }}
                            >
                                Cyber Security Engineer @ Cloudflare | Network and Cloud Security
                            </motion.div>

                            <header className="row-btns">
                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 2.9 }}
                                    href="https://www.linkedin.com/in/aashishvanand/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>LinkedIn</div>
                                    <Image src="/images/linkedin.png" width={20} height={20} alt="linkedin icon" className="btn-icon-r" />
                                </motion.a>

                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 3.1 }}
                                    href="https://github.com/aashishvanand"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>Github</div>
                                    <Image src="/images/github.png" width={20} height={20} alt="github icon" className="btn-icon-r" />
                                </motion.a>

                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 3.3 }}
                                    href="https://stackoverflow.com/users/5414883/aashish-vivekanand"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>StackOverflow</div>
                                    <Image src="/images/stack-overflow.png" width={20} height={20} alt="stackoverflow icon" className="btn-icon-r" />
                                </motion.a>

                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 3.4 }}
                                    href="https://www.npmjs.com/~aashishvanand"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>npm</div>
                                    <Image src="/images/outline.png" width={20} height={20} alt="npm icon" className="btn-icon-r" />
                                </motion.a>
                            </header>

                            <div className="row-btns">
                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 3.6 }}
                                    href="https://www.facebook.com/aashishvanand"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>Facebook</div>
                                    <Image src="/images/facebook.png" width={20} height={20} alt="facebook icon" className="btn-icon-r" />
                                </motion.a>

                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 3.6 }}
                                    href="https://x.com/aashishvanand"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>Twitter</div>
                                    <Image src="/images/twitter-alt.png" width={20} height={20} alt="twitter icon" className="btn-icon-r" />
                                </motion.a>

                                <motion.a
                                    initial={{ opacity: 0, y: '50%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 3.6 }}
                                    href="https://www.instagram.com/aashishvanand/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <div>Instagram</div>
                                    <Image src="/images/instagram.png" width={20} height={20} alt="instagram icon" className="btn-icon-r" />
                                </motion.a>
                            </div>
                        </div>

                        <div className="content">
                            <div className="hero-img-content">
                                <div className="hero-image-wrap">
                                    <motion.img
                                        ref={heroImgRef}
                                        className="hero-img"
                                        src={profileImageSrc}
                                        alt="Aashish Image"
                                        initial={{ scale: 1.2 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 2.4, delay: 1.9 }}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}