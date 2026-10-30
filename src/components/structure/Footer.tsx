import { Brandmark } from '../brand/brandmark'
import './footer.scss'


export function Footer() {


    return (


        <>
        
            <footer className="footer">
                <div className="wrapper full-h">
                    <div className='grid'>

                        <div className='logo-footer-wrap'>
                            <div className='logo-footer-wrap-icon'>
                                <Brandmark type='lightKnockout'></Brandmark>

                            </div>
                            {/* <p className='logo-footer-text'>RE: Design</p> */}
                        </div>

                        <div className='footer-links'>
                            <p className='footer-link'>Footer Link</p>
                        </div>
                    </div>
                </div>
            </footer>
        
        </>
    )
}