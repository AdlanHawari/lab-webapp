import { UsersIcon } from '@heroicons/react/outline';
import { PlusIcon, UserIcon } from '@heroicons/react/solid';
import BaseLayout from 'components/base/BaseLayout';
import DateFilter from 'components/base/filter/DateFilter';
import UserTable from 'components/base/table/UserTable';
import FormModal from 'components/big/FormModal';
import FormCreateUser from 'components/big/manajemen/FormCreateUser';
import RoleList from 'components/big/manajemen/RoleList';
import Button from 'components/small/button_fixed/Button';
import Body1 from 'components/small/typography/Body1';
import { form_create_user_id } from 'constants/FormUtils';
import { users } from 'constants/test_objects/users';
import { useTitleContext } from "hooks/TitleContext";
import { useEffect,useState } from 'react';

export default function ManajemenManajemenUserPage() {

  const [title, setTitle] = useTitleContext();
  const [isRoleOpen, setIsRoleOpen] = useState(false)
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false)
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Kelola User')
  })

  return(
    <div className="block space-y-7">

      <div className="flex justify-between items-center">
        <div className="">
          <DateFilter/>
        </div>

        <div className="flex space-x-4">
           <button className="flex items-center space-x-2 bg-primary button-base text-white px-5 py-2 rounded-xl"
            onClick={()=>setIsRoleOpen(true)}>
              <UsersIcon className="h-4 w-4 cursor-pointer" aria-hidden="true"/>
              <p>
                Roles dan Permission User
              </p>
          </button>
          <button className="flex items-center space-x-2 bg-primary button-base text-white px-5 py-2 rounded-xl"
            onClick={()=>setIsCreateUserOpen(true)}>
              <PlusIcon className="h-6 w-6 cursor-pointer" aria-hidden="true"/>
              <p>
                Tambah User Baru
              </p>
          </button>
        </div>
      </div>
      <UserTable data={users}/>

      {isRoleOpen &&
          // <PermohonanUjiModal isOpen={isUjiOpen} setIsOpen={setIsUjiOpen}/>
          <FormModal 
            title="Roles dan Permission User"
            bgColor="primary"
            isOpen={isRoleOpen}
            setIsOpen={setIsRoleOpen}
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
                <Button className="bg-primary" buttonStyle="primary_default" type="submit">
                  Tambah User Baru
                </Button>
              </>
            }
            
          >
           
            {/* <FormPermohonanUji id={form_permohonan_uji_id}/> */}
            <FormCreateUser id={form_create_user_id}/>
          </FormModal>
        }

  </div>
  )
}

ManajemenManajemenUserPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

