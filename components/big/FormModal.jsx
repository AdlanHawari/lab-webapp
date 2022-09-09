import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { Fragment } from 'react'

export default function FormModal({
    title,
    bgColor,
    isOpen,
    setIsOpen,
    children,
    buttonSide,
    hideButton}) {
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
              <div className="z-50 inline-block w-full h-detailModal py-4 transition-all transform">
                <div className="inline-block w-full h-detailModal overflow-hidden text-left bg-secondary-50s shadow-xl rounded-2xl">
                    <div className={classNames(
                        `flex items-center justify-between bg-primary py-6 px-8 bg-${bgColor}`,
                        )}
                    >
                        <Dialog.Title
                        as="h3"
                        className=" leading-6 text-white"
                        >
                        {title}
                        </Dialog.Title>
                        <button onClick={closeModal}>
                            <XIcon className="h-6 w-6 text-white cursor-pointer" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="flex h-full">
                        <div className="w-4/5 py-6 border-r border-grey-200">
                          <div className="max-h-innerFormModal overflow-auto pb-20">
                              {children}
                          </div>
                        </div>
                          {!hideButton && 
                            <div className="w-1/5 mt-4 space-y-4 px-4" >
                                {buttonSide}
                                <button className={`block w-full py-2.5 rounded-xl text-xs font-semibold border-solid border-2 bg-white text-${bgColor} border-${bgColor}`}
                                onClick={closeModal}>
                                    Kembali
                                </button>
                            </div>
                          }
                    </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
  )
}