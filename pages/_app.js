import Layout from '../components/layout'
import '../styles/globals.css'


//root component - all page components are rendered here
// we get access to whatever is nested within the layout (ie, all the pages)
function MyApp({ Component, pageProps }) {
  return (
    <Layout> 
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

