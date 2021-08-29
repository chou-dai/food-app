import React, { useCallback } from 'react'
import { storage } from '../../firebase';
import ImagePreview from './ImagePreview';

const ImageArea = (props) => {

  const uploadImage = useCallback((event) => {
    const file = event.target.files;
    let blob = new Blob(file, {type: 'image/jpeg'});

    const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N=16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')

    const uploadRef = storage.ref('images').child(fileName);
    const uploadTask = uploadRef.put(blob);

    uploadTask.then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        const newImage = {id: fileName, path: downloadURL};
        props.setImages((prevState => [...prevState, newImage]))
      });
    })
  }, [props.setImages])

  return (
    <div>
      <div className='justify-center'>
          <div className='flex flex-wrap'>
            {props.images.length > 0 && (
              props.images.map(image => <ImagePreview id={image.id} path={image.path} key={image.id} />)
            )}
          </div>
        </div>
      <div>
        <label
          className="w-full flex flex-wrap py-2 bg-white rounded-md shadow-md border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
          <div className="center flex flex-wrap">
            <i className="fas fa-cloud-upload-alt fa-3x"></i>
            <span className="my-auto right-0 text-base leading-normal">画像を追加</span>
            <svg className="m-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <input
            type='file' className="hidden" accept="image/*"
            onChange={(event) => uploadImage(event)}
          />
        </label>
      </div>
    </div>
  )
}

export default ImageArea
