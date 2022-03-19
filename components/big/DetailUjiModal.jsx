import { Dialog, Transition } from "@headlessui/react"
import { ChevronRightIcon, XIcon } from "@heroicons/react/solid"
import Button from "components/small/button_fixed/Button"
import QuickFilterButton from "components/small/button_small/QuickFilterButton"
import TitleSmall from "components/small/typography/TitleSmall"
import {Fragment} from 'react'


export default function PermohonanDetailUjiModalUjiModal({isOpen, setIsOpen}) {
    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }
  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-grey-500 opacity-75" />
              {/* <Dialog.Overlay/> */}
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
            //   className="inline-block h-screen align-middle"
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-700"
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-700"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-50"
            >
              <div className="z-50 inline-block w-full h-screen pt-4 text-left align-middle transition-all transform">
                <div className="inline-block w-full h-full overflow-hidden text-left bg-secondary-50s shadow-xl rounded-2xl">
                    <div className="block border-b border-grey-200 space-y-4 pt-6 pb-4 px-8">
                        <div className="flex items-center justify-between">
                            <Dialog.Title
                            as="h2"
                            className="leading-6 text-black-500"
                            >
                            Detail Uji
                            </Dialog.Title>
                            <button onClick={closeModal}>
                                <XIcon className="h-6 w-6 text-black-900 cursor-pointer" aria-hidden="true"/>
                            </button>
                        </div>
                        <div className="flex items-center">
                        <QuickFilterButton>
                            <TitleSmall className="text-grey-700">
                                Pengajuan
                            </TitleSmall>
                        </QuickFilterButton>
                        <ChevronRightIcon className="h-6 w-6 text-grey-500" aria-hidden="true"/>
                        <QuickFilterButton>
                            <TitleSmall className="text-grey-700">
                                Konfirmasi Penawaran
                            </TitleSmall>
                        </QuickFilterButton>
                        <ChevronRightIcon className="h-6 w-6 text-grey-500" aria-hidden="true"/>
                        <QuickFilterButton>
                            <TitleSmall className="text-grey-700">
                                Kaji Ulang Pengajuan
                            </TitleSmall>
                        </QuickFilterButton>
                        <ChevronRightIcon className="h-6 w-6 text-grey-500" aria-hidden="true"/>
                        <QuickFilterButton>
                            <TitleSmall className="text-grey-700">
                                Menunggu Konfirmasi
                            </TitleSmall>
                        </QuickFilterButton>
                        <ChevronRightIcon className="h-6 w-6 text-grey-500" aria-hidden="true"/>
                        <QuickFilterButton>
                            <TitleSmall className="text-grey-700">
                                Menuggu Jadwal
                            </TitleSmall>
                        </QuickFilterButton>
                        <ChevronRightIcon className="h-6 w-6 text-grey-500" aria-hidden="true"/>
                        <QuickFilterButton>
                            <TitleSmall className="text-grey-700">
                                Dijadwalkan
                            </TitleSmall>
                        </QuickFilterButton>
                        <ChevronRightIcon className="h-6 w-6 text-grey-500" aria-hidden="true"/>
                        <QuickFilterButton>
                            <TitleSmall className="text-grey-700">
                                Dalam Pengolahan
                            </TitleSmall>
                        </QuickFilterButton>
                        <ChevronRightIcon className="h-6 w-6 text-grey-500" aria-hidden="true"/>
                        <QuickFilterButton>
                            <TitleSmall className="text-grey-700">
                                Submit Balis
                            </TitleSmall>
                        </QuickFilterButton>
                        <ChevronRightIcon className="h-6 w-6 text-grey-500" aria-hidden="true"/>
                        <QuickFilterButton>
                            <TitleSmall className="text-grey-700">
                                Selesai
                            </TitleSmall>
                        </QuickFilterButton>
                            
                        </div>
                    </div>
                    <div className="flex h-full">
                        <div className="w-4/5 py-6 border-r border-grey-200">
                          {/* <FormPermohonanUji id={form_permohonan_uji_id}/> */}
                        </div>
                        <div className="w-1/5 mt-4 space-y-4 px-4" >
                            {/* <Button buttonStyle="primary_default" type="submit" form={form_permohonan_uji_id}>
                                Buat Permohonan Uji
                            </Button>
                            <Button buttonStyle="secondary_default" onClick={closeModal}>
                                Kembali
                            </Button> */}
                        </div>
                    </div>
                </div>
              </div>
                  
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
  )
}

