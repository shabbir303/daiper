"use client"

import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);

  // let appendNumber = 4;
  // let prependNumber = 1;

  // const prepend2 = () => {
  //   swiperRef.prependSlide([
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
  //   ]);
  // };

  // const prepend = () => {
  //   swiperRef.prependSlide(
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
  //   );
  // };

  // const append = () => {
  //   swiperRef.appendSlide(
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
  //   );
  // };

  // const append2 = () => {
  //   swiperRef.appendSlide([
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
  //   ]);
  // };

  return (
    <>
      <Swiper
        slidesPerView={3} // Display 3 slides at a time
        centeredSlides={true}
        spaceBetween={30}
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 2500, // Autoplay delay in milliseconds
          disableOnInteraction: false, // Autoplay continues after interaction
        }}
        // pagination={{
        //   type: "fraction",
        // }}
        breakpoints={{
          320: { slidesPerView: 1 }, // Small screens: 1 slide
          768: { slidesPerView: 2 }, // Medium screens: 2 slides
          1024: { slidesPerView: 3 }, // Large screens: 3 slides
      }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='rounded-xl'> <Image src="/d1.jpg" alt='buledi'
          fill
          className='object-cover rounded-xl' /> </SwiperSlide>
        <SwiperSlide className='rounded-xl'> <Image src="/d2.jpg" alt='light'
          fill
          className='object-cover rounded-xl' /> </SwiperSlide>
        <SwiperSlide className='rounded-xl'> <Image src="/d3.jpg" alt='red'
          fill
          className='object-cover rounded-xl' /> </SwiperSlide>
        <SwiperSlide className='rounded-xl'> <Image src="/d4.jpg" alt='yellowdi'
          fill
          className='object-cover rounded-xl' /> </SwiperSlide>
        
      </Swiper>

    </>
  );
}
