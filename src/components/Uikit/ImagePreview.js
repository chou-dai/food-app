import React from 'react'

const ImagePreview = (props) => {
  return (
    <div className='mb-4' onClick={() => props.delete(props.id)} >
      <img alt="プレビュー画面" src={props.path} />
    </div>
  )
}

export default ImagePreview
