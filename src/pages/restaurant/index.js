import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { RestCardList, RestForm } from '../../components/Restaurants';
import { getRestaurantList } from '../../lib/restaurantLib';
import Button from '@material-ui/core/Button';

const RestaurantList = ({ data }) => {
  const router = useRouter();
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
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <h1>店舗一覧ページ</h1>
        <div className='module-spacer--small' />
        <div>
        <Button variant="contained" color="primary" style={{"padding": "0.875rem 5rem"}} onClick={handleClickOpen}>
          店舗を追加
        </Button>
        <RestForm open={open} restId="" name="" place="" pref={null} onClick={handleClose} />
        </div>
        <div className='module-spacer--small' />
        <RestCardList data={data} />
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
      </section>
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await getRestaurantList();
  return {
    props: {
      data,
    }
  }
}

export default RestaurantList
