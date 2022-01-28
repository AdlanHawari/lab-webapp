import NotifIcon from '/components/base/NotifIcon'
import { useTitleContext } from 'context/TitleContext'
import ProfileDropdown from 'components/small/single_menu/ProfileDropdown';
import { UserCircleIcon } from '@heroicons/react/solid';

export default function Topbar({children}) {

    const [title,setTitle, selectedIndex, setSelectedIndex] = useTitleContext();

  return(
    <div className="block w-full pt-10 divide-y divide-grey-200 pl-11 pr-10">
        <div className="flex pb-8 items-center justify-between">
            <h1 className='capitalize'>{title}</h1>
            <div className="flex space-x-8 justify-between items-center">
                <NotifIcon/>
                <ProfileDropdown/>
                {/* <UserCircleIcon className="bg-primary h-10 w-10 text-grey-500 cursor-pointer" aria-hidden="true"/> */}
            </div>
        </div>
        <div className="pt-5">
            <h1>{children}</h1>
            {/* <h1>{selectedIndex}</h1> */}
        </div>
    </div>
  )
}
