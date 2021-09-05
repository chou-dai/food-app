import React from 'react';
import Button from '@material-ui/core/Button';

const PrimalyButton = (props) => {
  return (
    <div>
      <Button style={{"padding": props.padding}} variant="contained" className="bg-purple-600 font-bold" color="primary" href={props.link}>
        {props.text}
      </Button>
    </div>
  )
}

export default PrimalyButton
