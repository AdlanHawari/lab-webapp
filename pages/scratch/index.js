import BaseLayout from 'components/base/BaseLayout'
import AssuranceModal from 'components/big/AssuranceModal'
import React, { useState } from 'react'

export default function ScratchPage() {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <button className='text-white py-4 rounded-xl w-64 bg-secondary-darker10'
    onClick={()=>setIsOpen(!isOpen)}>
        OPEN
    </button>
    <AssuranceModal
     title="Example"
     bgColor="bg-primary"
     isOpen={isOpen}
     setIsOpen={setIsOpen}
     >

    </AssuranceModal>
    </>
  )
}

ScratchPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
