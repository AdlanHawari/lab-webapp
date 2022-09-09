import NotifIcon from 'components/base/NotifIcon'
import { useTitleContext } from 'hooks/TitleContext'
import ProfileDropdown from 'components/small/single_menu/ProfileDropdown';
import ManajemenSubMenuButton from './ManajemenSubMenuButton';

export default function Topbar({children}) {
    const [title,setTitle] = useTitleContext();
  return(
    <div className="max-h-screen overflow-auto block w-full pl-11 pr-10 bg-background">
        <div className="z-10 fixed w-4/5 pt-10 pr-10 h-18 border-b border-grey-200 bg-background">
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
                </div>
            </div>
        </div>
        <div className="pt-36">
            <h1>{children}</h1>
        </div>
    </div>
  )
}