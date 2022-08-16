import { BellIcon } from '@heroicons/react/solid'
import { MyLink } from 'components/general/MyLink'
import { useTitleContext } from 'hooks/TitleContext';
import { useRouter } from 'next/router'
import constructLink from 'utils/ConstructLink'

export default function NotifIcon() {
  const router = useRouter();
  const [title, setTitle] = useTitleContext();
  return (
    <MyLink href={constructLink(router.pathname,"/log")}
    onClick={()=>setTitle("Log")}>
      <div className="relative">
        {/* <div className="absolute right-0 pt-0.5 pr-0.5">
          <div className="absolute bg-error-dark rounded-full h-2 w-2 animate-ping" ></div>
          <div className="bg-error h-2 w-2 rounded-full"></div>
        </div> */}
        <BellIcon className="h-8 w-8 text-primary cursor-pointer" aria-hidden="true"/>
      </div>
    </MyLink>
  )
  
}
