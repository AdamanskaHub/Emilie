import React from "react"
import Fade from 'react-reveal/Fade'

const Portfolio = props => (
    <section className="work__box">
        <div className="work__box--text">
        <Fade bottom ssrFadeout>
        <h2>{props.title}</h2>
        </Fade>
            
            <Fade bottom ssrFadeout>
            <p className="work__box--text-op">{props.op}</p>
            </Fade>
            
            <Fade bottom ssrFadeout>
            <p>
                {props.para1}
            </p>
            </Fade>
            
            <Fade bottom ssrFadeout>
            <p>{props.para2}</p>
            </Fade>
            
            <Fade bottom ssrFadeout>
            <p>{props.para3}</p>
            </Fade>
            
        </div>
        <div className="work__box--img">
        <Fade right ssrFadeout>
        <img alt="Bar management dashboard" src={props.img} />
        </Fade>
            
        </div>
    </section>
)

export default Portfolio
