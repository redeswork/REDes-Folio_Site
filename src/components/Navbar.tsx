import './navbar.scss'
import { Brandmark } from './brand/brandmark'
import { Link } from 'react-router'


export function Navbar() {



    return (

        <>
            <header className="nav">
                <div className="nav-wrap">
                    <div className='nav-content'>

                        <div className='nav-brand'>
                            <Brandmark />
                            <text className="nav-brand-text">
                                RE: Design
                            </text>
                        </div>

                        <div className='nav-links'>
                            <Link className='nav-link' to={"/"}>
                            <text>Link</text>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='nav-bg'></div>
            </header>
        </>

    )
}