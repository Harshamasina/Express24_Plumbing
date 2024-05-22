import React from 'react';

const HomeContent = () => {
    return (
        <>
            <div className='home_info'>
                <h3>Our Newest Service:</h3>
                <h4>Sewer Lining and Trenchless Repair</h4>
            </div>

            <div className="home_slider_container">
                <div className='home_slider'>
                    <img src="https://express24plumbing.s3.ap-south-1.amazonaws.com/img_5.webp" alt='pipe before' />
                    <img src="https://express24plumbing.s3.ap-south-1.amazonaws.com/img_6.webp" alt='pipe after' />
                </div>
            </div>

            <div className='home_video'>
                <video src="https://express24plumbing.s3.ap-south-1.amazonaws.com/video_1.mp4" controls></video>
                <p>We can repair your sewer line without having to break your floor dig up your yard or anything like that. We can take your Sewer from needing repair to looking like brand new pipe underground with our high-tech specialized equipment. 
                    <span>Please contact us at 1-800-209-2709</span>
                </p>
            </div>
        </>
    );
};

export default HomeContent;