import React from 'react';
import { Link } from 'react-router-dom';

const ContactRibbon = () => {
    return (
        <div className="contact_ribbon_container">
            <div className="contact_ribbon">
                <div className='contact_ribbon_content'>
                    <h3>All Your Electrical and Plumbing Needs</h3>
                    <p>We can your wire and plumb you right!</p>
                </div>
                <Link to='/contact' className='contact_ribbon_link'>Free Consultation</Link>
            </div>
        </div>
    )
};

export default ContactRibbon;