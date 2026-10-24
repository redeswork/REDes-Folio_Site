import { PageStructure } from "../../components/pageStructure";

import { Button } from "../../components/button";

export function HomeNew() {


    return (

        <PageStructure>
            <section className="section dark">
                <div className="content vertical">
                    <h1 style={{color: "var(--colour-light)"}}>This is a different page</h1>
                    <Button link="/" anim="splitSwap,iconSwap,colourChange" enableLargeIcon={true} rotateIcon={180} rotateLargeIcon={180}/>
                </div>
            </section>
        </PageStructure>
    )
}