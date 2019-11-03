import React from "react"
import { Link } from "gatsby"

import "../sass/main.scss"

const CV = props => (
    <div data-aos="fade-up">
        <p className="about__content--company">
            {props.company} <span className="about__content--op">{props.dates}</span>
        </p>
        <h3 className="about__content--position">{props.position}</h3>
        <p className="about__content--text">{props.content}</p>
    </div>
)

export default CV
