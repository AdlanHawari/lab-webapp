import { PencilIcon } from '@heroicons/react/outline'
import QuickFilterSmaller from 'components/small/button_small/QuickFilterSmaller'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import React, { useState } from 'react'
import DateFormatter from 'utils/DateFormatter'
import handleFormData from 'utils/HandleFormData'
import XRayDetector from 'utils/XRayDetector'

export default function FormEditSertifLuk({
    id,
    data,
    setSubmitState,
    setreqSent
}) {

  const [editName, setEditName] = useState(false)
  const [editAddress, setEditAddress] = useState(false)

  const {editSertifLUK} = useDetailUji()

  const {readable} = DateFormatter()
  return (
    <Formik
    initialValues={{
      certificate_name: data.certificate_name? data.certificate_name:data.user.institution.name,
      certificate_address: data.certificate_address? data.certificate_address:data.user.institution.address
    }}
    onSubmit={(values)=>{
      setSubmitState(true)
      console.log(data.id)
      console.log(values)

      let formData = handleFormData(values)

      async function fetchData(){
        const response = await editSertifLUK(formData, data.id)
        console.log("response", response)

        if(response.header.response_code == 200){
          setreqSent(true)

        }


      }
      fetchData()
    }}
    >
      <Form id={id}>

        <div className="flex flex-col divide-y divide-grey-200 space-y-3  w-full pl-10 pr-32">
          <h3 className='text-black-400'>
            Konfirmasi informasi pada sertifikat di bawah ini
          </h3>
          <div className="grid grid-cols-2 gap-y-3 py-3">
            <Body1 className="text-black-400">
                Nomor
            </Body1>
            <Body2 className="text-black-500">
                {data.assignment_detail.assignment_no}
            </Body2>
            <Body1 className="text-black-400">
                Tanggal Permohonan
            </Body1>
            <Body2 className="text-black-500">
              {readable(data.created_at)}
            </Body2>
            <Body1 className="text-black-400">
                Nama Pembuat Order
            </Body1>
            <Body2 className="text-black-500">
                {data.user.institution.name}
            </Body2>
            <Body1 className="text-black-400">
                Alamat Pembuat Order
            </Body1>
            <Body2 className="text-black-500">
              {data.user.institution.address}
            </Body2>
            <Body1 className="text-black-400">
                Nama pada Sertifikat
            </Body1>
            {editName?
            <div className="block">
              <Field
                  className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                  id="certificate_name"
                  name="certificate_name"
                  type="text"
                  />
            </div>
            :
            <div className="flex items-center space-x-2">
                <Body2 className="text-black-500">
                  {data.certificate_name?
                  data.certificate_name
                  :  
                  data.user.institution.name
                }
                </Body2>
              <button
              type='button'
              onClick={()=> setEditName(!editName)}
              >
                <PencilIcon className='w-4' aria-hidden="true"/>
              </button>
            </div>

            }
            <Body1 className="text-black-400">
                Alamat pada Sertifikat
            </Body1>
            {editAddress?
            <div className="block">
              <Field
                  className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                  id="certificate_address"
                  name="certificate_address"
                  type="text"
                  />
            </div>
            :
            <div className="flex items-center space-x-2">
              <Body2 className="text-black-500">
                {data.certificate_address
                  ?
                  data.certificate_address
                :
                data.user.institution.address}
              </Body2>
              <button
              type='button'
              onClick={()=> setEditAddress(!editAddress)}
              >
                <PencilIcon className='w-4' aria-hidden="true"/>
              </button>
            </div>
            }
            
            <Body1 className="text-black-400">
                Status
            </Body1>
            <div className="">
                <QuickFilterSmaller className="bg-primary-lighten10 border-primary-darken10 text-primary-darken10">
                    <Body2>
                        {data.status_detail.management_value}
                    </Body2>
                </QuickFilterSmaller>
            </div>
            <Body1 className="text-black-400">
                Jenis Uji
            </Body1>
            <Body2 className="text-black-500">
                {data.test_type}
            </Body2>
          </div>

          <div className="grid grid-cols-2 gap-y-3 py-3">
            <Body1 className="text-black-400">
                Jenis Alat
            </Body1>
            <Body2 className="text-black-500">
                {data.tools[0].tool.type}
            </Body2>
            <Body1 className="text-black-400">
                Merk Alat
            </Body1>
            <Body2 className="text-black-500">
                {data.tools[0].tool.brand}
            </Body2>
            <Body1 className="text-black-400">
                Tipe Alat
            </Body1>
            <Body2 className="text-black-500">
                {data.tools[0].tool_type}
            </Body2>
          </div>

          <div className="block py-3">
            <h3 className='text-black-500'>
              Informasi Pengujian
            </h3>
            <div className="grid grid-cols-2 gap-y-3 py-3">
              <Body1 className="text-black-400">
                  Tanggal Uji
              </Body1>
              <Body2 className="text-black-500">
                  {readable(data.assignment_detail.test_date)}
              </Body2>
              <Body1 className="text-black-400">
                  Nama Penguji
              </Body1>
              <Body2 className="text-black-500">
                  {data.assignment_detail.tester.name}
              </Body2>
              <Body1 className="text-black-400">
                  Data X-Ray
              </Body1>
              <Body2 className="text-black-500">
                {/* {data.tools[0].name.includes("X-Ray") &&
                "X-Ray Stasioner 200 mA"
                } */}
                {XRayDetector(data.tools[0].tool.type)}
              </Body2>
              <Body1 className="text-black-400">
                  Submit Terakhir
              </Body1>
              <Body2 className="text-black-500">
                  {readable(data.balis_registration_date)}
              </Body2>
              <Body1 className="text-black-400">
                  Tanggal Registrasi
              </Body1>
              <Body2 className="text-black-500">
                  isinya apa
              </Body2>
              <Body1 className="text-black-400">
                  Nomor Registrasi
              </Body1>
              <Body2 className="text-black-500">
                {data.bapeten_registration_no}
              </Body2>
            </div>


          </div>
        </div>
      </Form>


    </Formik>
  )
}
