import { Button } from "./button";



export function ButtonPrimary(
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

        bgColour="var(--colour-dark)"
        bgColourTarget="var(--colour-light)"
        textColour="var(--colour-light)"
        textColourTarget="var(--colour-dark)"

        borderColour="var(--colour-dark)"
        

        textWeightChange="500"

        rotateIcon={180}
        
        transitionKey={transitionKey}

        text={text}
        >

        </Button>
    )
}