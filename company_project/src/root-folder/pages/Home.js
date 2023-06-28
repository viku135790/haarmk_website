import React from 'react'
import DigitalSolu from '../allcomponents/home/DigitalSolu'
import Discover from '../allcomponents/home/Discover'
import Header from '../allcomponents/home/Header'
import Ourservice from '../allcomponents/home/Ourservice'
import WhoWeAre from '../allcomponents/home/WhoWeAre'
import AboutTemp1 from '../allcomponents/reusable_components/AboutTemp1'
import Footer from '../allcomponents/reusable_components/Footer'
import NewNavbar from '../allcomponents/reusable_components/NewNavbar'
import OurProducts from "../allcomponents/reusable_components/OurProducts"
import fff from "../assets/fff.mp4"
import whatsicon from "../images/whatsicon.png"
import "./Home.css"

const Home = () => {




  return (
    <div className='home-main-container'>
      <div className="video-container">
        <video autoPlay muted loop className="video-background" >
          <source src={fff} type="video/mp4" />
        </video>
        <div className="header-content">
          <NewNavbar />
          <Header />
        </div>
      </div>
      <Discover />
      <AboutTemp1 />
      <DigitalSolu />
      <Ourservice />
      <WhoWeAre />
      <OurProducts />
      <Footer />
      <div className="whatsapp-icon">
        <a href="https://api.whatsapp.com/send?phone=7741815031" target="_blank" rel="noopener noreferrer">
          <img src={whatsicon} alt="WhatsApp Icon" />
        </a>
      </div>
    </div>
  )
}

export default Home