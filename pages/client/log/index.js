import BaseLayout from "components/base/BaseLayout"

export default function ClientLogPage() {

  // const [title, setTitle] = useTitleContext();
  // const router = useRouter
  return(
    <div className="">

    </div>
  )
}

ClientLogPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
