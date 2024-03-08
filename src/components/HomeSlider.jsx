import React, { useEffect, useState } from 'react';
import { slides } from "../data/carousel.json";
import { LiaLessThanSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";

const HomeSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide(prevActiveSlide => (prevActiveSlide + 1) % slides.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setActiveSlide(prevActiveSlide => (prevActiveSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveSlide(prevActiveSlide => (prevActiveSlide - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    return (
        <div className='slider'>
            <div className='list'>
                {
                    slides && slides.map((item, index) => {
                        return (
                            <div className={`item ${index === activeSlide ? 'active' : ''}`} key={index}>
                                <img src={item.src} alt={item.alt} />
                                <div className="content">
                                    <h1>{item.heading}</h1>
                                    <h2>{item.caption}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='arrows_slider'>
                <button onClick={prevSlide} aria-label='click to go to next image in the slider'><LiaLessThanSolid /></button>
                <button onClick={nextSlide} aria-label='click to go to previous image in the slider'><LiaGreaterThanSolid /></button>
            </div>

            <div className="thumbnail">
                {
                    slides && slides.map((item, index) => {
                        return(
                            <div className={`item ${index === activeSlide ? 'active' : ''}`} key={index} onClick={() => goToSlide(index)}>
                                <img src={item.src} alt={item.alt} />
                                <div className='content'>
                                    {item.subCaption}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default HomeSlider;