import './WorkCard.scss'



export function WorkCard(
    {
        title = "Work Card",
        client = "Client name"
    }:
    {
        title?: string;
        client?: string;
    }
) {




    return(

        <>
        
            <div className="work-card">
                <div className='work-card-content'>

                    <div className='work-card-title-wrap'>
                        <h3 className='work-card-title'>{title}</h3>
                        <h4 className='work-card-client'>{client}</h4>
                    </div>
                </div>

            </div>
        
        </>
    )
}