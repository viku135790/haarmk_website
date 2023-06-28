import React from 'react'
import Footer from "../allcomponents/reusable_components/Footer"
import DigitalSolu1 from '../allcomponents/service/DigitalSolu1'
import DigitalSolu2 from '../allcomponents/service/DigitalSolu2'
import DigitalSolu3 from '../allcomponents/service/DigitalSolu3'
import Servicesheader from '../allcomponents/service/Servicesheader'
import WhoWeAre1 from '../allcomponents/service/WhoWeAre1'
import WhoWeAre2 from '../allcomponents/service/WhoWeAre2'
import WhoWeAre3 from '../allcomponents/service/WhoWeAre3'
import WhoWeAre4 from '../allcomponents/service/WhoWeAre4'
import NewNavbar from '../allcomponents/reusable_components/NewNavbar'
const Services = () => {
  return (
    <div className='service-main-container'>
      <NewNavbar />
      <Servicesheader />
      <WhoWeAre1 />
      <DigitalSolu1 />
      <WhoWeAre2 />
      <DigitalSolu2 />
      <WhoWeAre3 />
      <DigitalSolu3 />
      <WhoWeAre4 />
      <Footer />
    </div>
  )
}

export default Services