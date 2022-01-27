import BaseLayout from 'components/base/BaseLayout';

export default function ManajemenManajemenUjiPage() {
  return(
    <div className="">
        Manajemen Manajemen Uji
    </div>
  )
}

ManajemenManajemenUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

