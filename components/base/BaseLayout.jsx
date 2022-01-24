import Image from 'next/image'
import sip_logo from '/public/logo.png'
import NotifIcon from '/components/base/NotifIcon'
import { UserCircleIcon } from '@heroicons/react/solid'
import SideMenu from './sidemenu/SideMenu'

export default function BaseLayout({children}) {
  return (
    <div className="w-screen h-screen flex">
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
        <div className="block w-full pt-10 divide-y divide-grey-200 pl-11 pr-10">
            <div className="flex pb-8 items-center justify-between">
                <h1>Title</h1>
                <div className="flex space-x-8 justify-between items-center">
                    <NotifIcon/>
                    <UserCircleIcon className="h-10 w-10 text-grey-500 cursor-pointer" aria-hidden="true"/>
                    

                </div>

            </div>
            <div className="pt-5">

                <h1>{children}</h1>
            </div>
          

        </div>
        

      </div>
  )
}
