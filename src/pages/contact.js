import React from "react"
import Nav from "../components/Nav"
// import Helmet from 'react-helmet'
import Fade from 'react-reveal/Fade';

const Contact = (props) => {
    return (
        <div className="contact__bloc">
            <Nav 
            isActive="contact"
            />
            <section className="contact__content">
            <Fade left ssrFadeout>
            <h2 className="about__content--title">What I can do for you</h2>
            </Fade>
                
                <Fade right ssrFadeout>
                <p>UX? UX? Front-end? React? Vue? Freelancing? Taking your startup from zero to hero? Remote job? Giving classes? Yes to all.</p>
                </Fade>
                
                    <Fade right ssrFadeout>
                    <p>Simply message me and I should quickly reply to you ;)</p>
                    </Fade>
                    
            </section>
            <section className="contact__form">
            <a href="mailto:adamanska@gmail.com?Subject=Hello">
            <Fade bottom ssrFadeout>
            
            <div class="contact__button">
        <div class="contact__buttonalt">CO<span class="blinklittle">N</span>TACT <span class="blinkless">M</span>E</div>
    </div>
    
            </Fade></a>

    
            </section>

        </div>
    )
}

export default Contact
