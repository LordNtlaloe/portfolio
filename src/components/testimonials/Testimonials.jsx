import React from "react";
import './Testimonials.css';
import {
    Data
} from "./Data";
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
    Pagination
} from "swiper";


export default function Testimonials() {
    return (
        <section className="tesimonials section container" id="testimonials">
            <h2 className="section-title">Testimonials</h2>
            <span className="section-subtitle">What Others Say</span>
            <Swiper className="testimonials-container mySwiper"
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={
                    {
                        clickable: true
                    }
                }
                breakpoints={
                    {
                        576: {
                            slidesPerView: 2
                        },
                        786: {
                            slidesPerView: 2,
                            spaceBetween: 48
                        }

                    }
                }
                modules={
                    [Pagination]
            }>

                {/* <div className="testimonials-content"> */}
                {
                Data.map(({
                    id,
                    image,
                    title,
                    description
                }) => {
                    return (
                        <SwiperSlide className="testimonials-card"
                            key={id}>
                            <img src={image}
                                className="testimonial-image"
                                alt=""/>
                            <h3 className="testimonial-name">
                                {title}</h3>
                            <p className="testimonial-desription">
                                {description}</p>
                        </SwiperSlide>
                    )
                })
            } </Swiper>
        </section>
    )
}
