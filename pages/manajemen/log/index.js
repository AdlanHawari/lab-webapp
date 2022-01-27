import BaseLayout from 'components/base/BaseLayout';

export default function ManajemenLogPage() {
  return(
    <div className="">
        Manajemen Log
    </div>
  )
}

ManajemenLogPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

