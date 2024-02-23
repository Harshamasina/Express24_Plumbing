import React from 'react';
import { Parallax } from 'react-parallax';
import { VscCallOutgoing } from "react-icons/vsc";
import { BiSolidContact } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";

const Contact = () => {
    const img = "https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/contact_9.jpg";
    return (
        <>
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
                        <img src='https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/contact_10.jpg' alt='contact vector' />
                    </div>

                    <div className='contact_form'>
                        <h4>Send Us a Message</h4>
                        <form action=''>
                            <div className="input_box">
                                <input type='text' id='' placeholder='Enter your Name' required/>
                            </div>

                            <div className="input_box">
                                <input type='email' id='' placeholder='Enter your Email' required />
                            </div>

                            <div className="input_box">
                                <input type='tel' id='' placeholder='Enter your phone' required />
                            </div>

                            <div className="input_box">
                                <select type='text' id='' required>
                                    <option disabled selected>Service you want to contact</option>
                                    <option>Electrician Service</option>
                                    <option>Plumbing Service</option>
                                    <option>Water Damage Cleanup</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="input_box">
                                <textarea type='text' id='' cols="30" rows="10" placeholder='Enter your Message' required></textarea>
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
                <div className='cards'>
                    <div className='card_icon'>
                        <VscCallOutgoing />
                    </div>
                    <h3>Lebanon, Missouri</h3>
                    <p>And Surrounding Areas</p>
                    <span>1-417-344-1400</span><br />
                    <span>1-800-209-2709</span>
                </div>

                <div className='cards'>
                    <div className='card_icon'>
                        <VscCallOutgoing />
                    </div>
                    <h3>Osage Beach, Missouri</h3>
                    <p>And Surrounding Areas</p>
                    <span>1-573-842-8759</span><br />
                    <span>1-800-209-2709</span>
                </div>

                <div className='cards'>
                    <div className='card_icon'>
                        <VscCallOutgoing />
                    </div>
                    <h3>Washington, Missouri</h3>
                    <p>And Surrounding Areas</p>
                    <span>1-636-392-5021</span><br />
                    <span>1-800-209-2709</span>
                </div>

                <div className='cards'>
                    <div className='card_icon'>
                        <VscCallOutgoing />
                    </div>
                    <h3>Rolla, Missouri</h3>
                    <p>And Surrounding Areas</p>
                    <span>1-573-612-5060</span><br />
                    <span>1-800-209-2709</span>
                </div>

                <div className='cards'>
                    <div className='card_icon'>
                        <VscCallOutgoing />
                    </div>
                    <h3>Warrensburg, Missouri</h3>
                    <p>And Surrounding Areas</p>
                    <span>1-660-233-2420</span><br />
                    <span>1-800-209-2709</span>
                </div>
            </div>
        </>
    )
};

export default Contact;