import BaseLayout from 'components/base/BaseLayout';
import DateFilter from 'components/base/filter/DateFilter';
import ArsipTable from 'components/base/table/ArsipTable';
import ArsipDokumenFilterSection from 'components/big/manajemen/arsip-dokumen/ArsipDokumenFilterSection';
import ArsipDokumenMainSection from 'components/big/manajemen/arsip-dokumen/ArsipDokumenMainSection';
import { ACCESS_CODE } from 'constants/Access_Code';
import { arsipData } from 'constants/test_objects/arsipDokumen';
import DateFilterUjiContextProvider from 'hooks/context/filter-date/DateFilterUjiContext';
import InstitutionFilterContextProvider from 'hooks/context/filter-institution/InstitutionFilter';
import JenisPekerjaanFilterContextProvider from 'hooks/context/filter-jenisPekerjaan/JenisPekerjaanFilter';
import PageContextProvider from 'hooks/context/pagination/PageContext';
import useUser from 'hooks/fetcher/auth/useUser';
import { SummaryProvider } from 'hooks/fetcher/management-summary/useSummaryFetcher';
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ManajemenArsipPage() {
  const [title, setTitle] = useTitleContext();
  const router = useRouter()
  const { user, loading,error, mutate } = useUser()
  const [render, setRender] = useState(false)

  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Arsip Dokumen')
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

          <DateFilterUjiContextProvider>
            <PageContextProvider>

            <SummaryProvider>
              <InstitutionFilterContextProvider>
                <JenisPekerjaanFilterContextProvider>
                  <div className="flex flex-col space-y-5">
                    <ArsipDokumenFilterSection/>
                    <ArsipDokumenMainSection/>
                  </div>
                </JenisPekerjaanFilterContextProvider>
              </InstitutionFilterContextProvider>
            </SummaryProvider>
            </PageContextProvider>
          </DateFilterUjiContextProvider>

      }

    </>
    // <div className="block space-y-7">

    //   <div className="flex">
    //       <DateFilter/>
    //   </div>
    //   <ArsipTable data={arsipData}/>
    // </div>
  )
}

ManajemenArsipPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

