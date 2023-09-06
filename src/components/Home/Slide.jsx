import React from 'react'
import 'swiper/css';
import {Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slide.css'
import  one from '../Assets/one.jpg'
import  two from '../Assets/two.jpg'
import  three from '../Assets/three.jpg'
import  four from '../Assets/four.jpg'


const Slide = () => {
  return (
    <>
          <Swiper autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}  modules={[ Autoplay]} className="mySwiper">
        <SwiperSlide><img src={one} alt="one" /></SwiperSlide>
        <SwiperSlide><img src={two} alt="one" /></SwiperSlide>
        <SwiperSlide><img src={three} alt="one" /></SwiperSlide>
        <SwiperSlide><img src={four} alt="one" /></SwiperSlide>
      </Swiper>

    </>
  )
}

export default Slide