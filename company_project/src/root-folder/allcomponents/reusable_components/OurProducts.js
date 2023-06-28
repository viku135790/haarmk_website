import React from 'react'
import "./OurProducts.css"
import Hosting from "../../images/hosting.jpg"
import HRMS from "../../images/hrms.jpg"
import blockchain from "../../images/blockchain.jpg"
import HotelMan from "../../images/hotelman.jpg"
import LMS from "../../images/lms.jpg"
import SEO from "../../images/seo.jpg"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';

const OurProducts = () => {
    return (
        <div className='product-main-con'>
            <h1>Our Products</h1>
            <div className='card-first-conta'>
                <MDBCard className='prd-sing-card'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={Hosting} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Hosting & Domain</MDBCardTitle>
                        <MDBCardText>
                            Unlock the potential of your website with our exceptional hosting and domain services. Experience seamless performance and reliability
                        </MDBCardText>
                        <MDBBtn href='#'>Click Here</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='prd-sing-card'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={HRMS} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>HRMS</MDBCardTitle>
                        <MDBCardText>
                            Experience a new level of HR efficiency with our cloud-based HRMS solution. Whether you have a small team or a global workforce, our scalable software adapts to your needs.
                        </MDBCardText>
                        <MDBBtn href='#'>Click Here</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='prd-sing-card'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={blockchain} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Block-Chain</MDBCardTitle>
                        <MDBCardText>
                            Join the blockchain revolution and shape a decentralized future. Explore our cutting-edge platforms and solutions that redefine the way we transact, collaborate, and secure data.
                        </MDBCardText>
                        <MDBBtn href='#'>Click Here</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='prd-sing-card'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={HotelMan} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>Hotel Management</MDBCardTitle>
                        <MDBCardText>
                            From boutique hotels to luxury resorts, our management services are tailored to your unique needs. Trust us to deliver unparalleled expertise and results that exceed expectations.
                        </MDBCardText>
                        <MDBBtn href='#'>Click Here</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='prd-sing-card'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={SEO} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>SEO</MDBCardTitle>
                        <MDBCardText>
                            Discover the art and science of SEO. Our team of experienced professionals leverages on-page optimizations, content marketing, link building, and analytics to position your website for long-term success.
                        </MDBCardText>
                        <MDBBtn href='#'>Click Here</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='prd-sing-card'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={LMS} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>LMS</MDBCardTitle>
                        <MDBCardText>
                            Transform the way you educate and upskill your workforce with our intuitive digital LMS. Seamlessly deliver training  learner progress, and analyze performance to drive success.
                        </MDBCardText>
                        <MDBBtn href='#'>Click Here</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    )
}

export default OurProducts