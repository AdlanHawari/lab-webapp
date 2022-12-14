import { ACCESS_CODE } from "constants/Access_Code"
import useUser from "hooks/fetcher/auth/useUser"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import BaseLayout from "../../components/base/BaseLayout"

export default function ManagementPage() {

  const router = useRouter()
  const { user, loading,error, isValidating } = useUser()
  const [render, setRender] = useState(false)

  useEffect(() => {
    if(!isValidating){
      if(user){
        
        if(user.data.role.access_code != ACCESS_CODE.MANAGEMENT_KAL && user.data.role.access_code != ACCESS_CODE.MANAGEMENT_UJI && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB_KAL && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB_UJI &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
          router.replace("/")
        }
        else{
          // setRender(true)
          router.push("management/summary")
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


ManagementPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
