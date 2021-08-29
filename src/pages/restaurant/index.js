import { useRouter } from 'next/router'
import React from 'react'
import { RestaurantCard } from '../../components/Restaurants';
import { db } from '../../firebase';

const RestaurantList = ({restdata}) => {
  const router = useRouter();
  console.log(restdata);
  
  return (
    <div>
      <section className='c-section-wrapin'>
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <h1>店舗一覧ページ</h1>
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <div className='justify-center'>
          <div className='flex flex-wrap'>
            {restdata.length > 0 && (
              restdata.map(data => (
                <RestaurantCard key={data.id} restId={data.id} restName={data.name} />
              ))
            )}
          </div>
        </div>
        <div>
        </div>
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
        <div className='module-spacer--small' />
      </section>
    </div>
  )
}

export const getStaticProps = async () => {
  const restdata = [];
  const ref = await db.collection('restaurants').get()
    .then(snapshots => {
      snapshots.forEach(snapshot => {
        const id = snapshot.data();
        restdata.push(id)
      })
    })
  return {
    props: {
      restdata,
    }
  }
}

export default RestaurantList
