import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { storage } from '../../firebase';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Image from 'material-ui-image';
import { getMenuDetail, saveMenuImage } from '../../lib/menuLib';
import { DeleteButton } from '../Uikit';


const MenuAddImage = (props) => {
  const [load, setLoad] = useState(false);

  const uploadImage = async(file, imageData) => {
    let blob = new Blob(file, {type: 'image/jpeg'});

    const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N=16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')

    const uploadRef = storage.ref('images').child(props.restId).child(props.menuId).child(fileName);
    const uploadTask = uploadRef.put(blob);

    await uploadTask.then(async() => {
      await uploadTask.snapshot.ref.getDownloadURL().then(async(downloadURL) => {
        const newImage = {id: fileName, path: downloadURL};
        const images = [...imageData, newImage];
        await saveMenuImage(props.menuId, props.restId, images);
      });
    })
  }

  const upload = async(event) => {
    const file = event.target.files;
    if(file.length === 0) {
      return;
    }
    const conf = window.confirm("この画像を追加しますか？");
    if(conf) {
      const pw = window.prompt("パスワードを入力");
      if(pw === '0011'){
        setLoad(true);
        await getMenuDetail(props.restId, props.menuId)
          .then(async(data) => {
            await uploadImage(file, data.images);
            setLoad(false);
            await new Promise(resolve => setTimeout(resolve, 100));
            window.alert('追加完了');
            window.location.reload();
          })
      } else if(pw === null) {
        return;
      } else {
        window.alert("パスワードが違います");
      }
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
      <DialogTitle className="center">{"画像一覧"}
        <IconButton className="absolute top-0 right-0" style={{"padding":"16px", "margin":"0 8px"}} onClick={props.onClick}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent style={{"padding":"2px 10px", "max-height":"19.5rem"}}>
        <ImageList cols={3}>
          {props.images.map((image) => (
            <ImageListItem key={image.id} style={{"height":"6.5rem", "padding":"1px"}}>
              <Image src={image.path}
                className="shadow object-cover w-full"
                style={{"backgroud": "none", "padding": 0, "width": "100%", "height": "100%"}}
                loading={<CircularProgress style={{'color': '#9400d3'}}/>}
              />
              {/* <DeleteButton title="削除" /> */}
            </ImageListItem>
          ))}
        </ImageList>
      </DialogContent>
      <DialogActions className="center relative w-full" style={{"padding":"16px 24px"}}>
        <Button color="primary" component="label" variant="contained" className="w-4/5 py-2 mx-auto">
          画像を追加
          <input type='file' className="hidden" accept="image/*" onChange={(event) => upload(event)}/>
        </Button>
      </DialogActions>
      <Backdrop open={load} style={{"z-index":"1400"}}>
        <CircularProgress className="text-white" />
      </Backdrop>
    </Dialog>
  )
}

export default MenuAddImage
