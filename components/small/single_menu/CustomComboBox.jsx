import { Combobox, Transition } from "@headlessui/react";
import { ArrowDownIcon, CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";


const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Wade Cooper' },
  { id: 8, name: 'Arlene Mccoy' },
  { id: 9, name: 'Devon Webb' },
  { id: 10, name: 'Tom Cook' },
  { id: 11, name: 'Tanya Fox' },
  { id: 12, name: 'Hellen Schmidt' },
]

  export default function CustomComboBox({itemLists}) {

    const [selected, setSelected] = useState()
    const [query, setQuery] = useState('')
  
    const filteredItemLists =
    query === ''
      ? itemLists
      : itemLists.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
      
  return (
    <div className="w-72 ">
      
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative">
          <div className="relative w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden">
              <Combobox.Input
              className="w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
              // displayValue={(item) => item}
              onChange={(event) => setQuery(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
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
                        active ? 'text-white bg-teal-600' : 'text-gray-900'
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
                          {/* {item.name} */}
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>

          </Transition>
        </div>
        {/* <Combobox.Input/> */}
      </Combobox>

    </div>
  )
}
