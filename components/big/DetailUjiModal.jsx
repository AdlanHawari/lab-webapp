import { Dialog, Transition } from "@headlessui/react"
import { ChevronRightIcon, XIcon } from "@heroicons/react/solid"
import Button from "components/small/button_fixed/Button"
import QuickFilterButton from "components/small/button_small/QuickFilterButton"
import QuickFilterSmaller from "components/small/button_small/QuickFilterSmaller"
import Body1 from "components/small/typography/Body1"
import Body2 from "components/small/typography/Body2"
import Body3 from "components/small/typography/Body3"
import CaptionReg from "components/small/typography/CaptionReg"
import TitleSmall from "components/small/typography/TitleSmall"
import {Fragment} from 'react'

export default function DetailUjiModal({isOpen, setIsOpen}) {
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
        className="fixed inset-0 z-10 overflow-hidden"
        onClose={closeModal}
        >
            <div className="min-h-screen px-4">
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
                </Transition.Child>
                {/* This element is to trick the browser into centering the modal contents. */}
                {/* <span
                className="inline-block h-detailModal align-middle"
                aria-hidden="true"
                >
                &#8203;
                </span> */}
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-700"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-700"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-50"
                >
                    <div className="z-50 inline-block w-full h-detailModal py-4 transition-all transform">
                        <div className="inline-block w-full h-detailModal overflow-hidden bg-secondary-50s shadow-xl rounded-2xl">
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
                            <div className="flex h-innerDetailModal">
                                <div className="relative h-full w-4/5 py-6 border-r border-grey-200">
                                    <div className="absolute max-h-innerDetailModal overflow-auto divide-y divide-grey-200 px-11">
                                        {/* section 1 */}
                                        <div className="grid grid-cols-2 gap-y-3 py-3">
                                            
                                            <Body1 className="text-black-400">
                                                Nomor Surat Penawaran
                                            </Body1>
                                            <Body1 className="text-black-400">
                                            </Body1>
                                            <Body1 className="text-black-400">
                                                Tanggal Permohonan
                                            </Body1>
                                            <Body2 className="text-black-500">
                                                13 Juni 2021
                                            </Body2>
                                        
                                        
                                            <Body1 className="text-black-400">
                                                Nama Instansi
                                            </Body1>
                                            <Body2 className="text-black-500">
                                                RSU Aisyah Purworejo
                                            </Body2>
                                        
                                        
                                            <Body1 className="text-black-400">
                                                Alamat Instansi
                                            </Body1>
                                            <Body2 className="text-black-500">
                                            Jl. Mayjen Sutoyo No.113, Rw. VI, Sindurjan, Kec. Purworejo, Kabupaten Purworejo, Jawa Tengah 54113
                                            </Body2>
                                        
                                        
                                            <Body1 className="text-black-400">
                                                Status
                                            </Body1>
                                            <div className="">
                                                <QuickFilterSmaller className="bg-primary-lighten10 border-primary-darken10 text-primary-darken10">
                                                    <Body2>
                                                        Pengajuan
                                                    </Body2>
                                                </QuickFilterSmaller>
                                            </div>
                                        
                                        
                                            <Body1 className="text-black-400">
                                                Jenis Uji
                                            </Body1>
                                            <Body2 className="text-black-500">
                                                Uji Kesesuaian
                                            </Body2>
                                            
                                            
                                        </div>
                                    {/* end of section 1 */}
                                    {/* section 2 */}
                                        <div className="grid grid-cols-2 gap-y-3 py-3">
                                                
                                            <Body1 className="text-black-400">
                                                Jenis Alat
                                            </Body1>
                                            <Body2 className="text-black-500">
                                                Radiografi Umum
                                            </Body2>
                                            <Body1 className="text-black-400">
                                                Merk Alat
                                            </Body1>
                                            <Body2 className="text-black-500">
                                                Yangzou
                                            </Body2>
                                            <Body1 className="text-black-400">
                                                Tipe Alat
                                            </Body1>
                                            <Body2 className="text-black-500">
                                                Type YZ 100C
                                            </Body2>
                                        
                                        
                                            <Body1 className="text-black-400">
                                                Kuantitas
                                            </Body1>
                                            <Body2 className="text-black-500">
                                                5
                                            </Body2>
                                        
                                        
                                            <Body1 className="text-black-400">
                                                Keterangan
                                            </Body1>
                                            <Body2 className="text-black-500">
                                                Tambahan Alat:
                                                <ul className="list-disc list-inside">
                                                    <li>Alat A - Kesesuaian 10 buah</li>
                                                    <li>Alat B - Kesesuaian - 25 Buah</li>
                                                </ul>
                                            </Body2>
                                        </div>
                                    {/* end of section 2 */}
                                    {/* section 3 */}
                                    <div className="pb-20">

                                    
                                        <h3>
                                            Biaya
                                        </h3> 
                                        <div className="grid grid-cols-2 gap-y-3 py-3">
                                            
                                            <Body1 className="text-black-400">
                                                Biaya Uji Kesesuaian<br/>
                                                <CaptionReg className="italic">
                                                    (Termasuk Biaya Setting + Akomodasi)
                                                </CaptionReg>
                                            </Body1>
                                            <Body2 className="text-black-500">
                                                Rp13.000.000
                                            </Body2>
                                            <Body1 className="text-black-400">
                                                PPN 10%
                                            </Body1>
                                            <Body2 className="text-black-500">
                                                Rp1.300.000
                                            </Body2>
                                            <Body2 className="text-black-400">
                                                Total
                                            </Body2>
                                            <Body3 className="text-black-500">
                                                Rp14.300.000
                                            </Body3>
                                            <Body2 className="text-black-400">
                                                Status
                                            </Body2>
                                            <Body3 className="text-black-500">
                                                Rp14.300.000
                                            </Body3>
                                        </div>
                                    </div>
                                    {/* end of section 3 */}


                                    </div>

                                </div>
                                <div className="relative h-innerDetailModal w-1/5">
                                <div className="absolute inset-x-0 top-0 pt-6 px-10">
                                        <Button buttonStyle="primary_default">
                                            Konfirmasi Penawaran
                                        </Button>

                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 px-10">
                                        <Button buttonStyle="secondary_disabled">
                                            Batalkan Permohonan
                                        </Button>

                                    </div>
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
