import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
import CV from "../components/cv"
// import Helmet from 'react-helmet'

import palm from "../img/palm.png"

const About = () => (
  <>
    {/* <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet> */}

    <div className="about__bloc">
      <Nav />

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
        <p className="about__content--company">
          Company <span className="about__content--op">2019-2021</span>
        </p>
        <h3 className="about__content--position">Senior UX/UI designer</h3>
        <p className="about__content--text">
          XXX is a web design agency based in Bogotá whose primary mission is to
          be the digital partner of companies. I helped the company execute two
          contracts landed with high profile companies. I’ve led a 4 person team
          composed of frontend and backend engineers. Currently, I’m focused on
          learning, applying and developing new technologies that can enhance
          our apps performance and development worflow.
        </p>

        <p className="about__content--company">
          Company <span className="about__content--op">2019-2021</span>
        </p>
        <h3 className="about__content--position">Senior UX/UI designer</h3>
        <p className="about__content--text">
          XXX is a web design agency based in Bogotá whose primary mission is to
          be the digital partner of companies. I helped the company execute two
          contracts landed with high profile companies. I’ve led a 4 person team
          composed of frontend and backend engineers. Currently, I’m focused on
          learning, applying and developing new technologies that can enhance
          our apps performance and development worflow.
        </p>

        <CV company="vzugzuzgu" />
        
      </div>

      {/* <img src={palm} alt="palm tree" className="palm palm__left" /> */}
    </div>
  </>
)

export default About
