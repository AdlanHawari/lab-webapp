import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import InstansiDropDown from 'components/small/single_menu/InstansiDropDown'
import { useInstitutionFilterContext } from 'hooks/context/filter-institution/InstitutionFilter'
import useInstitutionsList from 'hooks/fetcher/management-summary/useInstitutionsList'
import React, { Fragment, useEffect, useState } from 'react'

export default function InstansiFilter({itemLists, externResetClicked}) {
    const {institutionState, setInstitutionState} = useInstitutionFilterContext()

  return (
    <InstansiDropDown
    itemLists={itemLists}
    setContext={setInstitutionState}
    />
  )
}