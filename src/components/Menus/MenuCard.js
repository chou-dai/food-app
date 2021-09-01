import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MenuCard = (props) => {
  return (
    <div className="p-1 w-1/2 sm:p-2 sm:w-1/3 md:w-1/4 lg:w-1/5">
      <Link href={{
        pathname: "/restaurant/[restId]/menu/[menuId]",
        query: {restId: props.restId, menuId: props.menuId}
      }}>
        <div className=" rounded-md overflow-hidden shadow-lg hover:bg-gray-200 bg-white">
          <div style={{ position: 'relative', width: '100%', height: '150px' }}>
            {/* <Image src={NoImage} layout="fill" objectFit="cover" /> */}
          </div>
          <div className="px-1 center pb-2 sm:py-4">
            <div className="text-gray-800 font-bold text-xl mb-1">ポテト</div>
            <p className="text-gray-700 text-base">
              100円
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuCard
