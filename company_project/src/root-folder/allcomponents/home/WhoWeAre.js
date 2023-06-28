import React from 'react'
import "./WhoWeAre.css"

const WhoWeAre = () => {
  function future(){
    window.location.href="https://www.isb.edu/en/research-thought-leadership/research-centres-institutes/centre-for-learning-and-management-practice/management-rethink/ManagementReThinkVol2Issue2/the-future-is-digital--so--how-will-it-change-the-world-.html"
  }
  return (
    <div>
        <div className="digital-main-who">
            <div className='digi-second-who'></div>
            <div className='digi-first-who'>
                <p>The future is digital. The future is now.</p>
                <p> Embrace technology's transformative power, for it has the ability to shape limitless possibilities and unlock the potential within us all."</p>
                <button onClick={future}>Get to know us</button>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre