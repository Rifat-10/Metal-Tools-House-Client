import React from 'react';
import './AboutUs.css';
import img1 from '../../Images/Items/Drill Machine.jpg';
import img2 from '../../Images/Items/Electric Saw.jpeg';
import img3 from '../../Images/Items/Pliers.jpg';
import img4 from '../../Images/Items/Soldering Iron.jpg';

const AboutUs = () => {
    return (
        <div className="about-us-bg text-dark">
            <div className="about-us-content d-flex justify-content-center align-items-center">
                <div className="container-fluid p-lg-5 p-4">
                    <div className="row g-5">
                        <div className="col-12 col-xl-6">
                            <div className="row g-3">
                                <div className="col-12 col-md-6">
                                    <div className="img-content">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h3 className="position-absolute text-white">Best Deals</h3>
                                            <img src={img1} alt="" className="img-fluid border border-2 p-2 border-dark" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="img-content">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h3 className="position-absolute text-white">Best Offers</h3>
                                            <img src={img2} alt="" className="img-fluid border border-2 p-2 border-dark" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="img-content">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h3 className="position-absolute text-white">Great Tools</h3>
                                            <img src={img3} alt="" className="img-fluid border border-2 p-2 border-dark" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="img-content">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h3 className="position-absolute text-white">Fast Booking</h3>
                                            <img src={img4} alt="" className="img-fluid border border-2 p-2 border-dark" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <h5 className="mb-4 border-start border-3 ps-3 border-dark">About Us</h5>
                            <h2 className="mb-4">Get to know a little about us!</h2>
                            <p>For over 20 years, Metal Tools House has dedicated itself to providing service, quality, and professionalism to the metal community.
                                Thanks to our amazing customers. We may be small in size, but we make sure to fill every inch of our stores with quality metal tools.
                                So, stop in for a visit! Our staff is here to assist you.

                            </p><br />
                            <p>Our staff has all the knowledge and experience to help you find exactly what you’re looking for.
                                Whether you're a pro, hobbyist, or complete beginner, we are here to help you get the most out of your gear..</p><br />
                            <p><span className="color">Our Beliefs</span></p><br />
                            <p>We believe in the close relationship between people and sports.
                                We acknowledge the inseparable connection between tools and the brand.
                                We understand customers’ needs for tools house.</p>
                            <div className="mt-5 row g-3">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="text-center about-card h-100">
                                        <i className="fas fa-handshake fs-2 mb-3"></i>
                                        <h6 className="fw-bold text-dark text-uppercase">Best Deals</h6>
                                        <p>Affordable</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="text-center about-card h-100">
                                        <i className="fas fa-globe fs-2 mb-3"></i>
                                        <h6 className="fw-bold text-dark text-uppercase">Best Offers</h6>
                                        <p>Every Level</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="text-center about-card h-100">
                                        <i className="fas fa-screwdriver-wrench fs-2 mb-3"></i>
                                        <h6 className="fw-bold text-dark text-uppercase">Great Metal Tools</h6>
                                        <p>Affordable</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="text-center about-card h-100">
                                        <i className="fas fa-user-check fs-2 mb-3"></i>
                                        <h6 className="fw-bold text-dark text-uppercase">Fast Booking</h6>
                                        <p>All Products</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;