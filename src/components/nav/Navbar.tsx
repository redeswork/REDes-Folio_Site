import './navbar.scss'
import { Brandmark } from '../brand/brandmark'
import { Link } from 'react-router'
import { Navlink } from './navlink'
import { ButtonCta } from '../button/buttonCta'

export function Navbar() {
    return (
        <header className="nav">
            <div className="nav-wrap">
                <div className='nav-content'>
                    <Link className='nav-brand' to="/">
                        <Brandmark />
                        <span className="nav-brand-text">
                            RE: Design
                        </span>
                    </Link>

                    <nav className='nav-links' aria-label="Main navigation">
                        <Navlink text='Home Dev' link='/home-dev'></Navlink>
                        <Navlink text='Folio' link='/folio'></Navlink>
                        <Navlink text='About' link='/about'></Navlink>
                        <ButtonCta text='Get in Touch' link='/contact'></ButtonCta>
                    </nav>
                </div>
            </div>
            <div className='nav-bg'></div>
        </header>
    )
}
