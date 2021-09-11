import React, { useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import { calcStar, firstSaveReview } from '../../lib/reviewLib';


const ReviewForm = (props) => {
  const [star, setStar] = useState(1),
        [comment, setComment] = useState("");

  const inputStar = useCallback((event, newStar) => {
    setStar(newStar);
  }, [setStar]);
  const inputComment = useCallback((event) => {
    setComment(event.target.value);
  }, [setComment]);

  const save = async() => {
    const conf = window.confirm(`以下の内容で間違いないですか？\n\n評価：${star}\nコメント：${comment ? comment : "なし"}`);
    if(conf === false) {
      return;
    }
    const pw = window.prompt("パスワードを入力");
    if(pw === '0011'){
      await firstSaveReview(props.reviewId, props.restId, props.menuId, star, comment)
        .then(async() => {
          await calcStar(props.restId, props.menuId);
          window.alert("レビューを投稿しました");
          window.location.reload();
        })
    } else if(pw === null) {
      return;
    } else {
      window.alert("パスワードが違います");
    }
  }

  return (
    <Dialog
      open={props.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" className="center">{"投稿・編集"}</DialogTitle>
      <DialogContent>
        <div className="mb-6 center">
          <Rating　
            style={{fontSize: "2.8rem"}} name="simple-controlled"
            value={star} onChange={inputStar}
          />
        </div>
        <TextField
          multiline id="outlined-number" label="コメント" type="number" variant="outlined" value={comment}
          placeholder="コメントを入力" style={{"width": "100%"}} InputLabelProps={{shrink: true}} rows={3}
          onChange={inputComment}
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

export default ReviewForm
