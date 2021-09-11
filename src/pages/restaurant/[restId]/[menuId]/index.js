import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';
import { calcStar, getReviewList } from '../../../../lib/reviewLib';
import { getMenuDetail } from '../../../../lib/menuLib';
import { MenuBar, MenuTopImage } from '../../../../components/Menus';
import { EditButton } from '../../../../components/Uikit';
import { ReviewCardList, ReviewForm } from '../../../../components/Reviews';


const MenuDetail = ({ menuData, reviewData }) => {
  const router = useRouter();
  const {restId} = router.query;
  const {menuId} = router.query;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  calcStar(restId, menuId);
  
  return (
    <div>
      <section className='center'>
        <div className="absolute z-10">
          <MenuTopImage restId={restId} images={menuData.images.length === 0 ? [menuData.noImage] : menuData.images} />
          <div className="fixed top-0 mt-52 h-24 bg-white w-full overflow-hidden px-3 border-2">
            <MenuBar star={menuData.review.star} name={menuData.name} price={menuData.price} />
            <div className="absolute right-2 bottom-1">
              <EditButton title="レビュー投稿" onClick={handleClickOpen} />
              <ReviewForm open={open} reviewId="" restId={restId} menuId={menuId} onClick={handleClose} />
            </div>
          </div>
        </div>
        <div style={{"margin-top":"19rem"}} />
        <ReviewCardList data={reviewData} />
        <div className='module-spacer--small' />
        <div className='module-spacer--small' />
      </section>
    </div>
  )
}

export const getServerSideProps = async({ params }) => {
  const menuData = await getMenuDetail(params.restId, params.menuId);
  const reviewData = await getReviewList(params.restId, params.menuId)
  return {
    props: {
      menuData,
      reviewData,
    }
  }
}

export default MenuDetail