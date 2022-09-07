import Image from 'next/image'
import sip_logo from 'images/logo.png'
import SideMenu from './sidemenu/SideMenu'
import TitleContextProvider from 'hooks/TitleContext'
import Topbar from 'components/base/topbar/Topbar'
import NotificationFetcherProvider, { useNotifFetcher } from 'hooks/fetcher/notification/NotificationFetcher'
import { AuthProvider } from 'hooks/fetcher/auth/useAuth'
import NotifContextProvider from 'hooks/context/notif-context/NotifContext'
import { useEffect } from 'react'

export default function BaseLayout({children}) {

    // const {socket} = useNotifFetcher()

    // useEffect(() => {
      
    //     socket.onopen = () => {
    //         console.log("ws connected")
    //     }
    // }, [socket])
    
  return (
    <AuthProvider>

    
        <NotificationFetcherProvider>
            <NotifContextProvider>

            
            <TitleContextProvider>
                <div className="w-screen flex">
                    <div className="h-screen block pt-6 pl-5 pr-2.5 bg-sidebar space-y-20">
                        <div className="relative w-36 h-14 mx-auto">
                            <Image src={sip_logo}
                                alt="SIP Lab Logo image"
                                placeholder="blur"
                                layout='fill'
                                objectFit='cover'
                                quality={100}
                                />
                        </div>
                        <div className="">
                            <SideMenu/>
                        </div>
                    
                    </div>
                    <Topbar>
                        {children}
                    </Topbar>
                    
                </div>
            </TitleContextProvider>
            </NotifContextProvider>
        </NotificationFetcherProvider>
    </AuthProvider>
  )
}
