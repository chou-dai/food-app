import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fixed: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));


const AddButton = (props) => {
  const classes = useStyles();

  return (
    <Tooltip title="新規メニュー追加" aria-label="add" className="z-20">
      <Fab
        color="primary"
        className={classes.fixed}
        style={{"opacity":"95%"}}
        onClick={props.onClick}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  )
}

export default AddButton
