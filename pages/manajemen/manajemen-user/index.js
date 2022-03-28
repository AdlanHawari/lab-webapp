import BaseLayout from 'components/base/BaseLayout';
import { useTitleContext } from "hooks/TitleContext";
import { useEffect } from 'react';

export default function ManajemenManajemenUserPage() {

  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Kelola User')
  })

  return(
    <div className="">
        Manajemen Manajemen User
    </div>
  )
}

ManajemenManajemenUserPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

