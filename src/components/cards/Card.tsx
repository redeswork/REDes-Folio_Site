import { Button } from '../button'
import './cards.scss'
import { useNavigate } from 'react-router'
import { truncateText } from '../../function/truncateText'
import { useState } from 'react'
import { getWordCount } from '../../function/getWordCount'




export function Card(
    { id, title, img, description, link, button = true }:
    { id?: string, title?: string, img?: string, description?: string, link?: string, button?: boolean}
) {

    const topDescL = 12
    
    const [maxDesc, setMaxDesc] = useState(topDescL)

    const navigate = useNavigate() 

    const shortDesc = description ? truncateText(description, maxDesc) : "";

    const descWordCount = getWordCount(description ?? "")

    const [toggleDesc, setToggleDesc] = useState(false)

    function extendDesc() {

        if (!toggleDesc) {

            setMaxDesc(descWordCount)

        } else {

            setMaxDesc(topDescL)
        }
        
        console.log(toggleDesc, maxDesc)
        setToggleDesc(!toggleDesc);

    }
    

    return(

        <>
            <div className="card">

                <div>
                    <p className='card-copy small' style={{fontWeight: 700}}>{id}</p>
                </div>

                <div className='card-img-wrap'>
                    <img className="card-img" src={img}></img>
                </div>
            
                <div className='card-content'>
                
                    <h3 className='card-heading'>{title}</h3>

                    {description && (

                        <>
                            <p className='card-copy'>{shortDesc}</p>
                            <Button
                            handleClick={extendDesc}
                            link=''
                            anim="colourChange"
                            text={toggleDesc ? "Read less..." : "Read more..."}
                            textSize="var(--text-p-small)"
                            textColourTarget='var(--colour-light-mid)'
                            variant="underlined"
                            enableBg={false}
                            rotateIcon={180}/>
                        </>
                    )}

                    {link && button && (

                        <Button anim="colourChange,iconSwap" link={link} rotateIcon={180}/>
                    )}

                </div>


                {link && !button && (

                    <div className='card-link' onClick={() => navigate(link)}></div>
                )}
            
            </div>        
        </>
    
)
}