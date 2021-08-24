import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const RestaurantEdit = () => {
  const router = useRouter();
  const {restId} = router.query;
  
  return (
    <div>
      <section className='c-section-wrapin'>
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <h1 className='font-bold text-2xl text-purple-700'>投稿・編集</h1>
        <div className='module-spacer--small' />
        <div class="w-full max-w-xs center">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                店舗名
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="店舗名を入力"　/>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                住所
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="大阪府" />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-purple-600 hover:bg-purple-100 text-white hover:text-purple-600 font-bold border border-purple-600 py-2 px-9 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => router.push(`/restaurant/${restId}`)}
              >
                保存
              </button>
              <Link href={`/restaurant/${restId}`}>
                <a class="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800">店舗詳細へ</a>
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