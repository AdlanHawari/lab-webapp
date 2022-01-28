import BaseLayout from "components/base/BaseLayout"
import ProfileSection from "components/base/profilesection/ProfileSection"

export default function ManajemenProfilePage() {
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
