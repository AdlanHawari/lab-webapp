import { Disclosure, Transition } from '@headlessui/react'
import { LightningBoltIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { MyLink } from 'components/general/MyLink'
import Body2 from 'components/small/typography/Body2'
import Title1 from 'components/small/typography/Title1'
import Title2Med from 'components/small/typography/Title2Med'
import { useTitleContext } from 'hooks/TitleContext'
import { useEffect } from 'react'

export default function SectionFormPraUji() {


  return (
    <Disclosure as="div" className="">
      {({open}) => (
      <>
        <Disclosure.Button className={classNames(
          "flex justify-between items-center w-full py-2 px-2.5 bg-primary rounded-xl shadow-sm"
          )}
          >
        {/* <Disclosure.Button className="flex justify-between items-center w-48 h-11 py-2.5"> */}
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
                <div className="">hello</div>
            //   <>
            //   {object.map((item,index)=>(
            //     <li key={index} className={classNames(
            //       "pl-10 h-11 py-2.5 ",
            //       page == item.path && "bg-sidebar-submenu rounded-lg"
            //       // "bg-sidebar-submenu rounded-lg"
            //     )}
            //     >
            //       <MyLink href={item.path} className="title-2-med" onClick={()=> {
            //         close()
            //         setTitle(item.title)
            //         }}>
            //         {/* <Title2Med>{item.title}</Title2Med> */}
            //         {item.title}
            //         {/* {page} */}
            //       </MyLink>
            //     </li>
            //   ))}
            //   </>
            )}
            
          </Disclosure.Panel>
        </Transition>
      </>
      )}
    </Disclosure>
  )
}