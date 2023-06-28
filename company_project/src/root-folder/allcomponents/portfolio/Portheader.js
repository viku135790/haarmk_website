import React from 'react'
import "./Portheader.css"

const Portheader = () => {
  function showcasing(){
    window.location.href="https://www.linkedin.com/pulse/building-winning-portfolio-how-showcase-your-skills-expertise"
  }
  return (
    <div className='portfolio-main-contai'>
      <div className='port-head-conte'>
        <p>Showcasing Our IT Company's Impressive Portfolio of Success</p>
        <p>Welcome to our portfolio, where we proudly present a collection of our remarkable achievements and successful projects as an IT company. With an unwavering commitment to excellence and a passion for innovation, we have collaborated with a diverse range of clients to deliver exceptional solutions across various industries.</p>
        <button onClick={showcasing}>Explore</button>
      </div>
    </div>
  )
}

export default Portheader