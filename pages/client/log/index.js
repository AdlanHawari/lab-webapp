import BaseLayout from "components/base/BaseLayout"
import LogSection from "components/base/logsection/LogSection"
import { clientLogs } from "constants/test_objects/clientLog"
import { useTitleContext } from "context/TitleContext";
import { useEffect } from "react";

export default function ClientLogPage() {

  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
  setTitle('Log')
  })
  
  return(
    <LogSection data={clientLogs}>

    </LogSection>
    // <div className="">
    //   this is log
    // </div>
  )
}

ClientLogPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
