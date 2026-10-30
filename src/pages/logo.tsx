import { Brandmark } from "../components/brand/brandmark";
import { Section } from "../components/structure/Section";



export function Logopage() {


    return(

        <Section classes="dark hero">
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent:"center", alignItems:"center"}}>
                <Brandmark type="lightKnockout"></Brandmark>
            </div>
        </Section>
    )
}