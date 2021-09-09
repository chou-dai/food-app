
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';

export default function Home() {
  const router = useRouter();

  return (
    <div className='center'>
      <div className='module-spacer--small' />
      <div className='module-spacer--small' />
      <h1>最初のページ</h1>
      <div className='module-spacer--small' />
      <div className='module-spacer--small' />
      <Button variant="contained" color="primary" style={{"padding": "0.875rem 5rem"}} href={"/restaurant/"}>
        店舗一覧
      </Button>
    </div>
  )
}
