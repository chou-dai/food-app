import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import { deleteRestaurant, getRestaurantDetail } from '../../../lib/restaurantLib';
import { ImageCard } from '../../../components/Uikit';

const RestaurantDetail = ({ data }) => {
  const router = useRouter();
  const {restId} = router.query;
  const images = (data.images.length > 0) ? data.images : [data.noImage];

  const deleteRest = () => {
    const pw = window.prompt("パスワードを入力");
    if(pw === '0011'){
      deleteRestaurant(restId)
      window.alert("削除に成功しました")
    } else {
      window.alert("パスワードが違います")
    }
  }
  
  return (
    <div>
      <section className='c-section-wrapin'>
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <h1> 店舗詳細: {data.name}</h1>
        <div className='module-spacer--small' />
        <ImageCard id={images[0].path} path={images[0].path} />
        <div className='module-spacer--small' />
        <h2>住所：{data.address === "" ? "未登録":data.address}</h2>
        <div className='module-spacer--small' />
        <div>
          <button
            className="bg-purple-600 hover:bg-purple-100 text-white hover:text-purple-600 font-bold py-3.5 px-20 border border-purple-600 rounded"
            onClick={() => router.push(`/restaurant/${restId}/menu`)}
          >
            メニューを見る
          </button>
        </div>
        <div className='module-spacer--small' />
        <div className="mb-3">
          <Link href={`/restaurant/${restId}/edit`}>
            <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800">店舗情報を編集</a>
          </Link>
        </div>
        <div className="mb-3">
          <Link href="/restaurant">
            <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800">店舗一覧へ</a>
          </Link>
        </div>
        <div>
          <a 
            className="cursor-pointer inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
            onClick={deleteRest}
          >店舗を削除</a>
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

export default RestaurantDetail