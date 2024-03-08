import React from 'react';
import logo from '../assets/plumbing_logo.png';
import { FaGripfire } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import GoTopAnimation from './GoTopAnimation';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>2330 North Bishop Ave., Rolla, MO, United States, Missouri</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <h4>Call us Today</h4>
                                        <span>1-800-209-2709</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>expressplumbing1971@yahoo.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <Link to="/"><img src={logo} className="img-fluid" alt="logo" aria-label='click to go to home page' /></Link>
                                    </div>

                                    <div className="footer-text">
                                        <p>As a locally owned and operated business, we take pride in serving our community. We are dedicated to not only restoring properties but also building lasting relationships with our clients. Our goal is to exceed your expectations, provide exceptional results, and ensure your complete satisfaction.</p>
                                    </div>

                                    <div className="footer-social-icon">
                                        <a href="https://www.bbb.org/us/mo/waynesville/profile/plumber/express-24-hr-plumbing-and-electrical-0734-310611651" className='footer_bbb' target='_blank' rel='noreferrer' aria-label='click to go to our bbb.org page'><FaGripfire /></a>
                                        <a href="https://www.facebook.com/expressplumbingandElectrical" className='footer_fb' target='_blank' rel='noreferrer' aria-label='click to go to our facebook page'><FaFacebookF /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    
                                    <ul>
                                        <li><Link to="/home" aria-label='click to go to home'>Home</Link></li>
                                        <li><Link to="/services" aria-label='click to go to services'>services</Link></li>
                                        <li><Link to="/aboutus" aria-label='click to go to about us'>About us</Link></li>
                                        <li><Link to="/whyus" aria-label='click to go to why us'>Why Us?</Link></li>
                                        <li><Link to="/contact" aria-label='click to go to why us'>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className='footer_bbb_section'>
                                    <h3>Serving Mid Missouri</h3>
                                    <h5>Lake of the Ozark, Branson, Warrensburg, Rolla, Waynesville, Saint Roberts, Cuba, Sullivan, Columbia, Jefferson City and surrounding areas</h5>
                                    <a href='https://www.bbb.org/us/mo/waynesville/profile/plumber/express-24-hr-plumbing-and-electrical-0734-310611651' target='_blank' rel='noreferrer' aria-label='click image to go to bbb.org page'>
                                        <img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/bbb_logo_round.webp" alt='bbb_logo' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; {new Date().getFullYear()} Express 24 Plumbing and Electrical, All Right Reserved </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <GoTopAnimation />
        </>
    );
};

export default Footer;
