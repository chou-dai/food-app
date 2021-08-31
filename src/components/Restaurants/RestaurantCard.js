import React from 'react'
import NoImage from '../../styles/img/src/no_image.jpg'
import Link from 'next/link'

const RestaurantCard = (props) => {
  const images = (props.images.length > 0) ? props.images : [{path: NoImage}]

  return (
    <div className="p-1 w-1/2 sm:p-2 sm:w-1/3 md:w-1/4 lg:w-1/5">
      <Link href={{
        pathname: "/restaurant/[restId]",
        query: {restId: props.restId}
      }}>
        <div className="rounded-md overflow-hidden shadow-lg hover:bg-gray-100 bg-white">
          <div className="p-1.5">
            <img src={images[0].path} className="shadow object-cover h-24 sm:h-32 w-full rounded" />
          </div>
          <div className="px-1 center pb-1.5 sm:py-4">
            <div className="text-gray-800 font-bold text-xl">{props.restName}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RestaurantCard
