import BaseLayout from 'components/base/BaseLayout';
import { useTitleContext } from 'context/TitleContext';
import { useEffect } from 'react';

export default function ManajemenPermohonanUjiPage() {
  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Permohonan Uji')
  })
  return(
    <div className="">
        Manajemen Permohonan Uji
    </div>
  )
}

ManajemenPermohonanUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

