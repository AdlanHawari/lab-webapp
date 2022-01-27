import BaseLayout from 'components/base/BaseLayout';

export default function ManajemenManajemenUserPage() {
  return(
    <div className="">
        Manajemen Manajemen User
    </div>
  )
}

ManajemenManajemenUserPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

