import './navbar.scss'
import { Brandmark } from './brand/brandmark'
import { Link } from 'react-router'

export function Navbar() {
    return (
        <header className="nav">
            <div className="nav-wrap">
                <div className='nav-content'>
                    <div className='nav-brand'>
                        <Brandmark />
                        <span className="nav-brand-text">
                            RE: Design
                        </span>
                    </div>

                    <nav className='nav-links' aria-label="Main navigation">
                        <Link className='nav-link' to="/">
                            <span>Home</span>
                        </Link>
                        <Link className='nav-link' to="/work">
                            <span>Work</span>
                        </Link>
                    </nav>
                </div>
            </div>
            <div className='nav-bg'></div>
        </header>
    )
}
