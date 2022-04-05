import { PencilIcon } from '@heroicons/react/outline'
import { TrashIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import ButtonSmall from 'components/small/button_small/ButtonSmall'
import Table1 from 'components/small/typography/Table1'
import Table2 from 'components/small/typography/Table2'
import { userTableHead } from 'constants/table/RowTitle'
import React from 'react'

export default function UserTable({data}) {
  return (
    <>
    <table className='bg-primary-lighten10 min-w-full shadow-lg rounded-lg'>
        <thead>
            <tr className=''>
                {userTableHead.map((rowTitle,index)=>(
                    <th key={index} scope="col" className=' w-48 px-4 py-2'>
                        <Table2 className={classNames(
                        "text-black-500",
                        index == userTableHead.length - 1 ? "text-center" : "text-left"
                    )}>
                        {rowTitle}  
                    </Table2>
                    </th>
                ))}
            </tr>

        </thead>
        <tbody className='bg-white divide-y divide-table-divider'>
        {data.map((item,index)=>(
            <tr key={index} className="h-16">
                <td className="w-48 py-2 px-4">
                    <Table1 className="text-black-500 leading-normal">
                        {item.name}
                    </Table1>
                </td>
                <td className="w-48 py-2 px-4">
                    <Table1 className="text-black-500 leading-normal">
                        {item.roles}
                    </Table1>
                </td>
                <td className="w-48 py-2 px-4 ">
                    <Table1 className="text-black-500 leading-normal">
                        {item.instance_name}
                    </Table1>
                </td>
                <td className="w-48 py-2 px-4">
                    <Table1 className="text-black-500 leading-normal">
                        {item.email}
                    </Table1>
                    
                </td>
                <td className="w-48 py-2 px-4">
                    <Table1 className="text-black-500 leading-normal">
                        {item.phone}
                    </Table1>
                </td>
                <td scope="col" className="" >
                    <div className="flex items-center justify-center space-x-4">
                        <div className="flex items-center justify-center py-2 px-2 bg-secondary rounded-lg">
                            <PencilIcon className="w-4 h-5 text-white " aria-hidden="true"/>
                        </div>
                        <div className="flex items-center justify-center py-2 px-2 bg-error rounded-lg">
                            <TrashIcon className="w-4 h-5 text-white " aria-hidden="true"/>
                        </div>
                    </div>
                    
                </td>

            </tr>
            

        ))}

        </tbody>
    </table>
</>
  )
}
