import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MoreMenu, MoreVertButton } from '../Uikit';
import { RestForm } from '.';

const RestCard = (props) => {
  const [anchorEl, setAnchorEl] = useState(null),
        [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    window.alert("削除処理")
  };

  const images = (props.images.length > 0) ? props.images : [props.noImage];

  return (
    <div className="relative p-1 w-1/2 sm:p-2 sm:w-1/3 md:w-1/4 lg:w-1/5 overflow-hidden">
      <Link href={{
        pathname: "/restaurant/[restId]",
        query: {restId: props.restId}
      }}>
        <div className="rounded-md overflow-hidden shadow-lg hover:bg-gray-100 bg-white">
          <div className="m-1.5 h-24 sm:h-32">
            <Image
              src={images[0].path}
              className="shadow object-cover w-full rounded"
              style={{"backgroud": "none", "padding": 0, "width": "100%", "height": "100%"}}
              loading={<CircularProgress style={{'color': '#9400d3'}} />}
            />
          </div>
          <div className="px-1 center pb-1.5 sm:py-4">
            <div className="text-gray-800 font-bold text-xl">{props.name}</div>
          </div>
        </div>
      </Link>
      <MoreVertButton size="50px" bottom="0px" rigtht="-5px" open={Boolean(anchorEl)} onClick={handleClick} />
      <MoreMenu anchorEl={anchorEl} handleClose={handleClose} handleClickOpen={handleClickOpen} handleDelete={handleDelete} />
      <RestForm open={open} restId={props.restId} name={props.name} place={props.place} pref={props.pref} onClick={handleClickClose} />
    </div>
  )
}

export default RestCard
