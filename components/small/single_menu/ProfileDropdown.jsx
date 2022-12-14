import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { UserCircleIcon } from '@heroicons/react/solid'
import Body1 from '../typography/Body1'
import { accountMenu } from 'constants/AccountMenu'
import { useRouter } from 'next/router'
import { useTitleContext } from 'hooks/TitleContext'
import { MyLink } from 'components/general/MyLink'
import useUser from 'hooks/fetcher/auth/useUser'
import { useNotifFetcher } from 'hooks/fetcher/notification/NotificationFetcher'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function constructLink(path, direction){
  const text = path.split("/");
  return text[0]+"/"+text[1]+direction
}

export default function ProfileDropdown() {

  const router =  useRouter();
  const [title, setTitle] = useTitleContext();
  const {mutate}= useUser()
  const socket  = useNotifFetcher()

  function handleLogout(){
    socket.close()
    localStorage.clear()
    mutate()
    router.reload()
  }
  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <div className='flex items-center'>
        <Menu.Button>
          <UserCircleIcon className="h-10 w-10 text-grey-500 cursor-pointer" aria-hidden="true"/>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-c0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 py-1  w-60 rounded-lg shadow-lg bg-white ring-1 ring-grey-300 ring-opacity-5 focus:outline-none z-50">
            <div className="py-1">
              <Menu.Item>
                  <MyLink
                  href={constructLink(router.pathname,accountMenu[0].link)}
                  onClick={()=>setTitle(accountMenu[0].title)}
                  >
                    <Body1 className={classNames(
                      "px-6 py-2 text-black-500 hover:bg-grey-500 hover:text-grey-50",
                      )
                    }
                    >
                    {accountMenu[0].title}
                    </Body1>
                  </MyLink>
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                <button 
                className="w-full text-left"
                 onClick={
                  handleLogout}
                  >
                  <Body1 className={classNames(
                      "w-full px-6 py-2 text-black-500 hover:bg-grey-500 hover:text-grey-50",
                      )}
                    >
                    {accountMenu[1].title}
                    </Body1>
                </button>
              </Menu.Item>
            </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}