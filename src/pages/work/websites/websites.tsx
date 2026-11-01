import { Section } from "../../../components/structure/Section"
import { HeroHeader } from "../../../components/structure/headers/HeroHeader"
import { websiteProjects } from "./projects/websiteData"
// import { Button } from "../../../components/button/button"
import { PageStructure } from "../../../components/structure/PageStructure"
import { WorkCard } from "../../../components/cards/WorkCard"


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

                    <div className="content vertical" style={{gridColumn: "1/13"}}>

                        {websiteProjects.map((project) => (
                            
                            <WorkCard key={project.slug} title={project.title} client={project.client} slug={project.slug} />
                        ))}

                    </div>
                </div>
            </Section>
        </PageStructure>
        </>
    )
}