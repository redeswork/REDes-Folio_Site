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

                    <nav className='nav-links' aria-label="Main navigation" data-menu-panel="menuPanelBasic1" data-anim="menuPanel" data-menu-breakpoint="tablet">
                        <Navlink text='Home Dev' link='/home-dev' data-menu-close></Navlink>
                        <Navlink text='Folio' link='/folio' data-menu-close></Navlink>
                        <Navlink text='About' link='/about' data-menu-close></Navlink>
                        <ButtonCta text='Get in Touch' link='/contact' classes='nav-button' data-menu-close></ButtonCta>
                    </nav>

                    <div className='menu-icon-wrap' data-menu-icon="menuAnim1" data-anim="menuIconWrap" data-menu-open data-menu-close>
                        <div className='menu-icon-dash' data-anim="menuIconDash"></div>
                        <div className='menu-icon-dash' data-anim="menuIconDash"></div>
                        <div className='menu-icon-dash' data-anim="menuIconDash"></div>
                    </div>
                </div>
            </div>
            <div className='nav-bg'></div>
        </header>
    )
}
