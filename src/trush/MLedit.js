import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import { firstSaveMenu } from '../../../../lib/menuLib';

const MenuEdit = () => {
  const id = '';
  const router = useRouter();
  const {restId} = router.query;

  const [name, setName] = useState(""),
        [price, setPrice] = useState(""),
        [message, setMessage] = useState("");
  
  const images = [];
  const review = {count:0,star:0};
  const noImage = {
    id: "7dndNuKZZobih9ke",
    path: "https://firebasestorage.googleapis.com/v0/b/food-app-37cd5.appspot.com/o/images%2FnoImage%2F7dndNuKZZobih9ke?alt=media&token=5244687c-73d4-45ad-b550-7aec8fac8430"
  }

  const inputName = useCallback((event) => {
    setName(event.target.value)
  }, [setName]);

  const inputPrice = useCallback((event) => {
    setPrice(event.target.value)
  }, [setPrice])

  const save = async() => {
    if(name === '' && price === '') {
      setMessage('メニュー名と価格を入力してください');
      return;
    } else if(name === '') {
      setMessage('店舗名を入力してください');
      return;
    } else if(price === '') {
      setMessage('価格を入力してください');
      return;
    }
    await firstSaveMenu(id, restId, name, price, images, noImage, review);
    router.push(`/restaurant/${restId}/menu/`)
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
                メニュー名※
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="ポテト"
                onChange={inputName}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                価格※
              </label>
              <input
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
               type="text"
               placeholder="100"
               onChange={inputPrice}
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
              <Link href={`/restaurant/${restId}/menu`}>
                <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800">メニューへ</a>
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

export default MenuEdit