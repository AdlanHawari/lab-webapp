import classNames from 'classnames'
import ButtonSmall from 'components/small/button_small/ButtonSmall'
import Table1 from 'components/small/typography/Table1'
import Table2 from 'components/small/typography/Table2'
import { arsipDokumenTableHead } from 'constants/table/RowTitle'
import React from 'react'

export default function ArsipTable({data}) {
  return (
    <>
        <table className='bg-primary-lighten10 min-w-full shadow-lg rounded-lg'>
            <thead>
                <tr className=''>
                    {arsipDokumenTableHead.map((rowTitle,index)=>(
                        <th key={index} scope="col" className=' w-48 px-4 py-2'>
                            <Table2 className={classNames(
                            "text-black-500",
                            index == arsipDokumenTableHead.length - 1 ? "text-center" : "text-left"
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
                            {item.test_date}
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.nomor_dokumen}
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4 ">
                        <Table1 className="text-black-500 leading-normal">
                            {item.nama_instansi}
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.xray_data}
                        </Table1>
                        
                    </td>
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.nama_penguji}
                        </Table1>
                    </td>
                    <td className="w-48 py-2 px-4">
                        <Table1 className="text-black-500 leading-normal">
                            {item.jenis_uji}
                        </Table1>
                    </td>
                    <td className="px-7">
                        <ButtonSmall
                        // onClick={()=>setIsDetailOpen(true)}
                        >
                            Download Dokumen
                        </ButtonSmall>
                    </td>

                </tr>
                

            ))}

            </tbody>
        </table>
    </>
  )
}
