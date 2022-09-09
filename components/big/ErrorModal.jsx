import { Dialog, Transition } from '@headlessui/react'
import classNames from 'classnames'
import React, { Fragment } from 'react'

export default function ErrorModal({
    bgColor,
    isOpen,
    setIsOpen,
    children,
}) {
    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }
  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog
        as='div'
        className="fixed inset-0 z-10 overflow-hidden"
        onClose={closeModal}
        >
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
            <span
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
                <div className="z-50 inline-block w-full  align-middle py-4 transition-all transform">
                    <div className="flex justify-center">
                        <div className="inline-block w-auto overflow-hidden text-left bg-secondary-50s shadow-xl rounded-2xl">
                            <div className={classNames(
                                `flex items-center justify-between py-6 px-8 bg-${bgColor}`,
                                
                                )}
                            >
                                <Dialog.Title
                                as="h3"
                                className=" leading-6 text-white"
                                >
                                </Dialog.Title>
                            </div>  
                            <div className="max-h-innerFormModal w-full overflow-auto py-10 px-10">
                                <div className="block">
                                    <div className="flex justify-center">
                                        {children}
                                    </div>
                                    <div className=" flex justify-center">
                                        <button
                                        className={classNames(
                                            `px-2 py-3 w-64 border-4 rounded-xl border-${bgColor} text-${bgColor}`
                                            )}
                                        type='button'
                                        onClick={closeModal}>
                                            Kembali
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition.Child>
        </Dialog>
    </Transition>
  )
}