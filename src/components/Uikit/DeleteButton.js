import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import { IconButton } from '@material-ui/core';

const DeleteButton = (props) => {
  return (
    <Tooltip title={props.title} aria-label="change" onClick={props.onClick}>
      <IconButton style={{"background": "rgba(0,0,0,0.1)", "color": "#E5E5E5", "padding":"2px"}} className="absolute top-0 right-0 z-1">
        <HighlightOffOutlinedIcon />
      </IconButton>
    </Tooltip>
  )
}

export default DeleteButton
