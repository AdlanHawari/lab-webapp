import { PlusIcon, UsersIcon } from '@heroicons/react/solid'
import RoleFilter from 'components/base/filter/RoleFilter'
import { useManajemenUserContext } from 'hooks/context/manajemen-user/ManajemenUserContext'
import React from 'react'

export default function ManajemenUserFilterSection() {

    const {setRolePopUp,setIsCreateUserOpen} = useManajemenUserContext()
  return (
    <div className="flex justify-between items-center">
        <div className="w-72">
          <RoleFilter/>
        </div>

        <div className="flex space-x-4">
           <button className="flex items-center space-x-2 bg-primary button-base text-white px-5 py-2 rounded-xl"
            onClick={()=>setRolePopUp(true)}>
              <UsersIcon className="h-4 w-4 cursor-pointer" aria-hidden="true"/>
              <p>
                Roles dan Permission User
              </p>
          </button>
          <button className="flex items-center space-x-2 bg-primary button-base text-white px-5 py-2 rounded-xl"
            onClick={()=>setIsCreateUserOpen(true)}>
              <PlusIcon className="h-6 w-6 cursor-pointer" aria-hidden="true"/>
              <p>
                Tambah User Baru
              </p>
          </button>
        </div>
      </div>
  )
}
