import classNames from "classnames";
import BaseLayout from "components/base/BaseLayout"
import DateFilter from "components/base/filter/DateFilter";
import ManajemenujiTable from "components/base/manajemenuji/ManajemenujiTable";
import Table2 from "components/small/typography/Table2";
import { manajemenUjiData } from "constants/test_objects/manajemenUji";
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
    <div className="flex flex-col space-y-5">
    <div className="">
      <DateFilter/>
    </div>

    {/* table */}
    <div className="pt-5 space-y-5">
      <ManajemenujiTable data={manajemenUjiData}/>
      


      
    </div>

</div>
  )
}

PersonelUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }