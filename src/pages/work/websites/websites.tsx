import { Section } from "../../../components/structure/Section"
import { HeroHeader } from "../../../components/structure/headers/HeroHeader"
import { websiteProjects } from "./projects/websiteData"
import { Button } from "../../../components/button/button"
import { PageStructure } from "../../../components/structure/PageStructure"

export function Websites() {


    return (
        <>
        <PageStructure bgClass="light">
            <Section classes="light min-100 top">

                <HeroHeader
                variant="dark"
                heroHeading="Website Work"
                heroCopy="A selection of bespoke website design and development projects, from custom Webflow websites to responsive digital experiences for businesses, creative professionals and entertainment clients."
                ></HeroHeader>


                <div className="grid" style={{marginTop: "2rem"}}>

                    {websiteProjects.map((project) => (
                        <div style={{gridColumn: "span 3"}} key={project.title}>
                            <Button text={project.title} link={project.slug} anim="colourChange" rotateIcon={180}/>
                        </div>
                    ))}
                </div>
            </Section>
        </PageStructure>
        </>
    )
}