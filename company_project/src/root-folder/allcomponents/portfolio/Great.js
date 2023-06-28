import React from 'react'
import "./Great.css"

const Great = () => {
  function letsTalk() {
    var whatsappUrl = "https://wa.me/7741815031";
  
    window.open(whatsappUrl, "_blank");
  }
  return (
    <div className='great-main-clas'>
        <div className='great-btn-first'>
            <p className='great-firts-para'>Let's create something great together</p>
            <p className='great-secon-para'>Together, we have the power to create something extraordinary. Through collaboration, innovation, and a shared vision, we can embark on a journey to bring greatness to life. Let's harness our collective talents, expertise, and passion to craft remarkable solutions that shape the world for the better. By combining our unique perspectives, embracing diversity, and fostering an environment of creativity and trust, we can push the boundaries of what's possible. Together, we will overcome challenges, unlock new opportunities, and leave a lasting impact that resonates far beyond our individual contributions. Let's ignite the spark of greatness and create a future that inspires and uplifts us all. Together, we are destined to achieve greatness.</p>
            <button className='hellobcx' onClick={letsTalk}>LET'S TALK <i class="fa fa-chevron-right"></i>  </button>
        </div>
        <div className='great-media'></div>
    </div>
  )
}

export default Great