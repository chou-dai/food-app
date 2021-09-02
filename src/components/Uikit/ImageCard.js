import React from 'react';

const ImageCard = (props) => {
  return (
    <div className="center content-center h-52 w-60 mb-4 rounded-md overflow-hidden shadow-md bg-white">
      <img
        src={props.image.path}
        className="shadow object-cover w-56 h-48 mt-2 rounded"
      />
    </div>
  )
}

export default ImageCard