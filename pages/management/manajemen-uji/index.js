import BaseLayout from 'components/base/BaseLayout';
import ManajemenPengujiFilterSection from 'components/big/manajemen/manajemen-penguji/ManajemenPengujiFilterSection';
import ManajemenPengujiMainSection from 'components/big/manajemen/manajemen-penguji/ManajemenPengujiMainSection';
import ManajemenUjiFilterSection from 'components/big/manajemen/manajemen-uji/ManajemenUjiFilterSection';
import ManajemenUjiMainSection from 'components/big/manajemen/manajemen-uji/ManajemenUjiMainSection';
import { ACCESS_CODE } from 'constants/Access_Code';
import { subMenu } from 'constants/SubmenuManajemenUji';
import DateFilterUjiContextProvider from 'hooks/context/filter-date/DateFilterUjiContext';
import StatusFilterContextProvider from 'hooks/context/filter-status/StatusContext';
import ManajemenUjiContextProvider from 'hooks/context/manajemen-uji/ManajemenUjiContext';
import PageContextProvider from 'hooks/context/pagination/PageContext';
import useUser from 'hooks/fetcher/auth/useUser';
import { PersonnelProvider } from 'hooks/fetcher/personnel/usePersonnelFetcher';
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ManajemenManajemenUjiPage() {
  const [title,setTitle, subTitle,setSubtitle] = useTitleContext();
  const router = useRouter()
  const { user, loading,error, isValidating } = useUser()
  const [render, setRender] = useState(false)

  useEffect(() => {
  setTitle('Manajemen Uji')
  })

  useEffect(() => {
    if(!isValidating){
      if(user){
        if(user.data.role.access_code != ACCESS_CODE.MANAGEMENT_KAL && user.data.role.access_code != ACCESS_CODE.MANAGEMENT_UJI && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB_KAL && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB_UJI &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
          router.replace("/")
        }
        else{
          setRender(true)
        }
      }
      if(error&& !user){
        router.replace("/")
      }
    }
  }, [user,error, isValidating])
  return(
    <>
      {loading ?
        <div className="">
          <h3>Loading...</h3>
        </div>
        :
        render &&
        <div className="flex flex-col divide-y divide-grey-200 space-y-5">
          {subTitle == subMenu.UJI ?
            <StatusFilterContextProvider>
              <PageContextProvider>
                <DateFilterUjiContextProvider>
                  <ManajemenUjiFilterSection/>
                  <ManajemenUjiContextProvider>
                    <ManajemenUjiMainSection/>
                  </ManajemenUjiContextProvider>
                </DateFilterUjiContextProvider>
              </PageContextProvider>
            </StatusFilterContextProvider>
            :
            subTitle == subMenu.PENGUJI &&
            <StatusFilterContextProvider>
              <PageContextProvider>
                <DateFilterUjiContextProvider>
                  <ManajemenPengujiFilterSection/>
                  <PersonnelProvider>
                    <ManajemenPengujiMainSection/>
                  </PersonnelProvider>
                </DateFilterUjiContextProvider>
              </PageContextProvider>
            </StatusFilterContextProvider>
          }
        </div>
  }
  </>
  )
}

ManajemenManajemenUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }