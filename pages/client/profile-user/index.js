import BaseLayout from 'components/base/BaseLayout';
import ProfileSection from 'components/base/profilesection/ProfileSection';
import { useTitleContext } from 'context/TitleContext';
import { useEffect } from 'react';

export default function ClientProfilePage() {
  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Profile')
  })
  return(
    <ProfileSection/>
    // <div className="">this is profile client</div>
  )
}

ClientProfilePage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
