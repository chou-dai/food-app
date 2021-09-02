import React from 'react'
import Link from 'next/link'

const MenuCard = (props) => {
  const images = (props.images.length > 0) ? props.images : [props.noImage];

  return (
    <div className="p-1 w-1/2 sm:p-2 sm:w-1/3 md:w-1/4 lg:w-1/5">
      <Link href={{
        pathname: "/restaurant/[restId]/menu/[menuId]",
        query: {restId: props.restId, menuId: props.menuId}
      }}>
        <div className=" rounded-md overflow-hidden shadow-lg hover:bg-gray-100 bg-white">
          <div className="p-1.5">
            <img src={images[0].path} className="shadow object-cover h-24 sm:h-32 w-full rounded" />
          </div>
          <div className="px-1 center pb-2 sm:py-4">
            <div className="text-gray-800 font-bold text-xl mb-1">{props.menuName}</div>
            <p className="text-gray-700 text-base">{props.price}円</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuCard
