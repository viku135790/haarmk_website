import React from 'react'
import "./LoginForm.css"
import { NavLink } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div className='login-main-container'>
      <div className="form-login-main">
        <p className='sign-header'>SIGN IN</p>
        <form className='login-data-form'>
          <input type="text" placeholder='Enter your E-mail'/>
          <input type="password" placeholder='Enter your Password'/>
          <button>Sign in</button>
        </form>
        <div className="otherdeta-on-login">
          <p className='forgot-password'>Forgot Password ?</p>
          <p>Already have an account <NavLink to= "/SignUp" className="Already-have"><span className='login-form-sign'>Sign up ?</span></NavLink></p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm