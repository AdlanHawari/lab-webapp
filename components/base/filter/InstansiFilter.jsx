import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { useInstitutionFilterContext } from 'hooks/context/filter-institution/InstitutionFilter'
import useInstitutionsList from 'hooks/fetcher/management-summary/useInstitutionsList'
import React, { Fragment, useEffect, useState } from 'react'

export default function InstansiFilter({itemLists}) {
    const {institutionState, setInstitutionState} = useInstitutionFilterContext()
    const [selected, setSelected] = useState({})
    const [query, setQuery] = useState('')
    
    
    
    // let filteredItemLists = []

    
            // console.log("item:", itemLists)
    
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
      setInstitutionState(selected.id)
    }, [selected])
    

        // useEffect(() => {
        //     setInstitutionState(selected.id)
        // }, [selected])

  return (
    <div className="w-full">
        <Combobox 
        value={selected} 
        onChange={setSelected}>
            <div className="relative">
                <div className=" relative justify-start w-72 text-sm font-medium text-grey-700 bg-white border border-grey-300 rounded-xl shadow-sm  ">
                    
                    <Combobox.Input
                        className=" inline-flex w-full px-3 py-2 text-sm font-medium text-grey-700 rounded-xl hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary"
                        // className="w-full border-none focus:ring-0 rounded-xl py-2 pl-3 pr-10 text-sm leading-5 text-grey-700"
                        onChange={
                            (event) => setQuery(event.target.value)
                            // (event) => console.log("wew",event.target.value)
                        }
                        
                        // placeholder={3>4&&"Nama Institusi"}
                        displayValue={(item)=> item.name}
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

                        {
                            filteredItemLists.length == 0 && query !== '' ?(
                                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredItemLists.map(item=> (
                                    <Combobox.Option
                                    key ={item.id}
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
                            )
                        }
                    </Combobox.Options>
                    
                </Transition>
            </div>

        </Combobox>
    </div>
  )
}