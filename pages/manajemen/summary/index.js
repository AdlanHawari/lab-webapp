import BaseLayout from 'components/base/BaseLayout';

export default function ManajemenSummaryPage() {
  return(
    <div className="">
        Manajemen Summary
    </div>
  )
}

ManajemenSummaryPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

