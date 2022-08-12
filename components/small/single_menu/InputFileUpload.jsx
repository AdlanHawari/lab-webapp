import React, { useRef } from 'react'
import { UploadIcon } from '@heroicons/react/outline'
import Title3Med from '../typography/Title3Med'
import classNames from 'classnames'

export default function InputFileUpload({
    id,
    name,
    formikValue,
    setFormikValue,
    accept,
    placeholder
}) {
    const inputRef = useRef()
  return (
    <div>
        <input
        ref={inputRef}
        className="hidden"
        id={id}
        name={name}
        type="file"
        accept={accept}
        onChange={(event)=> {
        const file = event.target.files[0]
        console.log("file",file)
        if(file){
            // formik.setFieldValue("invoice", file)
            setFormikValue(id, file)
        }
        // console.log("formik", formik.values.invoice)
        }}
        />
        <div className="w-full flex justify-between form-input px-2.5 py-1 rounded-xl text-xs  border-solid border-2 border-grey-300">
            <Title3Med className={classNames(
                formikValue? 
                    formikValue.name ?
                        "text-black-400" 
                        : 
                        "text-grey-400"    
                    : 
                    "text-grey-400"    
                ) 
            }>
            {formikValue?
                formikValue.name ?
                    formikValue.name
                    :
                    placeholder
                :
                placeholder
            }
            </Title3Med>
            
            <button 
            type='button'
            onClick={(event)=> {
                event.preventDefault();
                inputRef.current.click() 
            }}
            >
                <UploadIcon className="w-4 text-grey-500" aria-hidden="true"/>
            </button>
        </div>
    </div>
  )
}
