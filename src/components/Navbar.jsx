import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Whyus from '../pages/Whyus';
import Contact from '../pages/Contact';
import Service from '../pages/Service';
import Error404 from '../pages/Error404';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-lg fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand me-auto" to="/">
                        <img src='src\assets\plumbing_logo.png' alt='navbar_logo' className='navbar_img'></img>
                    </Link>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <img className="offcanvas-title navbar_img" id="offcanvasNavbarLabel" src='src\assets\plumbing_logo.png' alt='navbar_logo'></img>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" aria-current="home" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" aria-current="services" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" aria-current="about us" to="/aboutus">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" aria-current="why us" to="/whyus">Why Us?</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" aria-current="contact us" to="/contact">Contact</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <Link to='/contact' className='navbar_button'>Free Consultation</Link>
                    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/express24plumbing' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/services' element={<Service />} />
                    <Route path='/aboutus' element={<About />} />
                    <Route path='/whyus' element={<Whyus />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </div>
        </>
    )
};

export default Navbar;
