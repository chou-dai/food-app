import React from 'react';
import Rating from '@material-ui/lab/Rating';

const MenuBar = (props) => {
  return (
    <div className="mr-14 text-left overflow-hidden pl-3">
      <Rating className="my-2" name="read-only" value={props.star} readOnly />
      <h1 className="font-semibold text-xl">{props.name}</h1>
      <p>{props.price}円</p>
    </div>
  )
}

export default MenuBar
