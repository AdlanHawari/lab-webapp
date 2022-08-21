import { UsersIcon } from '@heroicons/react/outline';
import { PlusIcon, UserIcon } from '@heroicons/react/solid';
import BaseLayout from 'components/base/BaseLayout';
import DateFilter from 'components/base/filter/DateFilter';
import UserTable from 'components/base/table/UserTable';
import FormModal from 'components/big/FormModal';
import ManajemenUserFilterSection from 'components/big/manajemen/manajemen-user/ManajemenUserFilterSection';
import ManajemenUserMainSection from 'components/big/manajemen/manajemen-user/ManajemenUserMainSection';

import RoleList from 'components/big/manajemen/RoleList';
import Button from 'components/small/button_fixed/Button';
import Body1 from 'components/small/typography/Body1';
import { ACCESS_CODE } from 'constants/Access_Code';
import { form_create_user_id } from 'constants/FormUtils';
import { users } from 'constants/test_objects/users';
import RoleFilterContextProvider from 'hooks/context/filter-role/RoleFilter';
import ManajemenUserContextProvider from 'hooks/context/manajemen-user/ManajemenUserContext';
import PageContextProvider from 'hooks/context/pagination/PageContext';
import useUser from 'hooks/fetcher/auth/useUser';
import { SummaryProvider } from 'hooks/fetcher/management-summary/useSummaryFetcher';
import { ManajemenUserFetcherProvider } from 'hooks/fetcher/management-user/useManajemenUserFetcher';
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';

export default function ManajemenManajemenUserPage() {

  const [title, setTitle] = useTitleContext();
  // const [isRoleOpen, setIsRoleOpen] = useState(false)
  // const [isCreateUserOpen, setIsCreateUserOpen] = useState(false)
  const router = useRouter()
  const { user, loading,error, mutate } = useUser()
  const [render, setRender] = useState(false)

  useEffect(() => {
    setTitle('Kelola User')
  })

  useEffect(() => {
    if(user){
      console.log("user", user)
      if(user.data.role.access_code != ACCESS_CODE.MANAGEMENT_KAL && user.data.role.access_code != ACCESS_CODE.MANAGEMENT_UJI && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
        router.replace("/")
      }
      else{
        setRender(true)
        // router.push("management/summary")
      }
    }
    if(error&& !user){
      console.log("error", error)
      router.replace("/")
    }
  }, [user,error])

  return(

    <>
    {loading ?
      <div className="">

        <h3>Loading...</h3>
      </div>
      :
      render &&

        <PageContextProvider>
          <RoleFilterContextProvider>
            <ManajemenUserContextProvider>
              <ManajemenUserFetcherProvider>
                <div className="block space-y-7">
                  <ManajemenUserFilterSection/>
                  <SummaryProvider>
                    <ManajemenUserMainSection/>
                  </SummaryProvider>
              </div>
              </ManajemenUserFetcherProvider>
            </ManajemenUserContextProvider>
          </RoleFilterContextProvider>
        </PageContextProvider>
    }
    </>
  )
}

ManajemenManajemenUserPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

