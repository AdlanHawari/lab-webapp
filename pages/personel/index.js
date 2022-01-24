import BaseLayout from "../../components/base/BaseLayout"

export default function PersonelPage() {
  return (
      <h1>Personel page</h1>

  )
}


PersonelPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
