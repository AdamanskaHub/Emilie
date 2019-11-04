import React from "react"
import Fade from 'react-reveal/Fade';

const CV = props => (
    <section>
        <Fade bottom ssrFadeout>
        <p className="about__content--company">
            {props.company} <span className="about__content--op">{props.dates}</span>
        </p>
        </Fade>
        
        <Fade bottom ssrFadeout>
        <h3 className="about__content--position">{props.position}</h3>
        </Fade>
        
        <Fade bottom ssrFadeout>
        <p className="about__content--text">{props.content}</p>
        </Fade>
        
    </section>
)

export default CV
