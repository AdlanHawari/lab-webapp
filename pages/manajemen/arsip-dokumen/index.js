import BaseLayout from 'components/base/BaseLayout';
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
    <div className="">
        Manajemen Arsip
    </div>
  )
}

ManajemenArsipPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

