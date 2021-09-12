import React　from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const MenuFilter = (props) => {

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <MenuItem onClick={props.handleClose} style={{"padding":"3px 16px", "min-height":"0"}}>評価順</MenuItem>
        <MenuItem onClick={props.handleClose} style={{"padding":"3px 16px", "min-height":"0"}}>評価数順</MenuItem>
        <MenuItem onClick={props.handleClose} style={{"padding":"3px 16px", "min-height":"0"}}>安い順</MenuItem>
        <MenuItem onClick={props.handleClose} style={{"padding":"3px 16px", "min-height":"0"}}>高い順</MenuItem>
      </Menu>
    </div>
  )
}

export default MenuFilter