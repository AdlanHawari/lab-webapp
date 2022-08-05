import UserTable from 'components/base/table/UserTable'
import FormModal from 'components/big/FormModal'
import Button from 'components/small/button_fixed/Button'
import Pagination from 'components/small/pagination/Pagination'
import { form_create_user_id } from 'constants/FormUtils'
import { users } from 'constants/test_objects/users'
import { useRoleFilterContext } from 'hooks/context/filter-role/RoleFilter'
import { useManajemenUserContext } from 'hooks/context/manajemen-user/ManajemenUserContext'
import { usePageContext } from 'hooks/context/pagination/PageContext'
import useInstitutionsList from 'hooks/fetcher/management-summary/useInstitutionsList'
import useGetUsers from 'hooks/fetcher/management-user/useGetUsers'
import React, { useEffect, useState } from 'react'
import FormCreateUser from '../FormCreateUser'
import RoleList from '../RoleList'

export default function ManajemenUserMainSection() {
  
    const {currentPage, setLastPage} = usePageContext();
    const {roleState} = useRoleFilterContext();

    const { rolePopUp,
        setRolePopUp,
        isCreateUserOpen,
        setIsCreateUserOpen } = useManajemenUserContext()

    const {loading, error, users, mutate} = useGetUsers(
        currentPage,
        roleState

    )

    const institutionFetcher = useInstitutionsList()

    const [submitState, setSubmitState] = useState(false)
    const [reqSent, setreqSent] = useState(false);

    useEffect(() => {
        if(users){
        //   setLastPage(users.header.total_page)
        setLastPage(users.header.total_page)
          console.log(users.header.total_page)
        }
    },[users,error])

    useEffect(() => {
        if(reqSent){
            setRolePopUp(false)
            setIsCreateUserOpen(false)
            setreqSent(false)
            mutate()
        }
      
    
    }, [reqSent])

    useEffect(() => {
        if(institutionFetcher.institutionLists){
            console.log("inst",institutionFetcher.institutionLists)
        }
    
      
    }, [institutionFetcher.institutionLists])
    

    return (
    <div>
        {users&&
            <UserTable data={users.data}/>
        }
        {loading&&
        <h1>Loading</h1>
        }

        {rolePopUp &&
            // <PermohonanUjiModal isOpen={isUjiOpen} setIsOpen={setIsUjiOpen}/>
            <FormModal 
            title="Roles dan Permission User"
            bgColor="primary"
            isOpen={rolePopUp}
            setIsOpen={setRolePopUp}
            hideButton={true}
            
            >
                <RoleList/>
            {/* <FormPermohonanUji id={form_permohonan_uji_id}/> */}
            </FormModal>
        }

        {isCreateUserOpen &&
            // <PermohonanUjiModal isOpen={isUjiOpen} setIsOpen={setIsUjiOpen}/>
            <FormModal 
            title="User Baru"
            bgColor="primary"
            isOpen={isCreateUserOpen}
            setIsOpen={setIsCreateUserOpen}
            buttonSide={
                <>
                {/* <Button className="bg-primary" buttonStyle="primary_default" type="submit" form={form_permohonan_uji_id}> */}
                <Button 
                className="bg-primary"  
                buttonStyle={submitState?"primary_disabled":"primary_default"}
                type="submit"
                disabled={submitState? true:false}
                form={form_create_user_id}
                >
                    Tambah User Baru
                </Button>
                </>
            }
            
            >
            
            {/* <FormPermohonanUji id={form_permohonan_uji_id}/> */}
                {institutionFetcher.institutionLists &&
                    <FormCreateUser 
                    institutionList={ institutionFetcher.institutionLists.data}
                    id={form_create_user_id}
                    submitState={submitState}
                    setSubmitState={setSubmitState}
                    reqSent={reqSent}
                    setreqSent={setreqSent}
                    />

                }
            </FormModal>
        }
        <Pagination/>
    </div>
  )
}
