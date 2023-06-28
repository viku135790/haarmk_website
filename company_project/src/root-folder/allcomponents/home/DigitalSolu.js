import React from 'react';
import "./DigitalSolu.css";
import Globe from "../../images/globe.jpg"

const DigitalSolu = () => {

    function trust() {

        window.location.href = "https://www.isaca.org/resources/news-and-trends/isaca-now-blog/2022/digital-trust-the-key-to-successful-transformation";
    }

    return (
        <div className="digital-main">
            <div className='digi-first'>
                <p>Trust is the foundation of any successful digital solution</p>
                <p> It is the glue that binds technology, innovation, and human interaction. Without trust, even the most advanced digital solutions will crumble. Therefore, our commitment is to deliver trusted digital solutions that not only meet your needs but also exceed your expectations, building lasting trust with our clients and users."</p>
                <button onClick={trust}>Learn More</button>
            </div>
            <div className='digi-second'>
            </div>
        </div>
    )
}

export default DigitalSolu