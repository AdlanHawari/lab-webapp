import { BellIcon } from '@heroicons/react/solid'
import { MyLink } from 'components/general/MyLink'
import { useTitleContext } from 'context/TitleContext';
import { useRouter } from 'next/router'
import constructLink from 'utils/ConstructLink'

export default function NotifIcon() {
  const router = useRouter();
  const [title, setTitle] = useTitleContext();
  return (
    <MyLink href={constructLink(router.pathname,"/log")}
    onClick={()=>setTitle("Log")}>
      <BellIcon className="h-8 w-8 text-primary cursor-pointer" aria-hidden="true"/>
    </MyLink>
  )
  
}
