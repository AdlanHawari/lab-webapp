import BaseLayout from "components/base/BaseLayout"
import ProfileSection from "components/base/profilesection/ProfileSection"
import { useTitleContext } from "hooks/TitleContext";
import { useEffect } from "react";

export default function ManajemenProfilePage() {

  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
  setTitle('Profile')
  })
  return(
      <ProfileSection/>
      // <div className=""></div>

  )
}

ManajemenProfilePage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
