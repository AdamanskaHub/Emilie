import React, { Component } from "react"
import Nav from "../components/Nav"
// import TweenMax from "gsap/all";
// import hover from "../hover"
// import * as THREE from 'three';
// import threeEntryPoint from './threejs/threeEntryPoint';

import "../sass/main.scss"
// import ucheck from "../img/ucheck.png"
// import kid from "../img/kid.jpg"

class Worktwo extends Component {

  // componentDidMount() {
  //   const scene = new THREE.Scene();
  //   //fov aspect(width/height) near far
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth/window.innerHeight,
  //     0.1, 1000 
  //     );
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);

  // }


  render() {
    return (
      <div className="base work">
        <Nav
          isActive="worktwo"
        />

{/* A N I M A T I O N  */}
<div className="container">
  <div className="head">
    <div className="eyer"></div>
    <div className="eyel"></div>
    <div className="nose"></div>
  </div>

  <div className="teeth">
    <div className="t-one"></div>
    <div className="t-two"></div>
    <div className="t-three"></div>
    <div className="t-three"></div>
    <div className="t-two"></div>
    <div className="t-one"></div>
  </div>

</div>

        {/* ===== Bg ===== */}
        {/* <div className="fixed-img">
        <img alt="decorative lines" class="pentagon big-pentagon" src={gone} />
      </div> 
      <div className="centered-img small-img">
        <img
          alt="decorative lines"
          class="pentagon small-pentagon"
          src={gone}
        />
      </div>*/}
        {/* ===== Col ===== */}
        <div className="worktwo__distortion">
          {/* <img src={drinko} alt="drinko"/> */}

          {/* ====== C A N V A S ======  */}
          {/* <div ref={ref => (this.mount = ref)} /> */}
        </div>
      </div>
    )
  }
}

export default Worktwo
