import './websitetemplate.scss'

import { Link, useParams } from "react-router";
import { websiteProjects } from "./projects/websiteData";
import { Section } from "../../../components/structure/Section";
import { Breadcrumbs } from '../../../function/createBreadcrubs';
import { Footer } from '../../../components/structure/Footer';

export function WebsiteProject() {
    const { slug } = useParams();

    const project = websiteProjects.find(
        (project) => project.slug === slug
    );

    const moreProjects = websiteProjects
        .filter((item) => item.slug !== slug)
        .slice(0, 3);


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


                                <div className='project-details-wrap'>
                                    <div className='project-detail-wrap'>
                                        <h2 className='project-detail-heading'>Client:</h2>
                                        <h3 className='project-detail-text'>{project.clientName}</h3>
                                    </div>
                                    <div className='project-detail-wrap'>
                                        <h2 className='project-detail-heading'>Date:</h2>
                                        <h3 className='project-detail-text'>{project.dateText}</h3>
                                    </div>
                                </div>
                            </div>

                            <p className='project-desc'>{project.description}</p>

                            <div className='project-img-wrap' data-anim-flip="source-container">
                                <p className='flip-identifier'>{project.title}</p>
                                <img data-anim-flip="flip-item" className="work-card-bg-img flip-destination-state" src={project.thumbnailUrl} style={{backgroundColor: project.colour}}></img>
                            </div>
                        </div>


                        
                        
                    </>
                    
                )}


            </Section>

            <Section classes='light no-top-padding'>
                <h2 className='more-projects-label'>More Projects</h2>
                <div
                className='more-projects-swiper'
                data-swiper
                data-swiper-desktop="false"
                data-swiper-tablet="true"
                data-swiper-mobile="true"
                data-swiper-space-between="24"
                >
                    <div className='more-projects-wrapper' data-swiper-wrapper>

                        {moreProjects.map((moreProject) => (
                            <Link 
                            key={moreProject.title}
                            className='more-projects-card'
                            to={`/work/websites/${moreProject.slug}`}
                            aria-label={`View ${moreProject.title} website project`}
                            data-transition="flip-img-clone"
                            data-swiper-slide>

                                <div className='more-projects-img-wrap' data-anim-flip="target-container">
                                    <p className='flip-identifier'>{moreProject.title}</p>
                                    <img data-anim-flip="flip-item" className='work-card-bg-img' src={moreProject.thumbnailUrl} style={{backgroundColor: moreProject.colour}}></img>
                                </div>
                                <div className='more-projects-content'>
                                    <h3 className='more-projects-title'>{moreProject.title}</h3>
                                    <h4 className='more-projects-client'>{moreProject.clientName}</h4>
                                </div>

                            </Link>

                        ))}

                    </div>
                </div>
            </Section>

            </div>

            <div className="page-bg light"></div>

        </main>
        <Footer></Footer>
        </>
    );
}