import classNames from 'classnames'
import ButtonSmall from 'components/small/button_small/ButtonSmall'
import Table1 from 'components/small/typography/Table1'
import Table2 from 'components/small/typography/Table2'
import { permohonanUjiTableHead } from 'constants/table/RowTitle'
import React from 'react'

export default function PermohonanUjiTable({data}) {
  return (
    <>
        <table className='bg-primary-lighten10 min-w-full shadow-lg rounded-lg'>
            <thead>
                <tr className=''>
                    {permohonanUjiTableHead.map((rowTitle,index)=>(
                        <th key={index} scope="col" className=' w-48 px-4 py-2'>
                            <Table2 className={classNames(
                            "text-black-500 leading-normal",
                            index == permohonanUjiTableHead.length - 1 ? "text-center" : "text-left"
                        )}>
                            {rowTitle}  
                        </Table2>
                        </th>
                    ))}
                </tr>

            </thead>
            <tbody className='bg-white divide-y divide-table-divider'>
            {data.map((item,index)=>(
                <tr key={index} className="h-16 ">
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.test_date}
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.instance_name}
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4 ">
                        <Table1 className="text-black-500 leading-normal">
                            {item.nama_alat}
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.merk}
                        </Table1>
                        
                    </td>
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.jenis_uji}
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.status}
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4">
                    {item.bukti_pembayaran &&
                        <div className="text-xs font-bold text-primary-darken10 underline underline-offset-2 leading-normal">
                            {item.bukti_pembayaran}
                        </div>
                    }
                    </td>
                    <td className="px-2">
                        <ButtonSmall
                        onClick={()=>setIsDetailOpen(true)}>
                            Lihat Detail
                        </ButtonSmall>
                    </td>
                    

                </tr>
                

            ))}

            </tbody>
        </table>
    </>
  )
}
