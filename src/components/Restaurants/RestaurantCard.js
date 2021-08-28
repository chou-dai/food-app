import React from 'react'
import NoImage from '../../styles/img/src/no_image.jpg'
import Image from 'next/image'
import Link from 'next/link'

const RestaurantCard = (props) => {
  return (
    <div className="p-1 w-1/2 sm:p-2 sm:w-1/3 md:w-1/4 lg:w-1/5">
      <Link href={{
        pathname: "/restaurant/[restId]",
        query: {restId: props.restId}
      }}>
        <div className=" rounded-md overflow-hidden shadow-lg hover:bg-gray-200 bg-white">
          <div style={{ position: 'relative', width: '100%', height: '150px' }}>
            <Image src={NoImage} layout="fill" objectFit="cover" />
          </div>
          <div className="px-1 center pb-2 sm:py-4">
            <div className="text-gray-800 font-bold text-xl mb-1">{props.restName}</div>
            <p className="text-gray-700 text-base">
              住所
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RestaurantCard
