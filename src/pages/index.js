import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"

import "../sass/main.scss"
import sunset from "../img/sun.svg"
import palm from "../img/palm.png"

export default () => {
  return (
    <div className="base home">
      <div className="container">
        <Nav />
        <img src={sunset} alt="sunset" class="centered-img" />
        <div className="flex">
          <h3 className="hello" dataText="Hello">
            <span className="main-text skew">Hello</span>
            <span className="back-text glitch">Hello</span>
          </h3>
          <div className="black-box">
            <p>
              I’m a UX/UI designer and front-end 
            </p>
            <p>developper based in
              Switzerland.</p>
          </div>
        </div>
        <img src={palm} alt="palm tree" class="palm palm-left" />
        <img src={palm} alt="palm tree" class="palm palm-right" />
      </div>
    </div>
  )
}
