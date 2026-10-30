// import { PageStructure } from "../../components/pageStructure";

import { ButtonCta } from "../../components/button/buttonCta";
import { ButtonSecondary } from "../../components/button/buttonSecondary";
import { HeroHeader } from "../../components/structure/headers/HeroHeader";
import { PageStructure } from "../../components/structure/PageStructure";
import { Section } from "../../components/structure/Section";

export function HomeNew() {


    return (

        <>
        <PageStructure bgClass="light">
            <Section classes="top hero light" wrapperClasses="full-h">
                <HeroHeader
                heroHeading="RE: DESIGN"
                heroSubHeading="Freelance Website Developer"
                heroCopy=" Bespoke websites for theatre and entertainment businesses."
                variant="dark"
                breadcrumb={false}
                >

                    <div className="button-wrap">
                        <ButtonCta text="See Work" link="/work" transitionKey="mask-1"></ButtonCta>
                        <ButtonSecondary text="Get in Touch"></ButtonSecondary>
                    </div>

                </HeroHeader>


            </Section>
        </PageStructure>
        </>
    )
}