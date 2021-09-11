import React　from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const MoreMenu = (props) => {

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
      >
        <MenuItem onClick={props.handleClose} style={{"padding":"3px 16px", "min-height":"0"}}>閉じる</MenuItem>
        <MenuItem onClick={props.handleClickOpen} style={{"padding":"3px 16px", "min-height":"0"}}>編集</MenuItem>
        <MenuItem onClick={props.handleDelete} style={{"padding":"3px 16px", "min-height":"0"}} className="text-red-500">削除</MenuItem>
      </Menu>
    </div>
  )
}

export default MoreMenu
