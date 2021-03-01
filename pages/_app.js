
import { ServiceContextProvider } from '../components/Context/ServiceContext'
import Layout from '../components/Layout'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
   
   <ServiceContextProvider>

    <Component {...pageProps} />
   </ServiceContextProvider>
  

  

    
    
  </Layout>
  )
}
export default MyApp