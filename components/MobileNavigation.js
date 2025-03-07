import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <>
            <button
                className="mobile-menu-toggle"
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

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
                                            <a
                                                href={item.href}
                                                onClick={toggleMenu}
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
                                        <Image src="/images/linkedin.png" width={24} height={24} alt="LinkedIn" />
                                    </a>
                                    <a href="https://github.com/aashishvanand" target="_blank" rel="noopener noreferrer">
                                        <Image src="/images/github.png" width={24} height={24} alt="GitHub" />
                                    </a>
                                    <a href="https://x.com/aashishvanand" target="_blank" rel="noopener noreferrer">
                                        <Image src="/images/twitter-alt.png" width={24} height={24} alt="Twitter" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
        .mobile-menu-toggle {
          display: none;
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1001;
          background: var(--grey-900);
          color: white;
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
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
          background: rgba(0, 0, 0, 0.5);
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
          background: var(--white);
          padding: 24px;
          display: flex;
          flex-direction: column;
          z-index: 1001;
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
          color: var(--grey-900);
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
          color: var(--grey-900);
          border-bottom: 1px solid var(--grey-100);
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
          .mobile-menu-toggle {
            display: flex;
          }
          
          .navigation .row-btns {
            display: none;
          }
        }
      `}</style>
        </>
    );
}