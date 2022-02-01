import BaseLayout from "components/base/BaseLayout"
import LogSection from "components/base/logsection/LogSection"
import { clientLogs } from "constants/test_objects/clientLog"

export default function ClientLogPage() {

  // const [title, setTitle] = useTitleContext();
  // const router = useRouter
  console.log(clientLogs)
  return(
    <LogSection data={clientLogs}>

    </LogSection>
    // <div className="">
    //   {
    //     clientLogs.map((item, index)=> (
    //       <div className="" key={index}>
    //         {item.name}
    //       </div>
    //     ))
    //   }

    // </div>
  )
}

ClientLogPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
