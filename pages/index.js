import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ProjectSection from '../components/ProjectSection';

export default function Home() {
    // Animation controls for the about section
    const aboutRef = useRef(null);
    const aboutInView = useInView(aboutRef, { once: true, margin: "-100px 0px" });
    const aboutControls = useAnimation();

    useEffect(() => {
        if (aboutInView) {
            aboutControls.start(i => ({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1.5,
                    ease: [0.19, 1, 0.22, 1],
                    delay: 0.1 * i
                }
            }));
        }
    }, [aboutInView, aboutControls]);

    return (
        <Layout>
            <SEO />

            <section className="section" ref={aboutRef}>
                <article className="container">
                    <motion.h2
                        custom={0}
                        initial={{ opacity: 0, y: 50 }}
                        animate={aboutControls}
                        className="text-md text-medium"
                    >
                        A little about me
                    </motion.h2>

                    <motion.p
                        custom={1}
                        initial={{ opacity: 0, y: 50 }}
                        animate={aboutControls}
                    >
                        I am an accomplished cybersecurity and software engineering professional with a strong foundation in Computer Science Engineering from Anna University, Chennai. Currently excelling as a Senior Software Engineer at Proxtera, I lead
                        the development of secure, robust microservices and serverless APIs, focusing on IAM network security and data encryption.
                    </motion.p>

                    <motion.p
                        custom={2}
                        initial={{ opacity: 0, y: 50 }}
                        animate={aboutControls}
                    >
                        As a distinguished Android Security expert, I have made significant strides in cloud and network security. My expertise extends to digital signature solutions and advanced serverless web application development, with a keen emphasis
                        on internal security audits.
                    </motion.p>

                    <motion.p
                        custom={3}
                        initial={{ opacity: 0, y: 50 }}
                        animate={aboutControls}
                        className="paragraph"
                    >
                        My commitment to cybersecurity shines through my impressive bug bounty achievements. I have actively identified and reported critical vulnerabilities to several organizations, including Jio, HomeCentre Landmark Group India, Mettl,
                        and Singapore&#x27;s LumiHealth app. My proactive approach to uncovering and addressing complex security risks underscores my exceptional skills in cybersecurity.
                    </motion.p>
                </article>
            </section>

            <ProjectSection title="Experience">
                <div className="row row-split-content">
                    <div className="text-medium mb-32">Aug 2024 – Current</div>
                    <h3 className="display-sm"><a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer" className="link-no-underline">Cloudflare</a></h3>
                    <div className="display-xs">Cybersecurity Engineer</div>
                    <p className="paragraph"><br /></p>
                </div>

                <div className="row row-split-content">
                    <div className="text-medium mb-32">May 2022 – July 2024</div>
                    <h3 className="display-sm"><a href="https://proxtera.com/" target="_blank" rel="noopener noreferrer" className="link-no-underline">Proxtera Pte Ltd</a> </h3>
                    <div className="display-xs">Senior Software Engineer</div>
                    <p className="paragraph">Architected and implemented microservices and serverless APIs for Proxtera Connect, focusing on robust Identity and Access Management (IAM), network security, and data encryption. I led the integration of Proxtera's digital commerce
                        offerings with ONDC API and printed the first international trade for a customer. I worked on integrating Singpass and MyInfoBiz APIs to retrieve personal and business data for SME verification in Singapore. Built key components
                        of the SME Financial Empowerment (SMEFE) platform, enhancing financial tools and knowledge for customers. Engaged in R&amp;D for the Monetary Authority of Singapore&#x27;s Financial Transparency Corridor (FTC) pilot, focusing
                        on improved financial transparency and trade connectivity.<br /></p>
                </div>

                <div className="row row-split-content">
                    <div className="text-medium mb-32">May 2021 – April 2022</div>
                    <h3 className="display-sm"><a href="https://www.trustedservices.com.sg/" target="_blank" rel="noopener noreferrer" className="link-no-underline">Trusted Services Pte Ltd</a> </h3>
                    <div className="display-xs">Cloud Solution Architect</div>
                    <p>Developed and implemented PAdES-LTA-compliant digital signatures using Singpass. This groundbreaking GovTech-approved project was the first to utilize Python for PAdES-LTA digital signatures, distinguishing it from traditional
                        JAVA/Apache-based methods. PAdES (PDF Advanced Electronic Signatures) enhances PDFs and ISO 32000-1 for advanced signatures, with LTA ensuring long-term validity and integrity.<br /></p>
                </div>

                <div className="row row-split-content">
                    <div className="text-medium mb-32">May 2019 – April 2021</div>
                    <h3 className="display-sm"><a href="https://falainacloud.com/" target="_blank" rel="noopener noreferrer" className="link-no-underline">Falaina Pte Ltd</a> </h3>
                    <div className="display-xs">Cloud Solution Architect</div>
                    <p>Designed and developed Falaina Community Cloud, a serverless modern web application used by Customers/ Internal Employees as a Ticketing, Marketing, and Sales as All in one Portal. Developed Falaina mobile apps and worked on internal
                        security audits for products/projects before delivering them to customers.<br /></p>
                </div>

                <div className="row row-split-content">
                    <div className="text-medium mb-32">December 2017 – April 2019</div>
                    <h3 className="display-sm"><a href="https://www.deepidentity.com/" target="_blank" rel="noopener noreferrer" className="link-no-underline">Deep Identity Pte Ltd</a> </h3>
                    <div className="display-xs">Software Developer (Android) &amp; Mobile/Web Vulnerability Assessment and Penetration Tester</div>
                    <p>Designed and developed Data Protection Manager (DPM), an application that actively monitors users from sending sensitive data outside the device. The agent can warn users if they send any PCI/DSS or HIPAA-compliant data. The agent
                        is also capable of blocking internet activity on a per-app basis after repeated warnings. The agent scans in real-time after a photo/screenshot/file is taken/downloaded for sensitive data and reports it back.<br /></p>
                </div>
            </ProjectSection>

            <ProjectSection title="Libraries &amp; Apps" delay={0.3}>
                <div className="row row-split-content">
                    <h3><a href="https://ccreward.app/" target="_blank" rel="noopener noreferrer" className="link-no-underline">ccreward.app</a></h3>
                    <div className="display-xs">NextJS Webapp</div>
                    <p className="paragraph">a web app that helps users maximize credit card rewards by providing personalized card comparisons based on spending patterns and merchant codes. Built with Next.js, it ensures privacy by performing all calculations on the user&#x27;s
                        device, with optional anonymous sign-up.<br /></p>
                </div>

                <div className="row row-split-content">
                    <h3><a href="https://www.npmjs.com/package/airport-data-js" target="_blank" rel="noopener noreferrer" className="link-no-underline">airport-data-js</a></h3>
                    <div className="display-xs">NodeJS Library</div>
                    <p className="paragraph">A comprehensive library providing easy retrieval of airport data based on IATA, ICAO, city codes, country codes, and continents. Ideal for developers building applications related to aviation, travel, and geography.<br /></p>
                </div>

                <div className="row row-split-content">
                    <h3 className="display-sm"><a href="https://www.npmjs.com/package/corporate-taxid-checker-js" target="_blank" rel="noopener noreferrer" className="link-no-underline">corporate-taxid-checker-js</a></h3>
                    <div className="display-xs">NodeJS Library</div>
                    <p>Tax ID Validator is a robust tool designed for validating various tax identification numbers (TINs), such as GSTIN in India, UEN in Singapore, etc. The tool uses regular expressions and specific validation logic for each type of
                        TIN, ensuring that the input adheres to the expected format and structural rules of the respective issuing authority.<br /></p>
                </div>

                <div className="row row-split-content">
                    <h3 className="display-sm link-no-underline"><a href="https://pypi.org/project/airports-py/" target="_blank" rel="noopener noreferrer" className="link-no-underline">airports-py</a></h3>
                    <div className="display-xs">Python Library</div>
                    <p>A comprehensive Python library providing easy retrieval of airport data based on IATA, ICAO, city codes, country codes, and continents. Ideal for developers building applications related to aviation, travel, and geography in Python.<br /></p>
                </div>
            </ProjectSection>

            <ProjectSection title="Bounties" delay={0.4}>
                <div className="row row-split-content">
                    <h3><a href="https://bughunters.google.com/leaderboard/honorable-mentions" target="_blank" rel="noopener noreferrer" className="link-no-underline">Google</a></h3>
                    <p className="paragraph">Ranked 2nd in Singapore and 865th globally on the Bug Hunters Leaderboard for identifying a significant privacy issue, classified as Priority P2 and Severity S2, with details currently under private disclosure.<br /></p>
                </div>

                <div className="row row-split-content">
                    <h3><a href="https://jio.com/" target="_blank" rel="noopener noreferrer" className="link-no-underline">Jio</a></h3>
                    <p className="paragraph">Reported Information Exposure Through Debug Information (CWE-215) and Business Logic Errors (CWE-840), ranked 35th on Jio&#x27;s HackerOne leaderboard in India.<br /></p>
                </div>

                <div className="row row-split-content">
                    <h3 className="display-sm"><a href="https://www.homecentre.in/in/en/" target="_blank" rel="noopener noreferrer" className="link-no-underline">Home Centre</a></h3>
                    <p>Landmark Group India: Exposed a PII vulnerability enabling tracking customer orders, personal details,and purchase information.<br /></p>
                </div>

                <div className="row row-split-content">
                    <h3 className="display-sm link-no-underline"><a href="https://mettl.com/" target="_blank" rel="noopener noreferrer" className="link-no-underline">Mettl</a></h3>
                    <p>Identified a PII exposure compromising thousands of job seekers&#x27; resumes, phone numbers, and addresses.<br /></p>
                </div>

                <div className="row row-split-content">
                    <h3 className="display-sm link-no-underline"><a href="https://www.lumihealth.sg/" target="_blank" rel="noopener noreferrer" className="link-no-underline">Singapore&#x27;s LumiHealth</a></h3>
                    <p>A potential MITM attack was detected due to an expired SSL certificate.<br /></p>
                </div>

                <div className="row row-split-content">
                    <h3 className="display-sm link-no-underline"><a href="https://www.iata.org/" target="_blank" rel="noopener noreferrer" className="link-no-underline">International Air Transport Association (IATA)</a></h3>
                    <p>Reported a security flaw in an open endpoint lacking rate limiting/CAPTCHA, risking data scraping abuse.<br /></p>
                </div>
            </ProjectSection>

            <ProjectSection title="Awards" delay={0.5}>
                <div className="row row-split-content">
                    <h3>Daimler Hackathon</h3>
                    <p className="paragraph">3rd Place in Mobile App Garage 2017, conducted by Daimler India Commercial Vehicles in association with CUIC (Centre for University-Industry Collaboration), Anna University, India<br /></p>
                </div>

                <div className="row row-split-content">
                    <h3 className="display-sm">US Consulate Hackathon</h3>
                    <p>1st Place in Cyber-security Hackathon 2016, conducted by the US Consulate and Learning Links Foundation across India<br />SMART App: This Android app creates a 14-layer secured environment to stream videos. Users of the app are
                        neither allowed to capture the screen nor programmatically record the video; if force recorded, it will be a blank screen. The app does not work on a rooted device or an emulator. The app won first place in the Cyber-Security
                        Hackathon (US Consulate &amp; LLF) - <a href="https://bit.ly/hindusmartapp" target="_blank" rel="noopener noreferrer" className="link-no-underline">The Hindu News Article</a><br /></p>
                </div>

                <div className="row row-split-content">
                    <h3 className="display-sm link-no-underline">CII Connect Hackathon</h3>
                    <p>1st Place in both Connect 2016 and Connect 2015, Hackathons organised by the CII Confederation of Indian Industry<br /></p>
                </div>

                <div className="row row-split-content">
                    <h3 className="display-sm link-no-underline">ISSRD</h3>
                    <p>SmartSignals - The best project at the state level, organised by the ISSRD International Society for Scientific Research &amp; Development<br /></p>
                </div>
            </ProjectSection>

            <ProjectSection title="Media Coverage" delay={0.6}>
                <div className="row row-split-content">
                    <h3>Dinathanthi (தினத்தந்தி)</h3>
                    <p className="paragraph link-no-underline"><a href="https://bit.ly/DinathanthiChennaiBoyWinsHackathon" className="link-no-underline">dtNEXT Dt:23-August-2016 Pg:6</a><br /></p>
                    <p className="paragraph"><a href="https://bit.ly/dtnexttrafficmanagement" className="link-no-underline">dtNEXT Dt:21-September-2016 Pg:2</a><br /></p>
                </div>

                <div className="row row-split-content">
                    <h3 className="display-sm"><a href="https://bit.ly/hindusmartapp" target="_blank" rel="noopener noreferrer" className="link-no-underline">The Hindu Newspaper</a></h3>
                    <p><a href="https://bit.ly/hindusmartapp" target="_blank" rel="noopener noreferrer" className="link-no-underline">Student gets exposure to Cyber security Issues - The Hindu(Chennai Edition) Dt:22-July-2016</a><br /></p>
                    <p><a href="https://bit.ly/hindustudentwinscybersecurityhackathon" target="_blank" rel="noopener noreferrer" className="link-no-underline">Student Wins Cyber Security Hackathon - The Hindu - 12-September-2016 - Pg:7</a><br /></p>
                </div>

                <div className="row row-split-content">
                    <h3 className="display-sm">iuemag.com</h3>
                    <p><a href="https://www.iuemag.com/june2016/li/techie-cum-clickie-aashish-vivekanand.php" target="_blank" rel="noopener noreferrer" className="link-no-underline">Techie cum Clickie on his way to Life&#x27;s Mission</a><br /></p>
                </div>
            </ProjectSection>

            <ProjectSection title="Education" delay={0.7}>
                <div className="row row-split-content">
                    <div className="text-medium mb-32">Sep 2023 – May 2025*</div>
                    <h3 className="display-sm link-no-underline"><a href="https://www.london.ac.uk/" target="_blank" rel="noopener noreferrer" className="link-no-underline">University of London</a></h3>
                    <div className="display-xs">MSc in Cybersecurity</div>
                </div>

                <div className="row row-split-content">
                    <div className="text-medium mb-32">Jul 2013 – May 2017</div>
                    <h3 className="display-sm">Anna Univeristy</h3>
                    <div className="display-xs">BE in Computer Science</div>
                </div>
            </ProjectSection>

            <ProjectSection title="Publications" delay={0.8}>
                <div className="row row-split-content">
                    <h3 className="display-sm link-no-underline">
                        <a href="https://iopscience.iop.org/article/10.1088/1757-899X/211/1/012009" target="_blank" rel="noopener noreferrer" className="link-no-underline">
                            Inventory transparency for agricultural produce through IOT
                        </a>
                    </h3>
                    <div className="display-xs">IOP Conference Series: Materials Science and Engineering · Jun 1, 2017</div>
                </div>
            </ProjectSection>
        </Layout>
    );
}