import { Button } from "./button";
import type { ButtonAttributes } from "./button";

export function ButtonCta(
    {
        transitionKey = "swipe-between",
        text = "Button Text",
        link = "",
        newTab = false,
        classes = "",
        textSize = "var(--text-p)",
        attributes = {},
     }:
    {
        transitionKey?: string;
        text?: string;
        link?: string;
        newTab?: boolean;
        classes?: string;
        textSize?: string;
        attributes?: ButtonAttributes;
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

        textSize={textSize}

        attributes={attributes}
        >

        </Button>
    )
}