import BaseLayout from 'components/base/BaseLayout';

export default function ManajemenArsipPage() {
  return(
    <div className="">
        Manajemen Arsip
    </div>
  )
}

ManajemenArsipPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

