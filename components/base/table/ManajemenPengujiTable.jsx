import Table1 from 'components/small/typography/Table1'
import Table2 from 'components/small/typography/Table2'
import { manajemenPengujiTableHead } from 'constants/table/RowTitle'
import React from 'react'
import DateFormatter from 'utils/DateFormatter'

export default function ManajemenPengujiTable({data}) {

    const {readable} = DateFormatter()
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
            {data.map((personel,pIndex)=>(
                personel.test_applications.map((item,index)=>(
                    
                    <tr key={index} className="h-16 ">
                        <td className="w-48 py-7 px-4">
                            <Table1 className="text-black-500">
                                {personel.tester.name}
                            </Table1>
                        </td>
                        <td className="w-48 py-7 px-4">
                            <Table1 className="text-black-500">
                                {personel.tester.personnel_status ?
                                "Aktif"
                                :
                                "Standby"
                                }
                            </Table1>
                        </td>
                        <td className="w-48 py-7 px-4">
                            <Table1 className="text-black-500">
                                {item.user.institution.name}
                            </Table1>
                        </td>
                        <td className="w-48 py-7 px-4">
                            <Table1 className="text-black-500">
                                {readable(item.assignment_detail.test_date)}
                            </Table1>
                            
                        </td>
                        <td className="w-48 py-7 px-4">
                            <Table1 className="text-black-500">
                                {item.status_detail.management_value}
                            </Table1>
                        </td>
                        
                        

                </tr>
                ))
                

            ))}

            </tbody>
        </table>
    </>
  )
}
