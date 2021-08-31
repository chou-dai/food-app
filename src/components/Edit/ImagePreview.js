import React from 'react'

const ImagePreview = (props) => {
  return (
    
    <div className="mb-3 rounded-md overflow-hidden shadow-md hover:bg-gray-100 bg-white">
      <div className="my-2" onClick={() => props.delete(props.id)} >
        <img
          src={props.path}
          className="shadow object-cover h-32 w-32 rounded"
        />
      </div>
    </div>
  )
}

export default ImagePreview
