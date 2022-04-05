import { UsersIcon } from '@heroicons/react/outline';
import { PlusIcon } from '@heroicons/react/solid';
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

      <div className="flex justify-between items-center">
        <div className="">
          <DateFilter/>
        </div>

        <div className="flex space-x-4">
           <button className="flex items-center space-x-2 bg-primary button-base text-white px-5 py-2 rounded-xl"
            >
              <UsersIcon className="h-4 w-4 cursor-pointer" aria-hidden="true"/>
              <p>
                Roles dan Permission User
              </p>
          </button>
          <button className="flex items-center space-x-2 bg-primary button-base text-white px-5 py-2 rounded-xl"
            >
              <PlusIcon className="h-6 w-6 cursor-pointer" aria-hidden="true"/>
              <p>
                Tambah User Baru
              </p>
          </button>
        </div>
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

