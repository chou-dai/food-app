import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { getRestaurantDetail, saveRestaurantImage } from '../../lib/restaurantLib';
import { storage } from '../../firebase';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


const RestChangeImage = (props) => {
  const [load, setLoad] = useState(false);

  const deleteImage = async(id) => {
    return storage.ref('images').child(props.restId).child(id).delete()
  }

  const uploadImage = async(file) => {
    let blob = new Blob(file, {type: 'image/jpeg'});

    const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N=16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')

    const uploadRef = storage.ref('images').child(props.restId).child(fileName);
    const uploadTask = uploadRef.put(blob);

    await uploadTask.then(async() => {
      await uploadTask.snapshot.ref.getDownloadURL().then(async(downloadURL) => {
        const image = {id: fileName, path: downloadURL};
        await saveRestaurantImage(props.restId, image);
      });
    })
  }

  const upload = async(event) => {
    const file = event.target.files;
    if(file.length === 0) {
      return;
    }
    const conf = window.confirm("この画像に変更しますか？");
    if(conf) {
      setLoad(true);
      await getRestaurantDetail(props.restId)
        .then(async(restData) => {
          if(restData.image !== ""){
            try {
              deleteImage(restData.image.id);
            } catch(e) {}
          }
          await uploadImage(file);
          setLoad(false);
          await new Promise(resolve => setTimeout(resolve, 100));
          window.alert('変更完了');
          window.location.reload();
      })
    } else {
      return;
    }
  }

  return (
    <Dialog
      open={props.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle className="center">{"画像変更"}
        <IconButton className="absolute top-0 right-0" style={{"padding":"16px", "margin":"0 8px"}} onClick={props.onClick}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
       <h1>※画像を変更すると元の画像が破棄されます。</h1>
      </DialogContent>
      <DialogActions className="center relative w-full" style={{"padding":"16px 24px"}}>
        <Button color="primary" component="label" variant="contained" className="w-4/5 py-2 mx-auto">
          画像を変更
          <input type='file' className="hidden" accept="image/*" onChange={(event) => upload(event)}/>
        </Button>
      </DialogActions>
      <Backdrop open={load} style={{"z-index":"1400"}}>
        <CircularProgress className="text-white" />
      </Backdrop>
    </Dialog>
  )
}

export default RestChangeImage
