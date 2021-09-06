import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { editSaveRestaurant, getRestaurantDetail } from '../../../lib/restaurantLib';



const RestaurantDetailEdit = ({ data }) => {
  const router = useRouter();
  const id = data.id;

  const [name, setName] = useState(data.name),
        [address, setAddress] = useState(data.address),
        [message, setMessage] = useState("");

  const inputName = useCallback((event) => {
    setName(event.target.value)
  }, [setName]);

  const inputAddress = useCallback((event) => {
    setAddress(event.target.value)
  }, [setAddress])

  const save = async() => {
    if(name === ''){
      setMessage('店舗名を入力してください');
      return;
    }
    await editSaveRestaurant(id, name, address);
    router.push(`/restaurant/${id}`);
  }
  
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
                店舗名※
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="店舗名を入力"
                value={name}
                onChange={inputName}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                住所
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="大阪府"
                value={address}
                onChange={inputAddress}
              />
            </div>
            <div className="h-7 mb-3">
              <p className="text-red-600 text-xs">{message}</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-purple-600 hover:bg-purple-100 text-white hover:text-purple-600 font-bold border border-purple-600 py-2 px-9 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={save}
              >
                保存
              </button>
              <Link href={`/restaurant/${id}`}>
                <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800">店舗詳細へ</a>
              </Link>
            </div>
          </form>
        </div>
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
      </section>
    </div>
  )
}

export const getServerSideProps = async({ params }) => {
  const data = await getRestaurantDetail(params.restId);
  return {
    props: {
      data,
    }
  }
}

export default RestaurantDetailEdit