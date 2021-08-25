import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';
import { MenuCard } from '../../../../components/Menus'

const MenuList = () => {
  const router = useRouter();
  const {restId} = router.query;
  
  return (
      <div>
        <section className='c-section-wrapin'>
          <div className='module-spacer--small' />
          <div className='module-spacer--small' />
          <h1>店舗: {restId}　メニューページ</h1>
          <div className='module-spacer--small' />
          <div className='module-spacer--small' />
          <div className='justify-center'>
            <div className='flex flex-wrap'>
              <MenuCard restId={restId} menuId={1} />
              <MenuCard restId={restId} menuId={2} />
              <MenuCard restId={restId} menuId={3} />
              <MenuCard restId={restId} menuId={4} />
            </div>
          </div>
          <div className='module-spacer--small' />
          <div>
            <button
              className="bg-purple-600 hover:bg-purple-100 text-white hover:text-purple-600 font-bold py-3.5 px-20 border border-purple-600 rounded"
              onClick={() => router.push(`/restaurant/${restId}/menu/edit`)}
            >
              メニューを追加
            </button>
          </div>
          <div className='module-spacer--small' />
          <Link href={`/restaurant/${restId}`}>
            <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800">店舗詳細へ</a>
          </Link>
        </section>
      </div>
  )
}

export default MenuList