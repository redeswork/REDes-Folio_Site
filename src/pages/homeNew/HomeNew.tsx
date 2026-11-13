import './homeNew.scss'
import '../work/websites/websitetemplate.scss'

import { ButtonCta } from "../../components/button/buttonCta";
import { ButtonSecondary } from "../../components/button/buttonSecondary";
import { PageStructure } from "../../components/structure/PageStructure";
import { Section } from "../../components/structure/Section";
import { websiteProjects } from '../work/websites/projects/websiteData';
import { useMemo } from 'react';
import { Link } from 'react-router';

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
                        <h2 className="home-hero-subheading">Freelance Web Developer</h2>
                        <p className='home-hero-copy'>Building clean, responsive and engaging websites, primarily for organisations and businesses in the arts and creative sectors. With a focus on functionality, interaction and the finer details.</p>

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
                    <h2 className='home-section-heading' data-anim="splitWords">ABOUT</h2>
                    <div className='home-section-copy-wrap'>
                        <p className='home-section-copy' data-anim="splitLines">I'm an independent Website Developer. I work across design and development, bringing ideas to life through bespoke websites that balance visual clarity, thoughtful functionality and technical detail.
                        </p>
                        <p className='home-section-copy' data-anim="splitLines">With a particular interest in the arts and creative sectors, I enjoy working on projects that offer something a little different.</p>
                    </div>
                </div>
            </Section>

            {/* WORK */}
            <Section classes='light'>
                <div className='grid'>
                    <h2 className='home-section-heading' data-anim="splitWords">WORK</h2>
                    <div className='home-section-copy-wrap'>
                        <p className='home-section-copy' data-anim="splitLines">A collection of projects spanning different industries, disciplines and challenges. Each brings its own requirements, from considered visual design to more complex functionality and integrations.
                        </p>
                    </div>
                </div>

                <div className='more-projects-wrapper' data-swiper-wrapper data-anim="lazyLoad" style={{marginTop: "4rem"}}>

                    {randomProjects.map((moreProject) => (
                        <Link 
                        key={moreProject.title}
                        className='more-projects-card'
                        to={`/folio/${moreProject.slug}`}
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
                
                
            
            
            </Section>


        </PageStructure>
        </>
    )
}