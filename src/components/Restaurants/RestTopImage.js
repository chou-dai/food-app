import React from 'react';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(4.8),
    right: theme.spacing(1.3),
  },
}));

const RestTopImage = (props) => {
  const classes = useStyles();

  return (
    <div className="fixed top-0 content-center h-80 w-full shadow-md bg-white">
      <Image
        src={props.image.path}
        className="shadow object-cover"
        style={{"backgroud":"none", "padding":0, "width":"100%", "height":"100%"}}
        loading={<CircularProgress style={{'color': '#9400d3'}} />}
      />
      <div className="rest-mv-glass w-4/5 h-1/2">
        <h1 className="text-3xl font-semibold center text-white" style={{"text-shadow":"1px 1px 16px black"}}>{props.name}</h1>
      </div>
      <Tooltip title="画像変更" aria-label="change">
        <Fab
          style={{"width":"48px", "height":"48px", "background":"rgba(2,2,2,0.3)", "color":"#e0e0e0"}}
          className={classes.absolute}
        >
          <AddPhotoAlternateOutlinedIcon />
        </Fab>
      </Tooltip>
    </div>
  )
}

export default RestTopImage
