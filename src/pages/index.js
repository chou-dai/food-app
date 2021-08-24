
import { useRouter } from 'next/router'




export default function Home() {
  const router = useRouter();

  return (
    <div className='center'>
      <div className='module-spacer--small' />
      <div className='module-spacer--small' />
      <h1>最初のページ</h1>
      <div className='module-spacer--small' />
      <div className='module-spacer--small' />
      <button
        className="bg-purple-600 hover:bg-purple-100 text-white hover:text-purple-600 font-bold py-3.5 px-20 border border-purple-600 rounded"
        onClick={() => router.push('/restaurant')}
      >
        店舗一覧へ
      </button>
    </div>
  )
}
