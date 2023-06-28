import React, { useState } from 'react'
import "./SignUpForm.css"
import countryData from "../../../Countrydata.json"

const SignUpForm = () => {
    const [countryId, setCountryId] = useState("")
    const [stateOfCountry, setStateOfCountry] = useState([])
    const [countryName, setCountryName] = useState("")
    const [stateName, setStateName] = useState("")
    const [stateId, setStateId] = useState("")
    console.log(stateName)
    // get county name and array of state
    const handleCountry = (e) => {
        try {
            const getCountryId = e.target.value;
            setCountryId(getCountryId);

            const getStateId = countryData.find(country => country.country_id === getCountryId).states
            setStateOfCountry(getStateId);

            const getCountryName = countryData.find(country => country.country_id === getCountryId).country_name
            setCountryName(getCountryName);

        } catch (error) {
            window.alert("Try after sometime...")
        }
    }

    //find stateName
    const handleState = (e) => {
        const getStateId = e.target.value;
        setStateId(getStateId);
        const stateName = stateOfCountry.find(statee => statee.state_id === getStateId);
        setStateName(stateName.state_name)
    }




    return (
        <div className='sign-conta-formm-main-cota'>
            <div className="sign-completeform">
                <p>SIGN UP</p>
                <form className='sign-contact-form-details'>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="number" placeholder='Phone number' />
                    <input type="text" placeholder='Address' />
                    <select onChange={(e) => handleCountry(e)}>
                        <option value="Select Country" disabled selected>Country</option>
                        {
                            countryData.map((getCountry, index) => (
                                <option value={getCountry.country_id} key={index}>{getCountry.country_name}</option>
                            ))
                        }
                    </select>
                    <select onChange={(e) => handleState(e)}>
                        <option value="Select State" disabled selected>State</option>
                        {
                            stateOfCountry.map((getState, index) => (
                                <option value={getState.state_id} key={index}>{getState.state_name}</option>
                            ))
                        }
                    </select>
                    <input type="number" placeholder='Pin code' />
                    <textarea placeholder='Something about yourself'></textarea>
                    <button>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm