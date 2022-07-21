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
import { usePersPenawaranContext } from "hooks/context/form-persetujuan-penawaran/PersPenawaranFormContext"
import {Fragment} from 'react'
import Section1 from "./detail-section/Section1"
import Section2 from "./detail-section/Section2"
import SectionFee from "./detail-section/SectionFee"
import SectionFormPraUji from "./detail-section/SectionFormPraUji"
import SectionPaymentStep from "./detail-section/SectionPaymentStep"
import SectionSchedule from "./detail-section/SectionSchedule"

export default function DetailModal({status, current_status, title, isOpen, setIsOpen, data}) {

    const {setPersPenawaranOpen} = usePersPenawaranContext()
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
                                    {title}
                                    </Dialog.Title>
                                    <button onClick={closeModal}>
                                        <XIcon className="h-6 w-6 text-black-900 cursor-pointer" aria-hidden="true"/>
                                    </button>
                                </div>
                                <ul className="flex items-center">
                                    {status.map((item,index)=>(
                                         index>0 && index<status.length-1 &&

                                            <li key={index} className="flex items-center">
                                                <QuickFilterButton className={item.status == current_status ? "bg-primary-lighten10 border-primary-darken10" : "bg-grey-50"}>
                                                    <TitleSmall className={item.status == current_status ? "text-primary-darken10" : "text-grey-700"}>
                                                        {item.title}
                                                    </TitleSmall>
                                                </QuickFilterButton>
                                                {index<status.length-2 &&

                                                <ChevronRightIcon className="h-6 w-6 text-grey-500" aria-hidden="true"/>     
                                                }
                                            </li>
                                        
                                    ))}
                                    
                                </ul>
                            </div>
                            <div className="flex h-innerDetailModal">
                                <div className="relative h-full w-4/5 py-6 border-r border-grey-200">
                                    <div className="absolute max-h-innerDetailModal overflow-auto divide-y divide-grey-200 px-11 pb-20 w-full">
                                        {/* section 1 */}
                                        <Section1 data={data}/>
                                        
                                        <Section2 data={data}/>
                                        

                                    {/* section 3 */}
                                        {current_status>1 &&
                                        <>
                                            {current_status<5 &&
                                                <SectionFee cost_detail={data.cost_detail} current_status={current_status}/>
                                            }
                                            {/* <SectionFormPraUji/> */}
                                            {current_status>4 &&

                                                <SectionSchedule/>
                                            }
                                        </>
                                        }

                                        


                                    </div>

                                </div>
                                <div className="relative h-innerDetailModal w-1/5">
                                    {current_status==2 &&
                                        <div className="absolute inset-x-0 top-0 pt-6 px-10">
                                            <Button 
                                            buttonStyle="primary_default"
                                            onClick={()=> setPersPenawaranOpen(true)}
                                            >
                                                Konfirmasi Penawaran
                                            </Button>

                                        </div>
                                    }
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
