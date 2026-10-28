// import { PageStructure } from "../../components/pageStructure";

import { Button } from "../../components/button";
import { CardGrid } from "../../components/cards/CardGrid";
import { HeaderBlock } from "../../components/structure/Header";
import { HeroHeader } from "../../components/structure/HeroHeader";
import { Section } from "../../components/structure/Section";

export function HomeNew() {


    return (

        // <PageStructure>
        <>
            <div className="page-content">
                <section className="section dark hero">
                    <div className="wrapper full-h">


                        {/* HERO LOCKUP */}
                        <div className="content vertical align-centre rem-1">

                            <h1
                            className="hero-heading"
                            style={{color: "var(--colour-light)"}}>
                                RE Design
                            </h1>

                            <h2 style={{color: "var(--colour-light)"}}> Webflow Developer </h2>

                            <p style={{}}>Building bespoke websites catering to live experiences.</p>

                            <Button link="/" text="Test Transition" transitionKey="swipe-between" anim="splitSwap,iconSwap,colourChange" enableIcon={false} enableLargeIcon={true} rotateIcon={180} rotateLargeIcon={180}/>

                        </div>
                    
                    </div>
                </section>

                <Section classes="dark hero" wrapperClasses="full-h">

                    <HeroHeader></HeroHeader>

                </Section>

                <Section classes="dark">
                    <div className="content vertical">

                        <HeaderBlock direction="horizontal"></HeaderBlock>

                    </div>
                </Section>

                <Section classes="dark">

                    <CardGrid></CardGrid>
                    
                </Section>
            </div>
            <div className="page-bg dark"></div>
        </>
    )
}