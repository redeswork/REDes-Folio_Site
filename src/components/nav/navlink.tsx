import { Button } from "../button/button";




export function Navlink(
    {
        text = "Nav Link",
        link = "#"
    }:
    {
        text?: string;
        link?: string;
    }
) {



    return (

        <Button
            classes="navlink"
            rotateIcon={180}
            bgColour="transparent"
            bgColourTarget="transparent"
            borderColour="transparent"
            anim="splitSwap,colourChange"
            textColour="var(--colour-dark)"
            textColourTarget="var(--colour-cta)"
            enableIcon={false}

            text={text}
            link={link}
        >
            
        </Button>
    )
}