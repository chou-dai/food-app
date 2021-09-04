import React from 'react';
import Rating from '@material-ui/lab/Rating';
import HTMLReactParser from 'html-react-parser';

const returnCodeToBr = (text) => {
  if(text === '') {
    return text
  } else {
    return HTMLReactParser(text.replace(/\r?\n/g, '<br/>'))
  }
}

const ReviewCard = (props) => {
  return (
    <div className="center p-1 w-full sm:w-1/2">
      <div className="px-2 py-2 rounded-md overflow-hidden shadow-lg hover:bg-gray-100 bg-white">
        <div>
          <Rating className="my-2" name="read-only" value={props.star} readOnly />
        </div>
        {props.comment !== "" && (
          <div className="mb-2">
            <p className="text-gray-700 text-base">{returnCodeToBr(props.comment)}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewCard