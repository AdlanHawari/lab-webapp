import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { XIcon } from '@heroicons/react/outline'
import Button from 'components/small/button_fixed/Button'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

export default function CreateInstitutionForm({
    id,
    setCreateInstForm,
    submitState
}) {
  return (
    <div className="relative block p-5 rounded-xl bg-grey-100 border border-grey-400 ">
        <div className="absolute top-0 right-0">
            <button 
            className="flex w-8 h-8 items-center justify-center py-2 px-2 bg-error hover:bg-error-dark rounded-lg"
            type="button"
            onClick={()=> setCreateInstForm(false)}>
                <XIcon className="w-4 h-5 text-white " aria-hidden="true"/>
            </button>

        </div>
        <Body2 className="text-black-400 pb-3.5">
            Instansi Baru
        </Body2>
        <div className="grid grid-cols-2 gap-y-3 py-3">
            <Body1 className="text-black-400">
                Nama Instansi
            </Body1>
            <div className="block">
                <Field
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="institution_create.name"
                    name="institution_create.name"
                    type="text"
                    placeholder="Isi Nama Instansi"
                    />
                <ErrorMessage name="institution_create.name" component={ValidationMessage}/>
            </div>

            <Body1 className="text-black-400">
                Nama Kontak Instansi
            </Body1>
            <div className="block">
                <Field
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="institution_create.contact_name"
                    name="institution_create.contact_name"
                    type="text"
                    placeholder="Isi Nama Kontak Instansi"
                    />
                <ErrorMessage name="institution_create.contact_name" component={ValidationMessage}/>
            </div>

            <Body1 className="text-black-400">
                Alamat Instansi
            </Body1>
            <div className="block">
                <Field
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="institution_create.address"
                    name="institution_create.address"
                    type="text"
                    placeholder="Isi Alamat Instansi"
                    />
                <ErrorMessage name="institution_create.address" component={ValidationMessage}/>
                
            </div>

            <Body1 className="text-black-400">
                Email Instansi
            </Body1>
            <div className="block">
                <Field
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="institution_create.email"
                    name="institution_create.email"
                    type="text"
                    placeholder="Isi Email Instansi"
                    />
                <ErrorMessage name="institution_create.email" component={ValidationMessage}/>
            
            </div>

            <Body1 className="text-black-400">
                No. Telp Instansi
            </Body1>
            <div className="block">
                <Field
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="institution_create.phone_number"
                    name="institution_create.phone_number"
                    type="text"
                    placeholder="Isi No. Telp Instansi"
                    />
                <ErrorMessage name="institution_create.phone_number" component={ValidationMessage}/>
            
            </div>

            <Body1 className="text-black-400">
                No. Hp Instansi
            </Body1>
            <div className="block">
                <Field
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="institution_create.mobile_phone_number"
                    name="institution_create.mobile_phone_number"
                    type="text"
                    placeholder="Isi No. Hp Instansi"
                    />
                <ErrorMessage name="institution_create.mobile_phone_number" component={ValidationMessage}/>
            
            </div>

        </div>

        <div className="flex w-full justify-end pt-4">
            {/* {submitButton} */}
            <div className="w-64">
                <Button 
                className="bg-primary"  
                buttonStyle={!submitState ? "primary_default": "primary_disabled"}
                type="submit"
                disabled={!submitState ? false:true}
                form={id}
                >
                    { submitState &&
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                    }
                    Simpan Instansi
                </Button>
            </div>
        </div>


    </div>
  )
}
