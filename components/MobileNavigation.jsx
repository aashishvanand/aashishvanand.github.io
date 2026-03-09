import { useState, useContext, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
const MenuIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
);
const CloseIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
);
import Image from 'next/image';
import { LinkedIn, GitHub, Twitter, Blog, HackerOne } from './SocialIcons';

// Animation variants defined outside component to avoid re-creation
const menuVariants = {
    closed: {
        opacity: 0,
        x: '100%',
        transition: { type: 'spring', stiffness: 400, damping: 40 }
    },
    open: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 400, damping: 40, staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
};

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Bounties', href: '#bounties' },
    { name: 'Contact', href: 'mailto:aashishvanand@gmail.com?subject=Personal%20Message%20via%20Portfolio' }
];

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext) || { theme: 'light', toggleTheme: () => { } };
    const starSrc = theme === 'dark' ? '/images/star-light.svg' : '/images/star.svg';

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const handleNavClick = useCallback((e, href) => {
        e.preventDefault();
        setIsOpen(false); // Close the menu

        // If it's an email link, just follow it
        if (href.startsWith('mailto:')) {
            window.location.href = href;
            return;
        }

        // Otherwise it's an anchor link
        const targetId = href.substring(1);
        if (!targetId) return;

        // Give a small delay to allow menu to close
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        }, 300);
    }, []);

    const handleStopPropagation = useCallback((e) => e.stopPropagation(), []);

    return (
        <>
            <div className="mobile-buttons">
                <button
                    onClick={toggleTheme}
                    className="theme-toggle-mobile"
                    aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                >
                    {theme === 'light' ? (
                        <DarkModeIcon size={20} />
                    ) : (
                        <LightModeIcon size={20} />
                    )}
                </button>

                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMenu}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleMenu}
                    >
                        <motion.div
                            className="mobile-menu"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            onClick={handleStopPropagation}
                        >
                            <div className="mobile-menu-header">
                                <div className="logo">
                                    <Image src={starSrc} alt="Star icon" width={32} height={32} className="logo-icon" />
                                    <div className="text-xl text-medium">Aashish Vivekanand</div>
                                </div>
                                <button
                                    className="mobile-menu-close"
                                    onClick={toggleMenu}
                                    aria-label="Close menu"
                                >
                                    <CloseIcon size={24} />
                                </button>
                            </div>

                            <nav className="mobile-menu-nav">
                                <ul>
                                    {navItems.map((item) => (
                                        <motion.li key={item.name} variants={mobileItemVariants}>
                                            <a  // This opening tag was missing
                                                href={item.href}
                                                onClick={(e) => handleNavClick(e, item.href)}
                                                className="mobile-menu-link"
                                            >
                                                {item.name}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="mobile-menu-social">
                                <h3 className="text-sm text-medium">Connect</h3>
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/in/aashishvanand/" target="_blank" rel="noopener noreferrer">
                                        <LinkedIn size={24} />
                                    </a>
                                    <a href="https://github.com/aashishvanand" target="_blank" rel="noopener noreferrer">
                                        <GitHub size={24} />
                                    </a>
                                    <a href="https://blog.aashishvanand.me" target="_blank" rel="noopener noreferrer">
                                        <Blog size={24} />
                                    </a>
                                    <a href="https://hackerone.com/aashishvanand/badges?type=user" target="_blank" rel="noopener noreferrer">
                                        <HackerOne size={24} />
                                    </a>
                                    <a href="https://x.com/aashishvanand" target="_blank" rel="noopener noreferrer">
                                        <Twitter size={24} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}