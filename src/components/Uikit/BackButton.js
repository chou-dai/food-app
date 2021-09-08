import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const BackButton = (props) => {
  return (
    <Tooltip title="戻る" aria-label="change" href={props.link}>
      <Fab
        style={{"width":"48px", "height":"48px", "background":"rgba(2,2,2,0.3)", "color":"#e0e0e0"}}
        className="absolute top-2.5 left-2.5 z-1">
        <ArrowForwardIosIcon style={{"transform":"scale(-1,1)"}} />
      </Fab>
    </Tooltip>
  )
}

export default BackButton
