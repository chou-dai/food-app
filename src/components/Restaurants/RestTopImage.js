import React from 'react';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';

const RestTopImage = (props) => {
  return (
    <div className="center content-center h-52 w-full overflow-hidden shadow-md bg-white">
      <div className="h-52">
        <Image
          src={props.image.path}
          className="shadow object-cover w-full"
          style={{"backgroud": "none", "padding": 0, "width": "100%", "height": "100%"}}
          loading={<CircularProgress style={{'color': '#9400d3'}} />}
        />
      </div>
    </div>
  )
}

export default RestTopImage
