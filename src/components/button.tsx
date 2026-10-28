import { icons } from "./icons/@iconMap";
import { Link } from "react-router";

export function Button({
    anim,
    animDuration = 0.6,
    animOrigin,
    animScale,
    splitType = "chars",

    handleClick,

    variant = "filled-border",
    text = "This is a button",
    textColour = "var(--colour-dark)",
    textColourTarget = "var(--colour-light)",
    textSize = "var(--text-p)",

    enableBg = true,
    bgColour = "var(--colour-light-mid)",
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
    link = "",
    transitionKey = "swipe-between",
}: {
    anim?: string;
    animDuration?: number;
    animOrigin?: string;
    animScale?: number;
    splitType?: string;

    variant?: string;

    handleClick?: () => void;

    text?: string;
    textColour?: string;
    textColourTarget?: string;
    textSize?: string;

    enableBg?: boolean;
    bgColour?: string;
    bgColourTarget?: string;
    enableIcon?: boolean;
    iconSize?: string;
    iconColour?: string;
    icon?: keyof typeof icons;
    rotateIcon?: number;
    enableLargeIcon?: boolean;
    largeIconSize?: string;
    largeIconColour?: string;
    largeIconColourTarget?: string;
    largeIcon?: keyof typeof icons;
    rotateLargeIcon?: number;
    largeIconBgColour?: string;
    largeIconBgColourTarget?: string;
    enableDot?: boolean;
    dotColour?: string;
    link?: string;
    transitionKey?: string;
}) {
    const Icon = icons[icon];
    const LargeIcon = icons[largeIcon];




    return (
        <div
            className={`button ${variant === "underlined" ? "underlined" : ""}`}
            data-anim={anim}
            data-anim-duration={animDuration}
            data-anim-origin={animOrigin}
            data-anim-scale={animScale}
            data-split-type={splitType}
            data-textcolour={textColour}
            data-textcolourchange={textColourTarget}
            data-bgcolour={bgColour}
            data-bgcolourchange={bgColourTarget}
            data-iconcolour={iconColour}
            data-largeiconcolour={largeIconColour}
            data-largeiconcolourtarget={largeIconColourTarget}
            data-largeiconbgcolour={largeIconBgColour}
            data-largeiconbgcolourtarget={largeIconBgColourTarget}

            onClick={handleClick}
        >
            {/* LARGE ICON */}
            {enableLargeIcon && (
                <div
                    className="button-icon-wrap-large"
                    data-anim="largeiconwrap"
                    style={{ backgroundColor: largeIconBgColour }}
                >
                    <div
                        className="button-icon-div"
                        data-anim="iconwrapinner"
                        style={{
                            width: largeIconSize,
                            height: largeIconSize,
                        }}
                    >
                        <div className="button-icon" data-anim="largeicon">
                            <LargeIcon
                                colour={largeIconColour}
                                rotate={rotateLargeIcon}
                            />
                        </div>

                        <div
                            className="button-icon absolute"
                            data-anim="largeicon"
                        >
                            <LargeIcon
                                colour={largeIconColour}
                                rotate={rotateLargeIcon}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* DOT */}
            {enableDot && (
                <div
                    className="button-dot-wrap"
                    data-anim="dotwrap"
                >
                    <div
                        className="button-dot"
                        data-anim="buttondot"
                        style={{ backgroundColor: dotColour }}
                    />
                </div>
            )}

            {/* TEXT */}
            <div
                className="button-text-wrap"
                data-anim="textwrap"
                style={{fontSize: textSize}}
            >
                <p
                    className="button-text"
                    data-anim="buttontext"
                    style={{ color: textColour }}
                >
                    {text}
                </p>

                <p
                    className="button-text absolute"
                    data-anim="buttontext"
                    style={{ color: textColour }}
                >
                    {text}
                </p>
            </div>

            {/* BACKGROUND */}
            {enableBg && (
                <div
                    className="button-bg"
                    data-anim="buttonbg"
                    style={{ backgroundColor: bgColour }}
                />
            )}

            {/* ICON */}
            {enableIcon && (
                <div
                    className="button-icon-wrap-outer"
                    data-anim="iconwrap"
                >
                    <div className="button-icon-wrap">
                        <div
                            className="button-icon-div"
                            data-anim="iconwrapinner"
                            style={{
                                width: iconSize,
                                height: iconSize,
                            }}
                        >
                            <div
                                className="button-icon"
                                data-anim="icon"
                            >
                                <Icon
                                    colour={iconColour}
                                    rotate={rotateIcon}
                                />
                            </div>

                            <div
                                className="button-icon absolute"
                                data-anim="icon"
                            >
                                <Icon
                                    colour={iconColour}
                                    rotate={rotateIcon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* LINK */}

            {link && (

                <Link
                className="button-link"
                to={link}
                data-transition={transitionKey}
                />
            )}
        </div>
    );
}
