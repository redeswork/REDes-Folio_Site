import './Home.scss'
// import { PageStructure } from '../../components/pageStructure'

import { Button } from '../../components/button/button'

import { useEffect } from 'react';

export function HomePage() {

  useEffect(() => {
    console.log("I'm here and present in the DOM");
  }, []);

  return (

    <>
      <div className='page-content'>
        <section className='section hero dark top'>
          <div className='wrapper full-h'>

            <div className='card'>
              <div className='grid'>
                
                <div className='home-card header' style={{gridColumn: "1/13", gridRow: "1/2", color: "var(--colour-dark)"}}>
                  <h1 className='heading bold' data-fitty data-text="trim"
                  style={{ whiteSpace:"nowrap", display:"inline-block", width: "auto", maxWidth: "100%", color: "var(--colour-dark)"}}>
                    Site Coming Soon.
                  </h1>
                </div>
                
                
                <div className='home-card brand' style={{fontSize: "var(--text-h3)", color: "var(--colour-dark)"}}>
                  <h1 className='heading bold' style={{color: "var(--colour-dark)"}}>
                    RE Design
                  </h1>
                </div>

                <div className='home-card info'>

                  <Button link="/home-dev" text="/home-dev" transitionKey="swipe-between" anim="splitSwap,iconSwap,colourChange" enableLargeIcon={true} enableIcon={false} rotateIcon={180} rotateLargeIcon={180}/>
                  <div style={{height: "1rem"}}></div>
                  <Button link="/work" text="/work" transitionKey="swipe-between" anim="splitSwap,iconSwap,colourChange" enableLargeIcon={true} enableIcon={false} rotateIcon={180} rotateLargeIcon={180}/>
                  
                  <h3 className='heading bold' style={{marginTop: "2rem", color: "var(--colour-dark)"}}>
                    Robbie Eason
                  </h3>              
                  <h3 className='heading' style={{color: "var(--colour-dark)"}}>
                    Webflow Developer
                  </h3>
                  <div className="content vertical left-aligned height-auto" style={{paddingTop:"2rem"}}>
                    <a href="mailto:robbie@re-des.work@gmail.com">
                      <h3 className='heading'>
                        robbie@re-des.work
                      </h3>
                    </a>
                  </div>              
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <div className='page-bg dark'></div>
    </>

  )
}

