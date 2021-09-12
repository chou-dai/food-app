import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';

const PhotoListButton = (props) => {
  return (
    <Tooltip title={props.title} aria-label="change" onClick={props.onClick}>
      <Fab
        style={{"width":"48px", "height":"48px", "background":"rgba(2,2,2,0.3)", "color":"#e0e0e0"}}
        className="absolute top-2.5 right-2.5 z-1">
        <PhotoLibraryOutlinedIcon />
      </Fab>
    </Tooltip>
  )
}

export default PhotoListButton
