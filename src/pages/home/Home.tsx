import './Home.scss'
// import { PageStructure } from '../../components/pageStructure'

import { Button } from '../../components/button'

export function HomePage() {


  return (


      <section className='section hero dark'>
        <div className='wrapper full-h'>

          <div className='card'>
            <div className='grid'>
              
              <div className='home-card header' style={{gridColumn: "1/13", gridRow: "1/2"}}>
                <h1 className='heading bold' data-fitty data-text="trim"
                style={{ whiteSpace:"nowrap", display:"inline-block", width: "auto", maxWidth: "100%"}}>
                  Site Coming Soon.
                </h1>
              </div>
              
              
              <div className='home-card brand' style={{fontSize: "var(--text-h3)"}}>
                <h1 className='heading bold'>
                  RE Design
                </h1>
              </div>

              <div className='home-card info'>

                <Button link="/home-new" text="Test Transition" anim="splitSwap,iconSwap,colourChange" enableLargeIcon={true} enableIcon={false} rotateIcon={180} rotateLargeIcon={180}/>
                
                <h3 className='heading bold' style={{marginTop: "2rem"}}>
                  Robbie Eason
                </h3>              
                <h3 className='heading'>
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



  )
}

