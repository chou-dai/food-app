import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';

const MoreVertButton = (props) => {
  return (
    <IconButton
      style={{
        "width": props.size,
        "height": props.size,
        "background": "rgba(0,0,0,0.0)",
        "color": "#606060",
        "bottom": props.bottom,
        "right": props.rigtht,
      }}
      className="absolute z-1"
      aria-label="More"
      aria-owns={props.open ? 'long-menu' : undefined}
      aria-haspopup="true"
      onClick={props.onClick}
    >
      <MoreVertIcon className="text-3xl" />
    </IconButton>
  )
}

export default MoreVertButton
