import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';

const AddPhotoButton = (props) => {
  return (
    <Tooltip title={props.title} aria-label="change" onClick={props.onClick}>
      <Fab
        style={{"width":"48px", "height":"48px", "background":"rgba(2,2,2,0.3)", "color":"#e0e0e0"}}
        className="absolute top-2.5 right-2.5 z-1">
        <AddPhotoAlternateOutlinedIcon />
      </Fab>
    </Tooltip>
  )
}

export default AddPhotoButton
