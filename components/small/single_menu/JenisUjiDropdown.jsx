
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'
import Body1 from 'components/small/typography/Body1'
import { jenisPekerjaan } from 'constants/JenisPekerjaan'
import React, { Fragment, useEffect, useState } from 'react'

export default function JenisUjiDropDown({
  setContext,
  setFormikValue,
  formikName,
  initValue
}) {
    const [selected, setSelected] = useState('')
    // const {jenisPekerjaanState, setjenisPekerjaanState}= useJenisPekerjaanFilterContext()
    const [query, setQuery] = useState('')
    const itemLists = jenisPekerjaan
    const filteredItemLists =
    query === ''
      ? itemLists
      : itemLists.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

    useEffect(() => {
      if(setContext){
          setContext(selected)
      }
      if(setFormikValue){
          setFormikValue(formikName, selected)
      }
    }, [selected])


  return (
    <div className="w-full">
        <Combobox 
            value={selected} 
            onChange={ value => {
                setSelected(value)
            }
            }>
                <div className="relative">
                    <div
                    className=" relative justify-start w-full text-sm font-medium text-grey-700 bg-white border border-grey-300 rounded-xl shadow-sm  "
                    >
                        <Combobox.Input
                        className=" inline-flex w-full px-3 py-2 text-sm font-medium text-grey-700 rounded-xl hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary"
                            onChange={
                                (event) => setQuery(event.target.value)
                            }
                            placeholder="Jenis Uji"
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
                            filteredItemLists.map((item,index) => (
                                <Combobox.Option
                                    key={index}
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
                                        {item}
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
                        {setContext&&selected&&
                                <div className="w-full flex justify-center px-2 ">
                                 <Combobox.Option
                                 className="hover:bg-warning-dark cursor-pointer text-center w-full bg-warning px-4 py-1 rounded-lg"
                                     value={selected&&""}
                                 >
                                    <Body1 className="text-white ">
                                        Hapus pilihan
                                    </Body1>
                                     
                                 </Combobox.Option>

                                </div>
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
    </div>
  )
}