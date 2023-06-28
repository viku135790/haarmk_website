import React from 'react'
import LoginForm from '../allcomponents/LogSign/LoginForm'
import Footer from "../allcomponents/reusable_components/Footer"
import NewNavbar from '../allcomponents/reusable_components/NewNavbar'

const Login = () => {
  return (
    <div>
      <NewNavbar />
      <LoginForm />
      {/* <Footer /> */}
    </div>
  )
}

export default Login