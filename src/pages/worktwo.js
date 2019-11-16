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
            <div className="smokeyl"></div>
            {/* <div className="smokeyl smokey-small"></div> */}
            <div className="smokey"></div>
            {/* <div className="smokey smokey-small"></div> */}
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="nose"></div>

            <div className="teeth">
              <div className="teeth-container">
              <div className="tooth t-one">
              </div>
              <div className="tooth t-two">
              </div>
              <div className="tooth t-three">
              </div>
              <div className="tooth t-four">
              </div>
              <div className="tooth t-five">
              </div>
              <div className="tooth t-six">
              </div>
              </div>
              
            </div>
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
