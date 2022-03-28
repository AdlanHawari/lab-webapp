import BaseLayout from 'components/base/BaseLayout';
import { useTitleContext } from "hooks/TitleContext";
import { useEffect } from 'react';

export default function ManajemenSummaryPage() {

  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Summary')
  })

  return(
    <div className="">
        Manajemen Summary
    </div>
  )
}

ManajemenSummaryPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

