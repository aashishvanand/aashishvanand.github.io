import { motion } from 'framer-motion';
import Image from 'next/image';

export default function EnhancedButton({ href, children, icon, target, className = '', delay = 0 }) {
    const buttonVariants = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: [0.19, 1, 0.22, 1],
                delay: delay
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transition: { duration: 0.3, ease: 'easeOut' }
        },
        tap: {
            scale: 0.98,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            transition: { duration: 0.1 }
        }
    };

    const iconVariants = {
        hover: {
            x: 4,
            y: -4,
            rotate: 5,
            transition: { duration: 0.3, ease: 'easeOut' }
        }
    };

    const buttonContent = (
        <>
            <motion.div>{children}</motion.div>
            {icon && (
                <motion.div className="btn-icon-r" variants={iconVariants}>
                    <Image src={icon} width={20} height={20} alt="icon" />
                </motion.div>
            )}
        </>
    );

    return (
        <motion.a
            href={href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className={`btn ${className}`}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
        >
            {buttonContent}
        </motion.a>
    );
}