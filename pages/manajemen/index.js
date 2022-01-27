import BaseLayout from "../../components/base/BaseLayout"

export default function ManagementPage() {
  return (
      <h1>Management page</h1>

  )
}


ManagementPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
