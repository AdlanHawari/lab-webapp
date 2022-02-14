import BaseLayout from 'components/base/BaseLayout';
import ProfileSection from 'components/base/profilesection/ProfileSection';
import { useTitleContext } from 'context/TitleContext';
import React, { useEffect } from 'react';

export default function PersonelProfilePage() {
  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Profile')
  })
  return(
    <ProfileSection/>
  )
}

PersonelProfilePage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
