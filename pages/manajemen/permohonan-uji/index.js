import BaseLayout from 'components/base/BaseLayout';
import DateFilter from 'components/base/filter/DateFilter';
import StatusFilter from 'components/base/filter/StatusFilter';
import PermohonanUjiTable from 'components/base/table/PermohonanUjiTable';
import { permohonanUjiStatus } from 'constants/filter-status/ManajemenUjiStatus';
import { permohonanUjiData } from 'constants/test_objects/permohonanUji';
import { useTitleContext } from "hooks/TitleContext";
import { useEffect } from 'react';

export default function ManajemenPermohonanUjiPage() {
  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Permohonan Uji')
  })
  return(
    <div className="block space-y-6">
        <DateFilter/>
        <StatusFilter filter={permohonanUjiStatus} titleSpace="space-x-8" space="space-x-4"/>
        <PermohonanUjiTable data={permohonanUjiData}/>
    </div>
  )
}

ManajemenPermohonanUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

