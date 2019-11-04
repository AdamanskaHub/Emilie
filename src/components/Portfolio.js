import React from "react"

import "../sass/main.scss"

const Portfolio = props => (
    <section className="work__box">
        <div className="work__box--text">
            <h2 data-aos="fade-up">{props.title}</h2>
            <p className="work__box--text-op" data-aos="fade-up">{props.op}</p>
            <p data-aos="fade-up">
                {props.para1}
            </p>
            <p data-aos="fade-up">{props.para2}</p>
            <p data-aos="fade-up">{props.para3}</p>
        </div>
        <div className="work__box--img" data-aos="fade-up">
            <img alt="Bar management dashboard" src={props.img} />
        </div>
    </section>
)

export default Portfolio
