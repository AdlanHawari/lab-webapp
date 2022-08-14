import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PencilIcon } from '@heroicons/react/outline'
import { TrashIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import AssuranceModal from 'components/big/AssuranceModal'
import ErrorModal from 'components/big/ErrorModal'
import FormModal from 'components/big/FormModal'
import FormEditUser from 'components/big/manajemen/manajemen-user/FormEditUser'
import Button from 'components/small/button_fixed/Button'
import ButtonSmall from 'components/small/button_small/ButtonSmall'
import Body3 from 'components/small/typography/Body3'
import Table1 from 'components/small/typography/Table1'
import Table2 from 'components/small/typography/Table2'
import { form_edit_user_id } from 'constants/FormUtils'
import { userTableHead } from 'constants/table/RowTitle'
import { useManajemenUserFetcherContext } from 'hooks/fetcher/management-user/useManajemenUserFetcher'
import React, { useEffect, useState } from 'react'
import { useSWRConfig } from 'swr'

export default function UserTable({data, mutate, institutionList}) {
    const [onDelete, setOnDelete] = useState(false)
    const [onEdit, setOnEdit] = useState(false)
    const [onError, setOnError] = useState(false)
    const [dataSelected, setDataSelected] = useState({})
    const [submitState, setSubmitState] = useState(false)
    const [reqSent, setreqSent] = useState(false);

    const {deleteUser} = useManajemenUserFetcherContext()
    

    useEffect(() => {
        if(reqSent){
            setSubmitState(false)
            setOnError(false)
            setOnEdit(false)
            setOnDelete(false)
            setreqSent(false)
            mutate()
        }
    }, [reqSent])
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
                        {item.role.name}
                    </Table1>
                </td>
                <td className="w-48 py-2 px-4 ">
                    <Table1 className="text-black-500 leading-normal">
                        {item.institution.name}
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


    {onDelete&& 
    
        <AssuranceModal
        title="Hapus User"
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
                    // console.log("id", dataSelected.id)
                    setSubmitState(true)
                    
                    async function fetchData(id){
                        const responseDel = await deleteUser(id)

                        console.log("responseDel", responseDel)

                        if(responseDel.header.response_code==200){
                            // setSubmitState(false)
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
                            setOnError(true)
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
                <Body3 className="text-black-400">Hapus <strong className='text-black-400 underline'>{dataSelected.name}</strong> dari daftar user?</Body3>
            </div>

        </AssuranceModal>
    }

    {onError &&
        <ErrorModal
        confirmButton
        bgColor="error"
        isOpen={onError}
        setIsOpen={setOnError}
        >
            <div className="block pb-10 text-center">
                <Body3 className="text-black-400">User <strong className='text-black-400 underline'>{dataSelected.name}</strong> tidak dapat dihapus karena sudah melakukan pengajuan uji</Body3>
            </div>


        </ErrorModal>
    }

    {onEdit && 
        <FormModal
        title="Edit User"
        bgColor="primary"
        isOpen={onEdit}
        setIsOpen={setOnEdit}
        buttonSide={
            <>
            {/* <Button className="bg-primary" buttonStyle="primary_default" type="submit" form={form_permohonan_uji_id}> */}
            <Button 
            className="bg-primary"  
            buttonStyle={
                !submitState ? "primary_default": "primary_disabled"}
            type="submit"
            disabled={!submitState ? false:true}
            form={form_edit_user_id}
            >
                { submitState &&
                <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                }
                Ubah Informasi User
            </Button>
            </>
        }
        
        >
            <FormEditUser
            institutionList={institutionList}
            id={form_edit_user_id}
            data={dataSelected}
            submitState={submitState}
            setSubmitState={setSubmitState}
            setreqSent={setreqSent}
            />
        
        
            {/* <FormCreateUser 
            institutionList={ institutionFetcher.institutionLists.data}
            id={form_create_user_id}
            setSubmitState={setSubmitState}
            setreqSent={setreqSent}
            submitState={submitState}
            /> */}

            
        </FormModal>
    }
</>
  )
}
