import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const RestaurantEdit = () => {
  const router = useRouter();
  
  return (
    <div>
      <section className='c-section-wrapin'>
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <h1 className='font-bold text-2xl text-purple-700'>投稿・編集</h1>
        <div className='module-spacer--small' />
        <div className="w-full max-w-xs center">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                店舗名
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="店舗名を入力"　/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                住所
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="大阪府" />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-purple-600 hover:bg-purple-100 text-white hover:text-purple-600 font-bold border border-purple-600 py-2 px-9 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => router.push('/restaurant')}
              >
                保存
              </button>
              <Link href="/restaurant">
                <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800">店舗一覧へ</a>
              </Link>
            </div>
          </form>
        </div>
        <div>
        </div>
      </section>
    </div>
  )
}

export default RestaurantEdit