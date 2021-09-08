import '../styles/style.css'
import 'tailwindcss/tailwind.css'
import '../styles/reset.css'
import { Layout, Navigation } from '../components/Uikit'

const MyApp = ({ Component, pageProps }) => {
  return(
    <Layout>
      {/* <Navigation /> */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
