import React from 'react';
import { ReviewCard } from '.';

const ReviewCardList = (props) => {
  return (
    <div className='center'>
      {props.data.length > 0 && (
        props.data.map(review => (
          <ReviewCard
            key={review.id} star={review.star} comment={review.comment}
          />
        ))
      )}
    </div>
  )
}

export default ReviewCardList
