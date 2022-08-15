import classNames from "classnames";
import BaseLayout from "components/base/BaseLayout"
import DateFilter from "components/base/filter/DateFilter";
import ManajemenujiTable from "components/base/table/ManajemenujiTable";
import UjiPersonnelFilterSection from "components/big/personnel/uji/UjiPersonnelFilterSection";
import UjiPersonnelMainSection from "components/big/personnel/uji/UjiPersonnelMainSection";
import Table2 from "components/small/typography/Table2";
import { ACCESS_CODE } from "constants/Access_Code";
import { manajemenUjiData } from "constants/test_objects/manajemenUji";
import DateFilterUjiContextProvider from "hooks/context/filter-date/DateFilterUjiContext";
import StatusFilterContextProvider from "hooks/context/filter-status/StatusContext";
import PersPenawaranContextProvider from "hooks/context/form-persetujuan-penawaran/PersPenawaranFormContext";
import PageContextProvider from "hooks/context/pagination/PageContext";
import PersonnelUjiContextProvider from "hooks/context/personnel-uji/PersonnelUjiContext";
import useUser from "hooks/fetcher/auth/useUser";
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PersonelUjiPage() {
  const [title, setTitle] = useTitleContext();
  const router = useRouter()
  const { user, loading,error, mutate } = useUser()
  const [render, setRender] = useState(false)

  useEffect(() => {
    setTitle('Uji')
  })

  useEffect(() => {
    if(user){
      console.log("user", user)
      if(user.data.role.access_code != ACCESS_CODE.PERSONNEL && user.data.role.access_code != ACCESS_CODE.PERSONNEL_PEERS &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
        router.replace("/")
      }
      else{
        setRender(true)
      }
    }
    else{
      router.replace("/")
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
            <UjiPersonnelFilterSection/>
            
              <PersonnelUjiContextProvider>

                <UjiPersonnelMainSection/>
              </PersonnelUjiContextProvider>
            

          

          </div>
        </DateFilterUjiContextProvider>
      </PageContextProvider>
    </StatusFilterContextProvider>
    }
    </>
  )
}

PersonelUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }