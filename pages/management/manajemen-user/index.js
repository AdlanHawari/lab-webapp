import { UsersIcon } from '@heroicons/react/outline';
import { PlusIcon, UserIcon } from '@heroicons/react/solid';
import BaseLayout from 'components/base/BaseLayout';
import DateFilter from 'components/base/filter/DateFilter';
import UserTable from 'components/base/table/UserTable';
import FormModal from 'components/big/FormModal';
import FormCreateUser from 'components/big/manajemen/FormCreateUser';
import ManajemenUserFilterSection from 'components/big/manajemen/manajemen-user/ManajemenUserFilterSection';
import ManajemenUserMainSection from 'components/big/manajemen/manajemen-user/ManajemenUserMainSection';

import RoleList from 'components/big/manajemen/RoleList';
import Button from 'components/small/button_fixed/Button';
import Body1 from 'components/small/typography/Body1';
import { form_create_user_id } from 'constants/FormUtils';
import { users } from 'constants/test_objects/users';
import ManajemenUserContextProvider from 'hooks/context/manajemen-user/ManajemenUserContext';
import PageContextProvider from 'hooks/context/pagination/PageContext';
import { ManajemenUserFetcherProvider } from 'hooks/fetcher/management-user/useManajemenUserFetcher';
import { useTitleContext } from "hooks/TitleContext";
import { useEffect,useState } from 'react';

export default function ManajemenManajemenUserPage() {

  const [title, setTitle] = useTitleContext();
  // const [isRoleOpen, setIsRoleOpen] = useState(false)
  // const [isCreateUserOpen, setIsCreateUserOpen] = useState(false)
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Kelola User')
  })

  return(
  <PageContextProvider>
    <ManajemenUserContextProvider>
      <ManajemenUserFetcherProvider>
        <div className="block space-y-7">
          <ManajemenUserFilterSection/>
          <ManajemenUserMainSection/>
      </div>
      </ManajemenUserFetcherProvider>
    </ManajemenUserContextProvider>
  </PageContextProvider>
  )
}

ManajemenManajemenUserPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

