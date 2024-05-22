import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import { BiSolidContact } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { locations } from '../data/locations.json';
import { VscCallOutgoing } from "react-icons/vsc";
import { Helmet } from 'react-helmet'; 

const Contact = () => {
    const img = "https://express24plumbing.s3.ap-south-1.amazonaws.com/img_18.webp";
    const [userMessage, setUserMessage] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    let name, value;
    let handleInputs = (e) => {
        name=e.target.name;
        value = e.target.value;
        setUserMessage({...userMessage, [name]:value});
    };

    console.log(userMessage);
    
    return (
        <>
            <Helmet>
                <title>Contact | Express 24 Plumbing and Electrical</title>
                <meta name="description" content="Contact Express 24 Plumbing and Electrical today at 1-800-209-2709 or mail us at expressplumbing1972@yahoo.com, Find us at 2330 North Bishop Ave, Rolla, Missouri, USA, 65401" />
                <meta name='keywords' content='Missouri, Mid Missouri Areas, Lebanon, Osage Beach, Washington, Rolla, Warrensburg, Steelville, St James, Licking, Houston' />
            </Helmet>

            <div>
                <Parallax bgImage={ img } strength={300} bgImageAlt="parallaximg" blur={1}>
                    <div className='ParallaxContainer1'>
                        <div className="ParallaxDiv">
                            <div className='ParallaxPageContent'>
                                <div className='parallax_icon_c'><BiSolidContact /></div>
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>

            <div className='contact_form_container'>
                <div className="contact_item">
                    <div className="contact">
                        <div className='contact_text'>
                            <h3>We are ready to work for you</h3>
                            <h4>Request a <span>Free</span> Consultation!</h4>
                        </div>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/img_17.webp' alt='contact vector' />
                    </div>

                    <div className='contact_form'>
                        <h4>Send Us a Message</h4>
                        <form action=''>
                            <div className="input_box">
                                <input type='text' placeholder='Enter your Name' name='name' value={userMessage.name} onChange={handleInputs} required/>
                            </div>

                            <div className="input_box">
                                <input type='email' placeholder='Enter your Email' name='email' value={userMessage.email} onChange={handleInputs} required />
                            </div>

                            <div className="input_box">
                                <input type='tel' placeholder='Enter your phone' name='phone' value={userMessage.phone} onChange={handleInputs} required />
                            </div>

                            <div className="input_box">
                                <select type='text' name='service' value={userMessage.service} onChange={handleInputs} required>
                                    <option disabled selected value="">Service you want to contact</option>
                                    <option value="es">Electrician Service</option>
                                    <option value="ps">Plumbing Service</option>
                                    <option value="wdc">Water Damage Cleanup</option>
                                    <option value="etc">Other</option>
                                </select>
                            </div>

                            <div className="input_box">
                                <textarea type='text' cols="30" rows="10" placeholder='Enter your Message' name='message' value={userMessage.message} onChange={handleInputs} required></textarea>
                            </div>

                            <input className='input_button' type='submit' value="Send Us Message" />
                        </form>
                    </div>
                </div>
            </div>
            
            <div className='contact_heading'>
                <span><GrMapLocation /></span>
                <h3 style={{textAlign: 'center', fontSize: '60px', color: '#1A1A19'}}>Mid Missouri Serving Areas</h3>
            </div>

            <div className='contact_no_container'>
                {
                    locations && locations.map((item, index) => {
                        return (
                            <div className='cards' key={index}>
                                <div className='card_icon'><VscCallOutgoing /></div>
                                <h3>{item.location}</h3>
                                <p>And Surrounding Areas</p>
                                <span>Local No: </span><a href={`tel:${item.number_1}`} aria-label={`call us at ${item.number_1}`}><span>{item.number_1}</span></a><br />
                                <span>Toll Free No: </span><a href={`tel:${item.number_1}`} aria-label={`call us at ${item.number_2}`}><span>{item.number_2}</span></a>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};

export default Contact;