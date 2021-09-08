import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';

const EditButton = (props) => {
  return (
    <Tooltip title={props.title} aria-label="add" className="z-20">
      <Fab color="primary" style={{"opacity":"95%"}} onClick={props.onClick}>
        <EditIcon />
      </Fab>
    </Tooltip>
  )
}

export default EditButton
