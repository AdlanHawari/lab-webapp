import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AlatUkurTable from 'components/base/table/AlatUkurTable'
import FormModal from 'components/big/FormModal'
import Button from 'components/small/button_fixed/Button'
import { useFormCreateAlatUkurContext } from 'hooks/context/form-create-alat-ukur/FormCreateAlatUkurContext'
import React, { useState } from 'react'

export default function DashboardAlatUkurMainSection() {
  const {createAlatUkurPopUp, setCreateAlatUkurPopUp} = useFormCreateAlatUkurContext()

  const [submitState, setSubmitState] = useState(false)
    const [reqSent, setreqSent] = useState(false);
    
  return (
    <>
      <div className="pt-5 space-y-5">
          <AlatUkurTable/>
      </div>

    {createAlatUkurPopUp &&
      <FormModal
      title="Alat Ukur Baru"
      bgColor="primary"
      isOpen={createUjiPcreateAlatUkurPopUpopUp}
      setIsOpen={setCreateAlatUkurPopUp}
      buttonSide={
        <Button
        className="bg-primary" 
        buttonStyle={submitState?"primary_disabled":"primary_default"}
        // buttonStyle="primary_default"
        type="submit" 
        disabled={submitState? true:false}
        // form={form_permohonan_uji_id}
        >
            { submitState &&
            <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
            }
            Buat Alat Ukur Baru
        </Button>
    
    }
      >


      </FormModal>
    }

    </>
  )
}
