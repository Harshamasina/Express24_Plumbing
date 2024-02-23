import React from 'react';
import { Parallax } from 'react-parallax';
import { MdHomeRepairService } from "react-icons/md";
import { services } from "../data/services.json";
import { TiInputChecked } from "react-icons/ti";

const Service = () => {
    const img = "https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/service_12.jpg";

    return (
        <>
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
                            <img src='https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/electircal_16.jpg' alt='electrical services' />
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
                            <img src='https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/plum_15.jpg' alt='electrical services' />
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
                            <img src='https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/water_17.jpg' alt='electrical services' />
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