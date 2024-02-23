import React from 'react';
import { Parallax } from 'react-parallax';
import whyus from "../assets/whyus.png";
import { GrUserWorker } from "react-icons/gr";
import { VscTools } from "react-icons/vsc";
import { TbPigMoney } from "react-icons/tb";
import { LiaCertificateSolid } from "react-icons/lia";
import { LuHeartHandshake } from "react-icons/lu";
import { BiWater } from "react-icons/bi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Whyus = () => {
    const img = "https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/whyus_14.jpg";
    return (
        <>
            <Parallax bgImage={ img } strength={300} bgImageAlt="parallaximg" blur={1}>
                <div className='ParallaxContainer1'>
                    <div className="ParallaxDiv">
                        <div className='ParallaxPageContent'>
                            <div className='parallax_icon'><GrUserWorker /></div>
                            <h2>Why Us?</h2>
                        </div>
                    </div>
                </div>
            </Parallax>

            <div className='whyus_container'>
                <div className='left_section'>
                    <div className='section_info'>
                        <div>
                            <h3>We Have The Tools</h3>
                            <p>Our trucks are stocked with the proper tools and equipment needed to fix your problems quickly and efficiently.</p>
                        </div>
                        <span><VscTools /></span>
                    </div>

                    <div className='section_info'>
                        <div>
                            <h3>Competitive Pricing</h3>
                            <p>We are always fair in our pricing. Not the cheapest service, just the best workmanship money can buy.</p>
                        </div>
                        <span><TbPigMoney /></span>
                    </div>

                    <div className='section_info'>
                        <div>
                            <h3>Certified Experience</h3>
                            <p>All our techs are long time employees who have done it all before. They know the systems and have the experience to fix them.</p>
                        </div>
                        <span><LiaCertificateSolid /></span>
                    </div>
                </div>

                <img src={whyus} alt="truck image" className='truck_image' />

                <div className='right_section'>
                    <div className='section_info'>
                        <span><LuHeartHandshake /></span>
                        <div>
                            <h3>100% Customer Satisfaction</h3>
                            <p>It is our company policy. We will explain what needs to be done and why. Full information works best for everyone.</p>
                        </div>
                    </div>

                    <div className='section_info'>
                        <span><BiWater /></span>
                        <div>
                            <h3>Water heaters - sump pump Installs</h3>
                            <p>Toilets, sinks, whatever. Always with up front pricing. We are up for anything electrical since we do not do gas.</p>
                        </div>
                    </div>

                    <div className='section_info'>
                        <span><IoShieldCheckmarkOutline /></span>
                        <div>
                            <h3>We Fix The Problem</h3>
                            <p>Do you have an electrical job for our master electricians? How about a job fit for a plumber who knows the ropes? One call and Express 24 is there.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Whyus;