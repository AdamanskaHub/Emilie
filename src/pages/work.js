import React, { Component } from "react"
// import { Link } from "gatsby"
import Nav from "../components/Nav"
import Portfolio from "../components/Portfolio"
// import Helmet from 'react-helmet'

import "../sass/main.scss"
import gone from "../img/gone.svg"
import drinko from "../img/drinko-big.png"
import ucheck from "../img/ucheck.png"
import kid from "../img/kid.jpg"

const Work = () => {
  return (
    <div className="base work">
      <Nav 
      isActive="work" 
      />
      {/* ===== Bg ===== */}
      <div className="fixed-img">
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
        <Portfolio
          title="Bar management dashboard"
          op="Front-end with React &amp; design concept to final design"
          para1="A challenging project of a dashboard for bar managers, personel and suppliers. The website also has a companion app."
          para2="I started with the idea, turned it into paper wireframes. Then I created the mockups for the responsive website."
          para3="The whole project was in React. I worked on the front-end with a partner working on the back-end mostly."
          img={drinko}
        />
        <Portfolio
          title="Social website about fake news"
          op="Front-end with React/Redux, from idea to live webapp"
          para1="A social platform to fight fake news. The project won Google DNI."
          para2="This project as well started from a concept and went through wireframing, user testing (in person), mockups and multiple iterations of all of that."
          para3="The whole project was in React. It was my first React project and I learned a lot and loved it. I worked on the front-end with a colleague working on the back-end mostly."
          img={ucheck}
        />
        <Portfolio
          title="Mobility analysis dashboard"
          op="Front-end with React, from idea to live webapp"
          para1="A mobility analysis dashboard to help companies to see the flow of people through a geographic area."
          para2="This project was done from scratch. I did UX, UI and development."
          para3="Another project in React. A nice challenge."
          img={kid}
        />

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
