import BaseLayout from "components/base/BaseLayout"

export default function ClientUjiPage() {
  return(
    <div className="">

    </div>
  )
}

ClientUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }