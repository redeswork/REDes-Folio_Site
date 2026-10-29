import { Button } from "./button";



export function ButtonCta(
    {
        transitionKey = "swipe-between",
        text = "Button Text"
     }:
    {
        transitionKey?: string;
        text?: string;
    }
) {


    return (

        <Button
        anim="colourChange,iconSwap,colourChange,splitSwap"

        bgColour="var(--colour-cta)"
        bgColourTarget="var(--colour-cta-mid)"
        textColour="var(--colour-light)"
        textColourTarget="var(--colour-light)"

        borderColour="var(--colour-cta)"
        borderColourChange="var(--colour-cta-mid)"

        rotateIcon={180}

        textWeightChange="900"
        
        transitionKey={transitionKey}

        text={text}
        >

        </Button>
    )
}