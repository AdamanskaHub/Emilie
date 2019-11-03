import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
import CV from "../components/cv"
import AOS from "aos"
import "aos/dist/aos.css"
// import Helmet from 'react-helmet'

import trib from "../img/triangle-big.svg"
import tri1 from "../img/triangle1.svg"
import tri2 from "../img/triangle2.svg"
import tri3 from "../img/triangle3.svg"
import tri4 from "../img/triangle4.svg"
import tri5 from "../img/triangle5.svg"

const About = () => (
  <>
    {/* <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet> */}

    <div className="about__bloc">
      <Nav />

      <img src={tri1} alt="triangle" class="triangle triangle-1" />
      <img src={trib} alt="triangle" class="triangle triangle-big" />
      <img src={tri2} alt="triangle" class="triangle triangle-2" />
      <img src={tri3} alt="triangle" class="triangle triangle-3" />
      <img src={tri4} alt="triangle" class="triangle 
      triangle-4" />
      <img src={tri5} alt="triangle" class="triangle triangle-5" />

      <div className="about__content">
        <h2 className="about__content--title">Who I am</h2>
        <p>
          I've worked many years as a UX/UI designer in startups and big
          companies.
        </p>
        <p>
          I taught design too. I've done everything from user research to
          front-end development, as the sole designer or in a team.
        </p>
        <p>
          When coding I usually use React and Gatsby. I love seeing my code
          turning into an app/website.
        </p>
        <p>
          I'm at my best in interaction design but I love every bit of the
          process and can only rest once I know the experience will be enjoyable
          for the user.
        </p>
        <p>
          You want to do an app? A platform? A dashboard? I can help you, take
          your idea and make it into what it should be.
        </p>
      </div>

      <div className="about__cv">
        <h2 className="about__content--title">What I've done</h2>

        <CV 
        company="vzugzuzgu" 
        position="gfhjkljhg"
        dates="2012-2109"
        text="bjfkljhkle"
        />
        <CV 
        company="vzugzuzgu" 
        position="gfhjkljhg"
        dates="2012-2109"
        text="bjfkljhkle"
        />
        <CV 
        company="vzugzuzgu" 
        position="gfhjkljhg"
        dates="2012-2109"
        text="bjfkljhkle"
        />
        <CV 
        company="vzugzuzgu" 
        position="gfhjkljhg"
        dates="2012-2109"
        text="bjfkljhkle"
        />
        
      </div>

    </div>
  </>
)

export default About
