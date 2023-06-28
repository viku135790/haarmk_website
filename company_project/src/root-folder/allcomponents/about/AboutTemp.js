import React from 'react'
import "./AboutTemp.css"
import abouttempone from "../../images/abouttempone.png"

const AboutTemp = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={abouttempone} />
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="section-title position-relative mb-4 pb-2">
                            <h2 className="mt-2"> Driving Digital Transformation for Sustainable Success</h2>
                        </div>
                        <p className="mb-4">
                            We take a client-centric approach, placing your unique needs and goals at the center of everything we do. By deeply understanding your business, we develop customized strategies and solutions that align with your vision and objectives.
                            <br></br>
                            From software development and web design to cloud computing and cybersecurity, our comprehensive range of services caters to businesses of all sizes and industries. We combine technical expertise with creative problem-solving to deliver tailored solutions that transform your business operations and drive tangible results.
                        </p>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Award Winning</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Professional Staff</h6>
                            </div>
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>24/7 Support</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Fair Prices</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <a className="btn btn-primary rounded-pill px-4 me-3" href="">Read More</a>
                            {/* <a className="btn btn-outline-primary btn-square me-3" href="">
                                <i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href="">
                                <i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href="">
                                <i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTemp