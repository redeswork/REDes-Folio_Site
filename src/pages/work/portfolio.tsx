import { Section } from "../../components/structure/Section"
import { HeroHeader } from "../../components/structure/headers/HeroHeader"
import { Button } from "../../components/button/button"
import { PageStructure } from "../../components/structure/PageStructure"



export function Work() {


    return (

        <>
        <PageStructure bgClass="light">
            <Section classes="light min-100 top">

                <HeroHeader
                variant="dark"
                heroHeading="Work"
                heroCopy="A selection of bespoke website design and development projects, from custom Webflow websites to responsive digital experiences for businesses, creative professionals and entertainment clients."
                ></HeroHeader>


                <div className="grid" style={{marginTop: "2rem"}}>

                        <div style={{gridColumn: "span 3"}}>
                            <Button text="Websites" link="/work/websites" transitionKey="venitian-vert" anim="colourChange" rotateIcon={180}/>
                        </div>
                </div>

            </Section>
        </PageStructure>
        </>

        
    )
}