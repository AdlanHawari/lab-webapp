import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon, LightningBoltIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import Table2 from 'components/small/typography/Table2'
import TableSmall from 'components/small/typography/TableSmall'
import Title1 from 'components/small/typography/Title1'
import Title3Med from 'components/small/typography/Title3Med'
import Title3 from 'components/small/typography/Title3Med'
import Title3Reg from 'components/small/typography/Title3Reg'
import React, { useEffect } from 'react'
import useSWR from 'swr'

export default function DisclosurePekerja({bgButton, data}) {
    
    const {personnelAssignments, error, mutate, loading} = useSWR()
    
    useEffect(() => {
        console.log("disclosure",personnelAssignments)
    
    }, [personnelAssignments])
    
    
  return (
    <Disclosure as="div" className="">
        {({open}) => (
        <>
            <Disclosure.Button className={classNames(
            "flex justify-between items-center w-72 h-9 py-3 pl-4 pr-2.5 rounded-xl",
            bgButton
            )}
            >
                <Table2 className={classNames(
                    "text-white"
                )}>
                    {/* {children} */}
                    {/* Aulia Rizky H */}
                    {data.name}
                </Table2>
                <div className="flex space-x-1">
                    <Table2 className={classNames(
                        "text-white"
                        )}>
                        {/* {children} */}
                        {data.total_assignments}
                    </Table2>

                    <TableSmall className={classNames(
                        "text-white"
                        )}>
                        {/* {children} */}
                        Tugas
                    </TableSmall>
                </div>


                <ChevronDownIcon className={classNames(
                "w-6 ",
                open && "transition duration-700 ease-in-out transform rotate-180",
                "text-white"
                )} 
                aria-hidden="true"/>

            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
                <Disclosure.Panel as='ul' static className={classNames(
                    "block px-4 py-2 rounded-2xl border border-grey-200 my-3 divide-y divide-grey-300",

                )}
                >
                {({close}) => (
                <>
                    <li className='py-3'>
                        <Title3Med className="text-black-500">
                            Uji Kalibrasi
                        </Title3Med>
                        <div className="grid grid-flow-row grid-cols-2">
                            <Title3Reg className="text-black-400">
                                Instansi
                            </Title3Reg>
                            <Title3Med className="text-black-500">
                                RS Aisyah Purworejo
                            </Title3Med>
                            <Title3Reg className="text-black-400">
                                Tanggal
                            </Title3Reg>
                            <Title3Med className="text-black-500">
                                5 Juni 2021
                            </Title3Med>
                            <Title3Reg className="text-black-400">
                                Status
                            </Title3Reg>
                            <Title3Med className="text-black-500">
                                Dijadwalkan
                            </Title3Med>


                        </div>

                    </li>

                     <li>
                        <Title3Med className="text-black-500">
                            Uji Kalibrasi
                        </Title3Med>
                        <div className="grid grid-flow-row grid-cols-2">
                            <Title3Reg className="text-black-400">
                                Instansi
                            </Title3Reg>
                            <Title3Med className="text-black-500">
                                RS Aisyah Purworejo
                            </Title3Med>
                            <Title3Reg className="text-black-400">
                                Tanggal
                            </Title3Reg>
                            <Title3Med className="text-black-500">
                                5 Juni 2021
                            </Title3Med>
                            <Title3Reg className="text-black-400">
                                Status
                            </Title3Reg>
                            <Title3Med className="text-black-500">
                                Dijadwalkan
                            </Title3Med>


                        </div>

                    </li>
                    


                </>
                )}

                </Disclosure.Panel>

            </Transition>
        </>
        )}
    </Disclosure>
  )
}
