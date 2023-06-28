import React from 'react'
import "./Header.css"

const homeheader = () => {

  function unitedNation (){
    window.location.href="https://sdgs.un.org/"
  }

  return (
    <div className="header-content-main">
      <h1>Realizing a more sustainable future<span className='future-dot'>.</span></h1>
      <p>Haarmk is helping companies monitor, track and take action on their environmental impact.</p>
      <button onClick={unitedNation}>Learn More</button>
    </div>
  )
}

export default homeheader