import { Brandmark } from "../components/brand/brandmark";
import { Section } from "../components/structure/Section";



export function Logopage() {


    return(

        <Section classes="dark hero" wrapperClasses="full-h">
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent:"center", alignItems:"center"}}>
                <div style={{ width: "61.8%", height: "100%", display: "flex", justifyContent:"center", alignItems:"center"}}>

                <Brandmark width="100%" height="auto" type="lightKnockout"></Brandmark>
                </div>
            </div>
        </Section>
    )
}