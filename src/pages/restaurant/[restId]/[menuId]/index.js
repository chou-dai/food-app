import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';
import { ImageCard, ImageSwiper } from '../../../../components/Uikit';
import { MenuImageButton } from '../../../../components/Menus';
import { calcStar } from '../../../../lib/reviewLib';
import { getMenuDetail } from '../../../../lib/menuLib';

const MenuDetail = ({ data }) => {
  const router = useRouter();
  const {restId} = router.query;
  const {menuId} = router.query;

  calcStar(restId, menuId);

  const deleteRest = () => {
    const pw = window.prompt("パスワードを入力");
    if(pw === '0011'){
      window.alert("削除に成功しました")
    } else if(pw === null) {
      return;
    } else {
      window.alert("パスワードが違います")
    }
  }
  
  return (
      <div>
        <section className='center'>
          <div className='module-spacer--small' />
          <div className='module-spacer--small' />
          <h1>メニュー詳細： {data.name}</h1>
          <h1 className="mt-1">{data.price}円</h1>

          <div className='module-spacer--small' />
          {data.images.length === 0 ? (
            <ImageCard image={data.noImage} />
          ):(
            <ImageSwiper images={data.images} />
          )}
          <div className="mb-4">
            <MenuImageButton menuId={menuId} restId={restId} images={data.images} />
          </div>
          <div>
            <button
              className="bg-purple-600 hover:bg-purple-100 text-white hover:text-purple-600 font-bold py-3.5 px-20 border border-purple-600 rounded"
              onClick={() => router.push(`/restaurant/${restId}/${menuId}/review`)}
            >
              レビューを見る
            </button>
          </div>
          <div className='module-spacer--small' />
          <div className="mb-3">
            <Link href={`/restaurant/${restId}/`}>
              <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800">メニューページ</a>
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
  const data = await getMenuDetail(params.restId, params.menuId);
  return {
    props: {
      data,
    }
  }
}

export default MenuDetail