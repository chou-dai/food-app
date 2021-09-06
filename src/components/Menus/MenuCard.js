import React from 'react';
import Link from 'next/link';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

const MenuCard = (props) => {
  const classes = useStyles();
  const images = (props.images.length > 0) ? props.images : [props.noImage];

  return (
    <div className="p-px w-1/2 sm:p-2 sm:w-1/3 md:w-1/4 lg:w-1/5">
      <Link href={{
        pathname: "/restaurant/[restId]/menu/[menuId]",
        query: {restId: props.restId, menuId: props.menuId}
      }}>
        <div className="overflow-hidden shadow-lg hover:bg-gray-100 bg-white">
          <div className="p-1">
            <div className="m-px h-24 sm:h-32">
              <Image
                src={images[0].path}
                className="shadow object-cover w-full"
                style={{"backgroud": "none", "padding": 0, "width": "100%", "height": "100%"}}
                loading={<CircularProgress style={{'color': '#9400d3'}} />}
              />
            </div>
          </div>
          <div className="px-1 center pb-1 sm:pb-4 sm:pt-2">
            <div className={classes.root, "center h-6"}>
              <Rating
                name="half-rating-read"
                defaultValue={props.star}
                precision={0.5}
                className="my-px"
                readOnly
              />
            </div>
            <div className="text-gray-800 font-bold text-xl">{props.menuName}</div>
            <p className="text-gray-700 text-base">{props.price}円</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuCard
