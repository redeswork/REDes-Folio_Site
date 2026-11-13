import { Button } from "./button";



export function ButtonCta(
    {
        transitionKey = "swipe-between",
        text = "Button Text",
        link = "",
        newTab = false,
        classes = "",
     }:
    {
        transitionKey?: string;
        text?: string;
        link?: string;
        newTab?: boolean;
        classes?: string;
    }
) {


    return (

        <Button
        anim="colourChange,iconSwap,colourChange,splitSwap"

        bgColour="var(--colour-cta)"
        bgColourTarget="var(--colour-cta-mid)"
        textColour="var(--colour-light)"
        // textColourTarget="var(--colour-light)"

        borderColour="var(--colour-cta)"
        borderColourChange="var(--colour-cta-mid)"

        rotateIcon={180}
        
        transitionKey={transitionKey}

        link={link}

        text={text}

        newTab={newTab}

        classes={classes}
        >

        </Button>
    )
}