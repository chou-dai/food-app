import React from 'react';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';
import BackButton from '../Uikit/BackButton';
import { PhotoButton } from '../Uikit';
import PlaceIcon from '@material-ui/icons/Place';

const RestTopImage = (props) => {
  const changeImage = () => {
    window.alert("画像変更処理")
  }

  return (
    <div className="fixed top-0 content-center w-full shadow-md bg-white" style={{"height":"17.5rem"}}>
      <Image
        src={props.image.path}
        className="shadow object-cover"
        style={{"backgroud":"none", "padding":0, "width":"100%", "height":"100%"}}
        loading={<CircularProgress style={{'color': '#9400d3'}} />}
      />
      <div className="absolute top-0 w-full h-56 px-5 pt-5 pb-3">
        <div className="rest-mv-glass w-full h-full" style={{"border-radius":"10px"}}>
          <h1 className="text-3xl mt-9 font-semibold center text-white" style={{"text-shadow":"1px 1px 16px black"}}>{props.name} {props.place}</h1>
          <p className="relative text-xl mt-3 font-semibold center text-white" style={{"text-shadow":"1px 1px 16px black"}}>
            <PlaceIcon style={{"padding-bottom":"2px"}} /><span>{props.pref}</span></p>
        </div>
      </div>
      <BackButton link={"/restaurant/"} />
      <PhotoButton title="画像変更" onClick={changeImage} />
    </div>
  )
}

export default RestTopImage
