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
                                <h3 className="about-title" data-anim="splitLines">
                                    SKILLS
                                </h3>

                                <div className="about-div" data-anim="divider"></div>

                                <div className="about-copy-wrap full-w">
                                    <p className="about-copy" data-anim="splitLines">
                                        A combination of design understanding and technical knowledge allows me to approach projects from different angles, choosing the right tools and techniques for each build.
                                    </p>

                                    <div className="about-copy-list-wrap">
                                        <h4 className="about-copy-subhead" data-anim="splitLines">PLATFORMS</h4>

                                        <ul className="about-copy-list" data-anim="lazyChild">
                                            <li>Webflow</li>
                                            <li>Cloudflare</li>
                                            <li>Github</li>
                                        </ul>
                                    </div>

                                    <div className="about-copy-list-wrap">
                                        <h4 className="about-copy-subhead" data-anim="splitLines">LANGUAGES</h4>

                                        <ul className="about-copy-list" data-anim="lazyChild">
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                            <li>React</li>
                                        </ul>
                                    </div>

                                    <div className="about-copy-list-wrap">
                                        <h4 className="about-copy-subhead" data-anim="splitLines">SPECIALISMS</h4>

                                        <ul className="about-copy-list" data-anim="lazyChild">
                                            <li>Responsive Development</li>
                                            <li>Animation & Interaction</li>
                                            <li>Third-party integration</li>
                                            <li>Custom functionality</li>
                                        </ul>
                                    </div>

                                </div>

                            </div>



                            <div className="about-row">
                                <h3 className="about-title" data-anim="splitLines">
                                    BACKGROUND
                                </h3>

                                <div className="about-div" data-anim="divider"></div>

                                <div className="about-copy-wrap">
                                    <p className="about-copy" data-anim="splitLines">
                                        I'm a freelance Website Developer working under RE Design, specialising in bespoke websites that balance clean design, considered functionality and engaging interactions.
                                    </p>

                                    <p className="about-copy" data-anim="splitLines">
                                        I enjoy taking static designs and bringing them to life, finding solutions to technical challenges and making sure every detail works as it should.
                                    </p>
                                </div>

                            </div>

                            <div className="about-row">
                                <h3 className="about-title" data-anim="splitLines">
                                    EXPERTISE
                                </h3>

                                <div className="about-div" data-anim="divider"></div>

                                <div className="about-copy-wrap">
                                    <p className="about-copy" data-anim="splitLines">
                                        With a background in Graphic Design and UX, I bring an understanding of both the visual and functional sides of a website.
                                    </p>

                                    <p className="about-copy" data-anim="splitLines">
                                        My work goes beyond translating designs into code. From responsive layouts and custom interactions to complex third-party integrations, I enjoy finding the right approach to make each project work.
                                    </p>
                                </div>

                            </div>


                            <div className="about-row">
                                <h3 className="about-title" data-anim="splitLines">
                                    ROBBIE
                                </h3>

                                <div className="about-div" data-anim="divider"></div>

                                <div className="about-copy-wrap">
                                    <p className="about-copy" data-anim="splitLines">
                                        I started working in website development shortly after graduating from university, initially through contract work before establishing my own freelance practice.
                                    </p>

                                    <p className="about-copy" data-anim="splitLines">
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