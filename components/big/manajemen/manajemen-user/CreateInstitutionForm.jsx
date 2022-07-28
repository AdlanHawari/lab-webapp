import Button from 'components/small/button_fixed/Button'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import React from 'react'

export default function CreateInstitutionForm() {
  return (
    <div className="block bg-grey-100 border border-grey-400 space-y-3 rounded-xl p-5">
        <Body2 className="text-black-400 pb-3.5">
            Instansi Baru
        </Body2>
        <div className='flex items-center justify-between'>
            <Body1 className="text-black-400">
                Nama Instansi
            </Body1>
            <div className="block">
            
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <Body1 className="text-black-400">
                Alamat Instansi
            </Body1>
            <div className="block">
            
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <Body1 className="text-black-400">
                Email Instansi
            </Body1>
            <div className="block">
            
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <Body1 className="text-black-400">
                No. Telp Instansi
            </Body1>
            <div className="block">
            
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <Body1 className="text-black-400">
                No. Hp Instansi
            </Body1>
            <div className="block">
            
            </div>
        </div>

        <div className="flex w-full justify-end">

            <Button 
            className="bg-primary w-40" 
            buttonStyle="primary_default" 
            type="">
                Simpan Instansi
            </Button>
        </div>

    </div>
  )
}
