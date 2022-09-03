import BaseLayout from "components/base/BaseLayout"
import ProfileSection from "components/base/profilesection/ProfileSection"
import { ACCESS_CODE } from "constants/Access_Code";
import useUser from "hooks/fetcher/auth/useUser";
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ManajemenProfilePage() {

  const [title, setTitle] = useTitleContext();
  const router = useRouter()
  const { user, loading,error, isValidating } = useUser()
  const [render, setRender] = useState(false)


  useEffect(() => {
  setTitle('Profile')
  })

  useEffect(() => {
    if(!isValidating){
      if(user){
        console.log("user", user)
        if(user.data.role.access_code != ACCESS_CODE.MANAGEMENT_KAL && user.data.role.access_code != ACCESS_CODE.MANAGEMENT_UJI && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB_KAL && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB_UJI &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
          router.replace("/")
        }
        else{
          setRender(true)
          // router.push("management/summary")
        }
      }
      if(error&& !user){
        console.log("error", error)
        router.replace("/")
      }

    }
  }, [user,error, isValidating])


  return(
    <>
    {loading ?
      <div className="">

        <h3>Loading...</h3>
      </div>
      :
      render &&
      <ProfileSection/>

    }

    </>
  )
}

ManajemenProfilePage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
