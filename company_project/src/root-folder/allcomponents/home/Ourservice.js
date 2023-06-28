import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Ourservice.css"

const Ourservice = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp " data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Our Services</h6>
                    <h2 className="mt-2">What Solutions We Provide</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded hover-color">
                            <div className="service-icon flex-shrink-0">
                                <i class="fa fa-cloud fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Cloud</h5>
                            <p>Harnessing virtualized resources and distributed computing to deliver scalable, on-demand services, storage, and applications over the internet.</p>
                            <a className="btn px-3 mt-auto mx-auto btn-color-ser" href="https://en.wikipedia.org/wiki/Cloud">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i class="fa fa-solid fa-lock fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Cybersecurity</h5>
                            <p>Protecting digital systems, networks, and data from unauthorized access, threats, and vulnerabilities through preventive measures and defense strategies.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="https://en.wikipedia.org/wiki/Computer_security">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i class="fa fa-chart-pie fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Data and Analytics</h5>
                            <p>Collecting, organizing, and analyzing data to derive valuable insights, make informed decisions, and drive business growth and innovation.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="https://en.wikipedia.org/wiki/Data_analysis">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i class="fa fa-globe fa-2x"></i>
                            </div>
                            <h5 className="mb-3">IoT and Digital Engineering</h5>
                            <p>Connecting devices for smart automation, data collection, and real-time insights, revolutionizing industries and improving lives.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="https://en.wikipedia.org/wiki/Internet_of_things">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i class="fa fa-cloud fa-2x"></i>
                            </div>
                            <h5 className="mb-3">HAARMK and AWS Cloud</h5>
                            <p>Cloud computing platform offering scalable storage, compute power, and various services for businesses and developers worldwide.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="https://aws.amazon.com/free/?trk=14a4002d-4936-4343-8211-b5a150ca592b&sc_channel=ps&ef_id=CjwKCAjwkeqkBhAnEiwA5U-uMx79re-1VDra3iy7X77ZNoeEFQOw9BYdf_-bu-IULLoq8rH6sTCZwhoChakQAvD_BwE:G:s&s_kwcid=AL!4422!3!453325184794!e!!g!!amazon%20web%20services!10712784856!111477279811&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i class="fa fa-cloud fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Microsoft and Google Cloud</h5>
                            <p>On-demand access to shared computing resources and services over the internet, enabling scalability, flexibility, and cost efficiency.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="https://cloud.google.com/windows">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourservice