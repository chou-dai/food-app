import React from 'react';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';

const ImageCard = (props) => {
  return (
    <div className="center content-center h-52 w-60 mb-4 rounded-md overflow-hidden shadow-md bg-white">
      <div className="m-2 h-48">
        <Image
          src={props.image.path}
          className="shadow object-cover w-full rounded"
          style={{"backgroud": "none", "padding": 0, "width": "100%", "height": "100%"}}
          loading={<CircularProgress style={{'color': '#9400d3'}} />}
        />
      </div>
  </div>
  )
}

export default ImageCard