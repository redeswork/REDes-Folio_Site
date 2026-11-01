import { Brandmark } from "../brand/brandmark";

export function TransitionMask() {
    return (
        <>
            <div className="global-transition-mask" aria-hidden="true">
                <div className="mask-wrap">
                    <div className="wrapper full-h">
                        <div className="content align-centre align-centre justify-centre">
                            <div className="mask-inner">
                                <Brandmark type="lightKnockout" />
                                <p className="mask-text">RE DESIGN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="global-transition-mask-under" aria-hidden="true" />
        </>
    );
}
