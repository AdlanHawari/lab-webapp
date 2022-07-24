import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { USER_ROLE } from 'constants/Roles'
import React, { Fragment, useState } from 'react'
import Input from '../input/Input'
import Body1 from '../typography/Body1'

export default function UserRoleDropDown() {

    const [selected, setSelected] = useState("")
  return (
    <Menu as="div" className="relative">
        <div>
            <Menu.Button className="flex items-center justify-between w-full py-2 px-3 text-left bg-white rounded-lg shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-primary focus-visible:ring-offset-2 sm:text-sm overflow-hidden">
                { selected?
                <p className='input-med'>
                    {selected}
                </p>
                :
                <p className='input-med text-grey-500'>
                    Pilih Role
                </p>
                }
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
        </div>

        <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className=" w-full absolute left-0 mt-2 py-1 rounded-lg shadow-lg bg-white ring-1 ring-grey-300 ring-opacity-5 focus:outline-none">
            {/* <Menu.Items className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"> */}
            {USER_ROLE.map((item,index)=>(
              <Menu.Item key={index}>
                  <Body1 className={classNames(
                      "px-6 py-2 text-black-500 hover:bg-grey-500 hover:text-grey-50",
                      // index == 0 && router.pathname.includes(item.link) ? "cursor-not-allowed": "cursor-pointer"
                      )
                    }
                    >
                        {item.name}
                    </Body1>
              </Menu.Item>  
            ))}
            </Menu.Items>

        </Transition>
    </Menu>
  )
}
