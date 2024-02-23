import { useState } from "react";
import { slides } from "../data/carousel.json";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill  } from "react-icons/bs";
import { BiSquareRounded } from "react-icons/bi";
import HomeContent from "../components/HomeContent";
// import clean from '../assets/clean.jpg';
// import dirty from '../assets/dirty.jpg';

const Home = () => {
    const [slide, setSlide] = useState(0);
    
    const nextSlide = () => {
        setSlide(slide === slides.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? slides.length - 1 : slide - 1);
    };

    return (
        <>
            <section className="home_carousel">
                <BsArrowLeftCircleFill className="arrow arrow_left" onClick={prevSlide} />
                {
                    slides.map((item, index) => (
                        <div className={slide === index ? "carousel_item" : "carousel_item_hidden"} key={index}>
                            <img className="carousel_pics" src={item.src} alt={item.alt} />
                            <div className="carousel_text">
                                <h1>{item.heading}</h1>
                                <h3>{item.caption}</h3>
                            </div>
                        </div>
                    ))
                }
                <BsArrowRightCircleFill className="arrow arrow_right" onClick={nextSlide} />

                {/* <span className="indicators">
                    {
                        slides.map((_, index) => (
                            <BiSquareRounded
                                className={slide === index ? "indicator" : "indicator_inactive"}
                                key={index}
                                onClick={() => setSlide(index)}
                            />
                        ))
                    }
                </span> */}
            </section>

            {/* <div className="images_slider_container">
                <img src={dirty} alt="dirty pipe" />
                <img src={clean} alt="clean pipe" />
                <div className="images_slider"></div>
            </div> */}
            <HomeContent />
        </>
    );
};

export default Home;