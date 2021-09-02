import React, { useState } from "react";
import Swiper from "react-id-swiper";
import 'swiper/css/swiper.css';

const ImageSwiper = (props) => {
  const params = {
    lazy: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    spaceBetween: 10,
  }

  const images = props.images

  return (
    <div className="center content-center h-52 w-60 mb-4 rounded-md overflow-hidden shadow-md bg-white">
      <Swiper {...params}>
        {images.map(image => (
          <div key={image.id} className='swiper-slide'>
            <img className="shadow object-cover w-56 h-48 mt-2 rounded swiper-lazy" src={image.path} />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </div>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSwiper