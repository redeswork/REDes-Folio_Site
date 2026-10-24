
import { icons } from "./icons/@iconMap"

export function Button({
    anim,
    animDuration = 0.6,
    animOrigin,

    splitType = "chars",

    text = "This is a button",
    textColour = "var(--colour-dark)",
    textColourTarget = "var(--colour-light)",

    enableBg = true,
    bgColour = "var(--colour-light)",
    bgColourTarget = "var(--colour-dark)",

    enableIcon = true,
    iconSize = "0.8em",
    iconColour = textColour,
    icon = "arrow",
    rotateIcon = 0,

    enableLargeIcon = false,
    largeIconSize = "0.8em",
    largeIconColour = "var(--colour-light)",
    largeIconColourTarget = "var(--colour-light)",
    largeIcon = "arrow",
    rotateLargeIcon = 0,

    largeIconBgColour = "var(--colour-dark)",
    largeIconBgColourTarget = "var(--colour-cta)",

    enableDot = false,
    dotColour = "var(--colour-cta)",

    
    link = "/",
    transitionKey}:
    {
        anim?: string,
        animDuration?: number,
        animOrigin?: string,

        splitType?: string,

        text?: string,
        textColour?: string,
        textColourTarget?: string,

        enableBg?: true,
        bgColour?: string,
        bgColourTarget?: string,

        enableIcon?: boolean,
        iconSize?: string,
        iconColour?: string,
        icon?: keyof typeof icons,
        rotateIcon?: number,

        enableLargeIcon?: boolean,
        largeIconSize?: string,
        largeIconColour?: string,
        largeIconColourTarget?: string,
        largeIcon?: keyof typeof icons,
        rotateLargeIcon?: number,

        largeIconBgColour?: string,
        largeIconBgColourTarget?: string,

        enableDot?: boolean,
        dotColour?: string,

        link?: string,
        transitionKey?: string}
    ) {

    const Icon = icons[icon]
    const LargeIcon = icons[largeIcon]

    return (

        <div
        className="button"

        data-anim={anim}
        data-anim-duration={animDuration}
        data-anim-origin={animOrigin}

        data-split-type={splitType}
        
        data-textColour={textColour}
        data-textColourChange={textColourTarget}

        data-bgColour={bgColour}
        data-bgColourChange={bgColourTarget}

        data-largeIconColour={largeIconColour}
        data-largeIconColourTarget={largeIconColourTarget}

        data-largeIconBgColour={largeIconBgColour}
        data-largeIconBgColourTarget={largeIconBgColourTarget}
        >

            {/* LARGE ICON */}

            {enableLargeIcon && (

            <div className="button-icon-wrap-large" data-anim="largeIconWrap" style={{backgroundColor: largeIconBgColour}}>

                <div className="button-icon-div" data-anim="iconWrapInner" style={{width: largeIconSize, height: largeIconSize}}>

                    <div className="button-icon" data-anim="largeIcon">
                        <LargeIcon colour={largeIconColour} rotate={rotateLargeIcon}/>
                    </div>
                    <div className="button-icon absolute" data-anim="largeIcon">
                        <LargeIcon colour={largeIconColour} rotate={rotateLargeIcon}/>
                    </div>

                </div>
            </div>
            )}


            {/* DOT */}

            {enableDot && (

            <div className="button-dot-wrap" data-anim="dotWrap">
                <div className="button-dot" data-anim="buttonDot" style={{backgroundColor: dotColour}}></div>
            </div>
            )}


            {/* TEXT */}

            <div className="button-text-wrap" data-anim="textWrap">
                <p className="button-text" data-anim="buttonText" style={{color:textColour}}>{text}</p>
                <p className="button-text absolute" data-anim="buttonText" style={{color:textColour}}>{text}</p>
            </div>


            {/* BACKGROUND */}

            {enableBg && (

                <div className="button-bg" data-anim="buttonBG" style={{backgroundColor: bgColour}}></div>
            )}


            {/* ICON */}

            {enableIcon && (

            <div className="button-icon-wrap-outer" data-anim="iconWrap">
                <div className="button-icon-wrap">
                    <div className="button-icon-div" data-anim="iconWrapInner" style={{width: iconSize, height: iconSize}}>

                        <div className="button-icon" data-anim="icon">
                            <Icon colour={iconColour} rotate={rotateIcon}/>
                        </div>
                        <div className="button-icon absolute" data-anim="icon">
                            <Icon colour={iconColour} rotate={rotateIcon}/>
                        </div>

                    </div>
                </div>
            </div>
        
            )}


            {/* LINK */}

            <a className="button-link" href={link} data-transition={transitionKey}></a>

            
        </div>
    )
}