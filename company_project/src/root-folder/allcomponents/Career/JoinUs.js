import React from 'react'
import "./JoinUs.css"
import { NavLink } from 'react-router-dom'

const JoinUs = () => {
  return (
    <div>
      <div className="join-are2-digital-main-who">
        <div className='join-are2-digi-second-who'></div>
        <div className='join-are2-digi-first-who'>
          <p className='share-of-future'>Shape the future of technology</p>
          <p>Joining us at our IT company opens the door to a world of endless possibilities and remarkable opportunities. We pride ourselves on fostering an environment that embraces innovation, collaboration, and personal growth. When you join our team, you become part of a dynamic community of talented individuals driven by a shared passion for technology.</p>
          <NavLink to="/Login" className='joinus-btn'>
            <button>Join Us</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default JoinUs