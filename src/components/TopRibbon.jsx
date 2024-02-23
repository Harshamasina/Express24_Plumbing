import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { FaGripfire } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const TopRibbon = () => {
    return (
        <>
            <div className='topRibbon_container'>
                <p className='topRibbon_text'>Have any Questions? Call Us <span className='ribbon_phone'>
                        <FiPhoneCall /> <a className='ribbon_no' href='tel:800-209-2709'>800-209-2709</a>
                    </span>
                </p>
                <div className='ribbon_icons'>
                    <span className='ribbon_fb'>
                        <a href='https://www.facebook.com/expressplumbingandElectrical' target='_blank'>
                            <FaFacebookF />
                        </a>
                    </span>
                    <span className='ribbon_bbb'>
                        <a href='https://www.bbb.org/us/mo/waynesville/profile/plumber/express-24-hr-plumbing-and-electrical-0734-310611651'>
                            <FaGripfire />
                        </a>
                    </span>
                </div>
            </div>
        </>
    )
};

export default TopRibbon;