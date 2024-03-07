import React from 'react';
import { locations } from '../data/locations.json';
import { MdOutlineLocationOn } from "react-icons/md";

const locationSlider = () => {
    return (
        <>
            <div className='location_slider_ribbon'>
                <span><MdOutlineLocationOn /></span>
                <h3 className='locations'>Our Serving Locations</h3>
                <div className="locationSlider_container">
                    <div className="locationSlider_track">
                        {
                            locations && locations.map((item, index) => {
                                return(
                                    <div className='locationSlider' key={index}>
                                        <a href={`tel:${item.number_1}`}>
                                            <p>{item.location}</p>
                                        </a>
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

export default locationSlider;