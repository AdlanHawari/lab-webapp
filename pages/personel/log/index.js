import BaseLayout from "components/base/BaseLayout"
import LogSection from "components/base/logsection/LogSection"
import { clientLogs } from "constants/test_objects/clientLog"

export default function PersonelLogPage() {

  // const [title, setTitle] = useTitleContext();
  // const router = useRouter
  return(
    <LogSection data={clientLogs}>

    </LogSection>
  )
}

PersonelLogPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
