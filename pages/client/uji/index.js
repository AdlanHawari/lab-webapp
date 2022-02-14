import BaseLayout from "components/base/BaseLayout"
import { useTitleContext } from "context/TitleContext";
import { useEffect } from "react";

export default function ClientUjiPage() {
  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Uji')
  })
  return(
    <div className="">
      this is uji client
    </div>
  )
}

ClientUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }