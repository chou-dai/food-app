import React, { useState } from "react";
import Swiper from "react-id-swiper";
import 'swiper/css/swiper.css';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BackButton, PhotoListButton } from "../Uikit";
import { MenuAddImage } from ".";

const MenuTopImage = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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

  const images = props.images.length === 0 ? props.noImage : props.images;

  return (
    <div className="fixed top-0 center content-center h-52 w-full rounded-md overflow-hidden shadow-md bg-white">
      <Swiper {...params}>
        {images.map(image => (
          <div key={image.id} className='swiper-slide'>
            <div className="m-1" style={{"height":"12.5rem"}}>
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
      <BackButton link={`/restaurant/${props.restId}/`} />
      <PhotoListButton title="画像一覧" onClick={handleClickOpen} />
      <MenuAddImage open={open} restId={props.restId} menuId={props.menuId} images={props.images} onClick={handleClose} />
    </div>
  )
}

export default MenuTopImage
