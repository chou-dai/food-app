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
    bottom: theme.spacing(1.3),
    right: theme.spacing(1.3),
  },
}));

const RestTopImage = (props) => {
  const classes = useStyles();

  return (
    <div className="center content-center h-52 w-full overflow-hidden shadow-md bg-white">
      <div className="h-52 relative">
        <Image
          src={props.image.path}
          className="shadow object-cover w-full"
          style={{"backgroud": "none", "padding": 0, "width": "100%", "height": "100%"}}
          loading={<CircularProgress style={{'color': '#9400d3'}} />}
        />
        <Tooltip title="画像変更" aria-label="change">
          <Fab
            style={{"width":"48px", "height":"48px", "background":"rgba(2,2,2,0.3)", "color":"#e0e0e0"}}
            className={classes.absolute}
          >
            <AddPhotoAlternateOutlinedIcon />
          </Fab>
        </Tooltip>
      </div>
    </div>
  )
}

export default RestTopImage
