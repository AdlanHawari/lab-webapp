import BaseLayout from 'components/base/BaseLayout';

export default function ManajemenPermohonanUjiPage() {
  return(
    <div className="">
        Manajemen Permohonan Uji
    </div>
  )
}

ManajemenPermohonanUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

