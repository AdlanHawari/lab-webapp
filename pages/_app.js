import { AuthProvider } from 'hooks/fetcher/auth/useAuth'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page)=> page)

  return getLayout(
    <>
      <AuthProvider>
          <Component {...pageProps} />
      </AuthProvider>
    </>
  )

}

export default MyApp
