import BaseLayout from 'components/base/BaseLayout';
import ProfileSection from 'components/base/profilesection/ProfileSection';
import { ACCESS_CODE } from 'constants/Access_Code';
import useUser from 'hooks/fetcher/auth/useUser';
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function PersonelProfilePage() {
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
        if(user.data.role.access_code != ACCESS_CODE.PERSONNEL && user.data.role.access_code != ACCESS_CODE.PERSONNEL_PEERS &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
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

    }
  
  }, [user,error, isValidating])

  return(
    <ProfileSection/>
  )
}

PersonelProfilePage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
