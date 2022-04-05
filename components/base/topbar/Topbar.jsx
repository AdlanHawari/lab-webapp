import NotifIcon from '/components/base/NotifIcon'
import { useTitleContext } from 'hooks/TitleContext'
import ProfileDropdown from 'components/small/single_menu/ProfileDropdown';
import { UserCircleIcon } from '@heroicons/react/solid';
import { subMenu, subPageManajemenUji } from 'constants/SubmenuManajemenUji';
import classNames from 'classnames';
import ManajemenSubMenuButton from './ManajemenSubMenuButton';

export default function Topbar({children}) {

    const [title,setTitle] = useTitleContext();

  return(
    <div className="block w-full pt-10 divide-y divide-grey-200 pl-11 pr-10 bg-background">
        <div className="flex pb-8 items-center justify-between">
            <div className="flex items-center space-x-11">
                <h1 className='capitalize'>{title}</h1>
                {title == "Manajemen Uji" &&

                    <ManajemenSubMenuButton/>
                }
            </div>
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
