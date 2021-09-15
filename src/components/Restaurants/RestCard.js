import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MoreMenu, MoreVertButton } from '../Uikit';
import { RestForm } from '.';
import Backdrop from '@material-ui/core/Backdrop';
import { deleteRestaurant } from '../../lib/restaurantLib';

const RestCard = (props) => {
  const [anchorEl, setAnchorEl] = useState(null),
        [open, setOpen] = useState(false),
        [load, setLoad] = useState(false);

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
  
  const handleDelete = async() => {
    const conf = window.confirm("本当に削除しますか？\n削除をするとデータの復元ができません。");
    if(conf === false) {
      return;
    }
    const pw = window.prompt("パスワードを入力");
    if(pw === '0011'){
      setLoad(true);
      // await deleteRestaurant(props.restId);
      setLoad(false);
      await new Promise(resolve => setTimeout(resolve, 100));
      window.alert('削除完了');
      window.location.reload();
    } else if(pw === null) {
      return;
    } else {
      window.alert("パスワードが違います");
    }
  };

  const image = (props.image !== "") ? props.image : props.noImage;

  return (
    <div className="relative p-1 w-1/2 sm:p-2 sm:w-1/3 md:w-1/4 lg:w-1/5 overflow-hidden">
      <Link href={{
        pathname: "/restaurant/[restId]",
        query: {restId: props.restId}
      }}>
        <div className="rounded-md overflow-hidden shadow-lg hover:bg-gray-100 bg-white">
          <div className="m-1.5 h-24 sm:h-32">
            <Image
              src={image.path}
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
      <Backdrop open={load} style={{"z-index":"1400"}}>
        <CircularProgress className="text-white" />
      </Backdrop>
    </div>
  )
}

export default RestCard
