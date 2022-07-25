import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import React from 'react'
import DateFormatter from 'utils/DateFormatter'

export default function FormPraUji({data}) {
    const {readable} = DateFormatter()
  return (
    <div className='block w-full pl-10 pr-32 space-y-3 divide-y divide-grey-200'>
        <div className="">
            <h3>Alat 1</h3>
            <div className="grid grid-cols-2 gap-y-3 py-3">
                <Body1 className="text-black-400">
                    Jenis Alat
                </Body1>
                <Body2 className="text-black-500">
                    {data.tools[0].name}
                </Body2>
                <Body1 className="text-black-400">
                    Jenis Uji
                </Body1>
                <Body2 className="text-black-500">
                    {data.test_type}
                </Body2>
            </div>
            
        </div>
        <div className="grid grid-cols-2 gap-y-3 py-3">
            <Body1 className="text-black-400">
                Nomor Surat
            </Body1>
            <Body2 className="text-black-500">
                NOSURAT
            </Body2>
            <Body1 className="text-black-400">
            Tanggal Permohonan
            </Body1>
            <Body2 className="text-black-500">
                {readable(data.created_at)}
            </Body2>
            <Body1 className="text-black-400">
            Nama Instansi
            </Body1>
            <Body2 className="text-black-500">
                {data.user.institution.name}
            </Body2>
            <Body1 className="text-black-400">
                Alamat Instansi
            </Body1>
            <Body2 className="text-black-500">
                {data.user.institution.address}
            </Body2>
            <Body1 className="text-black-400">
                Telp/Fax
            </Body1>
            <Body2 className="text-black-500">
                {data.user.institution.phone_number}
            </Body2>
            <Body1 className="text-black-400">
                Email
            </Body1>
            <Body2 className="text-black-500">
                {data.user.institution.email}
            </Body2>

        </div>

        <div className="">
            <h3>Spesifikasi Alat</h3>
            <div className="grid grid-cols-2 gap-y-3 py-3">
                <Body1 className="text-black-400">
                    Merk Alat
                </Body1>
                <Body2 className="text-black-500">
                    {data.tools[0].brand}
                </Body2>
                <Body1 className="text-black-400">
                    Tipe Alat
                </Body1>
                <Body2 className="text-black-500">
                    {data.tools[0].type}
                </Body2>

            </div>
        </div>

        <div className="">
            <h3>Kolom Pertanyaan</h3>

        </div>
    </div>
  )
}
