import { useRouter } from 'next/router';
import React from 'react';
import { RestaurantCard } from '../../components/Restaurants';
import { getRestaurantList } from '../../lib/restaurantLib';

const RestaurantList = ({ data }) => {
  const router = useRouter();
  
  return (
    <div>
      <section className='c-section-wrapin'>
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <h1>店舗一覧ページ</h1>
        <div className='module-spacer--small' />
        <div>
          <button
            className="bg-purple-600 hover:bg-purple-100 text-white hover:text-purple-600 font-bold py-3.5 px-20 border border-purple-600 rounded"
            onClick={() => router.push('/restaurant/edit')}
          >
            店舗を追加
          </button>
        </div>
        <div className='module-spacer--small' />
        <div className='justify-center'>
          <div className='flex flex-wrap'>
            {data.length > 0 && (
              data.map(rest => (
                <RestaurantCard
                  key={rest.id} restId={rest.id} restName={rest.name}
                  images={rest.images}
                />
              ))
            )}
          </div>
        </div>
        <div>
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
