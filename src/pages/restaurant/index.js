import { useRouter } from 'next/router'
import React from 'react'

const RestaurantList = () => {
  const router = useRouter();
  
  return (
    <div>
      <section className='c-section-wrapin'>
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <h1>店舗一覧ページ</h1>
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <div>
          <button
            className="bg-purple-600 hover:bg-purple-100 text-white hover:text-purple-600 font-bold py-3.5 px-20 border border-purple-600 rounded"
            onClick={() => router.push('/restaurant/edit')}
          >
            店舗を追加
          </button>
        </div>
      </section>
    </div>
  )
}

export default RestaurantList
