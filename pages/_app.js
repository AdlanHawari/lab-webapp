import { AuthProvider } from 'hooks/fetcher/auth/useAuth'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page)=> page)

  return getLayout(
    // <TitleContextProvider>
    <AuthProvider>


        <Component {...pageProps} />
    </AuthProvider>

    // </TitleContextProvider>
  )

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
}

export default MyApp
