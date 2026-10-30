import { Brandmark } from "../brand/brandmark";
import { createPortal } from "react-dom";




export function TransitionMask() {

    return createPortal(
        <>
            <div className="global-transition-mask">
                <div className="mask-wrap">
                <div className="wrapper full-h">
                    <div className="content align-centre align-centre justify-centre">
                        <div className="mask-inner">
                            <Brandmark></Brandmark>
                            <p className="mask-text">RE DESIGN</p>

                        </div>

                    </div>
                </div>
                </div>
            </div>

            <div className="global-transition-mask-under">
            </div>
        </>,
        document.body
    );
}