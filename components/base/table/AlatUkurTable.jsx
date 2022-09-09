import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import AssuranceModal from 'components/big/AssuranceModal'
import FormModal from 'components/big/FormModal'
import FormEditAlat from 'components/big/manajemen/dashboard-alat-ukur/FormEditAlat'
import Button from 'components/small/button_fixed/Button'
import Body3 from 'components/small/typography/Body3'
import Table1 from 'components/small/typography/Table1'
import Table2 from 'components/small/typography/Table2'
import { form_edit_alat_ukur_id } from 'constants/FormUtils'
import { alatUkurTableHead } from 'constants/table/RowTitle'
import { useAlatUkurFetcher } from 'hooks/fetcher/management-alat-ukur/useAlatUkurFetcher'
import React, { useEffect, useState } from 'react'
import DateFormatter from 'utils/DateFormatter'
import IntervalDate from 'utils/IntervalDate'

export default function AlatUkurTable({
  data,
  mutate
}) {

  const [selected, setSelected] = useState()
  const [onDelete, setOnDelete] = useState(false)
  const [onEdit, setOnEdit] = useState(false)
  const [dataSelected, setDataSelected] = useState({})
  const {shorterReadable} = DateFormatter()
  const [submitState, setSubmitState] = useState(false)
  const [reqSent, setreqSent] = useState(false);
  const {deleteTool} = useAlatUkurFetcher()

  useEffect(() => {
    if(reqSent){
        setSubmitState(false)
        setOnEdit(false)
        setOnDelete(false)
        setreqSent(false)
        mutate()
    }
}, [reqSent])

  return (
    <>
        <table className="bg-primary-lighten10 min-w-full shadow-lg rounded-lg">
            <thead >
                <tr>
                    {alatUkurTableHead.map((rowTitle,index)=>(
                      <th key={index} scope="col" className="w-24 py-2 px-4 align-top">
                        <Table2 className={classNames(
                        "text-black-500",
                        index == alatUkurTableHead.length - 1 ? "text-center" : "text-left"
                    )}>
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
                                  {shorterReadable(item.calibration_date)}
                              </Table1>
                          </td>
                          <td className="max-w-24 p-4">
                              <Table1 className="text-black-500 leading-normal">
                                  {shorterReadable(item.recalibration_date)}
                              </Table1>
                          </td>
                          <td>
                            <Table1 className="text-black-500 leading-normal">
                                {IntervalDate(item.recalibration_date,item.calibration_date)}
                            </Table1>
                          </td>
                          <td scope="col" className="" >
                            <div className="flex items-center justify-center space-x-4">
                                <button 
                                className="flex items-center justify-center py-2 px-2 bg-secondary rounded-lg"
                                onClick={()=> {
                                    setOnEdit(true)
                                    setDataSelected(item)
                                }}
                                >
                                    <PencilIcon className="w-4 h-5 text-white " aria-hidden="true"/>
                                </button>
                                <button 
                                className="flex items-center justify-center py-2 px-2 bg-error rounded-lg"
                                onClick={()=> {
                                    setOnDelete(true)
                                    setDataSelected(item)
                                }}
                                >
                                    <TrashIcon className="w-4 h-5 text-white " aria-hidden="true"/>
                                </button>
                            </div>
                        </td>
                        </tr>
                    ))}
                </tbody>
        </table>
        {onDelete &&
          <AssuranceModal
          title="Hapus Alat Ukur"
          bgColor="warning"
          isOpen={onDelete}
          setIsOpen={setOnDelete}
          confirmButton={
            <Button
            className={classNames(submitState?"w-64":"bg-error w-64 hover:bg-error-dark")}
            buttonStyle={submitState ? "primary_disabled" :"primary_default"}
            disabled={submitState ? true:false}
            type='button'
            onClick={()=> {
              setSubmitState(true)
              async function fetchData(id){
                const responseDel = await deleteTool(id)
                if(responseDel.header.response_code==200){
                    setreqSent(true)
                }
                if(responseDel.header.response_code==400){
                    setSubmitState(false)
                }
                if(responseDel.header.response_code==401){
                    setSubmitState(false)
                }
                if(responseDel.header.response_code==422){
                    setSubmitState(false)
                    setOnDelete(false)
                }
              }
              fetchData(dataSelected.id)
            }}
            >
              <Body3>
                  { submitState &&
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                  }
                  Hapus
              </Body3>
            </Button>
          }
          >
            <div className="block pb-10">
              <Body3 className="text-black-400">
                Hapus <strong className='text-black-400 underline'>{dataSelected.type} {dataSelected.brand} dengan no seri/ID {dataSelected["serial/id"]}</strong> dari daftar alat ukur?
              </Body3>
            </div>
          </AssuranceModal>
        }
        {onEdit &&
          <FormModal
          title="Edit Alat Ukur"
          bgColor="primary"
          isOpen={onEdit}
          setIsOpen={setOnEdit}
          buttonSide={
            <Button
            className="bg-primary"  
            buttonStyle={
                !submitState ? "primary_default": "primary_disabled"}
            type="submit"
            disabled={!submitState ? false:true}
            form={form_edit_alat_ukur_id}
            >
               { submitState &&
                <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                }
                Ubah Alat Ukur
            </Button>
          }
          >
            <FormEditAlat
            id={form_edit_alat_ukur_id}
            data={dataSelected}
            submitState={submitState}
            setSubmitState={setSubmitState}
            setreqSent={setreqSent}
            />
          </FormModal>
        }
    </>
  )
}