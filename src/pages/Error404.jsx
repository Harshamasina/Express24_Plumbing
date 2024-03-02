import React from 'react';
import { Helmet } from 'react-helmet';

const Error404 = () => {
    return (
        <>
            <Helmet>
                <title>Error 404 | Express 24 Plumbing and Electrical</title>
            </Helmet>
            <div className='error404_container'>
                <img src='https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/error404_9.jpg' alt='error404'/>
            </div>
        </>
    )
};

export default Error404;