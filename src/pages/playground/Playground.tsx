import './playground.scss'



export function Playground() {


    return (

        <div className="redes-event-popup-wrap">

            <div className="redes-event-content">
                
                <div className="redes-event-close">
                    <img className="redes-event-close-icon" src="https://raw.githubusercontent.com/redeswork/REDes-Assets/refs/heads/main/icons/Arts%20Tickets/popup_close%20(CTA).png"></img>
                </div>

                <h3 className="redes-event-title">Fancy a drink on arrival?</h3>

                <p className="redes-event-copy">
                    Pre-order your welcome and interval drinks here!
                </p>

                <button className='redes-button'>
                    Order Your Drinks Now
                </button>
            </div>

        </div>
    )
}