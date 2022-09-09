import BaseLayout from 'components/base/BaseLayout';
import PermohonanUjiFilterSection from 'components/big/manajemen/permohonan-uji/PermohonanUjiFilterSection';
import PermohonanUjiMainSection from 'components/big/manajemen/permohonan-uji/PermohonanUjiMainSection';
import { ACCESS_CODE } from 'constants/Access_Code';
import DateFilterUjiContextProvider from 'hooks/context/filter-date/DateFilterUjiContext';
import StatusFilterContextProvider from 'hooks/context/filter-status/StatusContext';
import PageContextProvider from 'hooks/context/pagination/PageContext';
import ManajemenPermohonanUjiContextProvider from 'hooks/context/permohonan-uji/PermohonanUjiContext';
import useUser from 'hooks/fetcher/auth/useUser';
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ManajemenPermohonanUjiPage() {
  const [title, setTitle] = useTitleContext();
  const router = useRouter()
  const { user, loading,error, isValidating } = useUser()
  const [render, setRender] = useState(false)


  useEffect(() => {
    setTitle('Permohonan Uji')
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
        <StatusFilterContextProvider>
          <PageContextProvider>
            <DateFilterUjiContextProvider>
              <div className="flex flex-col divide-y divide-grey-200 space-y-5">                      
                <PermohonanUjiFilterSection/>
                  <ManajemenPermohonanUjiContextProvider>
                    <PermohonanUjiMainSection/>
                  </ManajemenPermohonanUjiContextProvider>                  
              </div>
            </DateFilterUjiContextProvider>
          </PageContextProvider>
        </StatusFilterContextProvider>
      }
      </>
  )
}

ManajemenPermohonanUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

