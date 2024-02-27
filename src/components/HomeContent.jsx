import React from 'react';
import dirty from '../assets/dirty.jpg';
import clean from '../assets/clean.jpg';
import { MdPlumbing } from "react-icons/md";
import CoatingPipe from '../assets/CoatingPipe.mp4';

const HomeContent = () => {
    return (
        <>
            <div className='home_info'>
                <h2>Our Newest Service:</h2>
                <span><MdPlumbing /></span>
                <h4>Sewer Lining and Trenchless Repair</h4>
            </div>

            <div className="home_slider_container">
                <div className='home_slider'>
                    <img src={dirty} alt='pipe before' />
                    <img src={clean} alt='pipe after' />
                </div>
            </div>

            <div className='home_video'>
                <video src={CoatingPipe} controls></video>
                <p>We can repair your sewer line without having to break your floor dig up your yard or anything like that. We can take your Sewer from needing repair to looking like brand new pipe underground with our high-tech specialized equipment. 
                    <span>Please contact us at 1-800-209-2709</span>
                </p>
            </div>
        </>
    );
};

export default HomeContent;