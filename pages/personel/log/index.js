import BaseLayout from "components/base/BaseLayout"
import LogSection from "components/base/logsection/LogSection"
import { clientLogs } from "constants/test_objects/clientLog"
import { useTitleContext } from "hooks/TitleContext";
import { useEffect } from "react";

export default function PersonelLogPage() {

  // const [title, setTitle] = useTitleContext();
  // const router = useRouter
  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
  setTitle('Log')
  })
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
