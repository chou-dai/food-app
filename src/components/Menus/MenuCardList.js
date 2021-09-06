import React from 'react'
import MenuCard from './MenuCard'

const MenuCardList = (props) => {
  return (
    <div className='justify-center'>
      <div className='flex flex-wrap'>
        {props.data.length > 0 && (
          props.data.map(menu => (
            <MenuCard
              key={menu.id} restId={props.restId} menuId={menu.id} menuName={menu.name}
              price={menu.price} images={menu.images} noImage={menu.noImage} star={menu.review.star}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default MenuCardList
