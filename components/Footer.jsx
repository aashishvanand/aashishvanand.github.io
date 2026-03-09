import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from './ThemeToggle';

export default function Footer() {
    const { theme } = useContext(ThemeContext) || { theme: 'light' };
    const starSrc = theme === 'dark' ? '/images/star-light.svg' : '/images/star.svg';

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <a href="#top" className="logo logo-footer">
                        <Image src={starSrc} alt="Star icon" width={32} height={32} className="logo-icon" />
                        <div className="text-xl text-medium">Aashish Vivekanand</div>
                    </a>
                </div>
                <div className="footer-btm">
                    <div>© Aashish Vivekanand {new Date().getFullYear()}</div>
                </div>
            </div>
        </footer>
    );
}