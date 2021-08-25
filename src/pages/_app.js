import '../styles/style.css'
import 'tailwindcss/tailwind.css'
import '../styles/reset.css'
import { Layout } from '../components/Uikit'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
