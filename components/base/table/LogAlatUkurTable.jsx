import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import AssuranceModal from 'components/big/AssuranceModal'
import Button from 'components/small/button_fixed/Button'
import Body3 from 'components/small/typography/Body3'
import Table1 from 'components/small/typography/Table1'
import Table2 from 'components/small/typography/Table2'
import { logAlatUkurTableHead } from 'constants/table/RowTitle'
import { useLogAlatUkurFetcher } from 'hooks/fetcher/log-alat-ukur/useLogAlatUkurFetcher'
import React, { useEffect, useState } from 'react'
import DateFormatter from 'utils/DateFormatter'

export default function LogAlatUkurTable(
    data,
    mutate
) {
    const [onDelete, setOnDelete] = useState(false)
    const [dataSelected, setDataSelected] = useState({})
    const {readable} = DateFormatter()
    const [submitState, setSubmitState] = useState(false)
    const [reqSent, setreqSent] = useState(false);

    const {deleteLogAlatUkur} = useLogAlatUkurFetcher()

    useEffect(() => {
        if(reqSent){
            setSubmitState(false)
            setOnDelete(false)
            setreqSent(false)
            mutate()
        }
    }, [reqSent])

  return (
    <>
        <table className="bg-primary-lighten10 min-w-full shadow-lg rounded-lg">
            <thead className=" ">
                <tr>
                    {logAlatUkurTableHead.map((rowTitle,index)=>(
                        <th key={index} scope="col" className="w-48 py-2 px-4">
                            <Table2 className={classNames(
                                "text-black-500",
                                index == logAlatUkurTableHead.length - 1 ? "text-center" : "text-left"
                            )}>
                                {rowTitle}  
                            </Table2>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-table-divider">
                {data.map((item,index)=>(
                    <tr key={index} className="h-16">
                        <td className="w-48 py-2 px-4">
                            <Table1 className="text-black-500">
                                {/* {readable(item.)} */}
                                contoh tanggal
                            </Table1>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        {onDelete&& 
        <AssuranceModal
            title="Hapus Log"
            bgColor="warning"
            isOpen={onDelete}
            setIsOpen={setOnDelete}
            confirmButton={
                <Button
                className={classNames(submitState?"w-64":"bg-error w-64 hover:bg-error-dark")}
                buttonStyle={submitState ? "primary_disabled" :"primary_default"}
                // buttonStyle="primary_default"
                disabled={submitState ? true:false}
                type='button'
                onClick={()=> {
                    setSubmitState(true)
                    async function fetchData(id){
                        const responseDel = await deleteLogAlatUkur(id)

                        console.log("responseDel", responseDel)

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
                    Hapus dari daftar log?
                </Body3>
            </div>

        </AssuranceModal>
        }
    </>
  )
}
