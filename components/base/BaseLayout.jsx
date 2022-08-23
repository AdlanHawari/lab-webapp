import Image from 'next/image'
import sip_logo from 'images/logo.png'
import SideMenu from './sidemenu/SideMenu'
import TitleContextProvider from 'hooks/TitleContext'
import Topbar from 'components/base/topbar/Topbar'
import NotificationFetcher from 'hooks/fetcher/notification/NotificationFetcher'
import { AuthProvider } from 'hooks/fetcher/auth/useAuth'

export default function BaseLayout({children}) {


  return (
    <AuthProvider>

    
    <NotificationFetcher>

    
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
    </NotificationFetcher>
    </AuthProvider>
  )
}
