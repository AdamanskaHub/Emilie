import React, { Component } from "react"
import Nav from "../components/Nav"

import "../sass/main.scss"
import gone from "../img/gone.svg"
// import drinko from "../img/drinko-big.png"
// import ucheck from "../img/ucheck.png"
// import kid from "../img/kid.jpg"

const Worktwo = () => {
  return (
    <div className="base work">
      <Nav 
      isActive="worktwo" 
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
        <img src="drinko" alt="drinko"/>

      </div>
    </div>
  )
}

export default Worktwo
