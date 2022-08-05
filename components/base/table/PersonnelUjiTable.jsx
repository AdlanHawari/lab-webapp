import Table2 from 'components/small/typography/Table2'
import { manajemenUjiTableHead } from 'constants/table/RowTitle'
import React from 'react'

export default function PersonnelUjiTable() {
  
  return (
    <>
    <table className="bg-primary-lighten10 min-w-full shadow-lg rounded-lg">
      <thead >
        <tr>
          {manajemenUjiTableHead.map((rowTitle,index)=>(
            <th key={index} scope="col" className="w-24 py-2 px-4 align-top">
              <Table2 className="text-black-500 text-left leading-normal">
                  {rowTitle}  
              </Table2>

            </th>

          ))

          }
        </tr>

      </thead>
      <tbody className="bg-white divide-y divide-table-divider">

      </tbody>
    </table>
    </>
  )
}
