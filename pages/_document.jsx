import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
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