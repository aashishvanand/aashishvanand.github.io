import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
                
                {/* Add this script to prevent theme flicker */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var savedTheme = localStorage.getItem('theme');
                                    if (savedTheme === 'dark') {
                                        document.documentElement.classList.add('dark-mode');
                                    } else {
                                        document.documentElement.classList.remove('dark-mode');
                                    }
                                } catch (e) {}
                            })();
                        `,
                    }}
                />
            </Head>
            <body className="body">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}