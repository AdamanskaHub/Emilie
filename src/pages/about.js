import React from 'react'
import { Link } from 'gatsby'
import Nav from "../components/nav"
// import Helmet from 'react-helmet'

import palm from "../img/palm.png"

const About = () => (
    <>
        {/* <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet> */}

<div className="bloc">
<Nav />
  <div className="title">
    <div className="title__txt">
      <b>
        <span>A</span>
        <span className="blink">B</span>
        <span>O</span>
        <span>U</span>
         {/* <span className="blinkless">T</span>  */}
        <span>T</span>
      </b>
    </div>
  </div>

  <div className="content">
    <p>
      I've worked many years as a UX/UI designer in startups and big companies.
      I taught design too. I've done everything from user research to
      front-end development, as the sole designer or in a team. I'm at my best
      in interaction design but I love everybit of the process and can only rest once I know the experience will be enjoyable for the user.
    </p>
    <p>
      You want to do an app? A platform? A dashboard? I can help you, take
      your idea and make it into what it should be.
    </p>
    
  </div>

  <div className="contact">
  <a href="mailto:adamanska@gmail.com?Subject=Hello">
    <div className="contact__button">
      <div className="contact__buttonalt">CO<span className="blinklittle">N</span>TACT</div>
    </div>
    </a>
  </div>

  <img src={palm} alt="palm tree" className="palm palm-left" />
<img src={palm} alt="palm tree" className="palm palm-right" />
  </div>

    </>
)

export default About