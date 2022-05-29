import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../Images/Items/Screwdriver.jpg';
import img2 from '../Images/Items/Chisel.jpeg';
import img3 from '../Images/Items/Drill Machine.jpg';
import img4 from '../Images/Items/Glue Gun.jpg';
import img5 from '../Images/Items/Hacksaw.jpg';
import img6 from '../Images/Items/9225_photo.jpg';
import './Footer.css';

const Footer = () => {

    return (
        <div id="big-footer">
            <div className="container font-color-footer pt-5 pb-4 px-4 px-lg-0">
                <div className="row g-5">
                    <div className="col-12 col-lg-4">
                        <div className="d-flex align-items-center mb-4">
                            <i className="fas fa-screwdriver-wrench fs-2 me-3"></i>
                            <h5 className="footer-brand m-0 pt-2">M e t a l T o o l s H o u s e</h5>
                        </div>
                        <p>For over 20 years, Metal Tools House has dedicated itself to providing service, quality, and professionalism to the sports community.
                            Thanks to our amazing customers. We may be small in size, but we make sure to fill every inch of our stores with quality sports equipment.
                            So, stop in for a visit! Our staff is here to assist you.</p>

                        <div className="mt-5">
                            <i className="fs-1 me-2 fab fa-cc-paypal"></i>
                            <i className="fs-1 me-2 fab fa-cc-visa"></i>
                            <i className="fs-1 me-2 fab fa-cc-mastercard"></i>
                            <i className="fs-1 me-2 fab fa-cc-amex"></i>
                        </div>
                    </div>
                    <div className="col-12 col-lg-2">
                        <div className="pt-2 ps-2">
                            <h5 className="fw-bold">Navigation</h5>
                            <div className="mt-4 ps-2">
                                <p className="mb-4"><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none font-color-footer" to="/home">Home</NavLink></p>
                                <p className="mb-4"><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none font-color-footer" to="">Explore Products</NavLink></p>
                                <p className="mb-4"><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none font-color-footer" to="">Dashboard</NavLink></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-2">
                        <div className="pt-2 ps-2">
                            <h5 className="fw-bold">Need Help?</h5>
                            <div className="mt-4">
                                <div className="mb-4">
                                    <p>Call Us</p>
                                    <h6 className="fw-bold">01635703135</h6>
                                </div>
                                <div className="mb-4">
                                    <p>Email Us</p>
                                    <h6 className="fw-bold">mehedihassanrifat.3@gmail.com</h6>
                                </div>
                                <div className="mb-4">
                                    <p>Main Location</p>
                                    <h6 className="fw-bold">Dhaka, Bangladesh</h6>
                                </div>
                                <div className="mb-4">
                                    <p>Follow us</p>
                                    <div className="d-flex fs-5 social-links">
                                        <a href="https://www.facebook.com/mehedihassan.refat.3" target="_blank" className="me-3">
                                            <i className="fab fa-facebook font-color-footer"></i>
                                        </a>
                                        <a href="https://www.instagram.com/rifat_ahasan/" target="_blank" className="me-3">
                                            <i className="fab fa-instagram font-color-footer"></i>
                                        </a>
                                        <a href="https://twitter.com/Rifat_03" target="_blank" className="me-3">
                                            <i className="fab fa-twitter font-color-footer"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="pt-2 ps-2">
                            <h5 className="fw-bold mb-4">At a glance</h5>
                            <div className="row g-3">
                                <div className="col-4">
                                    <img src={img1} alt="" className="w-100" />
                                </div>
                                <div className="col-4">
                                    <img src={img2} alt="" className="w-100" />
                                </div>
                                <div className="col-4">
                                    <img src={img3} alt="" className="w-100" />
                                </div>
                                <div className="col-4">
                                    <img src={img4} alt="" className="w-100" />
                                </div>
                                <div className="col-4">
                                    <img src={img5} alt="" className="w-100" />
                                </div>
                                <div className="col-4">
                                    <img src={img6} alt="" className="w-100" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <hr className="container mt-5 mb-3" />
                <div className="d-lg-flex justify-content-between align-items-center">
                    <p>Copyright © 2022  |  METAL TOOLS HOUSE  |  Mehedi Hassan Rifat  |  All Rights Reserved.</p>
                    <div className="d-flex mt-3 mt-lg-0">
                        <p><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none mx-2 font-color-footer" to="/privacy">Privacy Policy</NavLink>  |</p>
                        <p><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none mx-2 font-color-footer" to="/terms">Terms of Use</NavLink>  |</p>
                        <p><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none mx-2 font-color-footer" to="/cookie">Cookie Policy</NavLink></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;