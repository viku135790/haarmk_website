import React from 'react'
import "./AboutTemp1.css"
import abouttempone from "../../images/abouttempone.png"

const AboutTemp1 = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="section-title position-relative mb-4 pb-2">
                            <h6 className="position-relative text-primary ps-4">About Us</h6>
                            <h2 className="mt-2">Empowering Businesses with Innovative IT Solutions</h2>
                        </div>
                        <p className="mb-4">
                            At HAARMK infotech , we are a dynamic and forward-thinking IT company dedicated to delivering exceptional technology solutions. With a passion for innovation and a commitment to excellence, we empower businesses to thrive in the digital age.
                            <br></br>
                            Our team of skilled professionals brings a wealth of expertise and experience across various domains of the IT industry. We stay at the forefront of emerging technologies and industry trends to provide cutting-edge solutions that drive growth and success for our clients.
                            <br></br>
                            Our commitment to quality and customer satisfaction is unwavering. We strive for excellence in every project, ensuring that we exceed your expectations and deliver solutions that are robust, reliable, and scalable.
                            <br></br>
                            Partner with us to unlock your business's true potential and embrace the power of technology. Let's embark on a collaborative journey where we leverage our expertise and your vision to create a brighter future for your organization.
                            <br></br>
                            Welcome to HAARMK infotech, where innovation meets success.
                        </p>
                        
                        <div className="d-flex align-items-center mt-4">
                            <a className="btn btn-primary rounded-pill px-4 me-3" href="">Read More</a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i
                                className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i
                                className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i
                                className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={abouttempone} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTemp1