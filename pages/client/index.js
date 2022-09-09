
import { ACCESS_CODE } from "constants/Access_Code"
import useUser from "hooks/fetcher/auth/useUser"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import BaseLayout from "/components/base/BaseLayout"

export default function ClientPage() {
  const router = useRouter()
  const { user, loading,error, isValidating } = useUser()
  const [render, setRender] = useState(false)

  useEffect(() => {
    if(!isValidating){
      if(user){
        if(user.data.role.access_code != ACCESS_CODE.CLIENT &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
          router.replace("/")
        }
        else{
          router.push("client/uji")
        }
      }
      if(error&& !user){
        router.replace("/")
      }
    }
  }, [user,error, isValidating])
  
  return (
    <>
     {loading &&
    <div className="">
      <h3>Loading...</h3>
    </div>
    }
    </>
  )
}

ClientPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
