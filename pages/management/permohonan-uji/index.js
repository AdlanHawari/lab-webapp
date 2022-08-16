import BaseLayout from 'components/base/BaseLayout';
import DateFilter from 'components/base/filter/DateFilter';
import StatusFilter from 'components/base/filter/StatusFilter';
import PermohonanUjiTable from 'components/base/table/PermohonanUjiTable';
import PermohonanUjiFilterSection from 'components/big/manajemen/permohonan-uji/PermohonanUjiFilterSection';
import PermohonanUjiMainSection from 'components/big/manajemen/permohonan-uji/PermohonanUjiMainSection';
import { ACCESS_CODE } from 'constants/Access_Code';
import { permohonanUjiStatus } from 'constants/filter-status/ManajemenUjiStatus';
import { permohonanUjiData } from 'constants/test_objects/permohonanUji';
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
  const { user, loading,error, mutate } = useUser()
  const [render, setRender] = useState(false)


  useEffect(() => {
    setTitle('Permohonan Uji')
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
  }, [user])


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

