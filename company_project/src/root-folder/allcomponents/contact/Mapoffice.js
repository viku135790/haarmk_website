import React from 'react'
import "./Mapoffice.css"

const Mapoffice = () => {

    const handleCliclOpenMap = () => {
        const companyLocation = 'HAARMk infotech, Noida, India';
        const newMapSource = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyLocation)}`;
        window.open(newMapSource, '_blank');
    }
    

    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5400299159164!2d77.318355675531!3d28.583571886302327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c17d58c81a93%3A0xf6f89613eb932a4e!2sHAARMk%20infotech!5e0!3m2!1sen!2sin!4v1687436298594!5m2!1sen!2sin";
    return (
        <div className='map-office-name'>
            <div className='div-for-whole-compo'>
                <div className='cor-off-address'>Corporate Office Address</div>
                <div className='map-address-head'>
                    <div className='ofice-addr'>
                        <h2>HAARMK infotech</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, minus!</p>
                        <button onClick={handleCliclOpenMap}>Check our Locations</button>
                    </div>
                    <div className='google-map-area'>
                        <iframe
                            src={mapSrc}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mapoffice