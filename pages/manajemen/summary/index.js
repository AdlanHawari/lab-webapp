import BaseLayout from 'components/base/BaseLayout';
import DateFilter from 'components/base/filter/DateFilter';
import Button from 'components/small/button_fixed/Button';
import DisclosurePekerja from 'components/small/single_menu/disclosure/DisclosurePekerja';
import Title1 from 'components/small/typography/Title1';
import Title2Med from 'components/small/typography/Title2Med';
import { summary } from 'constants/ManajemenSummary';
import { subMenu } from 'constants/SubmenuManajemenUji';
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ManajemenSummaryPage() {

  const [title,setTitle,subTitle,setSubtitle] = useTitleContext();
  const router = useRouter()
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Summary')
  })

  return(
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="w-48">
          <DateFilter/>
        </div>

        <div className="w-[7.5rem]">
          <Button buttonStyle="primary_default" className="w-full px-5 py-0.5">
              Export
          </Button>
        </div>

      </div>

      <div className="flex justify-between space-x-7">
          <ul className="grid grid-flow-row grid-cols-2 w-full h-full gap-9">
            {summary.map((item,index) => (

              <li key={index} className='bg-white rounded-2xl border border-grey-300 h-40 shadow'>
                  <div className="block pl-9 pt-9 space-y-4">
                    <h1>10</h1>
                    <h3>
                      {item.title}
                    </h3>
                  </div>
                </li>
            ))

            }
            
            
          </ul>
          <div className="block w-96 p-9 bg-white border border-grey-300 rounded-2xl shadow divide-y divide-grey-300">
            
            <div className="flex justify-between pb-4">
              <h3>Status Pekerja</h3>
              <button onClick={()=>{
                setSubtitle(subMenu.PENGUJI)
                router.push("/manajemen/manajemen-uji"
              )}}>
                <Title1 className="text-primary">Lihat Semua</Title1>
              </button>
            </div>
            <div className="block py-4 space-y-1">
              <Title2Med>Active</Title2Med>
              <DisclosurePekerja bgButton="bg-primary"/>
              <DisclosurePekerja bgButton="bg-primary"/>

            </div>
            <div className="block py-4 space-y-1">
              <Title2Med>Standby</Title2Med>
              <DisclosurePekerja bgButton="bg-secondary"/>
              <DisclosurePekerja bgButton="bg-secondary"/>
              
            </div>
              
          </div>
      </div>
    </div>
  )
}

ManajemenSummaryPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

