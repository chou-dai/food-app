import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { deleteRestaurant, getRestaurantDetail } from '../../../lib/restaurantLib';
import { RestTopImage } from '../../../components/Restaurants';
import { getMenuList } from '../../../lib/menuLib';
import { MenuCardList, MenuForm, MenuSearch } from '../../../components/Menus';
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
        <RestTopImage name={restData.name} image={restData.images.length === 0 ? restData.noImage : restData.images[0]} />
        <div className="mt-60 relative z-10 bg-white" style={{"border-radius":"40px 40px 0 0"}}>
          <div className="w-full py-2 bg-white" style={{"border-radius":"40px 40px 0 0"}}>
            <h1> 店舗詳細: {restData.name}</h1>
            <h2 className="mt-2">住所：{restData.address === "" ? "未登録":restData.address}</h2>
          </div>
          <MenuSearch />
          <MenuCardList data={menuData} restId={restId} />
        </div>
        <AddButton onClick={handleClickOpen} />
        <MenuForm open={open} onClick={handleClose} restId={restId} menuId="" />
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
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