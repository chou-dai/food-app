import React from 'react';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';
import BackButton from '../Uikit/BackButton';
import { PhotoButton } from '../Uikit';



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
      {/* <div className="absolute top-0 w-full h-72">
        <div className="rest-mv-glass w-4/5 h-1/2" style={{"border-radius":"10px"}}>
          <h1 className="text-3xl font-semibold center text-white" style={{"text-shadow":"1px 1px 16px black"}}>{props.name}</h1>
        </div>
      </div> */}
      <BackButton link={"/restaurant/"} />
      <PhotoButton title="画像変更" onClick={changeImage} />
    </div>
  )
}

export default RestTopImage
