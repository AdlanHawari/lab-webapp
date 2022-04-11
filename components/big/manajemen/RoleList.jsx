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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sequi atque vitae, deserunt laborum obcaecati fuga saepe officiis libero quis.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sequi atque vitae, deserunt laborum obcaecati fuga saepe officiis libero quis.
            </Body1>

        </div>
        </div>

        <div className="flex items-center space-x-7 px-9 py-5 bg-primary-lighten10 rounded-2xl">
        <UserIcon className="h-14 w-14 cursor-pointer text-primary" aria-hidden="true"/>
        <div className="block space-y-1.5">
            <h3 className=''>
            Kepala LUK
            </h3>
            <Body1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sequi atque vitae, deserunt laborum obcaecati fuga saepe officiis libero quis.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sequi atque vitae, deserunt laborum obcaecati fuga saepe officiis libero quis.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sequi atque vitae, deserunt laborum obcaecati fuga saepe officiis libero quis.
            </Body1>

        </div>
        </div>

        <div className="flex items-center space-x-7 px-9 py-5 bg-primary-lighten10 rounded-2xl">
        <UserIcon className="h-14 w-14 cursor-pointer text-primary" aria-hidden="true"/>
        <div className="block space-y-1.5">
            <h3 className=''>
            Second Klien
            </h3>
            <Body1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sequi atque vitae, deserunt laborum obcaecati fuga saepe officiis libero quis.
            </Body1>

        </div>
        </div>
    </div>
  )
}
