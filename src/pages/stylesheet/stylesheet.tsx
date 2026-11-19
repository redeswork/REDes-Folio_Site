import { PageStructure } from "../../components/structure/PageStructure";
import { Section } from "../../components/structure/Section";



export function Stylesheet() {



    return(

        <>
            <PageStructure>
                <Section classes="light min-100 top">

                    <div className="content vertical rem-1 margin-2">
                        <p className="eyebrow">Page Heading</p>
                        <h1 className="page-heading">Website Folio</h1>
                    </div>

                    <div className="content vertical rem-1 margin-2">
                        <p className="eyebrow">Section Heading</p>
                        <h2 className="section-heading">Projects</h2>
                    </div>

                    <div className="content vertical rem-1 margin-2">
                        <p className="eyebrow">Sub Heading</p>
                        <h3 className="sub-heading">A selection of portfolio projects.</h3>
                    </div>

                    <div className="content vertical rem-1 margin-2">
                        <p className="eyebrow">Copy Large</p>
                        <p className="copy large">This is an example of some copy that may appear on this website. Describing things and augmenting titles.</p>
                    </div>

                    <div className="content vertical rem-1 margin-2">
                        <p className="eyebrow">Copy</p>
                        <p className="copy">This is an example of some copy that may appear on this website. Describing things and augmenting titles.</p>
                    </div>

                    <div className="content vertical rem-1 margin-2">
                        <p className="eyebrow">Copy Small</p>
                        <p className="copy small">This is an example of some copy that may appear on this website. Describing things and augmenting titles.</p>
                    </div>

                </Section>
            </PageStructure>
        </>
    )
}