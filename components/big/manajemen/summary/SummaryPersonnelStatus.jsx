import DisclosurePekerja from 'components/small/single_menu/disclosure/DisclosurePekerja'
import Title1 from 'components/small/typography/Title1'
import Title2Med from 'components/small/typography/Title2Med'
import { subMenu } from 'constants/SubmenuManajemenUji'
import { userType } from 'constants/UserType'
import usePersonnelStatus from 'hooks/fetcher/personnel/usePersonnelStatus'
import { useTitleContext } from 'hooks/TitleContext'
import { useRouter } from 'next/router'
import React from 'react'

export default function SummaryPersonnelStatus() {
  
    const router =useRouter()
    const {personnel,error,mutate,loading} = usePersonnelStatus()
    const [title,setTitle, subTitle,setSubtitle] = useTitleContext();

  return (
    <div className="block w-96 p-9 bg-white border border-grey-300 rounded-2xl shadow divide-y divide-grey-300">
        <div className="flex justify-between pb-4">
        <h3>Status Pekerja</h3>
        <button onClick={()=>{
            setSubtitle(subMenu.PENGUJI)
            router.push(`/${userType.management}/manajemen-uji`
        )}}>
            <Title1 className="text-primary">Lihat Semua</Title1>
        </button>
        </div>
        <div className="block py-4 space-y-1">
          <Title2Med>Active</Title2Med>
          {loading &&
          <h3>
            Loading
          </h3>
          }
          {personnel&&
            personnel.data.map((item,index)=>(
              item.personnel_status &&
                <div key={index}>
                  <DisclosurePekerja bgButton="bg-primary" data={item}/>
                </div>
            ))
          }
        </div>
        <div className="block py-4 space-y-1">
          <Title2Med>Standby</Title2Med>
          {personnel&&
            personnel.data.map((item,index)=>(
              !item.personnel_status &&
                <div key={index}>
                  <DisclosurePekerja bgButton="bg-primary" data={item}/>
                </div>
            ))
          }
        </div>
    </div>
  )
}