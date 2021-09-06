import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';
import { deleteRestaurant, getRestaurantDetail } from '../../../lib/restaurantLib';
import { RestTopImage } from '../../../components/Restaurants';
import Paper from '@material-ui/core/Paper';
import { getMenuList } from '../../../lib/menuLib';
import { MenuCardList, MenuForm } from '../../../components/Menus';
import AddButton from '../../../components/Uikit/AddButton';


const RestaurantDetail = ({ restData, menuData }) => {
  const router = useRouter();
  const {restId} = router.query;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
        <RestTopImage image={restData.images.length === 0 ? restData.noImage : restData.images[0]} />
        <Paper className="w-full mt-1 py-2" elevation={1}>
          <h1> 店舗詳細: {restData.name}</h1>
          <h2 className="mt-2">住所：{restData.address === "" ? "未登録":restData.address}</h2>
        </Paper>
        <MenuCardList data={menuData} restId={restId} />
        <AddButton onClick={handleClickOpen} />
        <MenuForm open={open} onClick={handleClose} restId={restId} menuId="" />
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
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