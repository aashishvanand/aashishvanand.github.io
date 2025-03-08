import { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from './ThemeToggle';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import { LinkedIn, GitHub, Twitter } from './SocialIcons';

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext) || { theme: 'light', toggleTheme: () => { } };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Bounties', href: '#bounties' },
        { name: 'Contact', href: 'mailto:aashishvanand@gmail.com?subject=Personal%20Message%20via%20Portfolio' }
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 }
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        toggleMenu(); // Close the menu

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
    };

    return (
        <>
            <div className="mobile-buttons">
                <button
                    onClick={toggleTheme}
                    className="theme-toggle-mobile"
                    aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                >
                    {theme === 'light' ? (
                        <Moon size={20} />
                    ) : (
                        <Sun size={20} />
                    )}
                </button>

                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMenu}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mobile-menu-header">
                                <div className="logo">
                                    <Image src="/images/star.svg" alt="Star icon" width={32} height={32} className="logo-icon" />
                                    <div className="text-xl text-medium">Aashish Vivekanand</div>
                                </div>
                                <button
                                    className="mobile-menu-close"
                                    onClick={toggleMenu}
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="mobile-menu-nav">
                                <ul>
                                    {navItems.map((item) => (
                                        <motion.li key={item.name} variants={itemVariants}>
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
                                    <a href="https://x.com/aashishvanand" target="_blank" rel="noopener noreferrer">
                                        <Twitter size={24} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .mobile-buttons {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 1001;
                    display: flex;
                    gap: 12px;
                }
                
                .theme-toggle-mobile, .mobile-menu-toggle {
                    background: var(--grey-900);
                    color: white;
                    border: none;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }

                .mobile-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    z-index: 1000;
                    backdrop-filter: blur(3px);
                }

                .mobile-menu {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 80%;
                    max-width: 320px;
                    background: var(--bg-color);
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    z-index: 1001;
                    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
                }

                .mobile-menu-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 32px;
                }

                .mobile-menu-close {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--text-color);
                }

                .mobile-menu-nav {
                    flex-grow: 1;
                }

                .mobile-menu-nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .mobile-menu-link {
                    display: block;
                    padding: 16px 0;
                    font-size: 1.25rem;
                    font-weight: 500;
                    text-decoration: none;
                    color: var(--text-color);
                    border-bottom: 1px solid var(--border-color);
                }

                .mobile-menu-social {
                    margin-top: 32px;
                }

                .social-links {
                    display: flex;
                    gap: 16px;
                    margin-top: 8px;
                }

                @media screen and (max-width: 767px) {
                    .mobile-buttons {
                        display: flex;
                    }
                    
                    .navigation .row-btns {
                        display: none;
                    }
                }
                
                @media screen and (min-width: 768px) {
                    .mobile-buttons {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}