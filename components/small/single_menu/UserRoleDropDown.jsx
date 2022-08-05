import { Combobox, Menu, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { USER_ROLE } from 'constants/Roles'
import React, { Fragment, useEffect, useState } from 'react'
import Input from '../input/Input'
import Body1 from '../typography/Body1'

export default function UserRoleDropDown({
    setContext,
    setFormikValue,
    formikName,
    onBlur
}) {

    const [selected, setSelected] = useState({})
    const [query, setQuery] = useState('')
    const itemLists = USER_ROLE
    const filteredItemLists =
    query === ''
      ? itemLists
      : itemLists.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

    useEffect(() => {
        console.log("selected", selected)
        if(setContext){
            setContext(selected.id)
        }
        if(setFormikValue){
            setFormikValue(formikName, selected.id)
        }
        // setInstitutionState(selected.id)
    }, [selected])

  return (
    <div className="w-full">
        <Combobox
            value={selected}
            onChange={value => {
                setSelected(value)
            }}
        >
            <div className="relative">
                <div
                className=" relative justify-start w-full text-sm font-medium text-grey-700 bg-white border-2 border-grey-300 rounded-xl shadow-sm "
                >
                    <Combobox.Input
                    className={classNames(
                        " inline-flex w-full px-3 py-2 text-sm font-medium  rounded-xl hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary",
                        selected.name? "text-grey-700" : "text-grey-500"
                        )}
                    onChange={
                        (event) => setQuery(event.target.value)
                        
                    }
                    onBlur={onBlur}
                    placeholder="Pilih Role"
                    displayValue={(item)=> item.name? item.name : "Pilih Role"}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronDownIcon
                            className="w-5 h-5 text-grey-200"
                        aria-hidden="true"
                        />
                    </Combobox.Button>
                </div>

                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={
                    () => setQuery('')
                    }
                >
                    <Combobox.Options className="z-50 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredItemLists.length === 0 && query !== '' ? (
                        <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                        Nothing found.
                        </div>
                    ) : (
                        filteredItemLists.map((item) => (
                            <Combobox.Option
                                key={item.id}
                                className={({ active }) =>
                                `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                    active ? 'text-secondary bg-teal-600' : 'text-gray-900'
                                }`
                                }
                                value={item}
                            >
                                {({ selected, active }) => (
                                <>
                                    <span
                                    className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                    }`}
                                    >
                                    {item.name}
                                    </span>
                                    {selected ? (
                                        <span
                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                            active ? 'text-secondary' : 'text-teal-600'
                                            }`}
                                        >
                                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                        </span>
                                        ) 
                                    : 
                                    null}
                                </>
                                )}
                                </Combobox.Option>
                            ))

                        )}

                    </Combobox.Options>   
                </Transition>
                
            </div>
        </Combobox>
    </div>
    // <Menu as="div" className="relative">
    //     <div>
    //         {/* <Menu.Button className="flex items-center justify-between w-full py-2 px-3 text-left bg-white rounded-lg shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-primary focus-visible:ring-offset-2 sm:text-sm overflow-hidden"> */}
    //         <Menu.Button 
    //         className="flex items-center justify-between w-full py-2 px-3 font-medium text-grey-700 bg-white border border-grey-300 rounded-xl shadow-sm hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary"
    //         // className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-grey-700 rounded-xl hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary"
    //         // className="flex items-center justify-between w-full py-2 px-3 text-left bg-white rounded-lg  cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-primary focus-visible:ring-offset-2 sm:text-sm overflow-hidden"
    //         >
    //             { selected?
    //             <p className='input-med'>
    //                 {selected}
    //             </p>
    //             :
    //             <p className='input-med text-grey-500'>
    //                 Pilih Role
    //             </p>
    //             }
    //             <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
    //         </Menu.Button>
    //     </div>

    //     <Transition
    //     as={Fragment}
    //     enter="transition ease-out duration-100"
    //     enterFrom="transform opacity-0 scale-95"
    //     enterTo="transform opacity-100 scale-100"
    //     leave="transition ease-in duration-75"
    //     leaveFrom="transform opacity-100 scale-100"
    //     leaveTo="transform opacity-0 scale-95"
    //     >
    //         <Menu.Items className=" w-full absolute left-0 mt-2 py-1 rounded-lg shadow-lg bg-white ring-1 ring-grey-300 ring-opacity-5 focus:outline-none">
    //         {/* <Menu.Items className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"> */}
    //         {USER_ROLE.map((item,index)=>(
    //           <Menu.Item key={index}>
    //               <Body1 className={classNames(
    //                   "px-6 py-2 text-black-500 hover:bg-grey-500 hover:text-grey-50 cursor-pointer",
    //                   // index == 0 && router.pathname.includes(item.link) ? "cursor-not-allowed": "cursor-pointer"
    //                   )
    //                 }
    //                 >
    //                     {item.name}
    //                 </Body1>
    //           </Menu.Item>  
    //         ))}
    //         </Menu.Items>

    //     </Transition>
    // </Menu>
  )
}
