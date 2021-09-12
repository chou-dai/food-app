import React, { useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { editSaveRestaurant, firstSaveRestaurant } from '../../lib/restaurantLib';

const RestForm = (props) => {
  const [name, setName] = useState(props.name),
        [place, setPlace] = useState(props.place),
        [pref, setPref] = useState(props.pref),
        [nameError, setNameError] = useState(false),
        [placeError, setPlaceError] = useState(false),
        [prefError, setPrefError] = useState(false);
  const image = "";
  const noImage = {
    id: "7dndNuKZZobih9ke",
    path: "https://firebasestorage.googleapis.com/v0/b/food-app-37cd5.appspot.com/o/images%2FnoImage%2F7dndNuKZZobih9ke?alt=media&token=5244687c-73d4-45ad-b550-7aec8fac8430"
  }

  const inputName = useCallback((event) => {
    setName(event.target.value);
    setNameError(false);
  }, [setName]);
  const inputPlace = useCallback((event) => {
    setPlace(event.target.value);
    setPlaceError(false);
  }, [setPlace]);
  const inputPref = useCallback((event, newValue) => {
    setPref(newValue);
    setPrefError(false);
  }, [setPref]);

  const check = () => {
    let errorCount = 0;
    if(name === '') {
      setNameError(true);
      errorCount += 1;
    }
    if(place === '') {
      setPlaceError(true);
      errorCount += 1;
    }
    if(pref === null) {
      setPrefError(true);
      errorCount += 1;
    }
    console.log(errorCount);
    return errorCount;
  }

  const fireSave = async() => {
    const conf = window.confirm(`以下の内容で間違いないですか？\n\n店名：${name}\n店舗名：${place}\n都道府県：${pref}`);
    if(conf === false) {
      return;
    }
    const pw = window.prompt("パスワードを入力");
    if(pw === '0011'){
      if(props.restId === "") {
        await firstSaveRestaurant(props.restId, name, place, pref, image, noImage);
        window.alert("店舗を追加しました");
      } else {
        await editSaveRestaurant(props.restId, name, place, pref);
        window.alert("店舗情報を変更しました")
      }
      window.location.reload();
    } else if(pw === null) {
      return;
    } else {
      window.alert("パスワードが違います");
    }
  }

  const save = () => {
    console.log(pref);
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
          required label="店名" className='mb-5' InputLabelProps={{shrink: true}}
          placeholder="店舗名を入力" margin="normal" variant="outlined" style={{"width": "100%"}} value={name}
          onChange={inputName}
        />
        <TextField
          error={placeError}
          required label="店舗名" className='mb-5' variant="outlined" value={place}
          placeholder="本店" style={{"width": "100%"}} InputLabelProps={{shrink: true}}
          onChange={inputPlace}
        />
        <Autocomplete
          options={prefOptions}
          getOptionLabel={(option) => option}
          style={{"width":"100%"}}
          onChange={inputPref}
          defaultValue={props.pref}
          renderInput={(params) => 
            <TextField 
              error={prefError}
              {...params} required label="都道府県" variant="outlined" placeholder="東京都"
              InputLabelProps={{shrink: true}} value={pref}
            />}
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

export default RestForm


const prefOptions = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県",
  "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県",
  "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];