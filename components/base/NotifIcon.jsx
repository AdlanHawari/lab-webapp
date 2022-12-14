import { BellIcon } from '@heroicons/react/solid'
import { MyLink } from 'components/general/MyLink'
import { useNotifContext } from 'hooks/context/notif-context/NotifContext';
import { useTitleContext } from 'hooks/TitleContext';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import constructLink from 'utils/ConstructLink'

export default function NotifIcon() {
  const router = useRouter();
  const [title, setTitle] = useTitleContext();
  const {newNotif}= useNotifContext()
  useEffect(() => {
    console.debug("newnotif notificon", newNotif)
  }, [newNotif])
  
  return (
    <MyLink href={constructLink(router.pathname,"/log")}
    onClick={()=> {
      setTitle("Log")
    }}>
      <div className="relative">
        {newNotif&&
          <div className="absolute right-0 pt-0.5 pr-0.5">
            <div className="absolute bg-error-dark rounded-full h-2 w-2 animate-ping" ></div>
            <div className="bg-error h-2 w-2 rounded-full"></div>
          </div>
        }
        <BellIcon className="h-8 w-8 text-primary cursor-pointer" aria-hidden="true"/>
      </div>
    </MyLink>
  )
}