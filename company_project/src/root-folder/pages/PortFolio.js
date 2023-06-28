import React from 'react'
import Ourservice from "../allcomponents/home/Ourservice"
import Great from '../allcomponents/portfolio/Great'
import Great1 from '../allcomponents/portfolio/Great1'
import OurTech from '../allcomponents/portfolio/OurTech'
import Ourprojects from '../allcomponents/portfolio/Ourprojects'
import Portheader from '../allcomponents/portfolio/Portheader'
import Footer from "../allcomponents/reusable_components/Footer"
import NewNavbar from '../allcomponents/reusable_components/NewNavbar'


const PortFolio = () => {
  return (
    <div className='portfolio-main-container'>
      <NewNavbar />
      <Portheader />
      <Ourprojects />
      <Great />
      <Ourservice />
      <Great1 />
      <OurTech />
      <Footer />
    </div>
  )
}

export default PortFolio