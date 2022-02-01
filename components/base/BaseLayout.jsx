import Image from 'next/image'
import sip_logo from '/public/logo.png'
import SideMenu from './sidemenu/SideMenu'
import TitleContextProvider from 'context/TitleContext'
import Topbar from 'components/base/topbar/Topbar'

export default function BaseLayout({children}) {


  return (
    <TitleContextProvider>
        <div className="w-screen min-h-screen flex">
            <div className="block pt-6 pl-5 pr-2.5 bg-sidebar space-y-20">
                <div className="relative w-36 h-14 mx-auto">
                    <Image src={sip_logo}
                        alt="SIP Lab Logo image"
                        placeholder="blur"
                        layout='fill'
                        objectFit='cover'
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
  )
}
