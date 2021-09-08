import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const AddButton = (props) => {
  return (
    <Tooltip title="新規メニュー追加" aria-label="add" className="z-20">
      <Fab color="primary" className="fixed" style={{"opacity":"95%", "bottom":"16px", "right":"24px"}} onClick={props.onClick}>
        <AddIcon />
      </Fab>
    </Tooltip>
  )
}

export default AddButton
