import React from 'react'
import Careerheader from '../allcomponents/Career/Careerheader'
import Greater from '../allcomponents/Career/Greater'
import JoinUs from '../allcomponents/Career/JoinUs'
import WhyHaarmk from '../allcomponents/Career/WhyHaarmk'
import Footer from "../allcomponents/reusable_components/Footer"
import NewNavbar from '../allcomponents/reusable_components/NewNavbar'
import "./CareerPage.css"
import careevid from "../assets/careerji.mp4"
import Openings from '../allcomponents/Career/Openings'

const CareerPage = () => {
  return (
    <div>
      <div className="ca-video-container">
        <video autoPlay muted loop className="ca-career-video-background" >
          <source src={careevid} type="video/mp4" />
        </video>
        <div className="ca-header-content">
          <NewNavbar />
          <Careerheader />
        </div>
      </div>
      <JoinUs />
      {/* <Openings /> */}
      <WhyHaarmk />
      <Greater />
      <Footer />

    </div>
  )
}

export default CareerPage