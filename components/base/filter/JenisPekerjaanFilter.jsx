import JenisUjiDropDown from 'components/small/single_menu/JenisUjiDropdown'
import { useJenisPekerjaanFilterContext } from 'hooks/context/filter-jenisPekerjaan/JenisPekerjaanFilter'
import React from 'react'

export default function JenisPekerjaanFilter() {
    const {setjenisPekerjaanState}= useJenisPekerjaanFilterContext()
  return (
    <JenisUjiDropDown
    setContext={setjenisPekerjaanState}
    />
  )
}