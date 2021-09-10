import React from 'react';
import { RestCard } from '.';

const RestCardList = (props) => {
  return (
    <div className='justify-center'>
      <div className='flex flex-wrap'>
        {props.data.length > 0 && (
          props.data.map(rest => (
            <RestCard
              key={rest.id} restId={rest.id} name={rest.name} place={rest.place}
              pref={rest.pref} images={rest.images} noImage={rest.noImage}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default RestCardList
