import React, { useState } from 'react';
import { locations } from '../data/locations.json';
import { MdOutlineLocationOn } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const locationSlider = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleLocationClick = (item) => {
        setSelectedLocation(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

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
                                    <div className='locationSlider' key={index} onClick={() => handleLocationClick(item)}>
                                        <p>{item.location}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title style={{fontSize: "30px", color: "#DFDFD9"}}>Call Us At</Modal.Title>
                </Modal.Header>
                <Modal.Body className='ModalBody'>
                    {
                        selectedLocation && (
                            <>
                                <p>{selectedLocation.location} No: <a href={`tel:${selectedLocation.number_1}`} aria-label={`call us at ${selectedLocation.number_1}`}>
                                    <span>{selectedLocation.number_1}</span></a>
                                </p>

                                <p>Toll Free No: <a href={`tel:${selectedLocation.number_2}`} aria-label={`call us at ${selectedLocation.number_2}`}>
                                    <span>{selectedLocation.number_2}</span></a>
                                </p>
                            </>
                        )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <button className='modal_button' onClick={handleCloseModal}>Close</button>
                </Modal.Footer>
            </Modal> 
        </>
    )
};

export default locationSlider;