import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation , Autoplay } from 'swiper/modules';
import CardBooksModel from './CardBooksModel';
import {books} from '../../data/books'

const CardBooks = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    // تعيين قيمة ابتدائية عند تحميل الصفحة
    handleResize();

    // إضافة استماع لتغيير حجم النافذة
    window.addEventListener('resize', handleResize);

    // إزالة استماع عندما تنتهي العناصر
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Navigation , Autoplay]}
        className="mySwiper"
      >
        {books.map((book) => (
        <SwiperSlide><CardBooksModel id={book.id} price={book.price} title={book.title} image={book.image} reviews={book.reviews}  rating={book.rating} /></SwiperSlide>

        ))}
      </Swiper>
    </>
  )
}

export default CardBooks