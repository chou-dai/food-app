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
  
  return (
    <div>
      <section className='center'>
        <RestTopImage name={restData.name} place={restData.place} pref={restData.pref} restId={restId}
          image={restData.image === "" ? restData.noImage : restData.image} />
        <div className="mt-56 relative z-10 bg-white" style={{"border-radius":"40px 40px 0 0"}}>
          <div className="w-full py-2 bg-white" style={{"border-radius":"40px 40px 0 0"}}>
            <h1>{restData.name} {restData.place}</h1>
            <h2 className="mt-2">{restData.pref}</h2>
          </div>
          <MenuSearch />
          <MenuCardList data={menuData} restId={restId} />
        </div>
        <AddButton onClick={handleClickOpen} />
        <MenuForm open={open} onClick={handleClose} restId={restId} menuId="" name="" price="" />
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