import { useRouter } from 'next/router'
import React from 'react'

const RestaurantEdit = () => {
  const router = useRouter();
  
  return (
    <div>
      <section className='c-section-wrapin'>
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <h1>投稿・編集</h1>
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <div>
          <button
            className="bg-purple-600 hover:bg-purple-100 text-white hover:text-purple-600 font-bold py-3.5 px-20 border border-purple-600 rounded"
            onClick={() => router.push('/restaurant')}
          >
            保存
          </button>
        </div>
      </section>
    </div>
  )
}

export default RestaurantEdit