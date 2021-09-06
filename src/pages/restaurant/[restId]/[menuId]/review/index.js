import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';
import { getReviewList } from '../../../../../lib/reviewLib';
import ReviewCard from '../../../../../components/Reviews/ReviewCard';

const ReviewList = ({ data }) => {
  const router = useRouter();
  const {restId} = router.query;
  const {menuId} = router.query;
  
  return (
      <div>
        <section className='c-section-wrapin'>
          <div className='module-spacer--small' />
          <div className='module-spacer--small' />
          <h1>レビューページ</h1>
          <div className='module-spacer--small' />
          <div>
            <button
              className="bg-purple-600 hover:bg-purple-100 text-white hover:text-purple-600 font-bold py-3.5 px-20 border border-purple-600 rounded"
              onClick={() => router.push(`/restaurant/${restId}/${menuId}/review/edit`)}
            >
              レビューを投稿
            </button>
          </div>
          <div className='module-spacer--small' />
          <div className='center'>
            {data.length > 0 && (
              data.map(review => (
                <ReviewCard
                  key={review.id} star={review.star} comment={review.comment}
                />
              ))
            )}
          </div>
          <div className='module-spacer--small' />
          <Link href={`/restaurant/${restId}/${menuId}`}>
            <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800">店舗詳細へ</a>
          </Link>
          <div className='module-spacer--small' />
          <div className='module-spacer--small' />
        </section>
      </div>
  )
}

export const getServerSideProps = async({ params }) => {
  const data = await getReviewList(params.restId, params.menuId);
  return {
    props: {
      data,
    }
  }
}

export default ReviewList