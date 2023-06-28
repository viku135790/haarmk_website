import React from 'react'
import ContactHeader from '../allcomponents/contact/ContactHeader'
import ContactUsForm from '../allcomponents/contact/ContactUsForm'
import Looking from '../allcomponents/contact/Looking'
import Mapoffice from '../allcomponents/contact/Mapoffice'
import Footer from '../allcomponents/reusable_components/Footer'
import NewNavbar from '../allcomponents/reusable_components/NewNavbar'

const ContactUs = () => {
  return (
    <div>
      <NewNavbar />
      <ContactHeader />
      <Looking />
      <ContactUsForm />
      <Mapoffice />
      <Footer />
    </div>
  )
}

export default ContactUs