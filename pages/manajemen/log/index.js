import BaseLayout from 'components/base/BaseLayout';
import LogSection from 'components/base/logsection/LogSection';
import { clientLogs } from 'constants/test_objects/clientLog';

export default function ManajemenLogPage() {
  return(
    <LogSection data={clientLogs}>

    </LogSection>
  )
}

ManajemenLogPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

