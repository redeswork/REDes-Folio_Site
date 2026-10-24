// import { PageStructure } from "../../components/pageStructure";

import { Button } from "../../components/button";

export function HomeNew() {


    return (

        // <PageStructure>
            <section className="section dark min-100">
                <div className="wrapper">
                    <div className="content vertical">
                        <h1 style={{color: "var(--colour-light)"}}>This is a different page!!</h1>
                        <Button link="/" transitionKey="swipe-between" anim="splitSwap,iconSwap,colourChange" enableLargeIcon={true} rotateIcon={180} rotateLargeIcon={180}/>
                    </div>
                </div>
            </section>
        // {/* </PageStructure> */}
    )
}