import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import Body2 from 'components/small/typography/Body2'
import ContentSectionFormPraUji from './ContentSectionFormPraUji'

export default function SectionFormPraUji({data}) {

  return (
    <Disclosure as="div" className="">
      {({open}) => (
      <>
        <Disclosure.Button className={classNames(
          "flex justify-between items-center w-full py-2 px-2.5 bg-primary rounded-xl shadow-sm"
          )}
          >
          <div className="flex items-center space-x-5">
            <Body2 className="text-white">
                Form Pra-Uji
            </Body2>
          </div>
          <ChevronDownIcon className={classNames(
            "w-6 text-white",
            open && "transition duration-300 ease-in-out transform rotate-180"
            )} 
            aria-hidden="true"/>
        </Disclosure.Button>
        <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
          <Disclosure.Panel as='ul' static className=
            "pt-2 list-inside list-disc space-y-2"
          >
            {({close}) => (
              <div className="px-2">
                <ContentSectionFormPraUji
                data={data}
                />
              </div>
            )}
          </Disclosure.Panel>
        </Transition>
      </>
      )}
    </Disclosure>
  )
}