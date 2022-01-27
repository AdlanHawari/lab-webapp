import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page)=> page)

  return getLayout(
    // <TitleContextProvider>

    <Component {...pageProps} /> 
    // </TitleContextProvider>
  )

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
}

export default MyApp
