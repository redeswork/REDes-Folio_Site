import './websitetemplate.scss'

import { useParams } from "react-router";
import { websiteProjects } from "./projects/websiteData";
import { Section } from "../../../components/structure/Section";
import { Breadcrumbs } from '../../../function/createBreadcrubs';

export function WebsiteProject() {
    const { slug } = useParams();

    const project = websiteProjects.find(
        (project) => project.slug === slug
    );


    return (
        <>
        <main className="page-wrap" data-anim-flip="transition-page">

            <div className="page-content">


            <Section classes="no-bg min-100 top">

                {!project ? (

                    <h1>Project not found</h1>

                ) : (
                    <>

                        <div className='grid'>
                            <div className='breadcrumb-wrap'>
                                <Breadcrumbs variant="dark" includeHome={true}/>
                            </div>
                          
                            <div className='project-title-wrap'>
                                <h1 className='project-title'>{project.title}</h1>
                            </div>

                            <div className='project-img-wrap' data-anim-flip="source-container">
                                <p className='flip-identifier'>{project.title}</p>
                                <img data-anim-flip="flip-item" className="work-card-bg-img flip-destination-state" src={project.thumbnailUrl}></img>
                            </div>
                        </div>


                        
                        
                    </>
                    
                )}


            </Section>

            </div>

            <div className="page-bg light"></div>

        </main>
        </>
    );
}