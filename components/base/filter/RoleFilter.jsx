import UserRoleDropDown from 'components/small/single_menu/UserRoleDropDown'
import { useRoleFilterContext } from 'hooks/context/filter-role/RoleFilter'
import React from 'react'

export default function RoleFilter() {
    const { setRoleState} = useRoleFilterContext()
  return (
    <UserRoleDropDown
    setContext={setRoleState}
    />
  )
}