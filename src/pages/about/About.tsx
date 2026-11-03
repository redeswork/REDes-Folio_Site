import { Footer } from "../../components/structure/Footer";
import { HeroHeader } from "../../components/structure/headers/HeroHeader";
import { Section } from "../../components/structure/Section";
import './about.scss'



export function About() {


    return(
        <>
        
            <Section classes="light top no-padding-bottom">
                <HeroHeader
                heroHeading="About"
                variant="dark">

                </HeroHeader>
            </Section>

            <Section classes="light">
                <div className="grid">
                    <div className="about-grid">

                            <div className="about-row">
                                <h3 className="about-title">
                                    SKILLS
                                </h3>

                                <div className="about-div"></div>

                                <div className="about-copy-wrap full-w">
                                    <p className="about-copy">
                                        A combination of design understanding and technical knowledge allows me to approach projects from different angles, choosing the right tools and techniques for each build.
                                    </p>

                                    <div className="about-copy-list-wrap">
                                        <h4 className="about-copy-subhead">PLATFORMS</h4>

                                        <ul className="about-copy-list">
                                            <li>Webflow</li>
                                            <li>Cloudflare</li>
                                            <li>Github</li>
                                        </ul>
                                    </div>

                                    <div className="about-copy-list-wrap">
                                        <h4 className="about-copy-subhead">LANGUAGES</h4>

                                        <ul className="about-copy-list">
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                            <li>React</li>
                                        </ul>
                                    </div>

                                    <div className="about-copy-list-wrap">
                                        <h4 className="about-copy-subhead">SPECIALISMS</h4>

                                        <ul className="about-copy-list">
                                            <li>Responsive Development</li>
                                            <li>Animation & Interaction</li>
                                            <li>Third-party integration</li>
                                            <li>Custom functionality</li>
                                        </ul>
                                    </div>

                                </div>

                            </div>



                            <div className="about-row">
                                <h3 className="about-title">
                                    BACKGROUND
                                </h3>

                                <div className="about-div"></div>

                                <div className="about-copy-wrap">
                                    <p className="about-copy">
                                        I'm a freelance Website Developer working under RE Design, specialising in bespoke websites that balance clean design, considered functionality and engaging interactions.
                                    </p>

                                    <p className="about-copy">
                                        I enjoy taking static designs and bringing them to life, finding solutions to technical challenges and making sure every detail works as it should.
                                    </p>
                                </div>

                            </div>

                            <div className="about-row">
                                <h3 className="about-title">
                                    EXPERTISE
                                </h3>

                                <div className="about-div"></div>

                                <div className="about-copy-wrap">
                                    <p className="about-copy">
                                        With a background in Graphic Design and UX, I bring an understanding of both the visual and functional sides of a website.
                                    </p>

                                    <p className="about-copy">
                                        My work goes beyond translating designs into code. From responsive layouts and custom interactions to complex third-party integrations, I enjoy finding the right approach to make each project work.
                                    </p>
                                </div>

                            </div>


                            <div className="about-row">
                                <h3 className="about-title">
                                    ROBBIE
                                </h3>

                                <div className="about-div"></div>

                                <div className="about-copy-wrap">
                                    <p className="about-copy">
                                        I started working in website development shortly after graduating from university, initially through contract work before establishing my own freelance practice.
                                    </p>

                                    <p className="about-copy">
                                        Outside of work, I'm interested in architecture, music and history - all of which offer their own perspectives on design, creativity and the world around us.
                                    </p>
                                </div>

                            </div>

                    </div>
                </div>
            </Section>


            <Footer />
        
        </>
    )
}