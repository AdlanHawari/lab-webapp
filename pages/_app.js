import DateFilterUjiContextProvider from 'hooks/context/filter-date/DateFilterUjiContext'
import StatusFilterContextProvider from 'hooks/context/filter-status/StatusContext'
import NotifContextProvider from 'hooks/context/notif/NotifContext'
import PageContextProvider from 'hooks/context/pagination/PageContext'
import { AuthProvider } from 'hooks/fetcher/auth/useAuth'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page)=> page)

  return getLayout(
    // <TitleContextProvider>
    <AuthProvider>
      <NotifContextProvider>

        <Component {...pageProps} />
      </NotifContextProvider>
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
