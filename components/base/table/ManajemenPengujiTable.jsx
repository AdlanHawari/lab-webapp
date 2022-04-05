import Table1 from 'components/small/typography/Table1'
import Table2 from 'components/small/typography/Table2'
import { manajemenPengujiTableHead } from 'constants/table/RowTitle'
import React from 'react'

export default function ManajemenPengujiTable({data}) {
  return (
    <>
        <table className='bg-grey-100 min-w-full shadow-lg rounded-lg'>
            <thead>
                <tr className=''>
                    {manajemenPengujiTableHead.map((rowTitle,index)=>(
                        <th key={index} scope="col" className=' w-48 px-4 py-2'>
                            <Table2 className="text-black-500 text-left">
                            {rowTitle}  
                        </Table2>
                        </th>
                    ))}
                </tr>

            </thead>
            <tbody className='bg-white divide-y divide-table-divider'>
            {data.map((item,index)=>(
                <tr key={index} className="h-16 ">
                    <td className="w-48 py-7 px-4">
                        <Table1 className="text-black-500">
                            {item.name}
                        </Table1>
                    </td>
                    <td className="w-48 py-7 px-4">
                        <Table1 className="text-black-500">
                            {item.status}
                        </Table1>
                    </td>
                    <td className="w-48 py-7 px-4">
                        <Table1 className="text-black-500">
                            {item.instansi_penugasan}
                        </Table1>
                    </td>
                    <td className="w-48 py-7 px-4">
                        <Table1 className="text-black-500">
                            {item.test_date}
                        </Table1>
                        
                    </td>
                    <td className="w-48 py-7 px-4">
                        <Table1 className="text-black-500">
                            {item.status_tugas}
                        </Table1>
                    </td>
                    
                    

                </tr>
                

            ))}

            </tbody>
        </table>
    </>
  )
}
