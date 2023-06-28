import React from 'react'
import SignUpForm from '../allcomponents/LogSign/SignUpForm'
import "./SignUp.css"
import NewNavbar from '../allcomponents/reusable_components/NewNavbar'

const SignUp = () => {
    return (
        <>
            <NewNavbar />
            <SignUpForm />
        </>
    )
}

export default SignUp