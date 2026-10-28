import { useParams } from "react-router";
import { websiteProjects } from "./projects/websiteData";
import { Section } from "../../../components/structure/Section";
import { HeroHeader } from "../../../components/structure/HeroHeader";

export function WebsiteProject() {
    const { slug } = useParams();

    const params = useParams();

    console.log("Params:", params);
    console.log("Projects:", websiteProjects);

    const project = websiteProjects.find(
        (project) => project.slug === slug
    );

    if (!project) {
        return <h1>Project not found</h1>;
    }

    return (
        <main className="website-project">

            <Section classes="light min-100">

                <HeroHeader
                variant="dark"
                heroHeading={project.title}
                heroCopy={project.client}
                ></HeroHeader>

            </Section>

        </main>
    );
}