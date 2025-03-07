import Head from 'next/head';
import Script from 'next/script';

export default function SEO() {
    return (
        <>
            <Head>
                <title>Aashish Vivekanand - Cyber Security Engineer @ Cloudflare | Network and Cloud Security</title>
                <meta name="description" content="Aashish Vivekanand is a Network and Cloud Security engineer based in Singapore." />
                <meta property="og:title" content="Aashish Vivekanand - Cyber Security Engineer @ Cloudflare | Network and Cloud Security" />
                <meta property="og:description" content="Aashish Vivekanand is a Network and Cloud Security engineer based in Singapore." />
                <meta property="og:image" content="https://aashishvanand.me/images/og_aashishvanand.jpg" />
                <meta property="twitter:title" content="Aashish Vivekanand - Cyber Security Engineer @ Cloudflare | Network and Cloud Security" />
                <meta property="twitter:description" content="Aashish Vivekanand is a Network and Cloud Security engineer based in Singapore." />
                <meta property="twitter:image" content="https://aashishvanand.me/images/og_aashishvanand.jpg" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-site-verification" content="K3aXNq-_6LfeYkJral_9_Kt8lFSTYwru-HM5iJeihLc" />
                <meta name="google-adsense-account" content="ca-pub-3745126880980552" />
                <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
                <link rel="apple-touch-icon" href="/images/app-icon.png" />
            </Head>
            
            {/* Move the script tag outside of Head and use next/script */}
            <Script 
                id="clarity-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      !function(t, e, n, a, c, s, r) {
                        t[n] = t[n] || function() {
                          (t[n].q = t[n].q || []).push(arguments)
                        }, (s = e.createElement(a)).async = 1, s.src = "https://www.clarity.ms/tag/lasfw33x45", (r = e.getElementsByTagName(a)[0]).parentNode.insertBefore(s, r)
                      }(window, document, "clarity", "script")
                    `,
                }}
            />
        </>
    );
}