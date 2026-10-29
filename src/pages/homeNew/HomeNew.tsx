// import { PageStructure } from "../../components/pageStructure";

import { ButtonCta } from "../../components/button/buttonCta";
// import { ButtonPrimary } from "../../components/button/buttonPrimary";
import { ButtonSecondary } from "../../components/button/buttonSecondary";
// import { CardGrid } from "../../components/cards/CardGrid";
// import { HeaderBlock } from "../../components/structure/headers/Header";
import { HeroHeader } from "../../components/structure/headers/HeroHeader";
import { Section } from "../../components/structure/Section";

export function HomeNew() {


    return (

        <>
            <Section classes="top hero light" wrapperClasses="full-h">
                <HeroHeader
                heroHeading="RE: DESIGN"
                heroSubHeading="Freelance Website Developer"
                heroCopy=" Bespoke websites for theatre and entertainment businesses."
                variant="dark"
                breadcrumb={false}
                >

                    <div className="button-wrap">
                        <ButtonCta text="See Work"></ButtonCta>
                        <ButtonSecondary text="Get in Touch"></ButtonSecondary>
                    </div>

                </HeroHeader>


            </Section>
        </>
    )
}