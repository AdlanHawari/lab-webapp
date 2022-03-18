import Button from "../button_fixed/Button";
import Body1 from "../typography/Body1";
import Body3 from "../typography/Body3";
import Title1 from "../typography/Title1";
import Title2Med from "../typography/Title2Med";
import { useState } from "react";
import PermohonanUjiModal from "components/big/PermohonanUjiModal";

export default function SmallCard({data}) {
    const [isDetailOpen, setIsDetailOpen] = useState(false)
  return (
    <div className="block w-full border border-cardStrokes rounded-2xl p-5 space-y-5 bg-white">
        <div className="flex items-center space-x-6 divide-x divide-x-black-400 ">
            <div className="flex items-center space-x-6">

                <div className="title-5 text-black-400">
                    {data.jenis_uji}
                </div>
                <div className="border border-primary-darken10 rounded-lg bg-primary-lighten10 px-2">
                    <Title1 className="text-primary-darken10">
                        {data.status}
                    </Title1>
                </div>
            </div>
            <Title2Med className="text-black-400 pl-6">
                {data.no_surat}
            </Title2Med>
        </div>

        <h3 className="text-black-500">
            {data.nama_alat}
        </h3>

        <div className="flex">
            <div className="Block w-2/3 space-y-2">
                <div className="flex items-center space-x-20 ">
                    <Body1 className="text-black-500">
                        Tanggal Pengujian
                    </Body1>
                    <Body3 className="text-black-500">
                        {/* 13 November 2021 */}
                        {data.test_date}
                    </Body3>

                </div>
                <div className="flex space-x-28">
                    <Body1 className="text-black-500">
                        Kelengkapan
                        
                    </Body1>
                    <ul>
                        {data.kelengkapan.map((item,index)=>(
                            <li key={index}>
                                <Body3 className="text-black-500">
                                    {item}
                                </Body3>
                            </li>

                        ))}
                        {/* <li>
                            <Body3 className="text-black-500">
                                Form Uji Ulang Permohonan
                            </Body3>
                        </li>
                        <li>
                            <Body3 className="text-black-500">
                                Foto Pesawat X-Ray
                            </Body3>
                        </li>
                        <li>
                            <Body3 className="text-black-500">
                                NPWP
                            </Body3>
                        </li>
                        <li>
                            <Body3 className="text-black-500">
                                Bukti Pembayaran
                            </Body3>
                        </li> */}
                    </ul>

                </div>

            </div>
            <div className="Block">
                <Body1 className="text-black-900">

                    Biaya Pengujian
                </Body1>
                <Body3 className="text-primary-darken10">

                    {/* Rp 2,000,000.- */}
                    {data.fee}
                </Body3>
            </div>

        </div>
        <div className="flex justify-end">
            <Button type="primary_default" className="w-auto px-5 py-0.5"
            onClick={()=>setIsDetailOpen(true)}>
                Lihat Detail
            </Button>
        </div>

        {isDetailOpen &&
          <PermohonanUjiModal isOpen={isDetailOpen} setIsOpen={setIsDetailOpen}/>
        }

    </div>
  )
}
