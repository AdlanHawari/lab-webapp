import { UserIcon, UsersIcon } from '@heroicons/react/solid'
import Body1 from 'components/small/typography/Body1'
import React from 'react'

export default function RoleList() {
  return (
    <div className="block w-full px-10 space-y-3">

        <div className="flex items-center space-x-7 px-9 py-5 bg-primary-lighten10 rounded-2xl">
        <UserIcon className="h-14 w-14 cursor-pointer text-primary" aria-hidden="true"/>
        <div className="block space-y-1.5">
            <h3 className=''>
            Penguji
            </h3>
            <Body1>
            Role untuk pelaksana pengujian terhadap alat-alat kesehatan
            </Body1>

        </div>
        </div>

        <div className="flex items-center space-x-7 px-9 py-5 bg-primary-lighten10 rounded-2xl">
        <UserIcon className="h-14 w-14 cursor-pointer text-primary" aria-hidden="true"/>
        <div className="block space-y-1.5">
            <h3 className=''>
            Manajemen
            </h3>
            <Body1>
            Role untuk pihak- pihak yang bertanggung jawab atas jalannya pengujian alat-alat kesehatan dari PT. Sri Intan Perkasa
            </Body1>

        </div>
        </div>

        <div className="flex items-center space-x-7 px-9 py-5 bg-primary-lighten10 rounded-2xl">
        <UserIcon className="h-14 w-14 cursor-pointer text-primary" aria-hidden="true"/>
        <div className="block space-y-1.5">
            <h3 className=''>
            Kepala Lab
            </h3>
            <Body1>
            Role untuk pemangku kepentingan dalam hal melakukan pengecekan administrasi permohonan alat-alat yang akan dilakukan pengujian (sebagai approval terhadap pengujian alat)
            </Body1>

        </div>
        </div>

        <div className="flex items-center space-x-7 px-9 py-5 bg-primary-lighten10 rounded-2xl">
        <UserIcon className="h-14 w-14 cursor-pointer text-primary" aria-hidden="true"/>
        <div className="block space-y-1.5">
            <h3 className=''>
            Super Admin
            </h3>
            <Body1>
            Role untuk masuk sebagai semua role user yang terdaftar
            </Body1>

        </div>
        </div>

        <div className="flex items-center space-x-7 px-9 py-5 bg-primary-lighten10 rounded-2xl">
        <UserIcon className="h-14 w-14 cursor-pointer text-primary" aria-hidden="true"/>
        <div className="block space-y-1.5">
            <h3 className=''>
            Klien
            </h3>
            <Body1>
            "Role untuk masuk sebagai user baru yang melakukan permohonan uji / sebagai klien dari PT. Sri Intan Perkasa"
            </Body1>

        </div>
        </div>

        {/* <div className="flex items-center space-x-7 px-9 py-5 bg-primary-lighten10 rounded-2xl">
            <UserIcon className="h-14 w-14 cursor-pointer text-primary" aria-hidden="true"/>
            <div className="block space-y-1.5">
                <h3 className=''>
                Second Klien
                </h3>
                <Body1>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sequi atque vitae, deserunt laborum obcaecati fuga saepe officiis libero quis.
                </Body1>

            </div>
        </div> */}
    </div>
  )
}
