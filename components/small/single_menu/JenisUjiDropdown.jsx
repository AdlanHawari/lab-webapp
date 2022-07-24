import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { jenisUji } from 'constants/JenisUji'
import { Fragment } from 'react'
import Body1 from '../typography/Body1'

export default function JenisUjiDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
        <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                Pilih Jenis Uji
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
            <Menu.Items className="origin-top-right absolute right-0 mt-2 py-1  w-60 rounded-lg shadow-lg bg-white ring-1 ring-grey-300 ring-opacity-5 focus:outline-none overflow-visible">
            {jenisUji.map((item,index)=>(
              <Menu.Item key={index}>
                  <Body1 className={classNames(
                      "px-6 py-2 text-black-500 hover:bg-grey-500 hover:text-grey-50",
                      // index == 0 && router.pathname.includes(item.link) ? "cursor-not-allowed": "cursor-pointer"
                      )
                    }
                    >
                        {item}
                    </Body1>
              </Menu.Item>  
            ))}
            </Menu.Items>
        </Transition>
    </Menu>
  )
}
