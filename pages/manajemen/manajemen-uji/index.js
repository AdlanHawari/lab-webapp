import BaseLayout from 'components/base/BaseLayout';
import { useTitleContext } from "hooks/TitleContext";
import { useEffect } from 'react';

export default function ManajemenManajemenUjiPage() {
  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
  setTitle('Manajemen Uji')
  })
  return(
    <div className="">
        Manajemen Manajemen Uji
    </div>
  )
}

ManajemenManajemenUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

