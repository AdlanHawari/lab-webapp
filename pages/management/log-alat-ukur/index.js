import BaseLayout from 'components/base/BaseLayout'
import { ACCESS_CODE } from 'constants/Access_Code';
import useUser from 'hooks/fetcher/auth/useUser';
import { useTitleContext } from 'hooks/TitleContext';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function LogAlatUkurPage() {
  const [title, setTitle] = useTitleContext();
  const router = useRouter()
  const { user, loading,error, mutate } = useUser()
  const [render, setRender] = useState(false)
  
  useEffect(() => {
    setTitle('Log');
  })

  useEffect(() => {
    
    // delay(1000)
    if(user){
      console.log("user", user)
      if(user.data.role.access_code != ACCESS_CODE.MANAGEMENT_KAL && user.data.role.access_code != ACCESS_CODE.MANAGEMENT_UJI && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
        router.replace("/")
      }
      else{
        setRender(true)
      }
    }

    if(error&& !user){
      console.log("error", error)
      router.replace("/")
    }
    // else{
    //   router.replace("/")
    // }
  
  }, [user,error])
  return (
    <>
  
    {loading ?
    <div className="">

      <h3>Loading...</h3>
    </div>
    :
    render &&
    
    <div>LogAlatUkur</div>
  }
  </>
  )
}

LogAlatUkurPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }