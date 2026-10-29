import { Button } from "./button";



export function ButtonSecondary(
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

        bgColour="var(--colour-light-transparent)"
        bgColourTarget="var(--colour-light-mid)"
        textColour="var(--colour-dark)"
        textColourTarget="var(--colour-dark)"

        borderColour="var(--colour-dark)"

        rotateIcon={180}
        
        transitionKey={transitionKey}

        text={text}
        >

        </Button>
    )
}