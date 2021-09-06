import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { RestaurantCard, RestForm } from '../../components/Restaurants';
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
      <section className='c-section-wrapin'>
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <h1>店舗一覧ページ</h1>
        <div className='module-spacer--small' />
        <div>
        <Button variant="contained" color="primary" style={{"padding": "0.875rem 5rem"}} onClick={handleClickOpen}>
          店舗を追加
        </Button>
        <RestForm open={open} onClick={handleClose} restId="" />
        </div>
        <div className='module-spacer--small' />
        <div className='justify-center'>
          <div className='flex flex-wrap'>
            {data.length > 0 && (
              data.map(rest => (
                <RestaurantCard
                  key={rest.id} restId={rest.id} restName={rest.name}
                  images={rest.images} noImage={rest.noImage}
                />
              ))
            )}
          </div>
        </div>
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
