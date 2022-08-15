
import { ACCESS_CODE } from "constants/Access_Code"
import useUser from "hooks/fetcher/auth/useUser"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import BaseLayout from "/components/base/BaseLayout"

export default function ClientPage() {
  const router = useRouter()
  const { user, loading,error, mutate } = useUser()
  const [render, setRender] = useState(false)

  // useEffect(() => {
  //   router.push("client/uji")
  // })
  useEffect(() => {
    if(user){
      console.log("user", user)
      if(user.data.role.access_code != ACCESS_CODE.CLIENT &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
        router.replace("/")
      }
      else{
        // setRender(true)
        router.push("client/uji")
      }
    }
    else{
      router.replace("/")
    }
  }, [user])
  
  return (
    <>
     {loading &&
    <div className="">

      <h3>Loading...</h3>
    </div>
    }

    </>
    // <div className="">

    //   <h1>client page</h1>
    // </div>

  )
}


ClientPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
