import React from "react"
import Nav from "../components/Nav"
// import Helmet from 'react-helmet'
import AOS from "aos"
import "aos/dist/aos.css"

const Contact = (props) => {
    
    // if (process.isClient) {
        AOS.init({duration:1400})
    // }
    return (
        <div className="contact__bloc">
            <Nav 
            //  isActive="contact"
            />
            <section className="contact__content">
                <h2 className="about__content--title" data-aos="fade-left">What I can do for you</h2>
                <p data-aos="fade-right">
                    UX? UX? Front-end? React? Vue? Freelancing? Taking your startup from zero to hero? Remote job? Giving classes? Yes to all.</p>
                    <p data-aos="fade-right">
                    Simply message me and I should quickly reply to you ;)</p>
            </section>
            <section className="contact__form">
            <a href="mailto:adamanska@gmail.com?Subject=Hello">
    <div class="contact__button" data-aos="fade-up">
        <div class="contact__buttonalt">CO<span class="blinklittle">N</span>TACT <span class="blinkless">M</span>E</div>
    </div>
    </a>
            </section>

        </div>
    )
}

export default Contact
