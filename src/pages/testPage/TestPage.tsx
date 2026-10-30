import { PageStructure } from "../../components/structure/PageStructure";
import { Button } from "../../components/button/button";

export function TestPage() {


    return (

        <PageStructure bgClass="dark">
            <section className="section dark min-100 top">
                <div className="wrapper">
                    <div className="content vertical">
                        <h1 style={{color: "var(--colour-light)", marginBottom: "2rem"}}>Test Page</h1>
                        <Button link="/" text="Test Transition" transitionKey="swipe-between" anim="splitSwap,iconSwap,colourChange" enableIcon={false} enableLargeIcon={true} rotateIcon={180} rotateLargeIcon={180}/>
                    </div>
                </div>
            </section>
        </PageStructure>
    )
}