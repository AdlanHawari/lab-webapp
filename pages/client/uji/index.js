import { PlusIcon } from "@heroicons/react/solid";
import BaseLayout from "components/base/BaseLayout"
import DateFilter from "components/base/filter/DateFilter";
import SmallCard from "components/small/small_card/SmallCard";
import { clientUji } from "constants/test_objects/clientUji";
import { useTitleContext } from "context/TitleContext";
import { useEffect } from "react";

export default function ClientUjiPage() {
  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Uji')
  })
  return(
    // <div className="flex flex-col divide-y divide-grey-200 space-y-5">
      <div className="flex flex-col divide-y divide-grey-200 space-y-5">
        <div className="flex justify-between">
          <DateFilter/>
          <button className="flex items-center space-x-2 bg-primary button-base text-white px-5 py-2 rounded-xl">
            <PlusIcon className="h-6 w-6 cursor-pointer" aria-hidden="true"/>
            <p>
              Buat Permohonan Uji
            </p>
          </button>
        </div>

        <ul className="pt-5 space-y-5">
          {/* content */}
          {clientUji.map((item,index)=>(
            <li key={index}>
              <SmallCard data={item}/>
            </li>
          ))}
        </ul>

    </div>
  )
}

ClientUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }