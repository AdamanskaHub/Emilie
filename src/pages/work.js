import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
// import Helmet from 'react-helmet'
// import Layout from '../components/layout'

import "../sass/main.scss"
import gone from "../img/gone.svg"
import palm from "../img/palm.png"

const Work = () => {
  return (
    <div className="base work">
      <Nav />
      {/* ===== Bg ===== */}
      <div className="centered-img">
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
            <p>
              A challenging project of a dashboard for bar managers, personel
              and suppliers. The website also has a companion app.
            </p>
          </div>
          <div className="work__box--img">
            <img alt="Bar management dashboard" src={palm}/>
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
