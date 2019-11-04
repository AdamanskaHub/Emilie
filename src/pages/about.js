import React from "react"
import Nav from "../components/Nav"
import CV from "../components/cv"
// import Helmet from 'react-helmet'
import Fade from 'react-reveal/Fade';

import trib from "../img/triangle-big.svg"
import tri1 from "../img/triangle1.svg"
import tri2 from "../img/triangle2.svg"
import tri3 from "../img/triangle3.svg"
import tri4 from "../img/triangle4.svg"
import tri5 from "../img/triangle5.svg"

const About = () => {
  return(
    <>
    <div className="about__bloc">
      <Nav  
      isActive="about"
      />
      <Fade bottom ssrFadeout>
      <img src={tri1} alt="triangle" className="triangle triangle-1" 
      />
      </Fade>
      <Fade bottom ssrFadeout>
      <img src={trib} alt="triangle" className="triangle triangle-big" 
      />
      </Fade>
      
      <Fade bottom ssrFadeout>
      <img src={tri2} alt="triangle" className="triangle triangle-2" 
      />
      </Fade>
      
      <Fade bottom ssrFadeout>
      <img src={tri3} alt="triangle" className="triangle triangle-3" 
      />
      </Fade>
      
      <Fade bottom ssrFadeout>
      <img src={tri4} alt="triangle" className="triangle 
      triangle-4" />
      </Fade>
      
      <Fade bottom ssrFadeout>
      <img src={tri5} alt="triangle" className="triangle triangle-5" 
      />
      </Fade>
      

      <section className="about__content">
      <Fade bottom ssrFadeout>
      <h2 className="about__content--title" >Who I am</h2>
      </Fade>
        
        <Fade bottom ssrFadeout>
        <p>
          I've worked many years as a UX/UI designer in startups and big
          companies.
        </p>
        </Fade>
        
        <Fade bottom ssrFadeout>
        <p >
          I taught design too. I've done everything from user research to
          front-end development, as the sole designer or in a team.
        </p>
        </Fade>
        
        <Fade bottom ssrFadeout>
        <p >
          When coding I usually use React and Gatsby. I love seeing my code
          turning into an app/website.
        </p>
        </Fade>
        
        <Fade bottom ssrFadeout>
        <p >
          I'm at my best in interaction design but I love every bit of the
          process and can only rest once I know the experience will be enjoyable
          for the user.
        </p>
        </Fade>
        
        <Fade bottom ssrFadeout>
        <p >
          You want to do an app? A platform? A dashboard? I can help you, take
          your idea and make it into what it should be.
        </p>
        </Fade>
        
      </section>

      <section className="about__cv">
      <Fade bottom ssrFadeout>
      <h2 className="about__content--title">What I've done</h2>
      </Fade>
        

        <CV 
        company="Pictet" 
        position="Senior UX/UI"
        dates="2019-2020"
        content="Complex apps are my destiny and once again I'm doing UX and UI for them (and I enjoy the complexity). I also develop (jekyll) the website and the design system's website, as well as adding to its content."
        />
        <CV 
        company="Freelancing" 
        position="Front-end developer & UX/UI designer"
        dates="2009-forever"
        content="I really enjoy the variety of projects that keep me sharp. Always ready for the next one!
        I worked on multiple projects over the years. At the beginning mostly UX/UI, then I started doing front-end too. Most of the jobs where for complex interfaces for specialised users."
        />
        <CV 
        company="Kido dynamics" 
        position="UX/UI & front-end developer"
        dates="2019-2019"
        content="Short but very interesting experience. Everything from scratch from design to front-end (the type of front-end that mixes with back-end). It was full React."
        />
        <CV 
        company="Precept" 
        position="UX/UI & junior front-end developer"
        dates="2017-2018"
        content="My first job as a front-end dev. I had a mentor and learned a lot. It was great and I loved it. I worked on React with Redux on two different webapps. First time coding the design system."
        />
        <CV 
        company="Swissquote" 
        position="Interaction designer"
        dates="2015-2016"
        content="I worked in a team of designers. I worked on very complex interfaces (a great challenge) and learned more about team work. I also learned quite a bit about the necessity of user testing. It was my first design system creation."
        />
        <CV 
        company="Nomades" 
        position="UX/UI course instructor"
        dates="2014-2016"
        content="I gave the intro to design and the material design courses to people in a bootcamp to become front-end developers. I love learning, but also teaching (the other side of the learning coin). It's always a pleasure to share my knowledge."
        />
        <CV 
        company="SuperAwesome" 
        position="UX/UI designer"
        dates="2013-2015"
        content="A great experience that made me grow as a designer. I was alone and was doing everything from UX to UI and working close with the dev team. I worked half of the time on a web and mostly mobile app for kids, and the other half on a b2b website."
        />
        <CV 
        company="Targetz" 
        position="Co-founder & UX/UI designer"
        dates="2012-2013"
        content="I co-founded this startup with previous work partners. My role was to take care of the design and help with the marketing. We didn't become multimillionaires, but it was still a lot of fun."
        />
        <Fade bottom ssrFadeout>
        <p className="about__extra">And more...</p>
        </Fade>
        
      </section>

    </div>
  </>
  )
  
}

export default About

{/* <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet> */}
