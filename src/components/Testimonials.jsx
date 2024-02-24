import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clients } from "../data/clients.json";
import Card from 'react-bootstrap/Card';
import yellow_1 from '../assets/yellow_1.jpg';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
    console.log(clients);
    var settings = {
        dots: true,
        fade: true,
        waitForAnimate: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='testimonial_container'>
            <h3>Testimonials</h3>
            <div className='testimonial_icons_container'>
                <span className='testimonial_icons'>
                    <FaQuoteLeft style={{marginLeft: "30px"}} />
                    <FaQuoteRight />
                </span>
            </div>
            <div className='slider_container'>
                <Slider {...settings}>
                    {
                      clients.map((item, index) => {
                          return (
                              <div className='testimonial_card' key={index}>
                                <div className='testimonial_card_header'>
                                  <h4>{item.name}</h4>
                                  <img src={item.img_url} alt={item.name} />
                                </div>
                                <span>{item.position}</span>
                                <p>{item.disc}</p>
                              </div>
                          )
                      })
                    }
                </Slider>
            </div>
        </div>
    )
};

export default Testimonials;