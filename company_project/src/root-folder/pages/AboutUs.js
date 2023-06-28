import React from 'react'
import AboutTem1 from '../allcomponents/about/AboutTem1'
import AboutTem2 from '../allcomponents/about/AboutTem2'
import AboutTem3 from '../allcomponents/about/AboutTem3'
import Aboutheader from "../allcomponents/about/Aboutheader"
import Ourhistory from '../allcomponents/about/Ourhistory'
import Whatdrive from '../allcomponents/about/Whatdrive'
import Footer from "../allcomponents/reusable_components/Footer"
import NewNavbar from '../allcomponents/reusable_components/NewNavbar'
import abtvdo from "../assets/abtvdo.mp4"
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="abou-super-container">
      <div className="abt-video-container">
        <video autoPlay muted loop className="abt-video-background-ab" >
          <source src={abtvdo} type="video/mp4" />
        </video>
        <div className="abt-header-content">
          <NewNavbar />
          <Aboutheader />
        </div>
      </div>
      <AboutTem1 />
      <AboutTem2 />
      <Ourhistory />
      <Whatdrive />
      {/* <TeamMembers /> */}
      <AboutTem3 />
      <Footer />
    </div>
  )
}

export default AboutUs