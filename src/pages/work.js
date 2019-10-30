import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
// import Helmet from 'react-helmet'
// import Layout from '../components/layout'

import "../sass/main.scss"
import gone from "../img/gone.svg"
import drinko from "../img/drinko-big.png"
import ucheck from "../img/ucheck.png"
import kid from "../img/kid.jpg"

const Work = () => {
  return (
    <div className="base work">
      <Nav />
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

        <div className="work__box">
          <div className="work__box--text">
            <h2>Bar management dashboard</h2>
            <p className="work__box--text-op">Front-end with React &amp; design concept to final design</p>
            <p>
              A challenging project of a dashboard for bar managers, personel and suppliers. The website also has a companion app.
            </p>
            <p>I started with the idea, turned it into paper wireframes. Then I created the mockups for the responsive website. </p>
            <p>The whole project was in React. I worked on the front-end with a partner working on the back-end mostly.</p>
          </div>
          <div className="work__box--img">
            <img alt="Bar management dashboard" src={drinko}/>
          </div>
        </div>

        <div className="work__box">
        
          <div className="work__box--text">
            <h2>Social website about fake news</h2>
            <p className="work__box--text-op">Front-end with React/Redux, from idea to live webapp</p>
            <p> A social platform to fight fake news. The project won Google DNI.</p>
            <p>This project as well started from a concept and went through wireframing, user testing (in person), mockups and multiple iterations of all of that. </p>
            <p>The whole project was in React. It was my first React project and I learned a lot and loved it. I worked on the front-end with a colleague working on the back-end mostly.</p>
          </div>
          <div className="work__box--img">
            <img alt="Ucheck" src={ucheck} 
            // className='reversed-shadow'
            />
          </div>
          
        </div>

        <div className="work__box">
            <div className="work__box--text">
            <h2>Mobility analysis dashboard</h2>
            <p className="work__box--text-op">Front-end with React, from idea to live webapp</p>
            <p> A mobility analysis dashboard to help companies to see the flow of people through a geographic area.</p>
            <p>This project was done from scratch. I did UX, UI and development.</p>
            <p>Another project in React. A nice challenge.</p>
          </div>
          <div className="work__box--img">
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
