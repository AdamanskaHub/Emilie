import React from 'react'
import { Link } from 'gatsby'

import '../sass/main.scss'

const Nav = () => (
    <header className="nav">
        <div>
            <Link to="/" className="nav--left">
                <span>Emilie</span>
            </Link>
        </div>
        <div>
            <Link to="/work" className="nav--item">
                <span>work</span>
            </Link>
            <Link to="/about" className="nav--item">
                <span>about</span>
            </Link>
            <Link to="/contact" className="nav--item">
                <span>contact</span>
            </Link>
        </div>
        
        
    </header>
)


export default Nav