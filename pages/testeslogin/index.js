import JenisPekerjaanFilter from 'components/base/filter/JenisPekerjaanFilter';
import ProfileDropdown from 'components/small/single_menu/ProfileDropdown';
import JenisPekerjaanFilterContextProvider from 'hooks/context/filter-jenisPekerjaan/JenisPekerjaanFilter';
import TitleContextProvider from 'hooks/TitleContext';
import React, { useEffect } from 'react'
import useSWR from 'swr';
import GetToken from 'utils/GetToken';

export default function TestesLoginPage() {
   
  return (
    <JenisPekerjaanFilterContextProvider>
      <TitleContextProvider>


    <div className='relative'>
      <div className="absolute right-0">
        <ProfileDropdown/>
      </div>
      <div className="absolute top-20 right-0">
        
        <JenisPekerjaanFilter/>
      </div>
      

    </div>
      </TitleContextProvider>
    </JenisPekerjaanFilterContextProvider>
  )
}
