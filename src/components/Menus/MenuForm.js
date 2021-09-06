import React, { useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { firstSaveMenu } from '../../lib/menuLib';

const MenuForm = (props) => {
  const [name, setName] = useState(""),
        [price, setPrice] = useState(""),
        [nameError, setNameError] = useState(false),
        [priceError, setPriceError] = useState(false);
  const images = [];
  const review = {count:0,star:0};
  const noImage = {
    id: "7dndNuKZZobih9ke",
    path: "https://firebasestorage.googleapis.com/v0/b/food-app-37cd5.appspot.com/o/images%2FnoImage%2F7dndNuKZZobih9ke?alt=media&token=5244687c-73d4-45ad-b550-7aec8fac8430"
  }

  const inputName = useCallback((event) => {
    setName(event.target.value);
    setNameError(false);
  }, [setName]);
  const inputPrice = useCallback((event) => {
    setPrice(event.target.value);
    setPriceError(false);
  }, [setPrice])

  const check = () => {
    let errorCount = 0;
    if(name === '') {
      setNameError(true);
      errorCount += 1;
    }
    if(price === '') {
      setPriceError(true);
      errorCount += 1;
    }
    return errorCount;
  }

  const fireSave = async() => {
    const conf = window.confirm(`以下の内容で間違いないですか？\n\nメニュー名：${name}\n価格：${price}円`);
    if(conf === false) {
      return;
    }
    const pw = window.prompt("パスワードを入力");
    if(pw === '0011'){
      await firstSaveMenu(props.menuId, props.restId, name, price, images, noImage, review);
      window.alert("メニューを追加しました");
      window.location.reload();
    } else if(pw === null) {
      return;
    } else {
      window.alert("パスワードが違います");
    }
  }

  const save = () => {
    if (check() === 0) {
      fireSave();
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
      <DialogTitle id="alert-dialog-title" className="center">{"追加・編集"}</DialogTitle>
      <DialogContent>
        <TextField
          error={nameError}
          required id="outlined" label="メニュー名" className='mb-5' InputLabelProps={{shrink: true}}
          placeholder="ポテト" margin="normal" variant="outlined" style={{"width": "100%"}} value={name}
          onChange={inputName}
        />
        <TextField
          error={priceError}
          required id="outlined-number" label="価格" type="number" variant="outlined" value={price}
          placeholder="150" style={{"width": "100%"}} InputLabelProps={{shrink: true}}
          InputProps={{endAdornment: <InputAdornment position="end">円</InputAdornment>}}
          onChange={inputPrice}
        />
      </DialogContent>
      <DialogActions style={{"padding":"16px 24px", "justify-content": "space-between"}}>
        <Button onClick={props.onClick} color="primary">
          キャンセル
        </Button>
        <Button 
          color="primary" variant="contained" style={{"padding": "6px 30px"}}
          onClick={save}
        >
          保存
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default MenuForm
