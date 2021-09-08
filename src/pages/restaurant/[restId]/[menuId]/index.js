import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';
import { calcStar } from '../../../../lib/reviewLib';
import { getMenuDetail } from '../../../../lib/menuLib';
import MenuTopImage from '../../../../components/Menus/MenuTopImage';
import Rating from '@material-ui/lab/Rating';
import { EditButton } from '../../../../components/Uikit';

const MenuDetail = ({ data }) => {
  const router = useRouter();
  const {restId} = router.query;
  const {menuId} = router.query;

  calcStar(restId, menuId);

  const deleteRest = () => {
    const pw = window.prompt("パスワードを入力");
    if(pw === '0011'){
      window.alert("削除に成功しました")
    } else if(pw === null) {
      return;
    } else {
      window.alert("パスワードが違います")
    }
  }

  const save = () => {
    window.alert("レビュー投稿処理");
  }
  
  return (
      <div>
        <section className='center'>
          <div>
            <MenuTopImage restId={restId} images={data.images.length === 0 ? [data.noImage] : data.images} />
            <div className="fixed top-0 mt-52 h-24 bg-white w-full overflow-hidden px-3">
              <div className="mr-14 text-left overflow-hidden pl-3">
                <Rating className="my-2" name="read-only" value={data.review.star} readOnly />
                <h1 className="font-semibold text-xl">{data.name}</h1>
                <p>{data.price}円</p>
              </div>
              <div className="absolute right-2 bottom-1">
                <EditButton title="レビュー投稿" onClick={save} />
              </div>
            </div>
          </div>
          <div style={{"margin-top":"19rem"}} />
          <div className="mb-3">
            <Link href={`/restaurant/${restId}/`}>
              <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800">メニューページ</a>
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
  const data = await getMenuDetail(params.restId, params.menuId);
  return {
    props: {
      data,
    }
  }
}

export default MenuDetail