import { Button } from "./button";



export function ButtonPrimary(
    {
        transitionKey = "swipe-between",
        text = "Button Text",
        link = ""
     }:
    {
        transitionKey?: string;
        text?: string;
        link?: string;
    }
) {


    return (

        <Button
        anim="colourChange,iconSwap,colourChange,splitSwap"

        bgColour="var(--colour-dark)"
        bgColourTarget="var(--colour-light)"
        textColour="var(--colour-light)"
        textColourTarget="var(--colour-dark)"

        borderColour="var(--colour-dark)"
        
        rotateIcon={180}
        
        transitionKey={transitionKey}

        link={link}

        text={text}
        >

        </Button>
    )
}