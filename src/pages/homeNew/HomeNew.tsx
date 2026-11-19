import './homeNew.scss'
import '../work/websites/websitetemplate.scss'

import { ButtonCta } from "../../components/button/buttonCta";
import { ButtonSecondary } from "../../components/button/buttonSecondary";
import { PageStructure } from "../../components/structure/PageStructure";
import { Section } from "../../components/structure/Section";
import { websiteProjects } from '../work/websites/projects/websiteData';
import { useMemo } from 'react';
import { WorkCard } from '../../components/cards/WorkCard';

export function HomeNew() {

    const randomProjects = useMemo(() => {
        return [...websiteProjects]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
    }, [websiteProjects, 3]);


    return (

        <>
        <PageStructure bgClass="light">

            {/* HERO */}
            <Section classes="top hero light" wrapperClasses="full-h">
                    <div className="grid">

                    <div className='home-hero-heading-wrap'>
                        <h1 className="home-hero-heading" data-fitty>RE: Design</h1>
                    </div>

                    <div className='home-hero-content-wrap'>
                        <h2 className="sub-heading">Freelance Web Developer</h2>
                        <div className='home-hero-copy-wrap'>
                            <p className='copy'>Building clean, responsive and engaging websites, primarily for organisations and businesses in the arts and creative sectors. With a focus on functionality, interaction and the finer details.</p>
                        </div>
                        <div className="home-hero-button-wrap">
                            <ButtonCta text="See Work" link="/work" transitionKey="vertical-mask-under"></ButtonCta>
                            <ButtonSecondary text="Get in Touch" transitionKey='vertical-mask-under'></ButtonSecondary>
                        </div>
                    </div>

                </div>
            </Section>

            {/* ABOUT */}
            <Section classes='light'>
                <div className='grid'>
                    <h2 className='section-heading' data-anim="splitWords">ABOUT</h2>
                    <div className='home-section-copy-wrap'>
                        <p className='copy' data-anim="splitLines">I'm an independent Website Developer. I work across design and development, bringing ideas to life through bespoke websites that balance visual clarity, thoughtful functionality and technical detail.
                        </p>
                        <p className='copy' data-anim="splitLines">With a particular interest in the arts and creative sectors, I enjoy working on projects that offer something a little different.</p>
                    </div>
                </div>
            </Section>

            {/* WORK */}
            <Section classes='light'>
                <div className='grid'>
                    <h2 className='section-heading' data-anim="splitWords">WORK</h2>
                    <div className='home-section-copy-wrap'>
                        <p className='copy' data-anim="splitLines">A collection of projects spanning different industries, disciplines and challenges. Each brings its own requirements, from considered visual design to more complex functionality and integrations.
                        </p>
                    </div>
                </div>

                <div className='more-projects-wrapper' data-swiper-wrapper data-anim="lazyLoad" style={{marginTop: "4rem"}}>

                    {randomProjects.map((moreProject) => (
                            <div 
                            key={moreProject.title}
                            className=''
                            aria-label={`View ${moreProject.title} website project`}
                            data-swiper-slide>
                                <WorkCard
                                    key={moreProject.slug}
                                    title={moreProject.title}
                                    client={moreProject.clientName}
                                    slug={moreProject.slug}
                                    img={moreProject.thumbnailUrl}
                                    bgCol={moreProject.colour}
                                    dateText={moreProject.dateYear}>
                                </WorkCard>

                            </div>


                    ))}

                </div>
                
                
            
            
            </Section>


        </PageStructure>
        </>
    )
}