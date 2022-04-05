import BaseLayout from 'components/base/BaseLayout';
import DateFilter from 'components/base/filter/DateFilter';
import ArsipTable from 'components/base/table/ArsipTable';
import { arsipData } from 'constants/test_objects/arsipDokumen';
import { useTitleContext } from "hooks/TitleContext";
import { useEffect } from 'react';

export default function ManajemenArsipPage() {
  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Arsip Dokumen')
  })
  return(
    <div className="block space-y-7">

      <div className="flex">
          <DateFilter/>
      </div>
      <ArsipTable data={arsipData}/>
  </div>
  )
}

ManajemenArsipPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

