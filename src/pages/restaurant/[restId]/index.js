import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import { deleteRestaurant, getRestaurantDetail } from '../../../lib/restaurantLib';
import { RestImageButton } from '../../../components/Restaurants';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { getMenuList } from '../../../lib/menuLib';
import { MenuCard } from '../../../components/Menus';

const RestaurantDetail = ({ restData, menuData }) => {
  console.log(restData);
  const router = useRouter();
  const {restId} = router.query;

  const deleteRest = () => {
    const pw = window.prompt("パスワードを入力");
    if(pw === '0011'){
      deleteRestaurant(restId)
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
        {restData.images.length === 0 ? (
          <div className="center content-center h-52 w-full overflow-hidden shadow-md bg-white">
            <div className="h-52">
              <Image
                src={restData.noImage.path}
                className="shadow object-cover w-full"
                style={{"backgroud": "none", "padding": 0, "width": "100%", "height": "100%"}}
                loading={<CircularProgress style={{'color': '#9400d3'}} />}
              />
            </div>
          </div>
        ):(
          <div className="center content-center h-52 w-full overflow-hidden shadow-md bg-white">
            <div className="h-52">
              <Image
                src={restData.images[0].path}
                className="shadow object-cover w-full"
                style={{"backgroud": "none", "padding": 0, "width": "100%", "height": "100%"}}
                loading={<CircularProgress style={{'color': '#9400d3'}} />}
              />
            </div>
          </div>
        )}
        <Paper className="w-full mt-1 py-2" elevation={1}>
          <h1> 店舗詳細: {restData.name}</h1>
          <h2 className="mt-2">住所：{restData.address === "" ? "未登録":restData.address}</h2>
        </Paper>
        <div className='justify-center'>
            <div className='flex flex-wrap'>
              {menuData.length > 0 && (
                menuData.map(menu => (
                  <MenuCard
                    key={menu.id} restId={restId} menuId={menu.id} menuName={menu.name}
                    price={menu.price} images={menu.images} noImage={menu.noImage} star={menu.review.star}
                  />
                ))
              )}
            </div>
          </div>
        
        <div className='module-spacer--small' />
        
        <div className="mb-4">
          <RestImageButton restId={restId} images={restData.images} />
        </div>
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
          <Link href="/restaurant/">
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
  const restData = await getRestaurantDetail(params.restId);
  const menuData = await getMenuList(params.restId);
  return {
    props: {
      restData,
      menuData,
    }
  }
}

export default RestaurantDetail