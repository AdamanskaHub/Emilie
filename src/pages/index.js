import React from "react"
// import { Link } from "gatsby"
import Nav from "../components/Nav"
import AOS from "aos"
import "aos/dist/aos.css"

import "../sass/main.scss"
import sunset from "../img/sun.svg"
import palm from "../img/palm.png"

export default () => {
  // if (process.isClient) {
    AOS.init({duration:800})
  // }
  return (
    <div className="base home">
      <div className="container">
        <Nav />
        <img src={sunset} alt="sunset" class="centered-img"  />
        <div className="flex">
          <h3 className="hello" dataText="Hello">
            <span className="main-text skew">Hello</span>
            <span className="back-text glitch">Hello</span>
          </h3>
          <div className="black-box" data-aos="fade-up">
            <p data-aos="fade-up">
              I’m a UX/UI designer &amp; front-end 
            </p>
            <p data-aos="fade-up">developper based in
              Switzerland.</p>
          </div>
        </div>
        <img src={palm} alt="palm tree" class="palm palm-left" />
        <img src={palm} alt="palm tree" class="palm palm-right" />
      </div>
    </div>
  )
}
