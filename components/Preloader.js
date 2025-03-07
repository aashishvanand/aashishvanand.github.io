import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from './ThemeToggle';

export default function Preloader() {
    const { theme } = useContext(ThemeContext) || { theme: 'light' };
    
    // Determine colors based on theme
    const backgroundColor = theme === 'dark' ? '#1a1a2e' : '#f2e4d5';
    const textColor = theme === 'dark' ? '#ffffff' : '#131520'; // Using grey-900 from your variables

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            style={{
                display: 'flex',
                position: 'fixed',
                inset: '0%',
                zIndex: 9999,
                backgroundColor: backgroundColor,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '10vh'
            }}
        >
            <div className="preloader-text" style={{ opacity: 1 }}>
                <div className="preloader-text-wrap">
                    <motion.div
                        className="display-xl preload-text-top"
                        initial={{
                            y: '150%',
                            rotateX: 90,
                            rotateZ: 30,
                            opacity: 0,
                            transformStyle: 'preserve-3d'
                        }}
                        animate={{
                            y: 0,
                            rotateX: 0,
                            rotateZ: 0,
                            opacity: 1,
                            transition: {
                                duration: 1.5,
                                ease: [0.19, 1, 0.22, 1]
                            }
                        }}
                        style={{ color: textColor }}
                    >
                        Aashish
                    </motion.div>
                </div>
                <div className="preloader-line-wrap">
                    <div className="line-wrap">
                        <motion.div
                            className="line-wrap-inner"
                            initial={{ width: '0%', opacity: 0 }}
                            animate={{
                                width: '100%',
                                opacity: 1,
                                transition: {
                                    duration: 0.8,
                                    delay: 0.9,
                                    ease: [0.19, 1, 0.22, 1]
                                }
                            }}
                        >
                            <img src="/images/line.svg" alt="" width="232" height="32" className="line" />
                        </motion.div>
                    </div>
                    <div className="preloader-text-wrap btm">
                        <motion.div
                            className="display-xl preload-text-btm"
                            initial={{
                                y: '150%',
                                rotateX: 90,
                                rotateZ: 30,
                                opacity: 0,
                                transformStyle: 'preserve-3d'
                            }}
                            animate={{
                                y: 0,
                                rotateX: 0,
                                rotateZ: 0,
                                opacity: 1,
                                transition: {
                                    duration: 1.7,
                                    delay: 0.2,
                                    ease: [0.19, 1, 0.22, 1]
                                }
                            }}
                            style={{ color: textColor }}
                        >
                            Vivekanand
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}