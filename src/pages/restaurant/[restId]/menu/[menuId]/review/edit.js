import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import { calcStar, firstSaveReview } from '../../../../../../lib/reviewLib';


const ReviewEdit = () => {
  const id = '';
  const router = useRouter();
  const {restId} = router.query;
  const {menuId} = router.query;

  const [star, setStar] = useState(1),
        [comment, setComment] = useState("");

  const inputComment = useCallback((event) => {
    setComment(event.target.value);
  }, [setComment])

  const save = async() => {
    console.log(star, comment);
    await firstSaveReview(id, restId, menuId, star, comment)
      .then(async() => {
        await calcStar(restId, menuId);
      })
    router.push(`/restaurant/${restId}/menu/${menuId}/review/`);
  }
  
  return (
    <div>
      <section className='c-section-wrapin'>
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
        <h1 className='font-bold text-2xl text-purple-700'>投稿・編集</h1>
        <div className='module-spacer--small' />
        <div className="w-full max-w-xs center">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                評価
              </label>
              <Rating
                style={{fontSize: "2.5rem"}}
                name="simple-controlled"
                value={star}
                onChange={(event, newStar) => {
                  setStar(newStar);
                }}
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                コメント
              </label>
              <textarea
                className="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                rows="3"
                placeholder="コメントを入力"
                value={comment}
                onChange={inputComment}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-purple-600 hover:bg-purple-100 text-white hover:text-purple-600 font-bold border border-purple-600 py-2 px-9 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={save}
              >
                保存
              </button>
              <Link href={`/restaurant/${restId}/menu/${menuId}/review/`}>
                <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800">一覧ページへ</a>
              </Link>
            </div>
          </form>
        </div>
        <div>
        </div>
      </section>
    </div>
  )
}

export default ReviewEdit