import React from "react"
import { Link } from "gatsby"
// import Helmet from 'react-helmet'
// import Layout from '../components/layout'
import AOS from "aos"
import "aos/dist/aos.css"

// import pic08 from '../assets/images/pic08.jpg'

const Contact = (props) => {
    AOS.init()

    return (
        <div>
            <h1> Scroll down! </h1>
            <section style={{ height: "1200px" }} />
            <h1>Scroll back up and then down again to see if the animation will work
                again. Inspect the animated elements to see the classes change on
                scroll.</h1>
            <section style={{ height: "1200px" }} />
        </div>
    )
}

export default Contact

{/* <p data-aos="fade-zoom-in">tgjzhkuzui</p> */}
// componentDidMount() {
//     const AOS = require('aos');
//     this.aos = AOS
//     this.aos.init()
// }

// componentDidUpdate() {
//     this.aos.refresh()
// }
