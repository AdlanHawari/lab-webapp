import BaseLayout from 'components/base/BaseLayout';
import DateFilter from 'components/base/filter/DateFilter';
import UserTable from 'components/base/table/UserTable';
import { users } from 'constants/test_objects/users';
import { useTitleContext } from "hooks/TitleContext";
import { useEffect } from 'react';

export default function ManajemenManajemenUserPage() {

  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Kelola User')
  })

  return(
    <div className="block space-y-7">

      <div className="flex">
          <DateFilter/>
      </div>
      <UserTable data={users}/>
  </div>
  )
}

ManajemenManajemenUserPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

