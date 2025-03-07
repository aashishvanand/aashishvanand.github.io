import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Button({ href, children, icon, target, className = '', delay = 0 }) {
    const buttonMotion = {
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
        whileHover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        }
    };

    const iconMotion = {
        whileHover: {
            x: 4,
            y: -4,
            transition: { duration: 0.2 }
        }
    };

    const buttonContent = (
        <>
            <div>{children}</div>
            {icon && (
                <motion.div className="btn-icon-r" variants={iconMotion}>
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
            variants={buttonMotion}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
        >
            {buttonContent}
        </motion.a>
    );
}