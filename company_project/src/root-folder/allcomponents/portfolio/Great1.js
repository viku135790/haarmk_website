import React from 'react'
import "./Great1.css"

const Great1 = () => {
  function letsTalk() {
    var whatsappUrl = "https://wa.me/7741815031";
    window.open(whatsappUrl, "_blank");
  }

  return (
    <div className='gre2-great-main-clas'>
      <div className='gre2-great-media'></div>
      <div className='gre2-great-btn-first'>
        <p className='gre2-great-firts-para'>Collaborate with Us to Create an Inspiring Tomorrow</p>
        <p className='gre2-great-secon-para'>At our company, we value the transformative power of visionary thinking. We invite you to share your unique perspective and join us on a journey of innovation. Together, we can create a brighter future through collaboration, creativity, and a shared passion for excellence. With our dedicated team and resources at your side, your vision can become a reality. Embrace the opportunity to make a lasting impact, as we work together to shape industries, inspire change, and leave a legacy of innovation. Join us in unlocking the potential of your vision and let's embark on an extraordinary journey of growth and success.</p>
        <button className='gre2-hellobcx' onClick={letsTalk}>LET'S TALK <i class="fa fa-chevron-right"></i>  </button>
      </div>
    </div>
  )
}

export default Great1