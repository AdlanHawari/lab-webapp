import QuickFilterSmaller from 'components/small/button_small/QuickFilterSmaller'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import React from 'react'
import DateFormatter from 'utils/DateFormatter'

export default function SectionSchedule({data}) {
    const {readable} = DateFormatter()
  return (
    <div className="pt-4">
        <h3>
            Jadwal Uji &amp; Pengolahan Data
        </h3> 
        <div className="pt-7 space-y-7">

            <div className="grid grid-cols-2 gap-y-3">
                                                    
                <Body1 className="text-black-400">
                    Tanggal Uji
                </Body1>
                <Body2 className="text-black-500">
                    {/* 5 Juli 2021 */}
                    {data.assignment_detail.tester.name ?
                    readable(data.assignment_detail.test_date)
                    :
                    "-"
                    }
                </Body2>
                <Body1 className="text-black-400">
                    Nama Penguji
                </Body1>
                <Body2 className="text-black-500">
                    {data.assignment_detail.tester.name}
                </Body2>
            
            
                <Body1 className="text-black-400">
                    Nomor Surat Tugas
                </Body1>
                <Body2 className="text-black-500">
                {data.assignment_detail.assignment_no}
                    {/* 081/ST/SIP/VI/2021 */}
                </Body2>
            
            
                <Body1 className="text-black-400">
                    Nomor Berita Acara Pekerjaan
                </Body1>
                <Body2 className="text-black-500">
                    
                </Body2>
            
            </div>
            <div className="grid grid-cols-2 gap-y-3">

                <Body1 className="text-black-400">
                    H- Minus
                </Body1>
                <Body2 className="text-black-500">
                    -
                </Body2>
                
            
            
                <Body1 className="text-black-400">
                    Data X-Ray
                </Body1>
                <Body2 className="text-black-500">
                    {/* X-Ray Stasioner 200 mA */}
                    -
                </Body2>

                <Body1 className="text-black-400">
                    Submit Terakhir
                </Body1>
                <Body2 className="text-black-500">
                    -
                </Body2>
                <Body1 className="text-black-400">
                    Keterangan
                </Body1>
                <Body2 className="text-black-500">
                    -
                </Body2>
                <Body1 className="text-black-400">
                    Tanggal Registrasi
                </Body1>
                <Body2 className="text-black-500">
                    
                    {data.balis_registration_date ?
                     readable(data.balis_registration_date)
                     :
                     "-"
                    }
                </Body2>

                <Body1 className="text-black-400">
                    Konfirmasi Laporan Uji Peer
                </Body1>
                <Body2 className="text-black-500">
                    -
                </Body2>
                <Body1 className="text-black-400">
                    Konfirmasi Laporan Uji Kepala LUK
                </Body1>
                <Body2 className="text-black-500">
                    -
                </Body2>
            </div>
        
            <div className="grid grid-cols-2 gap-y-3 ">

                <Body1 className="text-black-400">
                    Nomor Registrasi Bapeten
                </Body1>
                <Body2 className="text-black-500">
                    {data.bapeten_registration_no ? 
                    data.bapeten_registration_no
                    :
                    "-"
                    }
                </Body2>
                <Body1 className="text-black-400">
                    Nomor Sertifikat Uji Kesesuaian
                </Body1>
                <Body2 className="text-black-500">
                    
                </Body2>
                
            </div>

            
        </div>
    </div>
  )
}
