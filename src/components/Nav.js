import React from 'react'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade';

const Nav = (props) => (
    <header className="nav">
        <div>
            <Fade top ssrFadeout>
                <Link to="/" className="nav--left">
                    <span>Emilie</span>
                </Link>
            </Fade>

        </div>
        <div className="nav--flex">
            <Fade top ssrFadeout>
                <Link to="/work" className={`nav--item  + ${props.isActive=="work" ? 'nav--is-active' : ''}`}>
                    <span>work</span>
                </Link>
            </Fade>

            <Fade top ssrFadeout>
                <Link to="/about" className={`nav--item  + ${props.isActive=="about" ? 'nav--is-active' : ''}`}>
                    <span>about</span>
                </Link>
            </Fade>

            <Fade top ssrFadeout>
                <Link to="/contact" className={`nav--item  + ${props.isActive=="contact" ? 'nav--is-active' : ''}`} >
                    <span>contact</span>
                </Link>
            </Fade>

        </div>


    </header>
)


export default Nav

// className={`nav--item  + ${props.isActive=="work" ? 'nav--is-active' : ''}`} 