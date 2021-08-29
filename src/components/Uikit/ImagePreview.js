import React from 'react'

const ImagePreview = (props) => {
  return (
    <div className='mb-4'>
      <img alt="プレビュー画面" src={props.path} />
    </div>
  )
}

export default ImagePreview
