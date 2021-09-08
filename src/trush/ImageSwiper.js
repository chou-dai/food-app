import React, { useState } from "react";
import Swiper from "react-id-swiper";
import 'swiper/css/swiper.css';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';

const ImageSwiper = (props) => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 10,
  }

  const images = props.images

  return (
    <div className="center content-center h-52 w-full mb-4 rounded-md overflow-hidden shadow-md bg-white">
      <Swiper {...params}>
        {images.map(image => (
          <div key={image.id} className='swiper-slide'>
            <div className="m-2 h-48">
              <Image
                src={image.path}
                className="shadow object-cover w-full rounded"
                style={{"backgroud": "none", "padding": 0, "width": "100%", "height": "100%"}}
                loading={<CircularProgress style={{'color': '#9400d3'}} />}
              />
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSwiper