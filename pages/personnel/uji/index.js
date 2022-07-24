import classNames from "classnames";
import BaseLayout from "components/base/BaseLayout"
import DateFilter from "components/base/filter/DateFilter";
import ManajemenujiTable from "components/base/table/ManajemenujiTable";
import UjiPersonnelFilterSection from "components/big/personnel/uji/UjiPersonnelFilterSection";
import UjiPersonnelMainSection from "components/big/personnel/uji/UjiPersonnelMainSection";
import Table2 from "components/small/typography/Table2";
import { manajemenUjiData } from "constants/test_objects/manajemenUji";
import DateFilterUjiContextProvider from "hooks/context/filter-date/DateFilterUjiContext";
import StatusFilterContextProvider from "hooks/context/filter-status/StatusContext";
import PageContextProvider from "hooks/context/pagination/PageContext";
import { useTitleContext } from "hooks/TitleContext";
import { useEffect } from "react";

export default function PersonelUjiPage() {
  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Uji')
  })

  return(
    <StatusFilterContextProvider>
      <PageContextProvider>
        <DateFilterUjiContextProvider>

        
          <div className="flex flex-col divide-y divide-grey-200 space-y-5">
            <UjiPersonnelFilterSection/>
            <UjiPersonnelMainSection/>

          

          </div>
        </DateFilterUjiContextProvider>
      </PageContextProvider>
    </StatusFilterContextProvider>
  )
}

PersonelUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }