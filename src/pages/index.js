
import { useRouter } from 'next/router';
import { PrimalyButton } from '../components/Uikit';

export default function Home() {
  const router = useRouter();

  return (
    <div className='center'>
      <div className='module-spacer--small' />
      <div className='module-spacer--small' />
      <h1>最初のページ</h1>
      <div className='module-spacer--small' />
      <div className='module-spacer--small' />
      <PrimalyButton text={"店舗一覧"} link={"/restaurant/"} padding={"0.875rem 5rem"} />
    </div>
  )
}
