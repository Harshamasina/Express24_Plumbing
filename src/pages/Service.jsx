import React from 'react';
import { Parallax } from 'react-parallax';
import { MdHomeRepairService } from "react-icons/md";
import { services } from "../data/services.json";
import { TiInputChecked } from "react-icons/ti";
import { Helmet } from 'react-helmet';

const Service = () => {
    const img = "https://express24plumbing.s3.ap-south-1.amazonaws.com/img_10.webp";

    return (
        <>
            <Helmet>
                <title>Services | Express 24 Plumbing and Electrical</title>
                <meta name="description" content="We do all electrical, plumbing, water and flood damage services" />
                <meta name='keywords' content='Express 24 Electrical, Plumbing, Water and Flood Damage Services, Thermal Scanning, Home Surge Protection, Safety Inspection, Generator Backup, Fuse Box, Interior Lighting, Drain Cleaning, Frozen Pipes, Leaking Pipes, Plumbing Repairs, Plumbing Video Camera, Sewer Line Repair, Water Line Repair, Water Heater Repair, Well Pump Replacement, Flood Damage Restoration, Complete Foundation Restoration, Deodorization, Flood Odor Cleaning, Fire Damage Restoration, Mold Remediation ' />
            </Helmet>

            <div>
                <Parallax bgImage={ img } strength={300} bgImageAlt="parallaximg" blur={1}>
                    <div className='ParallaxContainer1'>
                        <div className="ParallaxDiv">
                            <div className='ParallaxPageContent'>
                                <div className='parallax_icon'><MdHomeRepairService /></div>
                                <h2>Our Services</h2>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>

            <div className='service_cards_container'>
                <div className='service_wrapper'>
                    <div className='service_cards'>
                        <div className='card_image'>
                            <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/img_11.webp' alt='electrical services' />
                        </div>
                        <div className='card_details'>
                            <h3>Electrical Services</h3>
                            <p>Express 24 Hour Plumbing and Electrical offers comprehensive commercial and residential electrical wiring and equipment wiring services to meet the diverse needs of our clients in Central Missouri. Whether you own a commercial establishment or reside in a residential property, our team of skilled electricians is equipped to handle a wide range of electrical projects with precision and expertise.</p>
                        </div>
                    </div>

                    <div className='services_info'>
                        <h3>Electrical Services</h3>
                        {
                            services && services[0].electric_service.map((item, index) => {
                                return(
                                    <div className='services_names' key={index}>
                                        <span><TiInputChecked /></span>
                                        <p>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='service_wrapper'>
                    <div className='service_cards'>
                        <div className='card_image'>
                            <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/img_12.webp' alt='electrical services' />
                        </div>
                        <div className='card_details'>
                            <h3>Plumbing Services</h3>
                            <p>At Express 24 Hour Plumbing and Electrical, we offer comprehensive commercial and residential plumbing services that are tailored to meet the unique needs of our clients. Whether you are a business owner or a homeowner in Central Missouri, our expert plumbers are equipped to handle a wide range of plumbing issues promptly and efficiently.</p>
                        </div>
                    </div>

                    <div className='services_info'>
                        <h3>Plumbing Services</h3>
                        {
                            services && services[1].plumbing_services.map((item, index) => {
                                return(
                                    <div className='services_names'>
                                        <span><TiInputChecked /></span>
                                        <p key={index}>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div>
                    <div className='service_cards'>
                        <div className='card_image'>
                            <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/img_13.webp' alt='electrical services' />
                        </div>
                        
                        <div className='card_details'>
                            <h3>Water and Flood Damage</h3>
                            <p>Our team works diligently to remove standing water, dry affected areas, and eliminate smoke and odor, while keeping you informed throughout the entire restoration process. We aim to alleviate your stress and provide peace of mind during this challenging time.</p>
                        </div>
                    </div>

                    <div className='services_info'>
                        <h3>Water and Flood Damage</h3>
                        {
                            services && services[2].cleaning_services.map((item, index) => {
                                return(
                                    <div className='services_names'>
                                        <span><TiInputChecked /></span>
                                        <p key={index}>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

export default Service;