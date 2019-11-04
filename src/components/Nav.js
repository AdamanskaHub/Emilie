import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
    <header className="nav">
        <div>
            <Link to="/" className="nav--left">
                <span>Emilie</span>
            </Link>
        </div>
        <div className="nav--flex">
            <Link to="/work" className="nav--item"
            // data-aos="fade-in"
            >
                <span>work</span>
            </Link>
            <Link to="/about" className="nav--item"
            // data-aos="fade-in"
            >
                <span>about</span>
            </Link>
            <Link to="/contact" className="nav--item"
            // data-aos="fade-in"
            >
                <span>contact</span>
            </Link>
        </div>
        
        
    </header>
)


export default Nav

// className={`nav--item  + ${props.isActive=="work" ? 'nav--is-active' : ''}`} 