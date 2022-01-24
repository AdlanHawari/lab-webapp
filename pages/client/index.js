
import BaseLayout from "/components/base/BaseLayout"

export default function ClientPage() {
  return (
    <div className="">

      <h1>client page</h1>
    </div>

  )
}


ClientPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
