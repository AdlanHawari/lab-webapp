import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import Table1 from 'components/small/typography/Table1'
import Table2 from 'components/small/typography/Table2'
import { alatUkurTableHead } from 'constants/table/RowTitle'
import React, { useState } from 'react'
import DateFormatter from 'utils/DateFormatter'

export default function AlatUkurTable({
  data
}) {

  const [selected, setSelected] = useState()
  const {readable} = DateFormatter()
  return (
    <>
        <table className="bg-primary-lighten10 min-w-full shadow-lg rounded-lg">
            <thead >
                <tr>
                    {alatUkurTableHead.map((rowTitle,index)=>(
                        <th key={index} scope="col" className="w-24 py-2 px-4 align-top">
                        <Table2 className="text-black-500 text-left leading-normal">
                            {rowTitle}  
                        </Table2>
        
                      </th>

                    ))}
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-table-divider">
                    {data.map((item, index)=>(
                       <tr key={index} className={classNames(
                        selected == index &&
                        "bg-warning-light"
                        )}
                        onClick={()=>setSelected(index)}
                        >
                          <td className="max-w-24 p-4">
                              <Table1 className="text-black-500 leading-normal">
                                  {item.type}
                              </Table1>
                          </td>
                          <td className="max-w-24 p-4">
                              <Table1 className="text-black-500 leading-normal">
                                  {item.brand}
                              </Table1>
                          </td>
                          <td className="max-w-24 p-4">
                              <Table1 className="text-black-500 leading-normal">
                                  {item["serial/id"]}
                              </Table1>
                          </td>
                          <td className="max-w-24 p-4">
                              <Table1 className="text-black-500 leading-normal">
                                  {readable(item.calibration_date)}
                              </Table1>
                          </td>
                          <td className="max-w-24 p-4">
                              <Table1 className="text-black-500 leading-normal">
                                  {readable(item.recalibration_date)}
                              </Table1>
                          </td>
                          <td>
                            
                          </td>
                          <td scope="col" className="" >
                            <div className="flex items-center justify-center space-x-4">
                                <button 
                                className="flex items-center justify-center py-2 px-2 bg-secondary rounded-lg"
                                // onClick={()=> {
                                //     setOnEdit(true)
                                //     setDataSelected(item)
                                // }}
                                >
                                    <PencilIcon className="w-4 h-5 text-white " aria-hidden="true"/>
                                </button>
                                <button 
                                className="flex items-center justify-center py-2 px-2 bg-error rounded-lg"
                                // onClick={()=> {
                                //     setOnDelete(true)
                                //     setDataSelected(item)
                                // }}
                                >
                                    <TrashIcon className="w-4 h-5 text-white " aria-hidden="true"/>
                                </button>
                            </div>
                            
                        </td>
                        
                        </tr>
                    ))}
                </tbody>


            
        </table>
    </>
  )
}
