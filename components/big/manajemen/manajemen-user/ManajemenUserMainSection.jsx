import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserTable from 'components/base/table/UserTable'
import FormModal from 'components/big/FormModal'
import Button from 'components/small/button_fixed/Button'
import Pagination from 'components/small/pagination/Pagination'
import { form_create_user_id } from 'constants/FormUtils'
import { useRoleFilterContext } from 'hooks/context/filter-role/RoleFilter'
import { useManajemenUserContext } from 'hooks/context/manajemen-user/ManajemenUserContext'
import { usePageContext } from 'hooks/context/pagination/PageContext'
import useInstitutionsList from 'hooks/fetcher/management-summary/useInstitutionsList'
import useGetUsers from 'hooks/fetcher/management-user/useGetUsers'
import React, { useEffect, useState } from 'react'
import RoleList from '../RoleList'

import FormCreateUser from './FormCreateUser'

export default function ManajemenUserMainSection() {
  
    const {currentPage, setLastPage} = usePageContext();
    const {roleState} = useRoleFilterContext();
    const { rolePopUp,
        setRolePopUp,
        isCreateUserOpen,
        setIsCreateUserOpen,
        createInstForm, 
        setCreateInstForm 
    } = useManajemenUserContext()

    const {loading, error, users, mutate} = useGetUsers(
        currentPage,
        roleState
    )
    const institutionFetcher = useInstitutionsList()
    const [submitState, setSubmitState] = useState(false)
    const [reqSent, setreqSent] = useState(false);

    useEffect(() => {
        if(users){
        setLastPage(users.header.total_page)
        console.log(users)
        }
    },[users,error])

    useEffect(() => {
        if(reqSent){
            setSubmitState(false)
            setRolePopUp(false)
            setIsCreateUserOpen(false)
            setreqSent(false)
            mutate()
        }
      
    
    }, [reqSent])

    return (
    <div>
        {users&&
            institutionFetcher.institutionLists &&
            <UserTable data={users.data} mutate={mutate} institutionList={institutionFetcher.institutionLists.data}/>
        }
        {loading&&
        <h1>Loading</h1>
        }
        {rolePopUp &&
            <FormModal 
            title="Roles dan Permission User"
            bgColor="primary"
            isOpen={rolePopUp}
            setIsOpen={setRolePopUp}
            hideButton={true}
            >
                <RoleList/>
            </FormModal>
        }
        {isCreateUserOpen &&
            <FormModal 
            title="User Baru"
            bgColor="primary"
            isOpen={isCreateUserOpen}
            setIsOpen={setIsCreateUserOpen}
            buttonSide={
                <>
                <Button 
                className="bg-primary"  
                buttonStyle={
                    !submitState && !createInstForm ? "primary_default": "primary_disabled"}
                type="submit"
                disabled={!submitState && !createInstForm ? false:true}
                form={form_create_user_id}
                >
                    { submitState &&
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                    }
                    Tambah User Baru
                </Button>
                </>
            }
            >
                {institutionFetcher.institutionLists &&
                    <>
                        <FormCreateUser 
                        institutionList={ institutionFetcher.institutionLists.data}
                        id={form_create_user_id}
                        setSubmitState={setSubmitState}
                        setreqSent={setreqSent}
                        submitState={submitState}
                        />
                    </>
                }
            </FormModal>
        }
        <Pagination/>
    </div>
  )
}