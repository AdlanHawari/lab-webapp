import JenisAlatDropDown from 'components/small/single_menu/JenisAlatDropDown'
import { useJenisAlatFilterContext } from 'hooks/context/filter-jenis-alat/JenisAlatFilter'
import React from 'react'

export default function JenisAlatFilter({itemLists}) {
  const {jenisAlatState, setJenisAlatState} = useJenisAlatFilterContext()
    return (
    <JenisAlatDropDown
    itemLists={itemLists}
    setContext={setJenisAlatState}
    placeholder="Pilih jenis alat"
    />
  )
}