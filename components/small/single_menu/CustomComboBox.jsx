import { Combobox, Transition } from "@headlessui/react";
import { ArrowDownIcon, CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useFormikContext } from "formik";
import { Fragment, useState, useEffect } from "react";

  export default function CustomComboBox(props) {

    let {
      itemLists,
      onBlur,
      placeholder,
      id,
      name,
      type,
      selected, 
      setSelected,
      disabled
    } = props

    // const { values, setFieldValue } = useFormikContext();
    // const [selected, setSelected] = useState()
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

        // useEffect(() => {
        //   setFieldValue(id,selected)
        // }, [selected])
        
      
  return (
    
    <div className="w-96 ">
      
      <Combobox 
      disabled={disabled}
      value={selected} 
      // value={values.id} 
      onChange={ value => {
        // console.log("value", value)
        // console.log("id", id)
        // setFieldValue(id,value)
        setSelected(id,value)
      }
        // setSelected
        // setSelected
        // onChange
       }>
         

         
         
        <div className="relative">
          <div className="relative w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-primary focus-visible:ring-offset-2 sm:text-sm overflow-hidden">
              <Combobox.Input
              className="w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
              // displayValue={(item) => item}
                
              id={id}
              name={name}
              onChange={
                (event) => setQuery(event.target.value)
              }
              onBlur={onBlur}
              placeholder={placeholder}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className={`w-5 h-5 ${disabled? "text-grey-200":"text-grey-700"}`}
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
                          {/* {item.name} */}
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
                        ) : null}
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
  )
}
