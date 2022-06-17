
import { useRouter } from "next/router"
import { useEffect } from "react"
import BaseLayout from "/components/base/BaseLayout"

export default function ClientPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("client/uji")
  })
  
  return (
    <div className="">

      <h1>client page</h1>
    </div>

  )
}


ClientPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
