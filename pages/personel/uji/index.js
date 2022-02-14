import BaseLayout from "components/base/BaseLayout"
import { useTitleContext } from "context/TitleContext";
import { useEffect } from "react";

export default function PersonelUjiPage() {
  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Uji')
  })
  return(
    <div className="">

    </div>
  )
}

PersonelUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }