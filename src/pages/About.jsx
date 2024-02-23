import React from 'react';
import { Parallax } from 'react-parallax';
import { BsBuildingsFill } from "react-icons/bs";

const About = () => {
    const img = "https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/about_13.jpg";
    return (
        <>
            <Parallax bgImage={ img } strength={300} bgImageAlt="parallaximg" blur={1}>
                <div className='ParallaxContainer1'>
                    <div className="ParallaxDiv">
                        <div className='ParallaxPageContent'>
                            <div className='parallax_icon'><BsBuildingsFill /></div>
                            <h2>About Our Company</h2>
                        </div>
                    </div>
                </div>
            </Parallax>

            <div className='about_container'>
                <div className='about_left'>
                    <div className='yellow_container'></div>
                    <div className='about_img'>
                        <img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/trucks.jpg" alt='trucks' />
                    </div>
                </div>
                
                <div className='about_right'>
                    <h3>Welcome to Express 24 Hour Plumbing and Electrical!</h3>
                    <h4>We are a reputable and reliable service provider based in the heart of Central Missouri.</h4>
                    <p>With our dedicated team of skilled professionals, we strive to deliver exceptional plumbing and electrical solutions round the clock. Our commitment to excellence, coupled with our years of experience in the industry, has earned us a solid reputation among both residential and commercial clients. At Express 24 Hour Plumbing and Electrical, we understand the importance of prompt and efficient service, and we are here to meet all your plumbing and electrical needs with speed, reliability, and utmost professionalism.</p>
                    <p>At Express 24 Hour Plumbing and Electrical, our mission is to provide top-notch plumbing and electrical services that exceed our clients expectations. We aim to be the go-to service provider for all your emergency and non-emergency plumbing and electrical needs in Central Missouri. With our team of highly skilled technicians, state-of-the-art equipment, and unwavering commitment to customer satisfaction, we ensure that every job is completed with precision and attention to detail. Our goal is to build long-term relationships with our clients, based on trust, reliability, and exceptional service.</p>
                    <p>We take great pride in our commitment to prompt and reliable service. Plumbing and electrical issues can arise at any time, and we understand the urgency of resolving them quickly to minimize disruptions and potential damage. That's why we offer 24/7 emergency services to ensure that help is just a phone call away. Our team is equipped to handle a wide range of plumbing and electrical problems efficiently and effectively. Whether it’s a burst pipe, faulty wiring, or a clogged drain, you can rely on us to provide immediate assistance with professionalism and expertise.</p>
                </div>
            </div>
        </>
    )
};

export default About;