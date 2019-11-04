import React, { Component } from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
// import Helmet from 'react-helmet'
// import Layout from '../components/layout'
import AOS from "aos"
import "aos/dist/aos.css"

import "../sass/main.scss"
import gone from "../img/gone.svg"
import drinko from "../img/drinko-big.png"
import ucheck from "../img/ucheck.png"
import kid from "../img/kid.jpg"

const Work = () => {
  AOS.init({duration:1200})
  return (
    <div className="base work">
      <Nav  isActive="work"/>
      {/* ===== Bg ===== */}
      <div className="fixed centered-img ">
        <img alt="decorative lines" class="pentagon big-pentagon" src={gone} />
      </div>
      <div className="centered-img small-img">
        <img
          alt="decorative lines"
          class="pentagon small-pentagon"
          src={gone}
        />
      </div>
      {/* ===== Col ===== */}
      <div className="work--display">

        <section className="work__box">
          <div className="work__box--text">
            <h2 data-aos="fade-up">Bar management dashboard</h2>
            <p className="work__box--text-op"  data-aos="fade-up">Front-end with React &amp; design concept to final design</p>
            <p data-aos="fade-up">
              A challenging project of a dashboard for bar managers, personel and suppliers. The website also has a companion app.
            </p>
            <p data-aos="fade-up">I started with the idea, turned it into paper wireframes. Then I created the mockups for the responsive website. </p>
            <p data-aos="fade-up">The whole project was in React. I worked on the front-end with a partner working on the back-end mostly.</p>
          </div>
          <div className="work__box--img"  data-aos="fade-up">
            <img alt="Bar management dashboard" src={drinko}/>
          </div>
        </section>

        <div className="work__box">
        
          <div className="work__box--text">
            <h2 data-aos="fade-up">Social website about fake news</h2>
            <p className="work__box--text-op" data-aos="fade-up">Front-end with React/Redux, from idea to live webapp</p>
            <p data-aos="fade-up"> A social platform to fight fake news. The project won Google DNI.</p>
            <p data-aos="fade-up">This project as well started from a concept and went through wireframing, user testing (in person), mockups and multiple iterations of all of that. </p>
            <p data-aos="fade-up">The whole project was in React. It was my first React project and I learned a lot and loved it. I worked on the front-end with a colleague working on the back-end mostly.</p>
          </div>
          <div className="work__box--img" data-aos="fade-up">
            <img alt="Ucheck" src={ucheck} 
            // className='reversed-shadow'
            />
          </div>
          
        </div>

        <div className="work__box">
            <div className="work__box--text">
            <h2 data-aos="fade-up">Mobility analysis dashboard</h2>
            <p className="work__box--text-op" data-aos="fade-up">Front-end with React, from idea to live webapp</p>
            <p data-aos="fade-up"> A mobility analysis dashboard to help companies to see the flow of people through a geographic area.</p>
            <p data-aos="fade-up">This project was done from scratch. I did UX, UI and development.</p>
            <p data-aos="fade-up">Another project in React. A nice challenge.</p>
          </div>
          <div className="work__box--img" data-aos="fade-up">
            <img alt="Ucheck" src={kid} 
            // className='reversed-shadow'
            />
          </div>
          
        </div>

        

      </div>
    </div>
  )
}

export default Work

{
  /* <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet> */
}
