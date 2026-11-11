import { Fragment } from "react/jsx-runtime";
import { PageStructure } from "../../../components/structure/PageStructure";
import { websiteProjects } from "./projects/websiteData";

import './websiteWheel.scss'



export function WebsitesWheel() {


    return (


        <>
        <PageStructure
        data-page-wrap
        data-anim-snap="cardShuffleSnap"
        includeFooter={false}
        >
            <div className="wrapper full-h">



                <div className="snap-card-wrapper">

                    {websiteProjects.map((project) => (

                        <Fragment key={project.title}>

                            <div className="snap-card-shuffle" data-shuffle-slide>

                                <div className="snap-card-shuffle-content">
                                    <h3 className="snap-card-shuffle-title">
                                        {project.title}
                                    </h3>
                                    <h4 className="snap-card-shuffle-client">
                                        {project.clientName}
                                    </h4>
                                </div>

                                <div className="snap-card-shuffle-bg">
                                    <img src={project.thumbnailUrl} className="snap-card-shuffle-img"></img>
                                </div>
                            </div>

                        </Fragment>
                    ))}

                </div>

            </div>



        </PageStructure>
        </>
    )
}