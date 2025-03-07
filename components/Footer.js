import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <a href="#top" className="logo logo-footer">
                        <Image src="/images/star.svg" alt="Star icon" width={32} height={32} className="logo-icon" />
                        <div className="text-xl text-medium text-grey-900">Aashish Vivekanand</div>
                    </a>
                </div>
                <div className="footer-btm">
                    <div>© Aashish Vivekanand {new Date().getFullYear()}</div>
                </div>
            </div>
        </footer>
    );
}